import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import{createRequire}from'node:module';
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core'),root=process.cwd(),base='http://127.0.0.1:8065/';
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true}),page=await context.newPage();page.setDefaultTimeout(60000);const errors=[];
page.on('pageerror',e=>{errors.push(e.message);console.log('PAGE ERROR',e.message)});page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('404'))console.log('BROWSER',m.text().slice(0,300))});
await page.route('**/*',async route=>{const u=new URL(route.request().url());if(u.origin!==new URL(base).origin)return route.continue();let file=u.pathname==='/'?'index.html':u.pathname.slice(1);if(file==='team-live.js')return route.fulfill({body:''});if(file.startsWith('api/sculpture3d/jobs')&&route.request().method()==='POST')throw Error('Real AI inference is forbidden');const p=path.join(root,'site',file);if(fs.existsSync(p)&&fs.statSync(p).isFile()){const contentType=file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.json')?'application/json':undefined;return route.fulfill({body:fs.readFileSync(p),contentType});}return route.continue();});
try{
 await page.goto(base,{waitUntil:'networkidle'});assert.equal(await page.locator('#workshop-cover').isVisible(),true);assert.equal(await page.locator('#workshop-nav').isVisible(),false);for(const name of ['Yiwei Chen','Jiayi Tan','linxi Chen','Ziyang Liu'])assert.ok(await page.locator('#workshop-cover').textContent().then(t=>t.includes(name)));
 fs.mkdirSync('runtime',{recursive:true});await page.screenshot({path:'runtime/workshop-cover.png'});
 await page.locator('#workshop-enter').click();let frame=page.frames().find(f=>f.url().includes('archive.html'));await page.waitForFunction(()=>document.querySelector('iframe[data-view=archive]')?.contentWindow?.document.getElementById('result-count')?.textContent.includes('items'));
 frame=page.frames().find(f=>f.url().includes('archive.html'));assert.equal(await frame.locator('#media-tabs .media-entry').count(),5);assert.equal(await frame.locator('#media-tabs .collage-entry').count(),0);await frame.locator('[data-media=model]').click();assert.equal(await frame.evaluate(()=>ARCHIVE_DATA.items.filter(i=>i.type==='model').length),191);
 await page.locator('#workshop-nav [data-view=collage]').click();await page.waitForFunction(()=>document.querySelector('iframe[data-view=collage]')?.contentWindow?.document.getElementById('collage-canvas'));await page.locator('#workshop-nav [data-view=architecture]').click();
 await page.waitForFunction(()=>document.querySelector('iframe[data-view=architecture]')?.contentWindow?.ExhibitionWalk?.state().ready,{},{timeout:90000});
 const arch=page.frames().find(f=>f.url().includes('exhibition.html'));await arch.waitForFunction(()=>window.ExhibitionStudio&&window.ExhibitionOutput&&window.ExhibitionLibrary);const uid=await arch.evaluate(()=>{window.workshopTestToken=crypto.randomUUID();return workshopTestToken;});
 await page.locator('#workshop-nav [data-view=archive]').click();await page.locator('#workshop-nav [data-view=architecture]').click();assert.equal(await arch.evaluate(()=>workshopTestToken),uid);assert.equal(await page.locator('.workshop-frame').count(),3);
 console.log('PASS: cover names, persistent three-workspace navigation, five database filters and 191 unique model subjects.');
 await arch.locator('#walk-surface').dblclick({position:{x:35,y:300}});
 await page.waitForFunction(()=>!!document.fullscreenElement);
 await arch.waitForFunction(()=>!!document.fullscreenElement);
 assert.equal(await page.locator('#workshop-nav').isVisible(),false);
 assert.equal(await arch.locator('.workshop-child-nav').isVisible(),false);
 await page.evaluate(()=>document.exitFullscreen());
 await page.waitForFunction(()=>!document.fullscreenElement);
 await page.locator('#workshop-nav [data-view=archive]').click();
 await page.locator('#workshop-nav [data-view=architecture]').click();
 assert.equal(await arch.evaluate(()=>workshopTestToken),uid);
 console.log('PASS: fullscreen hides navigation and restores workspace switching after exit without losing state.');
 
 await arch.evaluate(async()=>{const blob=await(await fetch('assets/exhibition-desert/models/sign_01_preview.glb')).blob();window.testMeshBlob=blob;const id='e'.repeat(64),row={id:'workshop-fixture',title:'Fixture exhibit',group:'QA',savedAt:Date.now(),colourVersion:ModelColour.version,glb:blob,obj:new Blob(['o test']),preview:new Blob([],{type:'image/png'}),composition:null,camera:null,record:{id,fingerprint:id,modelUrl:'assets/generated-sculptures/'+id+'/sculpture.glb',objUrl:'assets/generated-sculptures/'+id+'/sculpture.obj',target:'city',triangles:1000,linkedMedia:{version:2,video:null,audio:null}}};const db=await new Promise(resolve=>{const r=indexedDB.open('borrowed-worlds-saved-sculptures-v1');r.onsuccess=()=>resolve(r.result)});await new Promise(resolve=>{const t=db.transaction('models','readwrite');t.objectStore('models').put(row);t.oncomplete=resolve});db.close();await SavedSculptures.update(row.id,{title:row.title});await ExhibitionLibrary.render();await ExhibitionLibrary.placeSaved(row.id);});
 assert.equal(await arch.evaluate(()=>ExhibitionWalk.placement.state().modelCount),1);
 console.log('PASS: saved model card places a copy without replacing the current floor layout.');
 const before=await arch.evaluate(()=>(()=>{const r=document.getElementById('walk-canvas-host').getBoundingClientRect();return {p:ExhibitionWalk.projectWorld([[0,0,0],[20,0,20]]).map(p=>({x:p.x-r.left,y:p.y-r.top})),state:ExhibitionWalk.state().walkingCamera}})());
 console.log('Rendering 4K axis PNG...');
 const image=await arch.evaluate(async()=>{const row=await ExhibitionOutput.captureStill({width:3840,height:2160,samples:1});const bmp=await createImageBitmap(row.blob),size={width:bmp.width,height:bmp.height,bytes:row.blob.size};bmp.close();return size;});
 assert.equal(image.width,3840);assert.equal(image.height,2160);assert.ok(image.bytes>20000);
 const after=await arch.evaluate(()=>(()=>{const r=document.getElementById('walk-canvas-host').getBoundingClientRect();return {p:ExhibitionWalk.projectWorld([[0,0,0],[20,0,20]]).map(p=>({x:p.x-r.left,y:p.y-r.top})),state:ExhibitionWalk.state().walkingCamera}})());assert.deepEqual(after.state,before.state);for(let i=0;i<2;i++){assert.ok(Math.abs(after.p[i].x-before.p[i].x)<1);assert.ok(Math.abs(after.p[i].y-before.p[i].y)<1);}
 await arch.evaluate(()=>{ExhibitionWalk.setViewMode('room');ExhibitionWalk.setCamera({x:18,y:8,z:45,yaw:.45,pitch:-.1,fly:true});});
 console.log('Rendering perspective PNG and one-second film...');
 const render64=await arch.evaluate(async()=>{const row=await ExhibitionOutput.captureStill({width:640,height:360,samples:2});const bytes=new Uint8Array(await row.blob.arrayBuffer());let s='';for(const b of bytes)s+=String.fromCharCode(b);return btoa(s);});fs.writeFileSync('runtime/workshop-render.png',Buffer.from(render64,'base64'));
 await arch.evaluate(()=>{const s=ExhibitionWalk.state().walkingCamera;ExhibitionOutput.setKeys([{id:'one',time:0,pose:{...s,fly:true},light:{time:8}},{id:'two',time:1,pose:{...s,x:s.x+4,yaw:s.yaw+.15,fly:true},light:{time:9}}]);});
 await arch.evaluate(()=>ExhibitionOutput.exportFilm({width:320,height:180,fps:12}));
 const outputs=await arch.evaluate(async()=>{const rows=await ExhibitionOutput.list();return rows.map(r=>({type:r.type,width:r.width,height:r.height,duration:r.duration,size:r.blob.size,extension:r.extension,id:r.id}));});
 assert.equal(outputs.length,3);const film=outputs.find(r=>r.type==='video');assert.ok(film.size>3000);assert.equal(film.duration,1);assert.ok(['mp4','webm'].includes(film.extension));assert.equal(await arch.locator('#archive-render-grid .saved-model-card').count(),3);
 await arch.evaluate(id=>ExhibitionOutput.viewOutput(id),film.id);await arch.waitForFunction(()=>document.querySelector('#render-output-viewer video')?.readyState>=1);const duration=await arch.locator('#render-output-viewer video').evaluate(v=>v.duration);assert.ok(Math.abs(duration-1)<.15);
 await arch.locator('#render-output-viewer-close').click();
 assert.deepEqual(errors,[]);console.log('PASS: real 3840x2160 PNG, perspective render, deterministic-timestamp encoded film, persistent output cards and playable one-second video. Camera framing is restored.');
 await page.screenshot({path:'runtime/workshop-architecture.png'});
}catch(e){console.log('DIAGNOSTIC',await page.evaluate(()=>document.querySelector('iframe[data-view=architecture]')?.contentWindow?.document.getElementById('render-output-status')?.textContent).catch(()=>null));throw e;}finally{await browser.close();}
