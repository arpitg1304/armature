import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";
const browser = await chromium.launch({
  channel: process.env.ARMATURE_BROWSER_CHANNEL || "chrome",
  headless: true,
});
const reports = [];
try {
  for (const file of ["dist/robotics-arm-studio.html"]) {
    const page = await browser.newPage({
        viewport: { width: 1440, height: 1000 },
        acceptDownloads: true,
      }),
      errors = [],
      requests = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("request", (r) => {
      if (/^https?:/.test(r.url())) requests.push(r.url());
    });
    await page.addInitScript(() => {
      window.requestAnimationFrame = (cb) => ((window.__nextFrame = cb), 1);
    });
    await page.goto(
      pathToFileURL(path.resolve(file)).href +
        (file.startsWith("dist/") ? "?memory=1" : ""),
    );
    await page.waitForFunction(() => window.armature?.builder, {
      timeout: 60000,
    });
    const report = { file };
    report.traces = await page.evaluate(() => {
      const traces = {};
      for (const robotId of armature.robots) {
        const config = {
          robotId,
          task: "kit",
          object: "blocks",
          physicsMode: "kinematic",
          seed: 17,
          randomize: true,
          maxSteps: 40,
        };
        const initial = armature.reset(config),
          action = armature.observe().state;
        const frames = Array.from({ length: 40 }, () => armature.step(action));
        const repeat = armature.reset(config);
        traces[robotId] = { initial, repeat, frames };
      }
      for (const task of [
        "insert",
        "trial_pick",
        "trial_clutter",
        "trial_place",
        "trial_obstacle",
        "lights",
      ]) {
        const initial = armature.reset({
          robotId: "panda",
          task,
          object: "blocks",
          seed: 11,
          physicsMode: "kinematic",
          maxSteps: 25,
        });
        const action = armature.observe().state;
        traces[task] = {
          initial,
          frames: Array.from({ length: 25 }, () => armature.step(action)),
        };
      }
      for (const effortScale of [0, 1]) {
        const initial = armature.reset({
          robotId: "panda",
          task: "reach",
          physicsMode: "dynamic",
          effortScale,
          maxSteps: 60,
        });
        const action = armature.observe().state;
        traces["dynamic" + effortScale] = {
          initial,
          frames: Array.from({ length: 60 }, () => armature.step(action)),
        };
      }
      armature.reset({
        robotId: "so101",
        task: "kit",
        object: "blocks",
        physicsMode: "kinematic",
      });
      return traces;
    });
    for (const robot of ["panda", "so101", "ur5e", "xarm6"]) {
      const t = report.traces[robot];
      assert.deepEqual(t.initial, t.repeat, robot + " seeded reset");
      assert(t.frames.every((f) => f.observation.state.every(Number.isFinite)));
      assert(t.frames.at(-1).truncated);
    }
    console.log(
      file + ": four robots, six tasks, both experimental effort settings",
    );
    report.authoring = await page.evaluate(() => {
      armature.builder.setMode("scene");
      const initial = armature.builder.project;
      armature.builder.applyEdit((p) => {
        p.name = "Scene editing fixture";
        p.entities.find((e) => e.role === "part").position[0] += 0.01;
      });
      const edited = armature.builder.project;
      armature.builder.undo();
      const undone = armature.builder.project;
      armature.builder.loadProject(JSON.parse(JSON.stringify(edited)));
      const loaded = armature.builder.project;
      armature.builder.setMode("presets");
      return { initial, edited, undone, loaded };
    });
    assert.equal(report.authoring.loaded.name, "Scene editing fixture");
    assert.deepEqual(
      report.authoring.undone,
      report.authoring.initial,
      "undo restores project",
    );
    report.camera = await page.evaluate(() => {
      armature.reset({
        robotId: "panda",
        task: "kit",
        object: "blocks",
        physicsMode: "kinematic",
        seed: 19,
      });
      const config = armature.cameras.config;
      const snapshot = armature.cameras.snapshot();
      let capture;
      try {
        capture = armature.cameras.captureSynthetic();
      } catch (error) {
        return { config, snapshot, error: error.message };
      }
      return { config, snapshot, metadata: capture };
    });
    if (file.startsWith("dist")) {
      assert(!report.camera.error, report.camera.error);
      assert.equal(report.camera.metadata.depth.units, "metres");
      assert(
        report.camera.metadata.instances.labels.filter(
          (l) => l.visiblePixels > 0,
        ).length > 1,
      );
    }
    console.log(
      file + ": project edits/undo/import and sensor capture checked",
    );
    if (file.startsWith("dist")) {
      const sensorDownload = page.waitForEvent("download");
      await page.evaluate(() =>
        document.getElementById("syntheticDownload").click(),
      );
      await fs.mkdir("test-results/integration", { recursive: true });
      await (
        await sensorDownload
      ).saveAs("test-results/integration/sensors.zip");
    }
    report.teleop = await page.evaluate(() => {
      armature.demonstrations.takeover();
      const before = armature.observe().state;
      const action = armature.demonstrations.action();
      const mode = armature.demonstrations.mode;
      armature.demonstrations.pause();
      armature.reset({
        robotId: "panda",
        task: "kit",
        physicsMode: "kinematic",
      });
      return { before, action, mode };
    });
    assert(report.teleop.action.every(Number.isFinite));
    // Recorded pixels must ignore overlays, including authoring and camera helpers.
    for (const enabled of [false, true]) {
      await page.evaluate((enabled) => {
        for (const id of ["path", "ghost", "cameraFrustums"]) {
          const input = document.getElementById(id);
          input.checked = enabled;
          input.dispatchEvent(new Event("change"));
        }
        armature.reset({
          robotId: "panda",
          task: "kit",
          object: "blocks",
          physicsMode: "kinematic",
          seed: 19,
          maxSteps: 3,
          record: true,
          rgb: true,
        });
        const action = armature.observe().state;
        for (let i = 0; i < 3; i++) armature.step(action);
      }, enabled);
    }
    const download = page.waitForEvent("download");
    await page.evaluate(() => armature.download());
    const zip = await download;
    const label = "built";
    await fs.mkdir("test-results/integration", { recursive: true });
    await zip.saveAs("test-results/integration/" + label + "-rgb.zip");
    report.recorded = await page.evaluate(() => ({
      frames: document.getElementById("frameTotal").textContent,
      episodes: document.getElementById("epTotal").textContent,
    }));
    if (label === "built") {
      report.memory = await page.evaluate(() => {
        const results = [];
        for (const task of ["recall", "covered", "sequence", "revision"]) {
          armature.memory.reset({
            task,
            condition: 2,
            robotId: "ur5e",
            controller: "history",
            delay: 1,
            record: false,
            autoRun: false,
          });
          let steps = 0;
          while (!armature.memory.report() && steps++ < 4000)
            armature.memory.step();
          results.push({
            task,
            steps,
            report: armature.memory.report(),
            observation: armature.memory.observe(),
          });
        }
        return results;
      });
      for (const m of report.memory) {
        assert(m.report, m.task + " finishes");
        assert(m.report.memorySuccess, m.task + " remembers");
        assert(m.report.physicalSuccess, m.task + " places");
        assert(!("answer" in m.observation));
      }
      report.memoryFailure = await page.evaluate(() => {
        document.getElementById("rgb").checked = false;
        armature.memory.reset({
          task: "covered",
          condition: 2,
          robotId: "ur5e",
          controller: "human",
          delay: 1,
          record: true,
          autoRun: false,
        });
        for (
          let i = 0;
          i < 130 && armature.memory.observe().phase !== "choose";
          i++
        )
          armature.memory.step();
        armature.memory.choose(0);
        for (let i = 0; i < 1000 && !armature.memory.report(); i++)
          armature.memory.step();
        return armature.memory.report();
      });
      assert.equal(report.memoryFailure.memorySuccess, false);
      assert.equal(report.memoryFailure.physicalSuccess, true);
      const memoryDownload = page.waitForEvent("download");
      await page.evaluate(() => armature.download());
      await (
        await memoryDownload
      ).saveAs("test-results/integration/memory.zip");
      console.log("built: four memory protocols complete with correct choices");
      report.memoryPairs = await page.evaluate(() =>
        [0, 1, 2].map((condition) => {
          armature.memory.reset({
            task: "covered",
            condition,
            robotId: "ur5e",
            controller: "human",
            delay: 1,
            record: false,
            autoRun: false,
          });
          for (
            let i = 0;
            i < 130 && armature.memory.observe().phase !== "choose";
            i++
          )
            armature.memory.step();
          armature.cameras.captureSynthetic();
          return {
            observation: armature.memory.observe(),
            rgb: document.getElementById("overheadFeed").toDataURL(),
          };
        }),
      );
      assert.deepEqual(
        report.memoryPairs[0],
        report.memoryPairs[1],
        "covered decision observation/RGB hides condition",
      );
      assert.deepEqual(
        report.memoryPairs[0],
        report.memoryPairs[2],
        "all three hidden histories share retrieval input",
      );
      report.memoryPairs = {
        conditions: 3,
        publicObservationAndRGBIdentical: true,
      };
      report.memoryInterruption = await page.evaluate(() => {
        armature.memory.reset({
          task: "recall",
          robotId: "panda",
          controller: "human",
          record: false,
          autoRun: false,
        });
        const trainingDisabled = document.getElementById("train").disabled;
        document.getElementById("joint0").dispatchEvent(new Event("input"));
        const interrupted = armature.memory.report();
        document.getElementById("prompt").value = "Revised memory request";
        document.getElementById("apply").click();
        const promptTask = document.getElementById("task").value;
        armature.reset({
          robotId: "so101",
          task: "kit",
          physicsMode: "kinematic",
        });
        return { trainingDisabled, interrupted, promptTask };
      });
      assert(report.memoryInterruption.trainingDisabled);
      assert.equal(report.memoryInterruption.interrupted.completed, false);
      assert.equal(report.memoryInterruption.promptTask, "memory_revision");
      await page.evaluate(() => armature.render());
      await page.screenshot({ path: "test-results/integration/built.png" });
    }
    assert.deepEqual(errors, [], file + " browser errors");
    assert.deepEqual(requests, [], file + " offline requests");
    report.errors = errors;
    report.requests = requests;
    reports.push(report);
    await page.close();
  }
  await fs.writeFile(
    "test-results/integration/browser.json",
    JSON.stringify(reports, null, 2),
  );
  console.log(
    "PASS: seeded simulation, offline boot, authoring, sensors, recording, teleop and memory.",
  );
} finally {
  await browser.close();
}
