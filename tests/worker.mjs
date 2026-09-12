import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";
import { performance } from "node:perf_hooks";
import { parse } from "acorn";
import { build } from "esbuild";
const html = await fs.readFile("robotics-arm-studio.html", "utf8");
const app = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)][2][2];
const original = parse(app, { ecmaVersion: "latest" }).body[0].expression.callee
  .body.body[107].declarations[0].init.value;
const built = await build({
  entryPoints: ["src/stress/worker.js"],
  bundle: true,
  write: false,
  format: "iife",
  target: "es2022",
  loader: { ".b64": "text" },
});
const rebuilt =
  (await fs.readFile("vendor/three.min.js", "utf8")) +
  "\n" +
  built.outputFiles[0].text;
function load(source) {
  const messages = [];
  const self = { postMessage: (message) => messages.push(message) };
  const sandbox = {
    self,
    console: { warn() {}, error: console.error, log() {} },
    TextDecoder,
    TextEncoder,
    atob,
    performance,
  };
  vm.runInNewContext(source, sandbox, { timeout: 30000 });
  return {
    send(data) {
      messages.length = 0;
      self.onmessage({ data });
      const last = messages.at(-1);
      if (last.type === "error") throw Error(last.message);
      return JSON.parse(
        JSON.stringify(last, (key, value) =>
          ArrayBuffer.isView(value) ? Array.from(value) : value,
        ),
      );
    },
  };
}
const a = load(original),
  b = load(rebuilt),
  summary = [];
for (const robotId of ["panda", "so101", "ur5e", "xarm6"]) {
  const compileA = a.send({ type: "compile", robotId }),
    compileB = b.send({ type: "compile", robotId });
  assert.deepEqual(compileB, compileA, robotId + " expert compile");
  assert(compileA.actions.length > 100);
  for (const padFriction of [0, 2.8]) {
    const scenario = {
      id: 0,
      x: 0,
      z: 0,
      config: {
        robotId,
        seed: 42,
        task: "transfer",
        object: "blocks",
        objectCount: 1,
        randomize: false,
        mass: 0.06,
        padFriction,
        friction: 0.8,
        maxSteps: 700,
      },
    };
    const resultA = a.send({ type: "run", scenario }),
      resultB = b.send({ type: "run", scenario });
    assert.deepEqual(resultB, resultA, robotId + " stress rollout");
    assert.deepEqual(
      b.send({ type: "run", scenario }),
      resultB,
      robotId + " worker reproduction",
    );
    assert(resultB.result.final.every(Number.isFinite));
    summary.push({
      robotId,
      padFriction,
      actions: compileB.actions.length,
      outcome: resultB.result.outcome,
      steps: resultB.result.steps,
      goalError: resultB.result.goalError,
    });
    console.log("Identical worker rollout:", summary.at(-1));
  }
}
await fs.mkdir("test-results", { recursive: true });
await fs.writeFile(
  "test-results/worker.json",
  JSON.stringify(summary, null, 2),
);
console.log(
  "PASS: all four worker controllers and eight contact rollouts match the artifact exactly.",
);
