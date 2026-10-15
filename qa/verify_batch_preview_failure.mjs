import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';import{createRequire}from'node:module';
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core');
const root=process.cwd(),base='http://127.0.0.1:8065/',jobs=new Map(),errors=[];let posts=0;
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage();page.setDefaultTimeout(60000);page.on('pageerror',e=>{errors.push(e.message);console.log('ERROR',e.message)});
try{
const response=await context.request.get(base+'assets/exhibition-desert/models/sign_01_preview.glb');assert.equal(response.status(),200);const mesh=await response.body();
const png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==','base64');
await page.route('**/exhibition.html',r=>r.fulfill({body:fs.readFileSync(path.join(root,'site/exhibition.html')),contentType:'text/html'}));
await page.route('**/api/sculpture3d/jobs/*',r=>{const id=r.request().url().split('/').at(-1);return r.fulfill({json:jobs.get(id)?.job||{status:'failed'}})});
await page.route('**/team-live.js',r=>r.fulfill({body:''}));
for(const f of ['model-gallery.js','sculpture-3d.js','saved-models.js','exhibition-library.js','exhibition-agent.js','exhibition-agent-drafts.js','exhibition-studio.js','exhibition-generation.js','exhibition-browse.js','model-colour.js','exhibition-colour-preference.js'])await page.route('**/'+f,r=>r.fulfill({body:fs.readFileSync(path.join(root,'site',f)),contentType:'text/javascript'}));
await page.route('**/api/sculpture3d/jobs',async r=>{posts++;const id=String(posts).repeat(64),prefix='assets/generated-sculptures/'+id+'/',payload=r.request().postDataJSON(),job={id,status:'complete',modelUrl:prefix+'sculpture.glb',objUrl:prefix+'sculpture.obj',triangles:1000};jobs.set(id,{payload,job});await page.evaluate(n=>window.forcePreviewFailure=n===2,posts);return r.fulfill({json:job})});
await page.route('**/assets/generated-sculptures/**',r=>{const [id,file]=r.request().url().split('/generated-sculptures/')[1].split('/'),j=jobs.get(id);if(!j)return r.fulfill({status:404});return file==='sculpture.glb'?r.fulfill({body:mesh,contentType:'model/gltf-binary'}):file==='sculpture.obj'?r.fulfill({body:'o fixture\nv 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3\n'}):file==='composition.json'?r.fulfill({json:j.payload.composition}):file==='source.png'?r.fulfill({body:png,contentType:'image/png'}):r.fulfill({status:404})});
await page.goto(base+'exhibition.html',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.ExhibitionAgent&&window.ExhibitionStudio&&window.ExhibitionLibrary);
await page.evaluate(()=>{const v=document.getElementById('generated-sculpture-viewer');let p=v,descriptor;while(p&&!descriptor){descriptor=Object.getOwnPropertyDescriptor(p,'src');p=Object.getPrototypeOf(p)}window.previewAssignments=0;Object.defineProperty(v,'src',{get(){return descriptor.get.call(this)},set(value){if(window.forcePreviewFailure&&value){previewAssignments++;descriptor.set.call(this,'blob:http://127.0.0.1:8065/missing-preview-'+previewAssignments)}else descriptor.set.call(this,value)}});});
await page.evaluate(()=>{document.getElementById('exhibition-agent-count').value='3';document.getElementById('exhibition-agent-count').dispatchEvent(new Event('input'));ExhibitionAgent.run();});
await page.waitForFunction(()=>!ExhibitionAgent.state().busy&&ExhibitionAgent.state().completed===3,{},{timeout:150000});
const state=await page.evaluate(async()=>({agent:ExhibitionAgent.state(),rows:(await SavedSculptures.list()).map(r=>({id:r.id,job:r.record.id,size:r.glb.size,camera:r.camera,preview:r.preview.size})),attempts:previewAssignments}));
assert.equal(posts,3);assert.equal(state.rows.length,3);assert.equal(state.agent.failures.length,0);assert.ok(state.attempts>=2);assert.equal(state.rows.find(r=>r.job==='2'.repeat(64)).camera,null);assert.ok(state.rows.every(r=>r.size===mesh.length||r.size>mesh.length));assert.deepEqual(errors,[]);
console.log('PASS: 3 completed jobs saved as 3 models despite forced preview failures and retry; fallback retains mesh and composition without a GPU inference.');
// Explicit retry recovers an unavailable renderer using the existing saved bytes.
await page.evaluate(()=>forcePreviewFailure=false);
const id=state.rows.find(r=>r.job==='2'.repeat(64)).id;await page.evaluate(id=>window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id}})),id);
await page.waitForFunction(()=>ExhibitionStudio.state().model.loaded&&ExhibitionStudio.state().model.gallery.phase==='overview');
assert.equal(await page.evaluate(()=>ExhibitionStudio.state().model.libraryId),id);console.log('PASS: fallback-saved model reopens as an orbitable real GLB.');
}catch(e){console.log('STATE',await page.evaluate(()=>({agent:window.ExhibitionAgent?.state(),model:window.ExhibitionStudio?.state().model,status:document.getElementById('exhibition-agent-status')?.textContent})).catch(()=>null));throw e}finally{await browser.close()}
