import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";
import { describeStudioState } from "../src/ui/studio-feedback.js";
for (const [state, label] of [
  [{}, "Ready"],
  [{ running: true }, "Running"],
  [{ steps: 1 }, "Paused"],
  [{ recording: true, running: true }, "Recording"],
  [{ recording: true }, "Recording paused"],
  [{ replay: true }, "Replay"],
  [{ finished: true }, "Finished"],
  [{ training: true }, "Training"],
])
  assert.equal(describeStudioState(state)[1], label);

const browser = await chromium.launch({
  ...(process.env.CI ? {} : { channel: "chrome" }),
  headless: true,
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
});
try {
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
    acceptDownloads: true,
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    window.requestAnimationFrame = (cb) => {
      window.nextFrame = cb;
      return 1;
    };
  });
  await page.goto(
    pathToFileURL(path.resolve("dist/robotics-arm-studio.html")).href,
  );
  await page.waitForFunction(
    () => document.querySelector("#workspaceLighting #lightingOpen"),
    null,
    { polling: 100 },
  );
  await fs.mkdir("test-results/ui-review", { recursive: true });
  assert.equal(await page.locator("#studioStatus").textContent(), "Ready");
  assert.match(
    await page.locator("#episodeList").textContent(),
    /Your first recording/,
  );
  await page.locator("#tab-advanced").click();
  assert(await page.locator("#bookmarkEmpty").isVisible());
  await page.locator("#bookmarkName").fill("Inspection pose");
  await page.locator("#bookmarkSave").click();
  assert(!(await page.locator("#bookmarkEmpty").isVisible()));
  assert.match(
    await page.locator("#studioNotificationText").textContent(),
    /Pose saved/,
  );
  await page.locator("#dismissNotification").click();
  assert(!(await page.locator("#studioNotification").isVisible()));
  await page.locator("#bookmarkDelete").click();
  assert(await page.locator("#bookmarkEmpty").isVisible());
  await page.locator("#stressOpen").click();
  assert(await page.locator("#stressEmpty").isVisible());
  await page.locator("#stressClose").click();
  // Exercise real recording and replay transitions, not just the label classifier.
  const states = await page.evaluate(() => {
    const labels = [],
      read = () =>
        labels.push(document.getElementById("studioStatus").textContent);
    document.getElementById("run").click();
    read();
    // Give a paused episode an actual simulation step.
    document.getElementById("run").click();
    armature.step(armature.observe().state);
    read();
    armature.reset({
      robotId: "panda",
      task: "reach",
      record: true,
      maxSteps: 1800,
    });
    nextFrame(performance.now());
    read();
    armature.demonstrations.takeover();
    nextFrame(performance.now());
    read();
    armature.demonstrations.pause();
    armature.step(armature.observe().state);
    armature.finishRecording();
    document.querySelector("[data-replay]").click();
    read();
    armature.reset({ robotId: "panda", task: "reach", maxSteps: 1 });
    armature.step(armature.observe().state);
    read();
    armature.reset();
    return labels;
  });
  assert.deepEqual(states, [
    "Running",
    "Paused",
    "Recording paused",
    "Recording",
    "Replay",
    "Finished",
  ]);
  const download = page.waitForEvent("download");
  await page.locator("#snapshot").click();
  await download;
  assert.match(
    await page.locator("#studioNotificationText").textContent(),
    /Download prepared/,
  );
  await page.locator("#dismissNotification").click();
  // Keyboard focus is visible and native dropdown remains operable.
  await page.locator("#workspaceView").focus();
  assert.equal(
    await page
      .locator("#workspaceView")
      .evaluate((el) => getComputedStyle(el).outlineStyle),
    "solid",
  );
  await page.locator("#workspaceView").selectOption("top");
  await page.locator("#restoreView").click();
  await page.locator("#tab-scene").click();
  for (const [name, width, height] of [
    ["desktop", 1600, 1000],
    ["tablet", 1024, 768],
    ["phone", 390, 844],
  ]) {
    await page.setViewportSize({ width, height });
    await page.evaluate(() => armature.render());
    await page.screenshot({ path: `test-results/ui-review/${name}.png` });
    const geometry = await page.evaluate(() => {
      const rect = (selector) => {
        const r = document.querySelector(selector).getBoundingClientRect();
        return { x: r.x, y: r.y, right: r.right, bottom: r.bottom };
      };
      return {
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
        main: rect("main"),
        tag: rect("#robotTag"),
        tools: rect(".views"),
        bottom: rect(".bottom"),
      };
    });
    assert(
      geometry.scroll <= width + 1,
      name + " has no horizontal page overflow",
    );
    assert(
      geometry.tools.x >= geometry.main.x &&
        geometry.tools.right <= geometry.main.right + 1,
      name + " toolbar fits workspace",
    );
    assert(
      geometry.tools.y >= geometry.tag.bottom ||
        geometry.tools.x >= geometry.tag.right,
      name + " toolbar clears robot label",
    );
    assert(
      geometry.tools.bottom < geometry.bottom.y,
      name + " toolbar and transport do not overlap",
    );
    await page.locator("#recorderToggle").click();
    assert(await page.locator("#recorderBody").isVisible());
    await page.screenshot({
      path: `test-results/ui-review/${name}-recorder.png`,
    });
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      name + " recorder fits",
    );
    await page.locator("#recorderToggle").click();
  }
  assert.deepEqual(errors, []);
  console.log(
    "PASS: real status transitions, bookmark/recording empty states, notifications, keyboard focus and three responsive layouts.",
  );
} finally {
  await browser.close();
}
