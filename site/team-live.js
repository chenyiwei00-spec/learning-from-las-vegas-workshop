/* Defer live updates while the camera editor or any generation/export is active. */
(()=>{
 let current=null,pending=null;
 const outputBusy=w=>{const s=w?.ExhibitionOutput?.state();return !!(s?.busy||s?.playing||s?.protectReload);};
 const frameWindows=()=>[...document.querySelectorAll('.workshop-frame')].map(f=>f.contentWindow);
 const busy=w=>!!w?.ExhibitionAgent?.state().busy||!!w?.ExhibitionAgentDrafts?.state().busy||!!w?.ExhibitionStudio?.generationState?.().busy||!!w?.ExhibitionWalk?.space?.state().busy||outputBusy(w);
 const save=w=>{try{w?.ExhibitionOutput?.saveDraft?.();}catch{}};
 setInterval(async()=>{
  if(document.visibilityState!=='visible')return;
  try{
   const r=await fetch('/__team/version',{cache:'no-store'});if(!r.ok)return;
   const v=(await r.json()).version;if(current&&current!==v)pending=v;
   const children=frameWindows();
   if(pending&&!busy(window)&&!children.some(busy)){save(window);children.forEach(save);location.reload();}
   if(!current)current=v;
  }catch{}
 },3000);
})();
