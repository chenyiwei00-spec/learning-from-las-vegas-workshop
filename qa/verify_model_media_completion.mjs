import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core');
const root=process.cwd(),base='http://127.0.0.1:8065/';
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage(),errors=[];
page.setDefaultTimeout(60000);page.on('pageerror',e=>errors.push(e.message));
await context.route('**/*',async route=>{
 const u=new URL(route.request().url());if(u.origin!==new URL(base).origin)return route.continue();
 const file=decodeURIComponent(u.pathname.slice(1)||'index.html');
 if(route.request().method()==='HEAD')return route.continue();
 if(file==='team-live.js')return route.fulfill({body:''});
 if(file==='assets/imported-sculptures/catalog.json'||file.startsWith('assets/generated-sculptures/'))return route.fulfill({status:404,body:'{}'});
 if(file==='__media-fixture.html')return route.fulfill({contentType:'text/html',body:'<!doctype html><title>Isolated media fixture</title><script src="model-media-match.js"></script><script src="saved-models.js"></script>'});
 if(file.startsWith('api/sculpture3d/jobs')&&route.request().method()==='POST')throw Error('No inference during QA');
 const p=path.join(root,'site',file);
 if(fs.existsSync(p)&&fs.statSync(p).isFile())return route.fulfill({body:fs.readFileSync(p),contentType:file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':file.endsWith('.json')?'application/json':file.endsWith('.png')?'image/png':undefined});
 return route.continue();
});
try{
 await page.goto(base+'__media-fixture.html');
 const original=await page.evaluate(async()=>{
  const catalog=await(await fetch('catalog.json')).json(),videos=catalog.items.filter(i=>i.type==='video'&&(i.video||i.playbackUrl)),audios=catalog.items.filter(i=>i.type==='audio'&&(i.audio||i.playbackUrl));
  const linked=(x,type)=>({id:x.id,type,url:x[type]||x.playbackUrl,title:x.title,basis:'keep-exactly',muted:type==='video'});
  const glb=await(await fetch('assets/exhibition-desert/models/sign_01_preview.glb')).blob(),rows=[];
  for(let i=0;i<20;i++){const id=(i+1).toString(16).padStart(64,'0');
   rows.push({id:'media-model-'+i,number:i+1,title:i===4?'Water fountain splash':'Imported sculpture '+i,group:'My group',savedAt:1000+i,glb,
    colourVersion:'saturation-1.35-v1',composition:i===4?{layers:[{sourceId:catalog.items.find(x=>x.type==='image'&&x.tags?.some(t=>/fountain/i.test(t)))?.id||'unknown'}]}:null,
    camera:{orbit:{theta:.4,phi:1.1,radius:3},target:{x:0,y:.2,z:0},fieldOfView:35},
    record:{id,fingerprint:id,modelUrl:'assets/generated-sculptures/'+id+'/sculpture.glb',target:'sculpture',localOnly:true,triangles:1000,
    linkedMedia:{version:2,video:i<3?linked(videos[i],'video'):null,audio:i<2||i===3?linked(audios[i],'audio'):null}}});
  }
  const db=await new Promise(resolve=>{const r=indexedDB.open('borrowed-worlds-saved-sculptures-v1',1);r.onupgradeneeded=()=>r.result.createObjectStore('models',{keyPath:'id'});r.onsuccess=()=>resolve(r.result)});
  await new Promise(resolve=>{const tx=db.transaction('models','readwrite');for(const r of rows)tx.objectStore('models').put(r);tx.oncomplete=resolve});db.close();
  return rows.map(({id,record,camera,title,group})=>({id,record,camera,title,group}));
 });
 const second=await context.newPage();await second.goto(base+'__media-fixture.html');
 await Promise.all([page.evaluate(()=>SavedSculptures.list().then(r=>r.length)),second.evaluate(()=>SavedSculptures.list().then(r=>r.length))]);
 const actual=await page.evaluate(async()=>{const rows=await SavedSculptures.list();return rows.map(({id,record,camera,title,group})=>({id,record,camera,title,group}))});
 assert.equal(actual.length,20);
 for(const type of ['video','audio']){
  const all=actual.map(r=>r.record.linkedMedia[type]);assert.ok(all.every(x=>x?.url));
  assert.equal(new Set(all.map(x=>x.id)).size,20);assert.equal(new Set(all.map(x=>new URL(x.url,base).pathname)).size,20);
  for(const old of original){const current=actual.find(r=>r.id===old.id);if(old.record.linkedMedia[type])assert.deepEqual(current.record.linkedMedia[type],old.record.linkedMedia[type]);}
 }
 for(const old of original){const current=actual.find(r=>r.id===old.id);assert.deepEqual(current.camera,old.camera);assert.equal(current.title,old.title);assert.equal(current.group,old.group)}
 const matched=actual.find(r=>r.id==='media-model-4').record.linkedMedia;assert.ok(['video','audio'].some(t=>matched[t].basis==='description-and-tags'));
 const fallback=actual.find(r=>r.id==='media-model-19').record.linkedMedia;assert.equal(fallback.audio.basis,'random-unique-fallback');
 await page.reload();const reloaded=await page.evaluate(async()=> (await SavedSculptures.list()).map(({id,record,camera,title,group})=>({id,record,camera,title,group})));
 assert.deepEqual(reloaded,actual);await second.close();
 console.log('PASS: 20 models, mixed missing channels, existing pairs/views preserved, unique IDs and URLs, semantic match and random fallback, simultaneous tabs and stable reload.');
 const probe=await page.evaluate(async rows=>{
  let queue=rows.flatMap(r=>['video','audio'].map(t=>r.record.linkedMedia[t].url)),results=[];
  await Promise.all(Array.from({length:4},async()=>{while(queue.length){const url=queue.shift();try{const r=await fetch(url,{method:'HEAD',signal:AbortSignal.timeout(15000)});results.push({url,status:r.status,type:r.headers.get('content-type')});}catch(e){results.push({url,error:e.message});}}}));
  return results;
 },actual);
 assert.ok(probe.every(r=>r.status===200||r.status===206),JSON.stringify(probe.filter(r=>!r.status||r.status>=400)));
 console.log('PASS: all 40 linked real archive files respond successfully.');
 // Seed an already placed model with missing links, then open the real third page.
 await page.evaluate(async()=>{
  const row=(await SavedSculptures.list()).find(r=>r.id==='media-model-6');
  const d=await new Promise(resolve=>{const r=indexedDB.open('learning-vegas-exhibition-floor-v1',1);r.onupgradeneeded=()=>{r.result.createObjectStore('models',{keyPath:'id'});r.result.createObjectStore('layout')};r.onsuccess=()=>resolve(r.result)});
  await new Promise(resolve=>{const tx=d.transaction(['models','layout'],'readwrite');tx.objectStore('models').put({id:row.record.id,blob:row.glb,name:row.title,record:{...row.record,linkedMedia:{version:2,video:null,audio:null}},composition:null,libraryId:row.id});tx.objectStore('layout').put([{id:'placed-media',modelId:row.record.id,col:9,row:9,span:1,spanX:1,spanZ:1,cellSize:20,rotation:0,scale:1,name:row.title}],'current');tx.oncomplete=resolve});d.close();
 });
 await page.goto(base+'exhibition.html');await page.waitForFunction(()=>window.ExhibitionStudio&&window.ExhibitionWalk?.placement.state().restored);
 const expected=actual.find(r=>r.id==='media-model-6').record.linkedMedia;
 const sources=await page.evaluate(()=>ExhibitionWalk.placement.audioSources());assert.equal(sources[0].audio.id,expected.audio.id);
 await page.evaluate(()=>window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:'media-model-6'}})));
 await page.waitForFunction(()=>ExhibitionMedia.state().modelId&&ExhibitionMedia.state().linkedMedia?.video);
 const shown=await page.evaluate(()=>ExhibitionMedia.state());assert.equal(shown.linkedMedia.audio.id,expected.audio.id);assert.equal(shown.linkedMedia.video.id,expected.video.id);assert.equal(shown.videoMuted,true);
 await page.waitForFunction(()=>ExhibitionProximityAudio.state().sources===1);
 assert.ok(await page.locator('#exhibition-play-video').isEnabled());assert.ok(await page.locator('#exhibition-play-audio').isEnabled());
 const next=actual.find(r=>r.id==='media-model-7').record.linkedMedia;
 await page.evaluate(value=>SavedSculptures.updateMedia('media-model-6',value),next);
 await page.waitForFunction(id=>ExhibitionWalk.placement.audioSources()[0]?.audio?.id===id,next.audio.id);
 const floor=await page.evaluate(async()=>{const r=indexedDB.open('learning-vegas-exhibition-floor-v1',1),d=await new Promise(resolve=>r.onsuccess=()=>resolve(r.result));return new Promise(resolve=>{const tx=d.transaction('models'),q=tx.objectStore('models').getAll();q.onsuccess=()=>resolve(q.result.map(x=>x.record.linkedMedia));tx.oncomplete=()=>d.close()})});assert.equal(floor[0].audio.id,next.audio.id);
 // Walk near the existing model and verify its paired track is the active spatial source.
 await page.evaluate(async()=>{await ExhibitionBrowse.close();ExhibitionWalk.placement.move('placed-media',{col:10,row:10,valid:true});ExhibitionWalk.setViewMode('room');});
 await page.locator('#walk-surface').scrollIntoViewIfNeeded();
 await page.locator('#exhibition-proximity-sound').click(); // toggles off
 await page.locator('#exhibition-proximity-sound').click(); // toggles on, real user gesture
 await page.waitForFunction(id=>ExhibitionProximityAudio.state().audioId===id,next.audio.id);
 console.log('PASS: existing floor models receive saved links, muted video/audio available in third-page viewer, proximity sources receive audio, later metadata edits synchronize and persist without moving models.');
 assert.deepEqual(errors,[]);
}finally{await context.close();await browser.close();}
