(()=>{'use strict';
const KEY='learning-vegas-camera-path-v1',BACKUP='learning-vegas-camera-path-backup-v1';
const valid=keys=>Array.isArray(keys)&&keys.length>=2&&keys.length<2000&&keys.every(k=>Number.isFinite(k.time)&&k.pose&&['x','y','z','yaw','pitch'].every(n=>Number.isFinite(k.pose[n])));
const params=new URLSearchParams(location.search);
const read=key=>{try{return JSON.parse(localStorage.getItem(key)||'null')}catch{return null}};
const download=(doc,name)=>{const url=URL.createObjectURL(new Blob([JSON.stringify(doc,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000)};
function openEditor(report){
 document.body.classList.add('editor');
 const frame=document.createElement('iframe');frame.title='Restored exhibition camera path';frame.allow='fullscreen';frame.allowFullscreen=true;
 frame.onload=()=>{
  let attempts=0;const timer=setInterval(()=>{
   try{
    const w=frame.contentWindow;if(!w.ExhibitionOutput||!w.ExhibitionWalk?.state().ready){if(++attempts>300)clearInterval(timer);return;}
    clearInterval(timer);w.ExhibitionOutput.openCameraEditor();
    const keys=w.ExhibitionOutput.state().keyframes;
    report.editor={opened:w.ExhibitionOutput.state().opened,views:keys.length,duration:keys.at(-1)?.time||0};
    document.getElementById('status').textContent='Camera path ready / '+keys.length+' views / '+report.editor.duration+' seconds. Your original tab remains open.';
    if(params.has('report'))download(report,'learning-vegas-path-recovery-report.json');
   }catch(error){clearInterval(timer);document.getElementById('status').textContent=error.message;}
  },100);
 };
 frame.src='../exhibition.html';document.body.append(frame);
}
async function outputs(){
 const dbs=await indexedDB.databases();if(!dbs.some(d=>d.name==='learning-vegas-render-output-v1'))return [];
 const db=await new Promise((resolve,reject)=>{const r=indexedDB.open('learning-vegas-render-output-v1');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});
 try{return await new Promise((resolve,reject)=>{const tx=db.transaction('outputs'),r=tx.objectStore('outputs').openCursor(),rows=[];
  r.onsuccess=()=>{const c=r.result;if(c){const x=c.value;if(valid(x.keys))rows.push({keys:x.keys,at:x.createdAt||0,title:x.title||'Rendered film',source:'rendered-film'});c.continue();}};
  tx.oncomplete=()=>resolve(rows);tx.onerror=tx.onabort=()=>reject(tx.error);
 });}finally{db.close();}
}
(async()=>{
 const candidates=[],primary=read(KEY),backup=read(BACKUP);
 if(valid(primary))candidates.push({keys:primary,source:'current-camera-path',title:'Current camera path',at:Date.now()});
 if(valid(backup?.keys))candidates.push({...backup,source:'camera-path-backup'});
 candidates.push(...await outputs());candidates.sort((a,b)=>b.at-a.at);
 const winner=candidates[0],report={format:'learning-vegas-camera-path-recovery-report',version:1,at:new Date().toISOString(),origin:location.origin,status:winner?'found':'not-found',candidates:candidates.map(c=>({source:c.source,title:c.title,views:c.keys.length,at:c.at}))};
 if(winner){
  // Preserve any path edited in the other tab while the recovery scan was running.
  const latest=read(KEY);if(valid(latest)&&JSON.stringify(latest)!==JSON.stringify(primary)){winner.keys=latest;winner.source='current-camera-path';}
  report.keys=winner.keys;report.source=winner.source;report.views=winner.keys.length;
  localStorage.setItem(BACKUP,JSON.stringify({keys:winner.keys,at:Date.now(),title:winner.title,source:winner.source}));
  if(!valid(latest))localStorage.setItem(KEY,JSON.stringify(winner.keys));
  document.getElementById('status').textContent='Found '+report.views+' camera views. '+(winner.source==='current-camera-path'?'They are still saved in this browser.':'Recovered them from '+winner.title+'.');
  const editor=document.getElementById('open-editor');editor.hidden=false;editor.onclick=()=>openEditor(report);
  const button=document.getElementById('download');button.hidden=false;button.onclick=()=>download({format:'learning-vegas-camera-path',version:1,keys:report.keys},'learning-vegas-camera-path-recovered.json');
 }else document.getElementById('status').textContent='No saved camera path was found in this Chrome profile. The original route cannot be reconstructed from a picture alone.';
 document.getElementById('report').textContent=JSON.stringify({...report,keys:undefined},null,2);
 if(winner&&params.has('editor'))openEditor(report);else if(params.has('report'))download(report,'learning-vegas-path-recovery-report.json');
})().catch(error=>{document.getElementById('status').textContent='Recovery could not finish: '+error.message;download({format:'learning-vegas-camera-path-recovery-report',status:'error',error:error.message},'learning-vegas-path-recovery-report.json');});
})();