import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";
const browser = await chromium.launch({
  channel: process.env.ARMATURE_BROWSER_CHANNEL || "chrome",
  headless: true,
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
});
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    acceptDownloads: true,
  });
  const errors = [],
    network = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("request", (r) => {
    if (/^https?:/.test(r.url())) network.push(r.url());
  });
  await page.addInitScript(() => {
    window.requestAnimationFrame = () => 1;
  });
  await page.goto(
    pathToFileURL(path.resolve("dist/robotics-arm-studio.html")).href,
  );
  await page.waitForFunction(() => window.armature?.builder);
  console.log("Stress UI booted");
  for (const tab of ["advanced", "scene", "experiment"]) {
    await page.locator("#tab-" + tab).click();
    assert.equal(await page.locator("#panel-" + tab).isVisible(), true);
  }
  await page.locator("#tab-experiment").press("ArrowRight");
  assert.equal(
    await page.locator("#tab-advanced").getAttribute("aria-selected"),
    "true",
  );
  await page.locator("#stressOpen").click();
  await page.locator("#stressSize").selectOption("5");
  await page.locator("#stressAnimate").uncheck();
  await page.locator("#stressRun").click();
  console.log("Running 25 worker trials");
  await page.waitForFunction(
    () =>
      document.getElementById("stressCount").textContent.startsWith("25 / 25"),
    null,
    { timeout: 180000, polling: 100 },
  );
  assert.equal(await page.locator(".stressCell:not([disabled])").count(), 25);
  console.log("25 trials complete");
  const downloadPromise = page.waitForEvent("download");
  await page.locator("#stressExport").click();
  const download = await downloadPromise;
  await download.saveAs("test-results/stress-ui.json");
  const report = JSON.parse(
    await fs.readFile("test-results/stress-ui.json", "utf8"),
  );
  assert.equal(report.results.length, 25);
  await page.locator("#stressPin").click();
  await page.locator("#stressCell0").click();
  assert.equal(await page.locator("#stressReplayBanner").isVisible(), true);
  if (!(await page.locator("#scrub").isVisible()))
    await page.locator("#recorderToggle").click();
  await page.locator("#scrub").fill("5");
  await page.locator("#scrub").dispatchEvent("input");
  assert.deepEqual(errors, [], "Inspection and scrubbing must not throw");
  await page.locator("#stressReproduce").click();
  assert.deepEqual(errors, [], "Reproduction must start without UI errors");
  await page.waitForFunction(
    () =>
      document
        .getElementById("stressTrialNote")
        .textContent.includes("Reproduction max state difference:"),
    null,
    { timeout: 60000, polling: 100 },
  );
  const reproduction = await page.locator("#stressTrialNote").textContent();
  assert(reproduction.includes("0.00e+0"), reproduction);
  await page.locator("#stressBack").click();
  assert.equal(await page.locator("#stressLab").isVisible(), true);
  assert.deepEqual(errors, []);
  assert.deepEqual(network, []);
  console.log(
    "PASS: 25 real Blob-worker trials, report download, baseline pin, rollout inspection/scrub, exact reproduction, tab keyboard navigation, no network/errors.",
  );
} finally {
  await browser.close();
}
