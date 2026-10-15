/* Immutable generation jobs never borrow the interactive saved-model viewer. */
(()=>{
'use strict';
function create(options){
 let busy=false,job=null,result=null,error='',message='',preview=null;
 const signal=()=>{options.onChange?.();window.dispatchEvent(new Event('exhibition-generation-change'));};
 async function json(url,init){
  const response=await fetch(url,init);let value;try{value=await response.json();}catch{throw Error('The local 3D service did not return a valid response.');}
  if(!response.ok){const e=Error(value.error||'Local 3D request failed.');e.status=response.status;e.activeJob=value.activeJob;throw e;}return value;
 }
 async function run(){
  if(busy)throw Error('A model is already generating.');
  if(!options.ready())throw Error('The local 3D generator is unavailable.');
  const snapshot=structuredClone(options.document());if(!snapshot.layers.length)return;
  // Capture pixels before the first await. Browsing another saved model cannot change the input.
  const image=Sculpture3D.sourceImage(snapshot,options.drawModel),view=options.viewRevision();
  busy=true;job=null;result=null;error='';preview=image;message='Preparing your 3D model';signal();
  try{
   const fingerprint=await Sculpture3D.fingerprint(snapshot);
   const request={method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({image,composition:snapshot,fingerprint})};
   // A completed output can precede CUDA/process teardown. Queue this exact input instead of dropping it.
   const queuedAt=Date.now();let submitAttempts=0;
   for(;;){try{job=await json('/api/sculpture3d/jobs',request);break;}catch(e){if(e.status!==409||Date.now()-queuedAt>900000)throw e;message='Waiting for the previous model to release the generator';signal();await new Promise(r=>setTimeout(r,Math.min(4000,1000+submitAttempts++*250)));}}
   signal();
   let activeWait=0,lastPoll=Date.now();
   while(!['complete','failed'].includes(job.status)){
    const now=Date.now(),gap=now-lastPoll;lastPoll=now;if(gap<30000)activeWait+=gap;
    if(activeWait>600000)throw Error('Generation is taking longer than expected. Reopen this local page to check the job.');
    message=job.message||'Generating your 3D model';signal();
    await new Promise(r=>setTimeout(r,1500));job=await json('/api/sculpture3d/jobs/'+job.id);
   }
   if(job.status==='failed')throw Error(job.message||'The local generator could not create a model.');
   if(!/^[a-f0-9]{64}$/.test(job.id)||job.modelUrl!=='assets/generated-sculptures/'+job.id+'/sculpture.glb')throw Error('Invalid local mesh path.');
   const linkedMedia=options.associateMedia?await options.associateMedia(snapshot):null;
   const record={id:job.id,fingerprint,modelUrl:job.modelUrl,objUrl:job.objUrl,reportUrl:job.reportUrl,triangles:job.triangles,vertices:job.vertices,generator:'TripoSR',seconds:job.seconds,target:snapshot.modelTarget||'sculpture',...(linkedMedia?{linkedMedia}:{})};
   result={record,composition:snapshot};message='3D model complete';options.onComplete?.(record);
   // Never replace a model the user has opened, rotated, zoomed, or cleared during this job.
   if(options.viewRevision()===view&&!options.browsing()){
    try{await options.present(record,view);}catch{options.message('The model is complete and can be saved. Its preview could not load.');}
   }
   return structuredClone(result);
  }catch(e){error=e.message;message=error;options.message(error);throw e;}
  finally{busy=false;signal();}
 }
 return Object.freeze({run,result:()=>result?structuredClone(result):null,state:()=>({busy,jobId:job?.id||null,error,message,preview})});
}
window.ExhibitionGeneration=Object.freeze({create});
})();
