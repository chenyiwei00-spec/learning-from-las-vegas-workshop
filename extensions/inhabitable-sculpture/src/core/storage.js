export function modelStorage(mode,value){
 return new Promise((resolve,reject)=>{
  const request=indexedDB.open('spatial-generator-prototype-v1',1);
  request.onupgradeneeded=()=>request.result.createObjectStore('models',{keyPath:'id'});
  request.onerror=()=>reject(request.error);
  request.onsuccess=()=>{const db=request.result,tx=db.transaction('models',mode),store=tx.objectStore('models'),op=mode==='readonly'?store.getAll():store.put(value);let result;op.onsuccess=()=>result=op.result;tx.oncomplete=()=>{db.close();resolve(result);};tx.onabort=tx.onerror=()=>{db.close();reject(tx.error||Error('Browser storage is unavailable.'));};};
 });
}
