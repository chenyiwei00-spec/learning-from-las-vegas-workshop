(() => {
'use strict';
let library,splatLibrary,scanSession=null,active=0,blobUrl=null,viewer=null,payloadScript=null;
const host=()=>document.getElementById('model-viewer-host');
function loadLibrary(){
 if(customElements.get('model-viewer'))return Promise.resolve();
 return library ||= new Promise((resolve,reject)=>{
 const s=document.createElement('script');s.src='vendor/model-viewer.js';
 s.onload=()=>customElements.whenDefined('model-viewer').then(resolve);s.onerror=()=>{s.remove();library=null;reject(new Error('Viewer could not load'));};document.head.append(s);
 });
}
function loadSplatLibrary(){
 if(window.ArchiveSplatViewer)return Promise.resolve();
 return splatLibrary ||= new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='vendor/splat-viewer-va-r2.js';s.onload=resolve;s.onerror=()=>{s.remove();splatLibrary=null;reject(new Error('Scan viewer could not load'));};document.head.append(s);});
}
function dispose(){
 if(scanSession){scanSession.dispose();scanSession=null;}
 active++;if(payloadScript){payloadScript.remove();payloadScript=null;}
 if(viewer){viewer.src='';viewer.remove();viewer=null;}
 if(blobUrl){URL.revokeObjectURL(blobUrl);blobUrl=null;}
 host()?.replaceChildren();delete window.ARCHIVE_MODEL_PAYLOAD;
}
async function open(item){
 dispose();const token=active,h=host();h.textContent='Loading 3D preview...';
 try{
 if(item.modelKind==='gaussian_splat'){
  await loadSplatLibrary();if(token!==active)return;
  if(location.protocol==='file:'){h.textContent='Open the public website to explore this 3D scan. The original PLY remains available to download.';document.getElementById('model-status').textContent='Interactive scans require HTTP or HTTPS.';return;}
  scanSession=window.ArchiveSplatViewer.mount(h,item,message=>{if(token===active)document.getElementById('model-status').textContent=message;});return;
 }
 await loadLibrary();if(token!==active)return;
 let src=item.modelPreview;
 if(location.protocol==='file:'){
  src=await new Promise((resolve,reject)=>{
   const s=document.createElement('script');payloadScript=s;s.src=item.modelPayload;
   s.onload=()=>{
    if(token!==active){s.remove();resolve(null);return;}
    const p=window.ARCHIVE_MODEL_PAYLOAD;delete window.ARCHIVE_MODEL_PAYLOAD;
    s.remove();payloadScript=null;
    if(p?.id!==item.id){reject(new Error('Incorrect model payload'));return;}
    const binary=atob(p.base64),bytes=new Uint8Array(binary.length);
    for(let n=0;n<binary.length;n++)bytes[n]=binary.charCodeAt(n);
    blobUrl=URL.createObjectURL(new Blob([bytes],{type:'model/gltf-binary'}));resolve(blobUrl);
   };s.onerror=()=>{s.remove();payloadScript=null;reject(new Error('Model file could not load'));};
   document.head.append(s);
  });
 }
 if(token!==active||!src)return;
 viewer=document.createElement('model-viewer');
 viewer.setAttribute('alt',item.title);viewer.setAttribute('camera-controls','');
 viewer.setAttribute('touch-action','pan-y');viewer.setAttribute('shadow-intensity','0.5');
 viewer.setAttribute('exposure',item.modelKind==='mesh_scan'?'0.6':'1');
 if(item.modelKind==='mesh_scan')viewer.setAttribute('camera-orbit','35deg 55deg auto');viewer.setAttribute('loading','eager');
 const Constructor=customElements.get('model-viewer');Constructor.modelCacheSize=0;
 viewer.addEventListener('load',()=>{if(token===active)document.getElementById('model-status').textContent='Drag to rotate. Scroll or pinch to zoom.';});
 viewer.addEventListener('error',()=>{if(token===active){h.textContent='Preview unavailable. Download the original or GLB file below.';document.getElementById('model-status').textContent='';}});
 viewer.src=src;h.replaceChildren(viewer);
 }catch(error){if(token===active){h.textContent='Preview unavailable. Download the original or GLB file below.';document.getElementById('model-status').textContent='';}}
}
window.ArchiveModels={open,dispose};
})();