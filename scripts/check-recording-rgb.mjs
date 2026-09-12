import fs from 'node:fs/promises';import path from 'node:path';import {pathToFileURL} from 'node:url';import {chromium} from 'playwright';
const folder=process.argv[2];const input=JSON.parse(await fs.readFile(folder+'/recorded-actions.json','utf8'));
const browser=await chromium.launch({channel:'chrome',headless:true});
try{
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{window.requestAnimationFrame=cb=>(window.__nextFrame=cb,1);});
 await page.goto(pathToFileURL(path.resolve('dist/robotics-arm-studio.html')).href);await page.waitForFunction(()=>window.armature?.memory);
 const images=await page.evaluate(input=>{
  document.getElementById('scene').value='kitting';armature.reset(input.config);
  const frames=new Set([0,Math.floor(input.transitions.length/2),input.transitions.length-1]);const images=[];
  let time=performance.now()+1000;
  for(let i=0;i<input.transitions.length;i++){
   if(frames.has(i)){
    window.__nextFrame(time+=200);
    for(const camera of ['overhead','wrist'])images.push({frame:i,camera,png:document.getElementById(camera+'Feed').toDataURL('image/png').split(',')[1]});
   }
   armature.step(input.transitions[i].action);
  }
  return images;
 },input);
 for(const {frame,camera,png} of images)await fs.writeFile(`${folder}/reconstructed-${camera}-${String(frame).padStart(4,'0')}.png`,Buffer.from(png,'base64'));
 if(errors.length)throw Error(errors.join('\n'));console.log('Reconstructed six pre-action camera images from recorded commands.');
}finally{await browser.close();}
