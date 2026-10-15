import {createRequire} from 'node:module';
import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import assert from 'node:assert/strict';
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR||import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_ANCHOR?'./browser_tools/node_modules/playwright-core':'playwright-core');
const root=resolve('.');
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH,args:['--mute-audio']});
try{
 const context=await browser.newContext();const page=await context.newPage();
 await page.route('http://127.0.0.1:8065/**',async route=>{
  const name=new URL(route.request().url()).pathname;
  if(name.startsWith('/tools/')){
   const p=resolve(root,'site'+name);await route.fulfill({body:await readFile(p),contentType:name.endsWith('.js')?'text/javascript':'text/html'});return;
  }
  await route.fulfill({status:404,body:'not found'});
 });
 await page.goto('http://127.0.0.1:8065/tools/workshop-transfer.html');
 const result=await page.evaluate(async()=>{
  const T=window.WorkshopTransfer,binaries=new Map();
  async function upload(blob){const bytes=await blob.arrayBuffer(),sha256=[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(v=>v.toString(16).padStart(2,'0')).join(''),file='files/'+sha256+'.bin';binaries.set(file,blob);return {file,sha256,bytes:blob.size};}
  const oldFetch=window.fetch;
  window.fetch=async url=>{
   const value=binaries.get(String(url).replace('/fixture/',''));
   return value?new Response(value):oldFetch(url);
  };
  const original={id:'test',glb:new Blob(['glb-data'],{type:'model/gltf-binary'}),plan:{points:new Float32Array([1.25,-2,5.5]),cells:new Uint16Array([0,65535])},camera:{target:{x:1,y:2,z:3}},map:new Map([['x',new Uint8Array([1,2])]]),set:new Set(['a','b'])};
  const packed=await T.pack(original,upload),restored=await T.unpack(packed,'/fixture/');
  if(await restored.glb.text()!=='glb-data'||restored.glb.type!=='model/gltf-binary'||!(restored.plan.points instanceof Float32Array)||restored.plan.points[0]!==1.25||restored.plan.cells[1]!==65535||restored.map.get('x')[1]!==2||!restored.set.has('b'))throw Error('Binary roundtrip failed');
  let checksumRejected=false;const first=[...binaries.keys()][0],before=binaries.get(first);binaries.set(first,new Blob(['bad-data']));
  try{await T.unpack(packed,'/fixture/');}catch{checksumRejected=true;}binaries.set(first,before);
  if(!checksumRejected)throw Error('Corrupt binary accepted');
  const snapshot={format:'learning-vegas-browser-snapshot-v1',createdAt:new Date().toISOString(),databases:[{name:'borrowed-worlds-saved-sculptures-v1',version:1,stores:[{name:'models',keyPath:'id',rows:[{key:'keep',value:{id:'keep',title:'replace?'}},{key:'test',value:packed}]}]}],localStorage:{'learning-vegas-camera-path-v1':'[{"test":1}]'}};
  T.validate(snapshot);
  let bad=false;try{T.validate({...snapshot,databases:[{name:'other-app',version:1,stores:[]}]});}catch{bad=true;}if(!bad)throw Error('Other application database allowed');
  const db=await new Promise((resolve,reject)=>{const r=indexedDB.open('borrowed-worlds-saved-sculptures-v1',1);r.onupgradeneeded=()=>r.result.createObjectStore('models',{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});
  await new Promise((resolve,reject)=>{const tx=db.transaction('models','readwrite');tx.objectStore('models').put({id:'keep',title:'Teacher original'});tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});
  db.close();
  window.fetch=async url=>{
   if(String(url).endsWith('manifest.json'))return Response.json(snapshot);
   const value=binaries.get(String(url).replace('/assets/shared-workshop/',''));
   return value?new Response(value):oldFetch(url);
  };
  await T.restore();await T.restore();
  const verify=await new Promise((resolve,reject)=>{const r=indexedDB.open('borrowed-worlds-saved-sculptures-v1',1);r.onsuccess=()=>{const db=r.result,q=db.transaction('models').objectStore('models').getAll();q.onsuccess=()=>{resolve(q.result);db.close();};};r.onerror=()=>reject(r.error);});
  if(verify.length!==2||verify.find(r=>r.id==='keep').title!=='Teacher original'||await verify.find(r=>r.id==='test').glb.text()!=='glb-data')throw Error('Non-destructive restore failed');
  return {records:verify.length,typedArrays:true,checksumRejected,otherDatabaseRejected:bad,idempotent:true,status:document.getElementById('status').textContent};
 });
 assert.equal(result.records,2);console.log(JSON.stringify(result));
 await context.close();
}finally{await browser.close();}
