// Replay an audited recording through the current simulator, checking every transition.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {build} from 'esbuild';
const folder=process.argv[2];if(!folder)throw Error('Usage: node scripts/replay-recording.mjs <audit output folder>');
const input=JSON.parse(await fs.readFile(folder+'/recorded-actions.json','utf8'));
const bundle=await build({stdin:{contents:`import {RobotEnvironment} from './src/simulation/environment.js';globalThis.Environment=RobotEnvironment;`,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',loader:{'.b64':'text'}});
const ctx=vm.createContext({console:{warn(){},log(){}},atob,TextDecoder,TextEncoder,performance,input});
vm.runInContext(await fs.readFile('vendor/three.min.js','utf8')+bundle.outputFiles[0].text,ctx);
const result=vm.runInContext(`(()=>{
 const env=new Environment(THREE,input.config.robotId);env.reset(input.config);
 const errors={preState:0,nextState:0,objectPositions:0,objectOrientations:0,velocity:0,tcp:0,reward:0};let flagMismatches=0;
 const compare=(key,a,b)=>{errors[key]=Math.max(errors[key],...a.map((v,i)=>Math.abs(v-b[i])));};
 let end;
 for(let i=0;i<input.transitions.length;i++){
  const expected=input.transitions[i],row=input.rows[i],actual=env.observe();
  compare('preState',actual.state,expected.observation);
  compare('objectPositions',actual.objectPositions,row['observation.object_positions']);
  compare('objectOrientations',actual.objectOrientations,row['observation.object_orientations']);
  compare('velocity',actual.velocity,row['observation.velocity']);compare('tcp',actual.tcp,row['observation.tcp']);
  end=env.step(expected.action);compare('nextState',end.observation.state,expected.next_observation);
  errors.reward=Math.max(errors.reward,Math.abs(end.reward-expected.reward));
  if(end.terminated!==expected.terminated||end.truncated!==expected.truncated)flagMismatches++;
 }
 return {frames:input.transitions.length,errors,flagMismatches,success:end.terminated,steps:env.steps,finalGoalErrorMetres:env.distance(),finalObjectPositions:end.observation.objectPositions};
})()`,ctx);
await fs.writeFile(folder+'/replay.json',JSON.stringify(result,null,2)+'\n');
assert.equal(result.flagMismatches,0,'Replay terminal flags');
for(const [name,error] of Object.entries(result.errors))assert(error<2e-6,`${name} replay error ${error}`);
console.log(JSON.stringify(result,null,2));
