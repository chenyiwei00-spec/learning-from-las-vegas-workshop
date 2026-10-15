import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';import vm from'node:vm';import{createRequire}from'node:module';
const live=fs.readFileSync('site/team-live.js','utf8');
for(const inFrame of [false,true]){
 let interval,version='old',reloads=0,saves=0,state={protectReload:true,busy:false,playing:false};
 const output={state:()=>state,saveDraft:()=>saves++},child={ExhibitionOutput:output},win=inFrame?{}:child;
 const context={window:win,document:{visibilityState:'visible',querySelectorAll:()=>inFrame?[{contentWindow:child}]:[]},location:{reload:()=>reloads++},setInterval:fn=>interval=fn,fetch:async()=>({ok:true,json:async()=>({version})})};
 vm.runInNewContext(live,context);await interval();version='new';await interval();assert.equal(reloads,0);
 state={protectReload:false,playing:true};await interval();assert.equal(reloads,0);
 state={protectReload:false,busy:true};await interval();assert.equal(reloads,0);
 state={protectReload:false,busy:false,playing:false};await interval();assert.equal(reloads,1);assert.equal(saves,1);
}
console.log('PASS: direct and iframe updates wait for camera editing, playback and export, then save the draft before reload.');
const base='http://127.0.0.1:8065/',root=process.cwd(),require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core');
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true}),page=await context.newPage(),errors=[];page.setDefaultTimeout(90000);page.on('pageerror',e=>errors.push(e.message));
await context.route('**/*',async route=>{
 const u=new URL(route.request().url());if(u.origin!==new URL(base).origin)return route.continue();const file=decodeURIComponent(u.pathname.slice(1)||'index.html');
 if(file==='team-live.js')return route.fulfill({body:''});
 if(file==='assets/imported-sculptures/catalog.json')return route.fulfill({status:404,body:'{}'});
 if(file.startsWith('api/sculpture3d/jobs')&&route.request().method()==='POST')throw Error('No inference');
 const p=path.join(root,'site',file);if(fs.existsSync(p)&&fs.statSync(p).isFile())return route.fulfill({body:fs.readFileSync(p),contentType:file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':file.endsWith('.json')?'application/json':undefined});return route.continue();
});
try{
 await page.goto(base+'exhibition.html');await page.waitForFunction(()=>window.ExhibitionOutput&&window.ExhibitionWalk?.state().ready);
 const fixture=await page.evaluate(()=>{
  const pose=ExhibitionWalk.state().walkingCamera,keys=Array.from({length:7},(_,i)=>({id:'key-'+i,time:i*5,pose:{...pose,x:pose.x+i,fly:true},light:{time:8+i*.5}}));
  ExhibitionOutput.setKeys(keys);ExhibitionOutput.openCameraEditor();return keys;
 });
 assert.ok(await page.locator('#render-output-panel').isVisible());assert.equal(await page.locator('#render-camera-list .render-camera-key').count(),7);
 const stale=await context.newPage();await stale.goto(base+'exhibition.html');await stale.waitForFunction(()=>window.ExhibitionOutput);
 const time=page.locator('#render-camera-list .render-camera-key').nth(1).locator('input').first();await time.fill('6.5');
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('learning-vegas-camera-path-v1'))[1].time),6.5);
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('learning-vegas-camera-path-backup-v1')).keys[1].time),5);
 await stale.goto('about:blank');await stale.close();
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('learning-vegas-camera-path-v1'))[1].time),6.5);
 await page.reload();await page.waitForFunction(()=>window.ExhibitionOutput);
 assert.ok(await page.locator('#render-output-panel').isVisible());assert.ok(await page.locator('#render-camera-editor').evaluate(e=>e.open));assert.equal(await page.evaluate(()=>ExhibitionOutput.state().keyframes[1].time),6.5);
 console.log('PASS: seven views persist, an unblurred numeric edit saves immediately, older path is backed up, stale tabs do not overwrite it, and the editor reopens after reload.');
 // Missing primary and backup: recover from an actual stored film's camera metadata.
 await page.evaluate(async keys=>{
  localStorage.removeItem('learning-vegas-camera-path-v1');localStorage.removeItem('learning-vegas-camera-path-backup-v1');
  const canvas=document.createElement('canvas');canvas.width=canvas.height=1;const preview=await new Promise(r=>canvas.toBlob(r));
  const d=await new Promise(resolve=>{const r=indexedDB.open('learning-vegas-render-output-v1',1);r.onupgradeneeded=()=>r.result.createObjectStore('outputs',{keyPath:'id'});r.onsuccess=()=>resolve(r.result)});
  await new Promise(resolve=>{const tx=d.transaction('outputs','readwrite');tx.objectStore('outputs').put({id:'film',type:'video',title:'Previous film',createdAt:123456,keys,preview,blob:new Blob([],{type:'video/mp4'}),width:320,height:180});tx.oncomplete=resolve});d.close();
 },fixture);
 // Leave through an isolated page without a pagehide save reintroducing the primary.
 const recovery=await context.newPage();await recovery.goto(base+'tools/recover-camera-path.html?editor=1');
 await recovery.waitForFunction(()=>document.getElementById('status').textContent.includes('Camera path ready / 7 views / 30 seconds'));
 assert.deepEqual(await recovery.evaluate(()=>JSON.parse(localStorage.getItem('learning-vegas-camera-path-v1'))),fixture);
 const frame=recovery.frames().find(f=>f.url().includes('exhibition.html'));assert.ok(await frame.locator('#render-output-panel').isVisible());assert.equal(await frame.locator('#render-camera-list .render-camera-key').count(),7);
 assert.deepEqual(errors,[]);console.log('PASS: recovery finds all seven camera poses/times/lights in a stored film and opens their editor in a fresh app frame, preserving the original tab.');
}finally{await context.close();await browser.close();}
