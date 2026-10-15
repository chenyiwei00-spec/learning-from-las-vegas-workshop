(()=>{
'use strict';
let busy=false;const $=id=>document.getElementById(id);
async function recover(){
 if(busy)return;busy=true;const button=$('exhibition-recover-models');button.disabled=true;let count=0;
 try{
  const response=await fetch('/api/sculpture3d/completed',{cache:'no-store'});if(!response.ok)throw Error('Restart the local website service to recover completed models.');
  const {jobs}=await response.json(),existing=new Set((await SavedSculptures.list()).map(r=>r.record.id)),deleted=new Set(JSON.parse(localStorage.getItem('learning-vegas-deleted-jobs')||'[]'));
  for(const job of jobs||[]){
   if(existing.has(job.id)||deleted.has(job.id)||Date.now()/1000-(job.completedAt||job.updatedAt)>86400)continue;
   const record={id:job.id,fingerprint:job.fingerprint,modelUrl:job.modelUrl,objUrl:job.objUrl,reportUrl:job.reportUrl,target:job.target||'sculpture',triangles:job.triangles,vertices:job.vertices,generator:'TripoSR'};
   await SavedSculptures.save(record,null,{title:job.title||'Recovered model',group:'Recovered models'});existing.add(job.id);count++;$('exhibition-agent-status').textContent=count+' completed models recovered';
  }
  const drafts=await ExhibitionAgentDrafts.list();for(const row of drafts)if(row.completedRecord&&!existing.has(row.completedRecord.id)&&!deleted.has(row.completedRecord.id)){const saved=await SavedSculptures.save(row.completedRecord,null,{title:row.title,group:'Recovered models'});await ExhibitionAgentDrafts.attachModel(row.id,saved.entry.id);count++;}
  await ExhibitionLibrary.render();$('exhibition-agent-status').textContent=count?count+' models recovered':'All completed models are already in the library.';
 }catch(e){$('exhibition-agent-status').textContent=e.message;}finally{busy=false;button.disabled=false;}
}
$('exhibition-recover-models').onclick=recover;
$('exhibition-retry-models').onclick=()=>ExhibitionAgentDrafts.retryUnfinished();
window.ExhibitionRecovery=Object.freeze({recover,state:()=>({busy})});
})();
