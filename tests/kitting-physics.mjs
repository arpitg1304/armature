import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";
import { build } from "esbuild";
const bundle = await build({
  stdin: {
    contents: `import { RobotEnvironment } from './src/simulation/environment.js';globalThis.Environment=RobotEnvironment;`,
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
 const env=new Environment(THREE,'so101');env.reset({task:'kit',seed:1,object:'blocks',maxSteps:1800});
 let result;outer:for(const phase of env.expertPlan()){
  const steps=Math.round(phase.seconds*30);
  for(let i=1;i<=steps;i++){
   const t=Math.min(i/steps,1),s=t*t*(3-2*t),position=phase.from.map((v,j)=>v+(phase.p[j]-v)*s);
   const action=env.ik(new THREE.Vector3(...position),env.q,18).q;action[env.n]=phase.width;
   result=env.step(action);if(result.terminated||result.truncated)break outer;
  }
 }
 return {robotId:env.model.id,task:env.config.task,objects:env.objects.length,steps:env.steps,success:result.terminated,goalDistance:result.info.goalDistance,positions:result.observation.objectPositions};
})()`,
  context,
);
assert(result.positions.every(Number.isFinite));
await fs.writeFile(
  "test-results/kitting-physics.json",
  JSON.stringify(result, null, 2),
);
console.log("SO-101 nominal kitting rollout:", JSON.stringify(result));
// This check records the actual inherited expert outcome; no simulated success is fabricated.
assert.equal(
  result.success,
  true,
  "Nominal three-part kit must reach stable success",
);
assert.equal(result.objects, 3);
assert(result.steps > 500);
