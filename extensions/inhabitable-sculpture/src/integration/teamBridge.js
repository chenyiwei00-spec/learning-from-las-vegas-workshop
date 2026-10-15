import {PROTOCOL,trustedMessage,validateImport} from './protocol.js';

/** Real GLB handoff, independent of the team's Three.js version and saved-state format. */
export function installTeamBridge({importFiles,spatial,engine}){
 if(window.parent===window)return;
 document.body.dataset.embedded='true';
 document.querySelector('.volume-parameters').open=false;
 let running=false;
 const completed=new Set();
 const send=data=>parent.postMessage({...data,protocol:PROTOCOL},location.origin);
 window.addEventListener('inhabitable:busy',event=>send({type:'bw:inhabitable:busy',busy:event.detail}));
 window.addEventListener('inhabitable:generated',()=>{
  const v=spatial.volume;
  send({type:'bw:inhabitable:update',modelId:v.modelId,name:v.name,viable:v.viable,reason:v.reason,metrics:v.metrics});
 });
 window.addEventListener('message',async event=>{
  if(!trustedMessage(event,parent,location.origin))return;
  const data=event.data;
  if(data.type==='bw:inhabitable:suspend'){
   spatial.setView('exterior');engine.viewer.setAutoRotate(false);
   if(document.pointerLockElement)document.exitPointerLock();
   return;
  }
  if(data.type!=='bw:inhabitable:import')return;
  let ownsRun=false;
  try{
   validateImport(data);
   if(completed.has(data.requestId))throw Error('This request was already processed.');
   if(running||spatial.busy)throw Error('Please wait for the current generation.');
   running=true;ownsRun=true;completed.add(data.requestId);
   if(completed.size>100)completed.delete(completed.values().next().value);
   const entries=await importFiles([new File([data.buffer],data.name.replace(/\.glb$/i,'')+'.glb',{type:'model/gltf-binary'})]);
   if(!entries.length)throw Error(document.getElementById('toast').textContent||'The GLB could not be imported.');
   const entry=entries.at(-1);
   send({type:'bw:inhabitable:progress',requestId:data.requestId,message:'已收到真实模型，正在体素化并掏空内部…'});
   const ok=await spatial.generate(entry.id);
   if(!ok)throw Error(document.getElementById('generation-status').textContent||'Generation failed.');
   const v=spatial.volume;
   send({type:'bw:inhabitable:result',requestId:data.requestId,modelId:entry.id,name:entry.name,viable:v.viable,reason:v.reason,metrics:v.metrics});
  }catch(error){send({type:'bw:inhabitable:error',requestId:data.requestId,message:error.message});}
  finally{if(ownsRun)running=false;}
 });
 send({type:'bw:inhabitable:ready'});
}
