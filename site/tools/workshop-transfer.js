/* Transfer only this application's documented stores, never browser credentials. */
(()=>{
'use strict';
const STATUS=document.getElementById('status'),REPORT=document.getElementById('report'),BUTTON=document.getElementById('load');
const FORMAT='learning-vegas-browser-snapshot-v1';
const SCHEMA={
 'borrowed-worlds-saved-sculptures-v1':{models:'id'},
 'learning-vegas-exhibition-floor-v1':{models:'id',layout:null},
 'learning-vegas-saved-spaces-v1':{spaces:'id'},
 'learning-vegas-agent-collages-v1':{drafts:'id'},
 'borrowed-worlds-local-collage':{drafts:null},
 'learning-vegas-exhibition-draft-v1':{draft:null},
 'learning-vegas-render-output-v1':{outputs:'id'}
};
const LS=['learning-vegas-agent-model-libraries-v1','learning-vegas-camera-path-v1','learning-vegas-camera-path-backup-v1','borrowed-worlds-studio-panels-v2','learning-vegas-deleted-jobs','learning-vegas-model-history-open'];
const TYPES={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};
if(typeof BigInt64Array!=='undefined'){TYPES.BigInt64Array=BigInt64Array;TYPES.BigUint64Array=BigUint64Array;}
function request(r){return new Promise((resolve,reject)=>{r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
function open(name){
 return new Promise((resolve,reject)=>{
  const r=indexedDB.open(name,1);
  r.onupgradeneeded=()=>{for(const [store,keyPath]of Object.entries(SCHEMA[name]))if(!r.result.objectStoreNames.contains(store))r.result.createObjectStore(store,keyPath?{keyPath}:undefined);};
  r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.onblocked=()=>reject(Error('Close other workshop tabs and retry.'));
 });
}
async function read(db,store,key){return request(db.transaction(store).objectStore(store).get(key));}
async function keys(db,store){return request(db.transaction(store).objectStore(store).getAllKeys());}
function write(db,store,value,key){return new Promise((resolve,reject)=>{
 const tx=db.transaction(store,'readwrite'),s=tx.objectStore(store);s.keyPath?s.add(value):s.add(value,key);
 tx.oncomplete=resolve;tx.onerror=tx.onabort=()=>reject(tx.error);
});}
async function pack(value,upload){
 if(value instanceof Blob)return {$workshop:'Blob',...await upload(value),type:value.type};
 if(value instanceof ArrayBuffer)return {$workshop:'ArrayBuffer',...await upload(new Blob([value]))};
 if(ArrayBuffer.isView(value)){
  const bytes=value.buffer.slice(value.byteOffset,value.byteOffset+value.byteLength);
  return {$workshop:value instanceof DataView?'DataView':value.constructor.name,...await upload(new Blob([bytes]))};
 }
 if(value instanceof Date)return {$workshop:'Date',value:value.toISOString()};
 if(value instanceof Map)return {$workshop:'Map',value:await pack([...value],upload)};
 if(value instanceof Set)return {$workshop:'Set',value:await pack([...value],upload)};
 if(Array.isArray(value)){const out=[];for(const v of value)out.push(await pack(v,upload));return out;}
 if(value&&typeof value==='object'){
  const out=Object.create(null);
  for(const [k,v]of Object.entries(value)){if(['__proto__','constructor','prototype'].includes(k))throw Error('Unsupported project key.');out[k]=await pack(v,upload);}
  return out;
 }
 return value;
}
async function unpack(value,base){
 if(Array.isArray(value)){const out=[];for(const v of value)out.push(await unpack(v,base));return out;}
 if(value&&typeof value==='object'){
  if(value.$workshop){
   const kind=value.$workshop;
   if(kind==='Date')return new Date(value.value);
   if(kind==='Map')return new Map(await unpack(value.value,base));
   if(kind==='Set')return new Set(await unpack(value.value,base));
   if(kind!=='Blob'&&kind!=='ArrayBuffer'&&kind!=='DataView'&&!TYPES[kind])throw Error('Unsupported project binary type.');
   if(!/^files\/[a-f0-9]{64}\.bin$/.test(value.file)||value.sha256!==value.file.slice(6,-4))throw Error('Invalid binary reference.');
   const response=await fetch(base+value.file);if(!response.ok)throw Error('A shared model file is missing.');
   const blob=await response.blob();if(blob.size!==value.bytes)throw Error('A shared model file is incomplete.');
   const bytes=await blob.arrayBuffer(),hash=[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(v=>v.toString(16).padStart(2,'0')).join('');
   if(hash!==value.sha256)throw Error('A shared model failed its checksum.');
   if(kind==='Blob')return blob.slice(0,blob.size,value.type||'');
   if(kind==='ArrayBuffer')return bytes;
   if(kind==='DataView')return new DataView(bytes);
   return new TYPES[kind](bytes);
  }
  const out={};
  for(const [k,v]of Object.entries(value)){if(['__proto__','constructor','prototype'].includes(k))throw Error('Invalid project key.');out[k]=await unpack(v,base);}
  return out;
 }
 return value;
}
function validate(snapshot){
 if(snapshot?.format!==FORMAT||!Array.isArray(snapshot.databases))throw Error('Not a shared workshop snapshot.');
 const seen=new Set();
 for(const db of snapshot.databases){
  if(!Object.hasOwn(SCHEMA,db.name)||seen.has(db.name)||db.version!==1||!Array.isArray(db.stores))throw Error('Invalid project database.');
  seen.add(db.name);const stores=new Set();
  for(const s of db.stores){
   if(!Object.hasOwn(SCHEMA[db.name],s.name)||stores.has(s.name)||s.keyPath!==SCHEMA[db.name][s.name]||!Array.isArray(s.rows))throw Error('Invalid project store.');
   stores.add(s.name);
  }
 }
 if(!snapshot.localStorage||typeof snapshot.localStorage!=='object')throw Error('Invalid workshop preferences.');
 for(const [key,value]of Object.entries(snapshot.localStorage))if(!LS.includes(key)||typeof value!=='string')throw Error('Unrecognized workshop preference.');
}
async function capture(params){
 const port=Number(params.get('capture')),key=params.get('key');
 if(!Number.isInteger(port)||port<1024||port>65535||!key)throw Error('Invalid local export session.');
 const endpoint='http://127.0.0.1:'+port;
 async function send(path,body){
  const response=await fetch(endpoint+path,{method:'POST',headers:{'X-Workshop-Key':key},body});
  const result=await response.json();if(!response.ok)throw Error(result.error||'Local export failed.');return result;
 }
 const known=new Set((await indexedDB.databases()).map(d=>d.name));
 const snapshot={format:FORMAT,createdAt:new Date().toISOString(),databases:[],localStorage:{}};
 let count=0;
 for(const [name,stores]of Object.entries(SCHEMA)){
  if(!known.has(name))continue;
  const db=await open(name),entry={name,version:db.version,stores:[]};
  try{
   for(const store of Object.keys(stores)){
    if(!db.objectStoreNames.contains(store))continue;
    const s={name:store,keyPath:db.transaction(store).objectStore(store).keyPath,rows:[]};
    for(const key of await keys(db,store)){
     STATUS.textContent='Copying saved workshop: '+name+' / '+(++count);
     const value=await read(db,store,key);if(value===undefined)continue;
     s.rows.push({key,value:await pack(value,blob=>send('/blob',blob))});
    }
    entry.stores.push(s);
   }
  }finally{db.close();}
  snapshot.databases.push(entry);
 }
 for(const key of LS){const value=localStorage.getItem(key);if(value!==null)snapshot.localStorage[key]=value;}
 validate(snapshot);STATUS.textContent='Checking and packing the shared workshop...';
 const result=await send('/manifest',new Blob([JSON.stringify(snapshot)],{type:'application/json'}));
 STATUS.textContent='Shared workshop export complete. Your original browser data has been preserved.';
 REPORT.textContent=JSON.stringify({records:count,databases:snapshot.databases.map(d=>({name:d.name,stores:d.stores.map(s=>({name:s.name,rows:s.rows.length}))})),archive:result.archive},null,2);
}
async function restore(){
 BUTTON.disabled=true;
 try{
  const base='/assets/shared-workshop/',response=await fetch(base+'manifest.json');
  if(!response.ok)throw Error('Download the shared workshop assets first.');
  const snapshot=await response.json();validate(snapshot);let added=0,kept=0;
  for(const entry of snapshot.databases){
   const db=await open(entry.name);
   try{
    for(const store of entry.stores){
     for(const row of store.rows){
      // Preserve every existing record, including a teacher's in-progress layout.
      if(await read(db,store.name,row.key)!==undefined){kept++;continue;}
      STATUS.textContent='Loading shared workshop: '+(added+kept+1)+' records...';
      const value=await unpack(row.value,base);
      const keyPath=SCHEMA[entry.name][store.name];
      if(keyPath&&indexedDB.cmp(value[keyPath],row.key)!==0)throw Error('A shared record has an invalid key.');
      await write(db,store.name,value,row.key);added++;
     }
    }
   }finally{db.close();}
  }
  for(const [key,value]of Object.entries(snapshot.localStorage))if(localStorage.getItem(key)===null)localStorage.setItem(key,value);
  STATUS.textContent='Ready. Added '+added+' records; preserved '+kept+' existing records. Open the website below.';
  REPORT.textContent='Shared on '+snapshot.createdAt+'. Models, saved views, collages, spaces and layout remain local to this browser. Code updates do not overwrite them.';
 }catch(e){STATUS.textContent=e.message;BUTTON.disabled=false;throw e;}
}
BUTTON.addEventListener('click',()=>restore().catch(console.error));
const params=new URLSearchParams(location.hash.slice(1));
if(params.has('capture')){BUTTON.hidden=true;capture(params).catch(e=>{STATUS.textContent='Export failed: '+e.message;console.error(e);});}
else STATUS.textContent='Load the shared models and project into this browser once. Existing records and layouts are kept.';
window.WorkshopTransfer={pack,unpack,validate,SCHEMA,restore};
})();
