import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { chromium } from "playwright";

// Serve under a project path, as GitHub Pages does.
const html = await readFile("_site/index.html");
const server = createServer((req, res) => {
  if (req.url.split("?")[0] !== "/armature/") {
    res.writeHead(404).end();
    return;
  }
  res.setHeader("Content-Type", "text/html");
  res.end(html);
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await chromium.launch({
    ...(process.env.CI ? {} : { channel: "chrome" }),
    headless: true,
    args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
  });
  const page = await browser.newPage();
  const errors = [],
    requests = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (req) => requests.push(req.url()));
  await page.addInitScript(() => {
    window.requestAnimationFrame = () => 1;
  });
  await page.goto(origin + "/armature/");
  await page.waitForFunction(() => window.armature?.builder);
  assert.equal(await page.locator('#task option[value^="memory_"]').count(), 0);
  assert.equal(await page.evaluate(() => !!armature.memory), false);
  assert.equal(await page.locator("#memorySettingsHost").isVisible(), false);
  const result = await page.evaluate(() => {
    armature.reset({ robotId: "so101", task: "kit", seed: 42 });
    const action = armature.observe().state;
    for (let i = 0; i < 30; i++) armature.step(action);
    return armature.observe();
  });
  assert.ok(result);
  assert.deepEqual(errors, []);
  assert.deepEqual(requests, [origin + "/armature/"]);
  await page.goto(origin + "/armature/?memory=1");
  await page.waitForFunction(() => !!window.armature?.memory);
  assert.equal(await page.locator('#task option[value^="memory_"]').count(), 4);
  assert.deepEqual(errors, []);
  console.log(
    "Pages smoke passed: project-path boot, hidden memory, simulation steps, no dependencies, research opt-in.",
  );
} finally {
  await browser?.close();
  await new Promise((resolve) => server.close(resolve));
}
