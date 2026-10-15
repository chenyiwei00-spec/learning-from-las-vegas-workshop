import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import{createRequire}from'node:module';import{build}from'esbuild';
import{resolveSoundSources,nearestSound,planSpatialSound}from'../src/exhibition-spatial-audio.js';
const base='http://127.0.0.1:8065/',root=process.cwd(),require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core');
const a={id:'a',x:0,z:0,width:0,audio:{url:'tone-a.wav'}},b={id:'b',x:20,z:0,width:0,audio:{url:'tone-b.wav'}};
assert.equal(nearestSound({x:0,y:1,z:0},[a,b]).id,'a');
assert.equal(resolveSoundSources([a],[{id:'a',x:10,z:10,y:4,width:2,audio:null}])[0].audio.url,'tone-a.wav');
const plan=planSpatialSound({sources:[a,b],duration:5,samplePose:t=>({x:t<2?0:t<3?100:20,y:1,z:0})});
assert.deepEqual(plan.urls,['tone-a.wav','tone-b.wav']);assert.ok(plan.segments.every(s=>s.end<=5+1e-8));
const inspect=(await build({stdin:{contents:"import {Input,BlobSource,ALL_FORMATS,AudioBufferSink} from 'mediabunny'; window.inspectAudioFilm=async blob=>{const input=new Input({source:new BlobSource(blob),formats:ALL_FORMATS});try{const audio=await input.getPrimaryAudioTrack(),video=await input.getPrimaryVideoTrack(),duration=await input.computeDuration();if(!audio)return {audio:false,video:!!video,duration};const windows=[[.5,1.25],[3,3.75]],stats=windows.map(()=>({sum:0,count:0,re440:0,im440:0,re880:0,im880:0}));for await(const {buffer,timestamp} of new AudioBufferSink(audio).buffers()){const data=buffer.getChannelData(0);for(let n=0;n<data.length;n++){const t=timestamp+n/buffer.sampleRate;for(let i=0;i<windows.length;i++)if(t>=windows[i][0]&&t<windows[i][1]){const s=stats[i],v=data[n];s.sum+=v*v;s.count++;for(const f of [440,880]){s['re'+f]+=v*Math.cos(2*Math.PI*f*t);s['im'+f]+=v*Math.sin(2*Math.PI*f*t);}}}}return{audio:true,video:!!video,duration,stats:stats.map(s=>({rms:Math.sqrt(s.sum/s.count),a440:2*Math.hypot(s.re440,s.im440)/s.count,a880:2*Math.hypot(s.re880,s.im880)/s.count}))};}finally{input.dispose();}};",resolveDir:root,sourcefile:'render-audio-inspector.js'},bundle:true,format:'iife',platform:'browser',write:false})).outputFiles[0].text;
function wav(frequency){const rate=48000,n=rate/2,out=Buffer.alloc(44+n*2);out.write('RIFF');out.writeUInt32LE(out.length-8,4);out.write('WAVEfmt ',8);out.writeUInt32LE(16,16);out.writeUInt16LE(1,20);out.writeUInt16LE(1,22);out.writeUInt32LE(rate,24);out.writeUInt32LE(rate*2,28);out.writeUInt16LE(2,32);out.writeUInt16LE(16,34);out.write('data',36);out.writeUInt32LE(n*2,40);for(let i=0;i<n;i++)out.writeInt16LE(Math.round(Math.sin(2*Math.PI*frequency*i/rate)*12000),44+i*2);return out;}
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const context=await browser.newContext({viewport:{width:1280,height:900},acceptDownloads:true}),page=await context.newPage(),errors=[];page.setDefaultTimeout(90000);page.on('pageerror',e=>errors.push(e.message));
let slowSeen=false,releaseSlow=null;
await context.route('**/*',async route=>{
 const u=new URL(route.request().url());if(u.origin!==new URL(base).origin)return route.continue();const file=decodeURIComponent(u.pathname.slice(1)||'index.html');
 if(file==='qa-a.wav'||file==='qa-b.wav')return route.fulfill({contentType:'audio/wav',body:wav(file==='qa-a.wav'?440:880)});
 if(file==='qa-bad.wav')return route.fulfill({status:404,body:'Missing audio'});
 if(file==='qa-slow.wav'){slowSeen=true;await new Promise(resolve=>releaseSlow=resolve);try{await route.fulfill({contentType:'audio/wav',body:wav(440)})}catch{}return;}
 if(file==='qa-inspect.js')return route.fulfill({contentType:'text/javascript',body:inspect});
 if(file==='team-live.js')return route.fulfill({body:''});
 if(file==='assets/imported-sculptures/catalog.json'||file.startsWith('assets/generated-sculptures/'))return route.fulfill({status:404,body:'{}'});
 if(file.startsWith('api/sculpture3d/jobs')&&route.request().method()==='POST')throw Error('No inference');
 const p=path.join(root,'site',file);if(fs.existsSync(p)&&fs.statSync(p).isFile())return route.fulfill({body:fs.readFileSync(p),contentType:file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':file.endsWith('.json')?'application/json':undefined});return route.continue();
});
try{
 await page.goto(base+'exhibition.html');await page.waitForFunction(()=>window.ExhibitionStudio&&window.ExhibitionOutput&&window.ExhibitionProximityAudio);
 await page.addScriptTag({url:base+'qa-inspect.js'});assert.ok(await page.locator('#render-film-audio').isChecked());
 const setup=await page.evaluate(async()=>{
  await ExhibitionWalk.placement.ready;const blob=await(await fetch('assets/exhibition-desert/models/sign_01_preview.glb')).blob();
  for(let i=0;i<2;i++){const id=(i?'c':'b').repeat(64);await ExhibitionWalk.placement.place({id,blob,name:'Audio fixture '+i,record:{id,fingerprint:id,target:'city',localOnly:true,modelUrl:'assets/generated-sculptures/'+id+'/sculpture.glb',linkedMedia:{version:2,audio:{id:'qa-'+i,url:i?'qa-b.wav':'qa-a.wav',title:'Tone '+i},video:null}}},{col:i?11:9,row:10,span:1,valid:true});}
  const sources=await ExhibitionProximityAudio.capture(),A=sources[0],B=sources[1],pose=x=>({x:x.x,y:1.65,z:x.z,yaw:0,pitch:0,fly:true});
  ExhibitionWalk.setViewMode('room');ExhibitionWalk.setCamera(pose(A));
  ExhibitionOutput.setKeys([{time:0,pose:pose(A)},{time:1.4,pose:pose(A)},{time:2.6,pose:pose(B)},{time:4.13,pose:pose(B)}]);
  return {camera:ExhibitionWalk.state().walkingCamera,sources:sources.map(s=>s.audio.url)};
 });
 assert.deepEqual(setup.sources,['qa-a.wav','qa-b.wav']);
 const result=await page.evaluate(async()=>{window.testAudioFilm=await ExhibitionOutput.exportFilm({width:320,height:180,fps:12});return {audio:testAudioFilm.audio,duration:testAudioFilm.duration,size:testAudioFilm.blob.size,analysis:await inspectAudioFilm(testAudioFilm.blob),restored:ExhibitionWalk.state().walkingCamera,suspended:ExhibitionProximityAudio.state().exportSuspended}});
 assert.equal(result.audio.included,true);assert.equal(result.audio.sources,2);assert.equal(result.analysis.audio,true);assert.equal(result.analysis.video,true);assert.ok(Math.abs(result.analysis.duration-4.13)<.1);assert.deepEqual(result.restored,setup.camera);assert.equal(result.suspended,false);
 const [early,late]=result.analysis.stats;assert.ok(early.rms>.02&&late.rms>.02);assert.ok(early.a440>early.a880*10,JSON.stringify(early));assert.ok(late.a880>late.a440*10,JSON.stringify(late));
 console.log('PASS: real encoded film contains audible synchronized audio; decoded 440Hz near exhibit A switches to 880Hz near exhibit B, with looped source clips and preserved camera. '+JSON.stringify(result.audio));
 const silent=await page.evaluate(async()=>{const p=ExhibitionWalk.state().walkingCamera;const keys=[{time:0,pose:p},{time:.25,pose:p}];const v=await ExhibitionWalk.output.film({keys,width:160,height:90,fps:12,includeAudio:false});return inspectAudioFilm(v.blob)});
 assert.equal(silent.audio,false);assert.equal(silent.video,true);
 // Loading errors and cancellation must restore renderer/navigation and live sound.
 await page.evaluate(()=>{window.originalProximity=ExhibitionProximityAudio;window.ExhibitionProximityAudio={...originalProximity,capture:async()=>[{id:'bad',x:ExhibitionWalk.state().walkingCamera.x,z:ExhibitionWalk.state().walkingCamera.z,width:2,audio:{url:'qa-bad.wav'}}]};});
 const failed=await page.evaluate(async()=>{const p=ExhibitionWalk.state().walkingCamera;try{await ExhibitionWalk.output.film({keys:[{time:0,pose:p},{time:.25,pose:p}],width:160,height:90,fps:12});return null}catch(e){return{message:e.message,busy:ExhibitionWalk.output.state().busy,suspended:originalProximity.state().exportSuspended,camera:ExhibitionWalk.state().walkingCamera}}});
 assert.match(failed.message,/audio could not load/);assert.equal(failed.busy,false);assert.equal(failed.suspended,false);assert.deepEqual(failed.camera,setup.camera);
 await page.evaluate(()=>{window.ExhibitionProximityAudio={...originalProximity,capture:async()=>[{id:'slow',x:ExhibitionWalk.state().walkingCamera.x,z:ExhibitionWalk.state().walkingCamera.z,width:2,audio:{url:'qa-slow.wav'}}]};const p=ExhibitionWalk.state().walkingCamera;window.cancelFilm=ExhibitionWalk.output.film({keys:[{time:0,pose:p},{time:1,pose:p}],width:160,height:90,fps:12}).then(()=>({unexpected:true}),e=>({name:e.name,busy:ExhibitionWalk.output.state().busy,suspended:originalProximity.state().exportSuspended}));});
 for(let n=0;n<100&&!slowSeen;n++)await new Promise(r=>setTimeout(r,50));assert.ok(slowSeen);await page.evaluate(()=>ExhibitionWalk.output.cancel());const cancelled=await page.evaluate(()=>cancelFilm);releaseSlow?.();assert.equal(cancelled.name,'AbortError');assert.equal(cancelled.busy,false);assert.equal(cancelled.suspended,false);
 await page.evaluate(()=>window.ExhibitionProximityAudio=originalProximity);
 const stored=await page.evaluate(async()=>{const rows=await ExhibitionOutput.list();return rows.map(r=>({id:r.id,audio:r.audio,type:r.type}))});assert.equal(stored.length,1);assert.equal(stored[0].audio.sources,2);assert.equal(await page.locator('#archive-render-grid .saved-model-card').count(),1);
 assert.deepEqual(errors,[]);console.log('PASS: silent opt-out, persisted film soundtrack metadata, missing-audio error and cancellation restore renderer and live speakers. No inference or user-browser access.');
}finally{releaseSlow?.();await context.close();await browser.close();}
