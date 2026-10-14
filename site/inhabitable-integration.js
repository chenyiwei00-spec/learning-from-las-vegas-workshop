/* A real-GLB adapter: the existing exhibition and the sculptural building keep separate state. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),surface=$('walk-surface'),panel=$('inhabitable-panel'),picker=$('inhabitable-picker'),frame=$('inhabitable-frame'),status=$('inhabitable-status');
const protocol=1,maxBytes=100*1024*1024;
let ready=false,loading=null,active=false,busy=false,request=null,lastResult=null,returnFocus=null;
function tell(message,error=false){status.textContent=message;status.dataset.error=String(error);}
function lock(value){busy=value;for(const id of ['inhabitable-change','inhabitable-import','inhabitable-refresh'])$(id).disabled=value;panel.setAttribute('aria-busy',String(value));}
function describe(data){
 tell(data.viable?`${data.name} · 已生成独立雕塑建筑 · ${data.metrics.floorArea.toFixed(1)} m² 可行走内部 · 净高 ≥${data.metrics.minimumHeadroom.toFixed(2)} m。下方可查看剖切、调整参数或进入第一人称。`:'此参数下无法容纳连续内部空间：'+data.reason,!data.viable);
}
function show(){
 if(!active)returnFocus=document.activeElement;
 active=true;panel.hidden=false;surface.dataset.inhabitable='true';window.ExhibitionWalk?.suspendNavigation();
 surface.scrollIntoView({block:'start',behavior:'smooth'});
}
function close(){
 if(busy){tell('正在处理模型，请完成后返回展厅。');return;}
 frame.contentWindow?.postMessage({type:'bw:inhabitable:suspend',protocol},location.origin);
 active=false;panel.hidden=true;surface.dataset.inhabitable='false';
 (returnFocus?.isConnected?returnFocus:$('walk-inhabitable')).focus({preventScroll:true});
 window.dispatchEvent(new Event('resize'));
}
function childReady(){
 if(ready)return Promise.resolve();
 if(loading)return loading;
 loading=new Promise((resolve,reject)=>{
  const timer=setTimeout(()=>{loading=null;ready=false;frame.removeAttribute('src');reject(Error('雕塑建筑模块启动超时，请重试。'));},45000);
  frame._resolveReady=()=>{clearTimeout(timer);resolve();};
  frame.src='inhabitable-sculpture/index.html';
 });return loading;
}
function sendBlob(blob,name){
 return new Promise(async(resolve,reject)=>{
  try{
   if(!(blob instanceof Blob)||blob.size<20||blob.size>maxBytes)throw Error('请选择 100 MB 以内的完整 GLB 模型。');
   if(busy)throw Error('请等待当前模型处理完成。');
   lock(true);show();picker.hidden=true;frame.hidden=false;tell('正在加载雕塑建筑模块…');
   await childReady();
   const buffer=await blob.arrayBuffer(),requestId=crypto.randomUUID();
   const timer=setTimeout(()=>{
    // Keep the request locked until the worker actually replies; do not run competing jobs.
    tell('模型仍在计算，复杂模型可能需要更长时间。可在下方查看处理进度。');
   },90000);
   request={id:requestId,resolve,reject,timer};
   tell('正在传入 '+name+'：使用原始 GLB 几何，生成独立的可进入雕塑。');
   frame.contentWindow.postMessage({type:'bw:inhabitable:import',protocol,requestId,name:String(name||'Sculpture').slice(0,230),buffer},location.origin,[buffer]);
   frame.focus();
  }catch(error){lock(false);tell(error.message,true);reject(error);}
 });
}
window.addEventListener('message',event=>{
 if(event.origin!==location.origin||event.source!==frame.contentWindow||event.data?.protocol!==protocol)return;
 const data=event.data;
 if(data.type==='bw:inhabitable:ready'){ready=true;frame._resolveReady?.();return;}
 if(data.type==='bw:inhabitable:busy'&&!request){lock(!!data.busy);if(data.busy)tell('正在按新参数重建雕塑建筑…');return;}
 if(data.type==='bw:inhabitable:update'&&!request){lastResult=data;describe(data);return;}
 if(!request||data.requestId!==request.id)return;
 if(data.type==='bw:inhabitable:progress'){tell(data.message);return;}
 if(!['bw:inhabitable:result','bw:inhabitable:error'].includes(data.type))return;
 const pending=request;request=null;clearTimeout(pending.timer);lock(false);
 if(data.type==='bw:inhabitable:error'){tell(data.message,true);pending.reject(Error(data.message));return;}
 lastResult=data;
 describe(data);
 pending.resolve(data);
});
async function choices(){
 show();picker.hidden=false;frame.hidden=true;tell('选择一个真实模型。这里不会启动新的 AI 建模，也不会改动原拼贴或展厅摆放。');
 $('inhabitable-models').replaceChildren();
 const entries=await window.ExhibitionBrowse?.entries()||[];
 for(const entry of entries){if(entry.glb instanceof Blob)addChoice(entry.title||'Saved sculpture','模型库 / 已摆放模型',()=>sendBlob(entry.glb,entry.title||'Sculpture'));}
 try{
  const response=await fetch('/api/inhabitable/models');
  if(response.ok){const data=await response.json();for(const model of data.models||[])addChoice(model.name,'本机 GLB / 只读载入',async()=>{
   const response=await fetch(model.url);if(!response.ok)throw Error('本机模型读取失败。');
   return sendBlob(await response.blob(),model.name);
  });}
 }catch{/* A static deployment can still use saved models and file imports. */}
 if(!$('inhabitable-models').children.length){const p=document.createElement('p');p.textContent='此浏览器还没有可用模型。请导入 GLB，或先在原界面的模型库打开一个模型。';$('inhabitable-models').append(p);}
 $('inhabitable-import').focus({preventScroll:true});
}
function addChoice(title,detail,action){
 const b=document.createElement('button'),strong=document.createElement('strong'),small=document.createElement('small');
 strong.textContent=title;small.textContent=detail;b.append(strong,small);
 b.onclick=()=>{if(busy)return;action().catch(error=>tell(error.message,true));};$('inhabitable-models').append(b);
}
async function selected(){
 const placement=window.ExhibitionWalk?.placement;
 if(placement){await placement.ready;const s=placement.state(),record=s.models.find(m=>m.id===s.selected),entry=record&&placement.browseEntries().find(e=>e.id==='exhibit:'+record.modelId);if(entry?.glb instanceof Blob)return {blob:entry.glb,name:entry.title};}
 if(window.ExhibitionTransfer?.state().available)return window.ExhibitionTransfer.capture();
 return null;
}
async function open(){
 if(busy){show();return;}
 try{const model=await selected();if(model)await sendBlob(model.blob,model.name);else await choices();}
 catch(error){show();tell(error.message,true);}
}
$('walk-inhabitable').onclick=open;
$('exhibition-inhabit-model').onclick=open;
$('workspace-inhabit-model').onclick=async()=>{
 try{if(!window.ExhibitionTransfer?.state().available)throw Error('请先打开一个已完成的模型，或通过“雕塑建筑”导入 GLB。');const model=await window.ExhibitionTransfer.capture();await sendBlob(model.blob,model.name);}
 catch(error){show();tell(error.message,true);}
};
$('inhabitable-back').onclick=close;
$('inhabitable-change').onclick=()=>choices().catch(error=>tell(error.message,true));
$('inhabitable-refresh').onclick=()=>choices().catch(error=>tell(error.message,true));
$('inhabitable-import').onclick=()=>$('inhabitable-file').click();
$('inhabitable-file').onchange=async event=>{
 const file=event.target.files[0];event.target.value='';if(!file)return;
 try{if(!/\.glb$/i.test(file.name))throw Error('请选择 .glb 文件。');await sendBlob(file,file.name);}catch(error){tell(error.message,true);}
};
panel.addEventListener('pointerdown',()=>window.ExhibitionWalk?.suspendNavigation(),true);
panel.addEventListener('wheel',event=>event.stopPropagation(),{passive:true});
window.ExhibitionInhabitable=Object.freeze({open,close,choose:choices,importGLB:sendBlob,state:()=>({active,busy,ready,lastResult})});
})();
