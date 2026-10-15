import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';import{createRequire}from'node:module';
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core'),root=process.cwd(),base='http://127.0.0.1:8065/',jobs=new Map(),errors=[];let accepted=0,conflicts=0,conflicted=false,releaseFirst;
const first=new Promise(resolve=>releaseFirst=resolve),browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']}),context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage();page.setDefaultTimeout(60000);page.on('pageerror',e=>{errors.push(e.message);console.log('ERROR',e.message)});
try{
 const mesh=await(await context.request.get(base+'assets/exhibition-desert/models/sign_01_preview.glb')).body(),png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==','base64');
 await page.route('**/*',async r=>{
  const u=new URL(r.request().url());if(u.origin!==new URL(base).origin)return r.continue();const rel=u.pathname.slice(1),file=path.join(root,'site',rel);
  if(rel==='team-live.js')return r.fulfill({body:''});
  if(rel==='api/sculpture3d/capabilities')return r.fulfill({json:{ready:true}});
  if(rel==='api/sculpture3d/jobs'&&r.request().method()==='POST'){
   if(accepted>0&&!conflicted){conflicted=true;conflicts++;return r.fulfill({status:409,json:{error:'Previous process is cleaning up',activeJob:accepted.toString(16).padStart(64,'0')}});}
   const payload=r.request().postDataJSON(),id=(++accepted).toString(16).padStart(64,'0'),prefix='assets/generated-sculptures/'+id+'/',job={id,status:'complete',fingerprint:payload.fingerprint,modelUrl:prefix+'sculpture.glb',objUrl:prefix+'sculpture.obj',triangles:1000,completedAt:Date.now()/1000};jobs.set(id,{payload,job});conflicted=false;if(accepted===1)await first;return r.fulfill({json:job});
  }
  if(rel.startsWith('api/sculpture3d/jobs/'))return r.fulfill({json:jobs.get(rel.split('/').at(-1))?.job||{status:'failed'}});
  if(rel.startsWith('assets/generated-sculptures/')){
   const[id,file]=rel.slice('assets/generated-sculptures/'.length).split('/'),j=jobs.get(id);if(!j)return r.fulfill({status:404});
   return file==='sculpture.glb'?r.fulfill({body:mesh,contentType:'model/gltf-binary'}):file==='sculpture.obj'?r.fulfill({body:'o test'}):file==='source.png'?r.fulfill({body:png,contentType:'image/png'}):file==='composition.json'?r.fulfill({json:j.payload.composition}):r.fulfill({status:404});
  }
  if(fs.existsSync(file)&&fs.statSync(file).isFile())return r.fulfill({body:fs.readFileSync(file),contentType:rel.endsWith('.js')?'text/javascript':rel.endsWith('.html')?'text/html':rel.endsWith('.css')?'text/css':rel.endsWith('.json')?'application/json':undefined});
  return r.continue();
 });
 await page.goto(base+'exhibition.html',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.ExhibitionStudio&&window.ExhibitionLibrary&&ExhibitionWalk.state().ready);
 await page.evaluate(async()=>{
  window.ExhibitionColourPreference={pick:async c=>c[0]};const blob=await(await fetch('assets/exhibition-desert/models/sign_01_preview.glb')).blob(),id='e'.repeat(64),row={id:'seed-model',title:'Seed',group:'Test',savedAt:Date.now(),glb:blob,obj:new Blob(['o seed']),preview:new Blob([],{type:'image/png'}),composition:null,camera:null,colourVersion:ModelColour.version,record:{id,fingerprint:id,modelUrl:'assets/generated-sculptures/'+id+'/sculpture.glb',objUrl:'assets/generated-sculptures/'+id+'/sculpture.obj',target:'city',triangles:1000,linkedMedia:{version:2,audio:null,video:null}}};
  const db=await new Promise(resolve=>{const r=indexedDB.open('borrowed-worlds-saved-sculptures-v1');r.onsuccess=()=>resolve(r.result)});await new Promise(resolve=>{const t=db.transaction('models','readwrite');t.objectStore('models').put(row);t.oncomplete=resolve});db.close();await SavedSculptures.update(row.id,{title:row.title});await ExhibitionLibrary.render();
  document.getElementById('exhibition-agent-count').value='10';ExhibitionAgent.run();
 });
 await page.waitForFunction(()=>ExhibitionStudio.generationState().busy);
 await page.waitForTimeout(300);
 const composition=await page.evaluate(()=>ExhibitionStudio.getDocument());
 await page.evaluate(async()=>{document.getElementById('exhibition-place-count').value='2';await ExhibitionLibrary.arrange();});
 assert.equal(await page.evaluate(()=>ExhibitionWalk.placement.state().modelCount),2);assert.equal(await page.locator('#exhibition-make-space').isEnabled(),true);assert.deepEqual(await page.evaluate(()=>ExhibitionStudio.getDocument().layers),composition.layers);
 console.log('PASS: Place runs and Make space stays enabled while the Tripo request is pending.');
 releaseFirst();await page.waitForFunction(()=>!ExhibitionAgent.state().busy&&ExhibitionAgent.state().completed===10,{},{timeout:240000});
 const result=await page.evaluate(async()=>({agent:ExhibitionAgent.state(),rows:(await SavedSculptures.list()).filter(r=>r.group==='Agent batch')}));
 assert.equal(accepted,10);assert.equal(conflicts,9);assert.equal(result.rows.length,10);assert.equal(result.agent.failures.length,0);
 const targets=[...jobs.values()].map(j=>j.payload.composition.modelTarget);assert.deepEqual(targets,Array.from({length:10},(_,i)=>i%2?'sculpture':'city'));
 for(const[id,j]of jobs){const saved=result.rows.find(r=>r.record.id===id);assert.ok(saved);assert.deepEqual(saved.composition,j.payload.composition);}
 await page.locator('#saved-model-grid').scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('#saved-model-grid img[data-saved-view-ready=true]'),{},{timeout:60000});
 const preview=await page.evaluate(async()=>{const rows=await SavedSculptures.list();return rows.some(r=>r.previewType==='model'&&r.previewVersion===ModelPreviewFinish.version&&r.preview.size>1000);});assert.ok(preview);
 assert.deepEqual(errors,[]);console.log('PASS: ten models saved from ten collages despite nine 409 cleanup conflicts; Las Vegas and sculpture targets alternate; real 3D card previews are persisted.');
}catch(e){console.log('STATE',await page.evaluate(()=>({agent:window.ExhibitionAgent?.state(),status:document.getElementById('exhibition-agent-status')?.textContent})).catch(()=>null));throw e;}finally{releaseFirst();await browser.close();}
