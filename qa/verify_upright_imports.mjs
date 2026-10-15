import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';import{createHash}from'node:crypto';import{createRequire}from'node:module';import*as THREE from'three';import{GLTFLoader}from'three/examples/jsm/loaders/GLTFLoader.js';
const root=process.cwd(),base='http://127.0.0.1:8065/',bundle=JSON.parse(fs.readFileSync('site/assets/imported-sculptures/catalog.json','utf8')),corrected=bundle.items.filter(r=>r.presentation),loader=new GLTFLoader();
const hash=b=>createHash('sha256').update(b).digest('hex'),binary=b=>b.subarray(28+b.readUInt32LE(12));
for(const row of corrected){
 const raw=fs.readFileSync(path.join('site',row.modelUrl)),fixed=fs.readFileSync(path.join('site',row.presentation.modelUrl));
 assert.equal(hash(raw),row.sha256);assert.equal(hash(fixed),row.presentation.sha256);assert.deepEqual(binary(raw),binary(fixed));
 const gltf=await loader.parseAsync(fixed.buffer.slice(fixed.byteOffset,fixed.byteOffset+fixed.byteLength),'');const bounds=new THREE.Box3().setFromObject(gltf.scene);
 assert.ok(Math.abs(bounds.min.y)<1e-6,row.title+': '+bounds.min.y);assert.ok(Math.abs(bounds.max.y-row.presentation.boundsMax[1])<1e-6,row.title);
 gltf.scene.traverse(o=>{o.geometry?.dispose();const ms=o.material?(Array.isArray(o.material)?o.material:[o.material]):[];ms.forEach(m=>m.dispose())});
}
assert.equal(corrected.filter(r=>r.presentation.rotationXDegrees===-90).length,4);console.log('PASS: 12 presentations touch Y=0, four rotate from Z-up to Y-up; original mesh, colour and texture buffer bytes are unchanged.');
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core');
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage(),errors=[];page.setDefaultTimeout(60000);page.on('pageerror',e=>errors.push(e.message));
await context.route('**/*',async route=>{const u=new URL(route.request().url());if(u.origin!==new URL(base).origin)return route.continue();const file=u.pathname==='/'?'index.html':decodeURIComponent(u.pathname).slice(1);
 if(file==='team-live.js')return route.fulfill({body:''});if(file==='__upright-seed.html')return route.fulfill({contentType:'text/html',body:'<!doctype html><title>Isolated orientation fixture</title>'});if(file.startsWith('assets/generated-sculptures/'))return route.fulfill({status:404,body:'{}'});
 if(file.startsWith('api/sculpture3d/jobs')&&route.request().method()==='POST')throw Error('No inference');
 const p=path.join(root,'site',file);if(fs.existsSync(p)&&fs.statSync(p).isFile())return route.fulfill({body:fs.readFileSync(p),contentType:file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':file.endsWith('.json')?'application/json':file.endsWith('.png')?'image/png':undefined});return route.continue();});
try{
 await page.goto(base+'__upright-seed.html');
 const fixture=await page.evaluate(async()=>{
  const bundle=await(await fetch('assets/imported-sculptures/catalog.json')).json(),chosen=bundle.items.find(r=>r.objUrl),translated=bundle.items.find(r=>r.presentation&&!r.objUrl);
  const rows=[];
  for(const item of bundle.items){const glb=await(await fetch(item.modelUrl)).blob(),preview=await(await fetch(item.previewUrl)).blob(),obj=item.objUrl?await(await fetch(item.objUrl)).blob():null;rows.push({id:'import:'+item.sha256,title:item.sha256===chosen.sha256?'My exhibit name':item.title,group:'My saved group',number:rows.length+1,savedAt:123456,importSha256:item.sha256,colourVersion:'saturation-1.35-v1',glb,obj,preview,previewType:'model',previewVersion:'collage-studio-faceted-v1',composition:null,camera:{orbit:{theta:.2,phi:1.5,radius:4},target:{x:.1,y:.3,z:.2},fieldOfView:30},record:{id:item.sha256,fingerprint:item.sha256,modelUrl:'assets/generated-sculptures/'+item.sha256+'/sculpture.glb',objUrl:'assets/generated-sculptures/'+item.sha256+'/sculpture.obj',target:item.target,triangles:item.triangles,localOnly:true,linkedMedia:{version:2,video:null,audio:{id:'keep-audio',title:'Existing audio'}}}});}
  const db=await new Promise(resolve=>{const r=indexedDB.open('borrowed-worlds-saved-sculptures-v1',1);r.onupgradeneeded=()=>r.result.createObjectStore('models',{keyPath:'id'});r.onsuccess=()=>resolve(r.result)});
  await new Promise(resolve=>{const t=db.transaction('models','readwrite');for(const row of rows)t.objectStore('models').put(row);t.oncomplete=resolve});db.close();
  const row=rows.find(r=>r.record.id===chosen.sha256),floor=await new Promise(resolve=>{const r=indexedDB.open('learning-vegas-exhibition-floor-v1',1);r.onupgradeneeded=()=>{r.result.createObjectStore('models',{keyPath:'id'});r.result.createObjectStore('layout')};r.onsuccess=()=>resolve(r.result)});
  const layout={id:'placed-original',modelId:row.record.id,col:7,row:8,span:2,spanX:1,spanZ:2,cellSize:20,rotation:Math.PI/2,scale:.9,offsetX:1.25,offsetZ:-2.75,name:'Placed copy'};
  await new Promise(resolve=>{const t=floor.transaction(['models','layout'],'readwrite');t.objectStore('models').put({id:row.record.id,blob:row.glb,name:row.title,preview:row.preview,record:row.record,composition:null,camera:row.camera,libraryId:row.id,obj:row.obj});t.objectStore('layout').put([layout],'current');t.oncomplete=resolve});floor.close();
  return {chosen:row.id,translated:'import:'+translated.sha256,shift:translated.presentation.translationY,cx:-200+(7+.5)*20+1.25,cz:-200+(8+1)*20-2.75};
 });
 await page.goto(base+'exhibition.html');await page.waitForFunction(()=>window.ExhibitionWalk?.placement.state().restored&&window.ExhibitionStudio,null,{timeout:90000});
 const result=await page.evaluate(async ids=>{const rows=await SavedSculptures.list(),rotated=await SavedSculptures.get(ids.chosen),translated=await SavedSculptures.get(ids.translated),placement=ExhibitionWalk.placement.state(),object=ExhibitionWalk.placement.spaceSources()[0].object;object.updateWorldMatrix(true,true);let minY=Infinity;
  object.traverse(o=>{const a=o.geometry?.attributes.position;if(!a)return;const m=o.matrixWorld.elements;for(let i=0;i<a.count;i++){minY=Math.min(minY,m[1]*a.getX(i)+m[5]*a.getY(i)+m[9]*a.getZ(i)+m[13]);}});
  return {count:rows.length,corrected:rows.filter(r=>r.importPresentationRevision===1).length,title:rotated.title,group:rotated.group,number:rotated.number,savedAt:rotated.savedAt,audio:rotated.record.linkedMedia.audio.id,camera:rotated.camera,shiftedY:translated.camera.target.y,model:placement.models[0],minY,undo:placement.history.undo};
 },fixture);
 assert.equal(result.count,bundle.items.length);assert.equal(result.corrected,12);assert.equal(result.title,'My exhibit name');assert.equal(result.group,'My saved group');assert.equal(result.savedAt,123456);assert.equal(result.audio,'keep-audio');assert.equal(result.camera,null);assert.ok(Math.abs(result.shiftedY-(.3+fixture.shift))<1e-9);
 assert.equal(result.model.id,'placed-original');assert.ok(Math.abs(result.model.x-fixture.cx)<1e-8);assert.ok(Math.abs(result.model.z-fixture.cz)<1e-8);assert.equal(result.model.rotation,Math.PI/2);assert.ok(Math.abs(result.minY-.015)<1e-5);assert.equal(result.undo,0);
 fs.mkdirSync('runtime',{recursive:true});await page.screenshot({path:'runtime/upright-floor-restored.png'});
 await page.reload();await page.waitForFunction(()=>window.ExhibitionWalk?.placement.state().restored&&window.ExhibitionStudio,null,{timeout:90000});
 const again=await page.evaluate(async ids=>({count:(await SavedSculptures.list()).length,y:(await SavedSculptures.get(ids.translated)).camera.target.y,model:ExhibitionWalk.placement.state().models[0]}),fixture);
 assert.equal(again.count,bundle.items.length);assert.equal(again.y,result.shiftedY);assert.equal(again.model.x,result.model.x);assert.equal(again.model.z,result.model.z);assert.equal(again.model.rotation,result.model.rotation);assert.deepEqual(errors,[]);
 console.log('PASS: existing 18-record library updates in place, preserving names/groups/media; sideways saved cameras reset, translation cameras move once; placed copy becomes upright and grounded, retaining its centre/rotation after another reload. No inference or user-browser access.');
}finally{await browser.close();}
