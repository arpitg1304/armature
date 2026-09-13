import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { chromium } from "playwright";
const browser = await chromium.launch({
  ...(process.env.CI ? {} : { channel: "chrome" }),
  headless: true,
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
});
try {
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    window.requestAnimationFrame = (callback) => {
      window.nextFrame = callback;
      return 1;
    };
  });
  await page.goto(
    pathToFileURL(path.resolve("dist/robotics-arm-studio.html")).href,
  );
  await page.waitForFunction(
    () => document.getElementById("bookmarkSave")?.onclick,
    undefined,
    { polling: 100, timeout: 60000 },
  );
  const result = await page.evaluate(() => {
    localStorage.removeItem("armature.robot-bookmarks.v1");
    const click = (id) => document.getElementById(id).click();
    armature.reset({
      robotId: "so101",
      task: "reach",
      physicsMode: "kinematic",
      maxSteps: 1800,
    });
    const saved = armature.observe().state;
    document.getElementById("bookmarkName").value = "Home";
    click("bookmarkSave");
    const changed = saved.slice();
    changed[0] += 0.35;
    for (let i = 0; i < 30; i++) armature.step(changed);
    const before = armature.observe().state;
    const beforeStep = armature.info().step;
    click("bookmarkMove");
    const immediate = armature.observe().state;
    const frames = [];
    let now = performance.now();
    for (let i = 0; i < 100; i++) {
      nextFrame((now += 34));
      frames.push({
        state: armature.observe().state,
        step: armature.info().step,
      });
      if (
        document
          .getElementById("bookmarkMessage")
          .textContent.includes("Pose reached")
      )
        break;
    }
    const reached = document.getElementById("bookmarkMessage").textContent;
    const final = armature.observe().state;
    armature.reset({
      robotId: "panda",
      task: "reach",
      physicsMode: "kinematic",
    });
    const pandaCount = document.getElementById("bookmarkMove").disabled;
    armature.reset({
      robotId: "so101",
      task: "reach",
      physicsMode: "kinematic",
    });
    const restored = document.getElementById("bookmarkList").value;
    return {
      saved,
      before,
      beforeStep,
      immediate,
      frames,
      reached,
      final,
      pandaCount,
      restored,
    };
  });
  assert.deepEqual(
    result.immediate,
    result.before,
    "Move must not teleport joints",
  );
  assert(Math.abs(result.before[0] - result.saved[0]) > 0.2);
  assert(
    result.frames.every(
      (frame, i) =>
        Math.abs(
          frame.state[0] -
            (i ? result.frames[i - 1].state[0] : result.before[0]),
        ) <=
        (0.9 / 30) *
          (frame.step - (i ? result.frames[i - 1].step : result.beforeStep)) +
          1e-8,
    ),
    "motion remains velocity limited",
  );
  assert(
    result.final.every(
      (value, i) => Math.abs(value - result.saved[i]) < 0.0001,
    ),
  );
  assert.match(result.reached, /Pose reached/);
  assert(result.pandaCount, "robot bookmarks remain isolated");
  assert.equal(result.restored, "Home");

  console.log("Bookmark motion and robot isolation passed");
  await page.reload();
  await page.waitForFunction(
    () => document.getElementById("bookmarkSave")?.onclick,
    undefined,
    { polling: 100, timeout: 60000 },
  );
  await page.evaluate(() =>
    armature.reset({
      robotId: "so101",
      task: "reach",
      physicsMode: "kinematic",
    }),
  );
  assert.equal(
    await page.locator("#bookmarkList").inputValue(),
    "Home",
    "persists on reload",
  );
  const stopResult = await page.evaluate(() => {
    const target = armature.observe().state.slice();
    target[0] += 0.35;
    for (let i = 0; i < 30; i++) armature.step(target);
    document.getElementById("bookmarkMove").click();
    let now = performance.now();
    nextFrame((now += 34));
    document.getElementById("bookmarkStop").click();
    const stopped = armature.observe().state;
    for (let i = 0; i < 10; i++) nextFrame((now += 34));
    return { stopped, after: armature.observe().state };
  });
  assert.deepEqual(
    stopResult.after,
    stopResult.stopped,
    "Stop halts bookmark motion",
  );
  // Render the live scene with frozen simulation: workspace presets must not affect sensor RGB.
  console.log("Persistence and stop passed");
  const cameras = await page.evaluate(() => {
    const canvas = document.querySelector("#canvas canvas");
    const snapshot = () => {
      armature.render();
      return canvas.toDataURL();
    };
    armature.cameras.captureSynthetic();
    const rgb = document.getElementById("overheadFeed").toDataURL();
    const config = JSON.stringify(armature.cameras.config);
    const before = snapshot(),
      views = [];
    for (const preset of ["perspective", "front", "top", "gripper", "wide"]) {
      const picker = document.getElementById("workspaceView");
      picker.value = preset;
      picker.dispatchEvent(new Event("change"));
      views.push(snapshot());
    }
    armature.cameras.captureSynthetic();
    const afterRGB = document.getElementById("overheadFeed").toDataURL();
    document.getElementById("restoreView").click();
    return {
      before,
      views,
      restored: snapshot(),
      rgb,
      afterRGB,
      config,
      afterConfig: JSON.stringify(armature.cameras.config),
    };
  });
  assert(cameras.views.slice(1).every((view) => view !== cameras.before));
  assert.equal(new Set(cameras.views).size, 5);
  assert.equal(
    cameras.restored,
    cameras.before,
    "Restore returns exact workspace view",
  );
  assert.equal(
    cameras.afterRGB,
    cameras.rgb,
    "presets leave sensor RGB unchanged",
  );
  assert.equal(cameras.afterConfig, cameras.config);
  await page.locator("#tab-advanced").click();
  await page.locator("#robotBookmarks").scrollIntoViewIfNeeded();
  await fs.mkdir("test-results", { recursive: true });
  await page.screenshot({ path: "test-results/bookmarks-views.png" });
  await page.evaluate(() => document.getElementById("bookmarkDelete").click());
  assert(await page.locator("#bookmarkMove").isDisabled());
  assert.deepEqual(errors, []);
  console.log(
    "PASS: bookmarks persist per robot, move through servos, stop/delete; camera presets restore exactly and preserve sensor RGB.",
  );
} finally {
  await browser.close();
}
