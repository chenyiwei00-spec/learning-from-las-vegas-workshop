import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import{createRequire}from'node:module';
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core');
const root=process.cwd(),base='http://127.0.0.1:8065/',jobs=new Map(),errors=[];let posts=0;
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage();page.setDefaultTimeout(60000);
page.on('pageerror',e=>{errors.push(e.message);console.log('ERROR',e.message)});
try{
 console.log('Fixture: reading existing GLB');
 const mesh=await(await context.request.get(base+'assets/exhibition-desert/models/sign_01_preview.glb')).body();
 const png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==','base64');
 await page.route('**/exhibition.html',r=>r.fulfill({body:fs.readFileSync(path.join(root,'site/exhibition.html')),contentType:'text/html'}));
 await page.route('**/team-live.js',r=>r.fulfill({body:''}));
 for(const f of ['model-gallery.js','sculpture-3d.js','saved-models.js','exhibition-library.js','exhibition-agent.js','exhibition-agent-drafts.js','exhibition-studio.js','exhibition-browse.js','model-colour.js','exhibition-generation.js','exhibition-archives.js','exhibition-card-images.js','exhibition-workspace.js'])
  await page.route('**/'+f,r=>r.fulfill({body:fs.readFileSync(path.join(root,'site',f)),contentType:'text/javascript'}));
 await page.route('**/api/sculpture3d/capabilities',r=>r.fulfill({json:{ready:true}}));
 await page.route('**/api/sculpture3d/jobs',r=>{
  posts++;const id=String(posts).repeat(64),prefix='assets/generated-sculptures/'+id+'/',payload=r.request().postDataJSON(),job={id,status:'running',message:'Fixture mesh is processing',modelUrl:prefix+'sculpture.glb',objUrl:prefix+'sculpture.obj',triangles:1000};
  jobs.set(id,{payload,job,complete:false});return r.fulfill({json:job});
 });
 await page.route('**/api/sculpture3d/jobs/*',r=>{const j=jobs.get(r.request().url().split('/').at(-1));return j?r.fulfill({json:{...j.job,status:j.complete?'complete':'running'}}):r.fulfill({status:404,json:{error:'Unknown fixture'}})});
 await page.route('**/assets/generated-sculptures/**',r=>{
  const[id,file]=r.request().url().split('/generated-sculptures/')[1].split('/'),j=jobs.get(id);
  if(!j)return r.fulfill({status:404});
  return file==='sculpture.glb'?r.fulfill({body:mesh,contentType:'model/gltf-binary'}):file==='sculpture.obj'?r.fulfill({body:'o fixture\nv 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3\n'}):file==='composition.json'?r.fulfill({json:j.payload.composition}):file==='source.png'?r.fulfill({body:png,contentType:'image/png'}):r.fulfill({status:404});
 });
 console.log('Fixture: opening isolated exhibition');await page.goto(base+'exhibition.html',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.ExhibitionStudio&&window.ExhibitionAgent&&window.ExhibitionLibrary);
 console.log('Fixture: studio ready, starting batch');await page.evaluate(async()=>{
  const blob=await(await fetch('assets/exhibition-desert/models/sign_01_preview.glb')).blob();
  const rows=['a','b'].map((v,i)=>({id:'old-'+v,title:'Old '+v,group:'Before generation',savedAt:Date.now()+i,colourVersion:ModelColour.version,glb:blob,obj:new Blob(['o old']),preview:new Blob([],{type:'image/png'}),composition:null,camera:null,record:{id:v.repeat(64),fingerprint:v.repeat(64),modelUrl:'assets/generated-sculptures/'+v.repeat(64)+'/sculpture.glb',objUrl:'assets/generated-sculptures/'+v.repeat(64)+'/sculpture.obj',target:'city',triangles:1000,linkedMedia:{version:2,video:null,audio:null}}}));
  const d=await new Promise(resolve=>{const r=indexedDB.open('borrowed-worlds-saved-sculptures-v1');r.onsuccess=()=>resolve(r.result)});await new Promise(resolve=>{const t=d.transaction('models','readwrite');rows.forEach(e=>t.objectStore('models').put(e));t.oncomplete=resolve});d.close();await SavedSculptures.update('old-a',{title:'Old a'});await ExhibitionLibrary.render();
  window.ExhibitionColourPreference={pick:async candidates=>candidates[0]};
  document.getElementById('model-history').open=true;document.getElementById('exhibition-agent-count').value='2';ExhibitionAgent.run();
 });
 await page.waitForFunction(()=>ExhibitionStudio.generationState().busy&&ExhibitionStudio.generationState().jobId);
 console.log('Fixture: first job pending');assert.equal(posts,1);const original=jobs.get('1'.repeat(64)).payload.composition;
 const locked=await page.evaluate(()=>({grid:document.getElementById('saved-model-grid').inert,panel:document.getElementById('model-panel').inert,pending:document.querySelector('[data-generating-model] button')?.disabled,collage:document.getElementById('workspace-collage-pane').inert,active:ExhibitionAgentDrafts.state().activeId}));
 assert.deepEqual({grid:locked.grid,panel:locked.panel,pending:locked.pending,collage:locked.collage},{grid:false,panel:false,pending:true,collage:true});assert.ok(locked.active);
 console.log('Fixture: opening old card');await page.locator('#saved-model-grid [data-saved="old-a"] [data-open]').click();
 await page.waitForFunction(()=>ExhibitionStudio.state().model.libraryId==='old-a'&&ExhibitionStudio.state().model.loaded&&ExhibitionStudio.state().model.gallery.phase==='overview');
 assert.equal(await page.evaluate(()=>ExhibitionStudio.generationState().busy),true);
 assert.deepEqual(await page.evaluate(()=>{const d=ExhibitionStudio.getDocument();return {layers:d.layers,target:d.modelTarget,source:d.sourceSurface}}),{layers:original.layers,target:original.modelTarget,source:original.sourceSurface});
 await page.locator('#model-stage').scrollIntoViewIfNeeded();
 await page.evaluate(()=>{
  const v=document.getElementById('generated-sculpture-viewer'),b=v.getBoundingClientRect();
  for(let y=Math.max(0,b.top)+15;y<Math.min(innerHeight,b.bottom)-15;y+=12)for(let x=b.left+100;x<b.right-100;x+=12)if(v.positionAndNormalFromPoint(x,y)){
   v.dispatchEvent(new PointerEvent('pointerdown',{button:0,pointerId:90,clientX:x,clientY:y}));v.dispatchEvent(new PointerEvent('pointerup',{button:0,pointerId:90,clientX:x,clientY:y}));return;
  }throw Error('No visible model hit');
 });
 await page.waitForFunction(()=>ExhibitionStudio.state().model.gallery.phase==='detail');
 await page.evaluate(()=>{const v=document.getElementById('generated-sculpture-viewer'),o=v.getCameraOrbit();v.cameraOrbit='65deg 70deg '+o.radius*.7+'m';v.jumpCameraToGoal();});
 await page.waitForTimeout(150);
 console.log('Fixture: saving old camera');await page.locator('#save-model').click();
 await page.waitForFunction(()=>document.getElementById('history-status').textContent.includes('updated with this view'));
 const saved=await page.evaluate(async()=>(await SavedSculptures.get('old-a')).camera);assert.ok(Math.abs(saved.orbit.theta-65*Math.PI/180)<.02);assert.equal(posts,1);
 await page.locator('.model-gallery-arrow.next').click();
 await page.waitForFunction(()=>ExhibitionStudio.state().model.libraryId==='old-b'&&ExhibitionStudio.state().model.gallery.phase==='overview');
 assert.equal(await page.evaluate(()=>ExhibitionStudio.generationState().busy),true);
 console.log('Fixture: releasing first job');jobs.get('1'.repeat(64)).complete=true;
 await page.waitForFunction(()=>ExhibitionAgent.state().completed===1&&ExhibitionStudio.generationState().jobId==='2'.repeat(64));
 assert.equal(await page.evaluate(()=>ExhibitionStudio.state().model.libraryId),'old-b');
 const first=await page.evaluate(async()=>(await SavedSculptures.list()).find(r=>r.record.id==='1'.repeat(64)));
 assert.ok(first);assert.equal(first.camera,null);assert.deepEqual(first.composition,original);assert.equal(first.record.id,'1'.repeat(64));
 // Existing cards can be renamed and deleted while the second mesh is running.
 await page.locator('#saved-model-grid [data-saved="old-b"] [data-edit]').click();await page.locator('#saved-edit-name').fill('Renamed while generating');await page.locator('#saved-model-edit-form button[type="submit"]').click();
 await page.waitForFunction(()=>document.querySelector('#saved-model-grid [data-saved="old-b"] h3')?.textContent==='Renamed while generating');
 await page.locator('#saved-model-grid [data-saved="old-a"] [data-delete]').click();await page.waitForFunction(()=>!document.querySelector('#saved-model-grid [data-saved="old-a"]'));
 assert.equal(await page.evaluate(()=>ExhibitionStudio.generationState().busy),true);
 jobs.get('2'.repeat(64)).complete=true;await page.waitForFunction(()=>!ExhibitionAgent.state().busy&&ExhibitionAgent.state().completed===2);
 const state=await page.evaluate(async()=>({agent:ExhibitionAgent.state(),libraryId:ExhibitionStudio.state().model.libraryId,rows:(await SavedSculptures.list()).map(r=>({job:r.record.id,composition:r.composition})),pending:!!document.querySelector('[data-generating-model]')}));
 assert.equal(state.libraryId,'old-b');assert.equal(state.pending,false);assert.equal(state.agent.failures.length,0);assert.equal(posts,2);
 for(const[id,j]of jobs)assert.deepEqual(state.rows.find(r=>r.job===id)?.composition,j.payload.composition);
 assert.deepEqual(errors,[]);console.log('PASS: batch generation stays independent of old-model browsing, camera saves, carousel, rename and deletion; current card is locked and both correct new meshes save without replacing the active viewer.');
 // Manual generation also has a clickable ready entry if a saved model is being viewed.
 await page.evaluate(()=>{ExhibitionStudio.generate();});await page.waitForFunction(()=>ExhibitionStudio.generationState().jobId==='3'.repeat(64));
 jobs.get('3'.repeat(64)).complete=true;await page.waitForFunction(()=>!ExhibitionStudio.generationState().busy&&!!document.querySelector('[data-generating-model] button:not(:disabled)'));
 await page.locator('[data-generating-model] button').click();await page.waitForFunction(()=>ExhibitionStudio.state().model.loaded&&!ExhibitionStudio.state().model.libraryId&&ExhibitionStudio.captureModel().record?.id==='3'.repeat(64));
 assert.equal(posts,3);assert.deepEqual(errors,[]);console.log('PASS: a manually generated background result remains accessible without overwriting the old preview or starting another inference.');
 // The selected-collage queue must use the same independent path.
 await page.evaluate(async()=>{
  await ExhibitionAgentDrafts.render();const rows=await ExhibitionAgentDrafts.list();
  document.querySelector('#agent-draft-grid [data-collage-id="'+rows[0].id+'"]').click();
  document.querySelector('#agent-draft-grid [data-collage-id="'+rows[1].id+'"]').dispatchEvent(new MouseEvent('click',{ctrlKey:true,bubbles:true}));
  ExhibitionAgentDrafts.generateSelected();
 });
 await page.waitForFunction(()=>ExhibitionStudio.generationState().jobId==='4'.repeat(64)&&ExhibitionStudio.generationState().busy);
 await page.locator('#workspace-close').click();
 await page.locator('#saved-model-grid [data-saved="old-b"] [data-open]').click();
 await page.waitForFunction(()=>ExhibitionStudio.state().model.libraryId==='old-b'&&ExhibitionStudio.state().model.loaded);
 jobs.get('4'.repeat(64)).complete=true;
 await page.waitForFunction(()=>ExhibitionAgentDrafts.state().completed===1&&ExhibitionStudio.generationState().jobId==='5'.repeat(64));
 assert.equal(await page.evaluate(()=>ExhibitionStudio.state().model.libraryId),'old-b');
 jobs.get('5'.repeat(64)).complete=true;
 await page.waitForFunction(()=>!ExhibitionAgentDrafts.state().busy&&ExhibitionAgentDrafts.state().completed===2);
 const queue=await page.evaluate(async()=>({state:ExhibitionAgentDrafts.state(),rows:(await SavedSculptures.list()).map(r=>({id:r.record.id,composition:r.composition})),view:ExhibitionStudio.state().model.libraryId}));
 assert.equal(queue.view,'old-b');assert.deepEqual(queue.state.failures,[]);assert.equal(posts,5);
 for(const id of ['4'.repeat(64),'5'.repeat(64)])assert.deepEqual(queue.rows.find(r=>r.id===id).composition,jobs.get(id).payload.composition);
 assert.deepEqual(errors,[]);console.log('PASS: selected-collage batch also completes and saves correctly while saved-model browsing continues.');
}catch(e){console.log('STATE',await page.evaluate(()=>({agent:window.ExhibitionAgent?.state(),studio:window.ExhibitionStudio?.state(),generation:(()=>{const s=window.ExhibitionStudio?.generationState();return s?{busy:s.busy,jobId:s.jobId,error:s.error}:null})(),text:document.getElementById('exhibition-message')?.textContent})).catch(()=>null));throw e}finally{await browser.close()}
