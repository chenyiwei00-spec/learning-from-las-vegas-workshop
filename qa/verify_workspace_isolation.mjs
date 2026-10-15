import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import{createRequire}from'node:module';
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core'),root=process.cwd(),base='http://127.0.0.1:8065/';
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage();page.setDefaultTimeout(60000);const errors=[];
page.on('pageerror',e=>errors.push(e.message));
await page.route('**/*',async route=>{const u=new URL(route.request().url());if(u.origin!==new URL(base).origin)return route.continue();const file=u.pathname==='/'?'index.html':u.pathname.slice(1);if(file==='team-live.js')return route.fulfill({body:''});if(file.startsWith('api/sculpture3d/jobs')&&route.request().method()==='POST')throw Error('No real inference');const p=path.join(root,'site',file);if(fs.existsSync(p)&&fs.statSync(p).isFile())return route.fulfill({body:fs.readFileSync(p),contentType:file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':file.endsWith('.json')?'application/json':undefined});return route.continue();});
try{
 await page.goto(base+'?view=collage',{waitUntil:'networkidle'});await page.locator('#workshop-enter').click();
 await page.waitForFunction(()=>document.querySelector('iframe[data-view=collage]')?.contentWindow?.CollageStudio);
 const collage=page.frames().find(f=>f.url().includes('collage.html'));
 assert.equal((await page.locator('#workshop-nav').boundingBox()).height,42);
 assert.ok((await page.locator('#workshop-nav a').first().boundingBox()).width<=240);
 const original=await collage.evaluate(()=>JSON.stringify(CollageStudio.getDocument()));
 await collage.evaluate(async()=>{
  const glb=await(await fetch('assets/exhibition-desert/models/sign_01_preview.glb')).blob();
  const db=await new Promise(resolve=>{const r=indexedDB.open('borrowed-worlds-saved-sculptures-v1',1);r.onupgradeneeded=()=>r.result.createObjectStore('models',{keyPath:'id'});r.onsuccess=()=>resolve(r.result)});
  const recipes=[['foreign',{format:'borrowed-worlds-exhibition-collage',workspace:'exhibition-model-loop-v1',width:1050,height:1400,layers:[]}],['local',CollageStudio.getDocument()],['legacy',null]];
  await new Promise(resolve=>{const tx=db.transaction('models','readwrite');for(const [id,composition]of recipes){const hash=(id==='foreign'?'a':id==='local'?'b':'c').repeat(64);tx.objectStore('models').put({id,title:id,group:'QA',savedAt:Date.now(),colourVersion:ModelColour.version,glb,obj:new Blob(['o fixture']),preview:new Blob([],{type:'image/png'}),composition,camera:null,record:{id:hash,fingerprint:hash,modelUrl:'assets/generated-sculptures/'+hash+'/sculpture.glb',objUrl:'assets/generated-sculptures/'+hash+'/sculpture.obj',localOnly:!composition,target:'city',triangles:1000,linkedMedia:{version:2,video:null,audio:null}}});}tx.oncomplete=resolve});db.close();await SavedSculptures.update('foreign',{title:'foreign'});
 });
 await collage.waitForFunction(()=>document.querySelectorAll('#saved-model-grid [data-saved]').length===3);
 for(const id of ['foreign','local','legacy']){
  await collage.locator('[data-saved="'+id+'"] [data-open]').first().click();
  await collage.waitForFunction(id=>CollageStudio.getGenerated3DState().loaded&&CollageStudio.getGenerated3DState().libraryId===id,id);
  assert.ok(collage.url().endsWith('collage.html'));assert.equal(await page.evaluate(()=>Workshop.state().current),'collage');
  assert.equal(await collage.locator('#walk-surface').count(),0);
  if(id!=='local')assert.equal(await collage.evaluate(()=>JSON.stringify(CollageStudio.getDocument())),original);
  await collage.locator('#return-working').click();
  await collage.waitForFunction(()=>!CollageStudio.isSavedPreview());assert.equal(await collage.evaluate(()=>JSON.stringify(CollageStudio.getDocument())),original);
 }
 console.log('PASS: local, exhibition and legacy model cards all open the Collage viewer without replacing the workspace or its draft.');
 await collage.locator('[data-saved=foreign] [data-open]').first().click();
 await collage.waitForFunction(()=>CollageStudio.getGenerated3DState().loaded&&CollageStudio.getGenerated3DState().libraryId==='foreign');
 await collage.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,document.documentElement.scrollHeight)});
 await page.waitForTimeout(1000);
 const dims=await collage.evaluate(()=>{const b=document.getElementById('model-stage').getBoundingClientRect(),h=document.getElementById('model-history');return {y:b.y,bottom:b.bottom,height:b.height,vh:innerHeight,ordered:!!(h.compareDocumentPosition(document.getElementById('model-panel'))&Node.DOCUMENT_POSITION_FOLLOWING)}});
 assert.equal(dims.ordered,true);assert.ok(Math.abs(dims.y)<2,JSON.stringify(dims));assert.ok(Math.abs(dims.bottom-dims.vh)<2,JSON.stringify(dims));assert.equal(dims.height,dims.vh);
 assert.equal(await collage.locator('.studio-controls').isVisible(),false);
 fs.mkdirSync('runtime',{recursive:true});await page.screenshot({path:'runtime/workspace-collage-bottom.png'});
 await collage.locator('#model-fullscreen').click();await collage.waitForFunction(()=>!!document.fullscreenElement);
 await page.waitForFunction(()=>document.documentElement.dataset.workshopFullscreen==='true');
 assert.equal(await page.locator('#workshop-nav').isVisible(),false);assert.equal(await collage.locator('.workshop-child-nav').isVisible(),false);assert.equal(await collage.locator('#model-stage .workshop-nav').count(),0);
 await page.screenshot({path:'runtime/workspace-collage-fullscreen.png'});
 await page.evaluate(()=>document.exitFullscreen());await page.waitForFunction(()=>document.documentElement.dataset.workshopFullscreen==='false');assert.equal(await page.locator('#workshop-nav').isVisible(),true);
 console.log('PASS: compact navigation, library before viewport-height final 3D stage, no bottom whitespace, fullscreen hides navigation and restores it on exit.');
 await page.locator('#workshop-nav [data-view=architecture]').click();
 await page.waitForFunction(()=>document.querySelector('iframe[data-view=architecture]')?.contentWindow?.ExhibitionStudio&&document.querySelector('iframe[data-view=architecture]')?.contentWindow?.ExhibitionWalk?.state().ready,{},{timeout:90000});
 const arch=page.frames().find(f=>f.url().includes('exhibition.html'));await arch.evaluate(()=>document.getElementById('model-history').open=true);await arch.locator('#saved-model-grid [data-saved=local] [data-open]').first().click();
 await arch.waitForFunction(()=>ExhibitionStudio.state().model.loaded&&ExhibitionStudio.state().model.libraryId==='local');
 assert.equal(await page.evaluate(()=>Workshop.state().current),'architecture');assert.ok(arch.url().endsWith('exhibition.html'));assert.ok(collage.url().endsWith('collage.html'));
 await arch.locator('#walk-surface').dblclick({position:{x:35,y:300}});await arch.waitForFunction(()=>!!document.fullscreenElement);assert.equal(await page.locator('#workshop-nav').isVisible(),false);assert.equal(await arch.locator('.workshop-child-nav').isVisible(),false);
 await page.evaluate(()=>document.exitFullscreen());
 await page.locator('#workshop-nav [data-view=collage]').click();assert.equal(await collage.evaluate(()=>CollageStudio.getGenerated3DState().libraryId),'foreign');
 assert.deepEqual(errors,[]);console.log('PASS: Architecture opens its own viewer, both workspaces keep independent viewers; walk fullscreen also hides navigation. No browser errors.');
}catch(e){console.log('DIAGNOSTIC',await page.evaluate(()=>[...document.querySelectorAll('iframe')].map(f=>({view:f.dataset.view,url:f.contentWindow.location.href,status:f.contentDocument.getElementById('studio-message')?.textContent,model:f.contentWindow.CollageStudio?.getGenerated3DState()}))).catch(()=>null));throw e;}finally{await browser.close();}
