import fs from "node:fs/promises";
import vm from "node:vm";
import assert from "node:assert/strict";
import { build } from "esbuild";
const bundle = await build({
  stdin: {
    contents: `import {RobotEnvironment} from './src/simulation/environment.js';import {projectFromEnvironment,createStage,validateTask} from './src/authoring/project.js';globalThis.testAPI={RobotEnvironment,projectFromEnvironment,createStage,validateTask};`,
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "iife",
  loader: { ".b64": "text" },
});
const context = vm.createContext({
  console: { warn() {}, log() {} },
  atob,
  TextDecoder,
  TextEncoder,
  performance,
});
vm.runInContext(
  (await fs.readFile("vendor/three.min.js", "utf8")) +
    bundle.outputFiles[0].text,
  context,
);
const result = vm.runInContext(
  `(()=>{
 const {RobotEnvironment,projectFromEnvironment,createStage,validateTask}=testAPI;
 const env=new RobotEnvironment(THREE,'ur5e');env.reset({robotId:'ur5e',task:'kit',object:'blocks',objectCount:1,seed:1,physicsMode:'kinematic'});
 const project=projectFromEnvironment(env,'Migration pick/place');project.task.stages=['grasp','lift','move','place','release','retreat'].map(kind=>createStage(kind,'part-1','target-1'));
 const validation=validateTask(project);env.reset({composition:project,physicsMode:'kinematic',maxSteps:3000});let output;
 for(let i=0;i<3000;i++){output=env.step(env.taskRunner.action());if(output.terminated||output.truncated)break;}
 return {validation,steps:env.steps,terminated:output.terminated,truncated:output.truncated,report:output.info.authoredTask};
})()`,
  context,
);
assert.equal(result.validation.errors.length, 0);
assert(result.steps > 100);
assert(result.terminated && !result.truncated);
assert.equal(result.report.status, "succeeded");
assert(result.report.results.some((r) => r.status !== "pending"));
await fs.mkdir("test-results/v28", { recursive: true });
await fs.writeFile(
  "test-results/v28/authored.json",
  JSON.stringify(result, null, 2),
);
console.log(
  "PASS: authored six-stage pick/place succeeds in",
  result.steps,
  "steps, including final measured placement/release checks.",
);
