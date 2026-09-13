import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";
import { encodeBookmarks, decodeBookmarks } from "../src/ui/bookmark-files.js";

const env = {
  dof: 3,
  n: 2,
  names: ["a", "b", "grip"],
  model: {
    id: "test",
    units: ["rad", "rad", "m"],
    jawLimit: { lower: 0, upper: 0.1 },
  },
  arm: [{ limit: { lower: -1, upper: 1 } }, { limit: { lower: -1, upper: 1 } }],
};
const entries = [{ robot: "test", name: "Home", pose: [0, 0, 0.02] }];
const file = encodeBookmarks(entries, env);
assert.equal(decodeBookmarks(file, env, entries)[0].name, "Home (imported 2)");
for (const bad of [
  { ...file, robotId: "wrong" },
  { ...file, units: ["degrees", "degrees", "m"] },
  { ...file, bookmarks: [{ name: "outside", pose: [1, 0, 0.02] }] },
  { ...file, bookmarks: [{ name: "short", pose: [0] }] },
  {
    ...file,
    bookmarks: [
      { name: "valid", pose: [0, 0, 0.02] },
      { name: "bad", pose: [0, 99, 0] },
    ],
  },
])
  assert.throws(() => decodeBookmarks(bad, env, entries));
assert.deepEqual(
  entries,
  [{ robot: "test", name: "Home", pose: [0, 0, 0.02] }],
  "bad imports do not mutate saved poses",
);

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
  page.on("pageerror", (e) => errors.push(e.message));
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
    () => !!document.getElementById("sidebarResize"),
    null,
    { polling: 100 },
  );
  const splitter = page.locator("#sidebarResize");
  const initial = Number(await splitter.getAttribute("aria-valuenow"));
  const box = await splitter.boundingBox();
  await page.mouse.move(box.x + 4, box.y + 200);
  await page.mouse.down();
  await page.mouse.move(box.x + 84, box.y + 200);
  await page.mouse.up();
  const resized = Number(await splitter.getAttribute("aria-valuenow"));
  assert.equal(resized, initial + 80);
  await splitter.focus();
  await page.keyboard.press("ArrowLeft");
  assert.equal(
    Number(await splitter.getAttribute("aria-valuenow")),
    resized - 16,
  );
  await splitter.dblclick();
  assert.equal(Number(await splitter.getAttribute("aria-valuenow")), 368);
  await splitter.press("ArrowRight");
  await page.locator("#tab-advanced").click();
  await page.locator("#bookmarkName").fill("Home");
  await page.locator("#bookmarkSave").click();
  await page.locator("#bookmarkRenameName").fill("Ready pose");
  await page.locator("#bookmarkRename").click();
  assert.equal(await page.locator("#bookmarkList").inputValue(), "Ready pose");
  const downloading = page.waitForEvent("download");
  await page.locator("#bookmarkExport").click();
  const download = await downloading;
  const data = JSON.parse(await fs.readFile(await download.path(), "utf8"));
  assert.equal(data.robotId, "panda");
  assert.equal(data.bookmarks[0].name, "Ready pose");
  async function importFile(value) {
    await page.locator("#bookmarkFile").setInputFiles({
      name: "poses.json",
      mimeType: "application/json",
      buffer: Buffer.from(JSON.stringify(value)),
    });
  }
  await importFile(data);
  await page.waitForFunction(
    () =>
      document
        .getElementById("bookmarkMessage")
        .textContent.includes("Imported 1"),
    null,
    { polling: 100 },
  );
  assert.equal(await page.locator("#bookmarkList option").count(), 2);
  await importFile({ ...data, robotId: "so101" });
  await page.waitForFunction(
    () =>
      document
        .getElementById("bookmarkMessage")
        .textContent.includes("Select the file's robot"),
    null,
    { polling: 100 },
  );
  assert.equal(await page.locator("#bookmarkList option").count(), 2);
  await importFile({
    ...data,
    bookmarks: [...data.bookmarks, { name: "bad", pose: [999] }],
  });
  await page.waitForFunction(
    () =>
      document
        .getElementById("bookmarkMessage")
        .textContent.includes("does not match"),
    null,
    { polling: 100 },
  );
  assert.equal(
    await page.locator("#bookmarkList option").count(),
    2,
    "failed import is atomic",
  );
  await page.locator("#toggleCameraPreviews").click();
  await page
    .locator("#robotBookmarks details")
    .evaluate((el) => (el.open = false));
  await page.waitForFunction(
    () =>
      Object.values(
        JSON.parse(localStorage.getItem("armature.workspace-preferences.v1"))
          .details,
      ).includes(false),
    null,
    { polling: 100 },
  );
  // A task change is deliberately not part of UI preference storage.
  await page.evaluate(() => {
    document.getElementById("task").value = "sort";
    document.getElementById("task").dispatchEvent(new Event("change"));
  });
  await page.reload();
  await page.waitForFunction(
    () => !!document.getElementById("sidebarResize"),
    null,
    { polling: 100 },
  );
  assert.equal(Number(await splitter.getAttribute("aria-valuenow")), 384);
  assert.equal(
    await page.locator("#tab-advanced").getAttribute("aria-selected"),
    "true",
  );
  assert.equal(
    await page.locator("#robotBookmarks details").evaluate((el) => el.open),
    false,
  );
  assert.equal(
    await page.locator("#toggleCameraPreviews").getAttribute("aria-expanded"),
    "false",
  );
  assert.equal(
    await page.locator("#task").inputValue(),
    "kit",
    "task selection is not persisted",
  );
  await page
    .locator("#robotBookmarks details")
    .evaluate((el) => (el.open = true));
  assert.equal(await page.locator("#bookmarkList option").count(), 2);
  console.log(
    "PASS: drag/keyboard/reset sizing, bookmark rename/export/import, atomic rejection, and reload preferences.",
  );

  const before = await page.evaluate(() => {
    armature.cameras.captureSynthetic();
    return {
      config: JSON.stringify(armature.cameras.config),
      rgb: document.getElementById("overheadFeed").toDataURL(),
    };
  });
  await page.locator("#tab-cameras").click();
  await page.evaluate(() => armature.render());
  await page.locator("#openCameraPreview").click();
  assert(await page.locator("#cameraPreviewDialog").isVisible());
  async function verifyPreview(source) {
    assert(
      await page.evaluate((source) => {
        const input = document.getElementById(source),
          output = document.getElementById("enlargedCamera");
        const a = input
          .getContext("2d")
          .getImageData(0, 0, input.width, input.height).data;
        const b = output
          .getContext("2d")
          .getImageData(0, 0, output.width, output.height).data;
        return (
          input.width === output.width &&
          input.height === output.height &&
          a.every((v, i) => v === b[i])
        );
      }, source),
      "viewer copies source pixels without changing resolution",
    );
  }
  await verifyPreview("overheadFeed");
  await page.locator("#previewCamera").selectOption("wristFeed");
  await verifyPreview("wristFeed");
  await fs.mkdir("test-results/comfort-review", { recursive: true });
  await page.screenshot({ path: "test-results/comfort-review/preview.png" });
  await page.keyboard.press("Escape");
  assert(!(await page.locator("#cameraPreviewDialog").isVisible()));
  assert.equal(
    await page.evaluate(() => document.activeElement.id),
    "openCameraPreview",
  );
  const after = await page.evaluate(() => ({
    config: JSON.stringify(armature.cameras.config),
    rgb: document.getElementById("overheadFeed").toDataURL(),
  }));
  assert.deepEqual(after, before);
  await page.locator("#openCameraPreview").click();
  const live = await page.evaluate(() => {
    const preview = document.getElementById("enlargedCamera");
    const first = preview.toDataURL();
    const action = armature.observe().state.slice();
    action[0] += 0.3;
    for (let i = 0; i < 12; i++) armature.step(action);
    armature.cameras.captureSynthetic();
    nextFrame(performance.now());
    const source = document.getElementById("overheadFeed");
    const a = source
      .getContext("2d")
      .getImageData(0, 0, source.width, source.height).data;
    const b = preview
      .getContext("2d")
      .getImageData(0, 0, preview.width, preview.height).data;
    return {
      changed: first !== preview.toDataURL(),
      matches: a.every((v, i) => v === b[i]),
    };
  });
  assert(
    live.changed && live.matches,
    "open preview follows newly captured simulation pixels",
  );
  await page.keyboard.press("Escape");
  await page.setViewportSize({ width: 390, height: 844 });
  assert(!(await splitter.isVisible()));
  await page.evaluate(() => armature.render());
  await page.locator("#openCameraPreview").click();
  const bounds = await page.locator("#cameraPreviewDialog").boundingBox();
  assert(bounds.x >= 0 && bounds.x + bounds.width <= 390);
  await page.screenshot({
    path: "test-results/comfort-review/phone-preview.png",
  });
  await page.keyboard.press("Escape");
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.locator("#tab-advanced").click();
  await page.locator("#resetWorkspacePreferences").click();
  assert.equal(Number(await splitter.getAttribute("aria-valuenow")), 368);
  assert.equal(
    await page.locator("#tab-scene").getAttribute("aria-selected"),
    "true",
  );
  assert.equal(
    await page.locator("#toggleCameraPreviews").getAttribute("aria-expanded"),
    "true",
  );
  assert.equal(
    await page.locator("#bookmarkList option").count(),
    2,
    "reset preserves bookmarks",
  );
  await page
    .getByRole("button", { name: "Enlarge overhead preview", exact: true })
    .click();
  assert(await page.locator("#cameraPreviewDialog").isVisible());
  await page.keyboard.press("Escape");
  await page.locator("#tab-advanced").click();
  await page
    .locator("#robotBookmarks details")
    .evaluate((el) => (el.open = true));
  await page.locator("#robotBookmarks").scrollIntoViewIfNeeded();
  await page.evaluate(() => armature.render());
  await page.screenshot({ path: "test-results/comfort-review/bookmarks.png" });
  assert.deepEqual(errors, []);
  console.log(
    "PASS: enlarged preview pixels, camera switching, Escape/focus return, unchanged camera configuration, phone fit and preference reset.",
  );
} finally {
  await browser.close();
}
