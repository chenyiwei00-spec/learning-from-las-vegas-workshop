/* Autonomous archive workflow: metadata/shape planning, editable cutouts, existing AI mesh service. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),runButton=$('exhibition-agent-run'),status=$('exhibition-agent-status');
let stopRequested=false,completed=0,collagesCompleted=0,total=0,failures=[];
const DIRECTION_KEY='learning-vegas-next-model-target-v1';let nextTarget=localStorage.getItem(DIRECTION_KEY)==='sculpture'?'sculpture':'city';
let busy=false,phase='idle',plan=null,previous=null,error='',lastTheme=-1;
const recent=new Set(),themes=[
 {id:'borrowed-monuments',title:'Borrowed monuments',terms:/eiffel|paris|egypt|pyramid|sphinx|liberty|venetian|venice|roman|caesars|colosseum|luxor|new york/i},
 {id:'roadside-symbols',title:'Roadside symbols',terms:/coca.?cola|cowboy|bottle|welcome|stardust|dunes|sahara|nugget|neon|sign|horse|brand|advertis/i},
 {id:'invented-skyline',title:'An invented skyline',terms:/hotel|tower|skyline|new york|luxor|paris|venetian|bellagio|casino|building/i}
];
const random=()=>crypto.getRandomValues(new Uint32Array(1))[0]/4294967296;
function setPhase(value,text){phase=value;status.textContent=text;render();}
function render(){
 const studio=window.ExhibitionStudio,state=studio?.state().model;
 runButton.disabled=!studio||!state?.ready||busy||!!window.ExhibitionAgentDrafts?.state().busy||!!state?.busy||Number($('exhibition-agent-count').value)===0;$('exhibition-agent-count').disabled=busy||!!window.ExhibitionAgentDrafts?.state().busy;$('exhibition-agent-stop').hidden=!busy;runButton.textContent=busy?'...':'+';runButton.title=status.textContent||'Compose and generate models';$('exhibition-agent-keyword').textContent=phase==='error'?'ERROR':phase==='generating'?'BUILD':phase==='matching'?'MATCH':phase==='selecting'?'SELECT':phase==='ready'?'READY':phase==='collage-ready'?'EDIT':'AGENT';runButton.setAttribute('aria-busy',String(busy));
 $('exhibition-agent-edit').hidden=!plan;$('exhibition-agent-edit').disabled=busy||!!window.ExhibitionAgentDrafts?.state().busy;
 $('exhibition-agent-previous').hidden=!previous;$('exhibition-agent-previous').disabled=busy||!!window.ExhibitionAgentDrafts?.state().busy;
}
function lock(value){
 document.body.dataset.archiveAgentBusy=String(value);window.dispatchEvent(new Event('exhibition-agent-change'));
 for(const id of ['workspace-collage-pane'])$(id).inert=value;
 // Generation remains explicit; navigation through the room still works while it runs.
}
function eligible(o,photo){
 if(!photo||!o.url||!Array.isArray(o.bbox)||!['buildings','signs'].includes(o.kind))return false;
 const [x0,y0,x1,y1]=o.bbox,w=x1-x0,h=y1-y0;
 return w>=65&&h>=65&&(o.pixels||w*h*.4)>=2400&&x0>=0&&y0>=0&&x1<=photo.width+1&&y1<=photo.height+1;
}
async function makePlan(excluded=new Set(),surface=ExhibitionStudio.state().sourceSurface){
 await ExhibitionPicker.load();if(surface==='sculpture')return makeSculpturePlan(excluded);const items=new Map(ARCHIVE_DATA.items.filter(i=>i.type==='image'&&i.archiveKey==='las-vegas').map(i=>[i.id,i]));
 const candidates=ExhibitionPicker.objects().filter(o=>items.has(o.sourceId)&&!excluded.has(o.key)&&eligible(o,ExhibitionPicker.photo(o.sourceId))).map(o=>{
  const item=items.get(o.sourceId),w=o.bbox[2]-o.bbox[0],h=o.bbox[3]-o.bbox[1],fill=(o.pixels||w*h*.4)/(w*h);
  return{o,item,ratio:w/h,quality:Math.min(3,Math.log2(Math.max(1,(o.pixels||2400)/2400)))+(o.primary?1.1:0)+Math.min(1,fill*2),text:[o.name,item.title,item.description,...(item.tags||[])].join(' ')};
 });
 if(candidates.length<10)throw Error('Not enough usable Las Vegas cutouts. Install the team media pack first.');
 const available=themes.map((t,i)=>({t,i,count:candidates.filter(c=>t.terms.test(c.text)).length})).filter(x=>x.count>=10&&x.i!==lastTheme);
 const chosen=available[Math.floor(random()*available.length)]||{t:themes[0],i:0},theme=chosen.t;
 const selected=[],usedPhotos=new Set(),usedNames=new Set();
 const slots=denseSlots(5+Math.floor(random()*6));

 for(const slot of slots){
  const unused=candidates.filter(c=>!selected.some(p=>p.key===c.o.key)&&!usedPhotos.has(c.o.sourceId)&&!usedNames.has(c.o.name.toLowerCase()));
  const shaped=unused.filter(c=>slot.role==='base'?c.ratio>=.9:slot.role==='crown'?c.ratio>=.65&&c.ratio<=1.65:slot.role==='sign'?c.o.kind==='signs'&&c.ratio>=1.1:c.ratio>=.65&&c.ratio<=1.55);
  const pool=shaped.length>=4?shaped:unused;
  const ranked=pool.map(c=>{
   let shape=slot.role==='base'?(c.o.kind==='buildings'?4:2)+Math.max(0,2-Math.abs(c.ratio-1.7)):slot.role==='crown'?Math.max(0,5-Math.abs(c.ratio-1)*3):slot.role==='sign'?(c.o.kind==='signs'?5:0)+Math.max(0,2-Math.abs(c.ratio-2)):Math.max(0,3-Math.abs(c.ratio-1)*2)+(c.o.kind==='signs'?1:0);
   const named=/tower|pyramid|sphinx|liberty|balloon|bottle|cowboy|welcome|stardust|dunes|sahara|nugget|coca|sign/i.test(c.o.name)?2:0;
   const generic=/depicted signboards? \d|buildings? \d|signboards? \d|building mask|signboard mask/i.test(c.o.name)?3:0;
   return {c,score:c.quality+shape+(theme.terms.test(c.text)?5:0)+named-generic-(recent.has(c.o.key)?8:0)+random()*3};
  }).sort((a,b)=>b.score-a.score);
  if(!ranked.length)continue;const picked=await ExhibitionColourPreference.pick(ranked.slice(0,18).map(r=>({c:r.c,score:ranked[0].score-r.score,url:r.c.o.url})),'vivid',random),c=picked.c;
  selected.push({...slot,key:c.o.key,sourceId:c.o.sourceId,name:c.o.name,rotation:slot.role==='base'?0:Math.round((random()-.5)*12),flipX:false});usedPhotos.add(c.o.sourceId);usedNames.add(c.o.name.toLowerCase());
 }
 if(selected.length<5)throw Error('Choose a collection with more distinct cutout photographs.');
 return {id:crypto.randomUUID(),title:theme.title,theme:theme.id,themeIndex:chosen.i,sourceSurface:'city',planner:'archive-tags-and-shape-v1',createdAt:Date.now(),pieces:selected};
}
function denseSlots(count){return [
 {role:'base',x:525,y:1040,boxW:890,boxH:600},{role:'base',x:525,y:700,boxW:860,boxH:680},{role:'crown',x:525,y:315,boxW:640,boxH:510},
 {role:'accent',x:310,y:650,boxW:520,boxH:590},{role:'accent',x:735,y:650,boxW:520,boxH:590},
 {role:'sign',x:525,y:930,boxW:820,boxH:490},{role:'accent',x:315,y:1010,boxW:470,boxH:520},{role:'accent',x:735,y:1020,boxW:470,boxH:520},
 {role:'accent',x:350,y:340,boxW:410,boxH:430},{role:'accent',x:700,y:350,boxW:410,boxH:430}].slice(0,count);}
async function makeSculpturePlan(excluded){
 const parts=ExhibitionStudio.sculptureParts(),used=new Set(),pieces=[],slots=denseSlots(5+Math.floor(random()*6));
 for(const slot of slots){const kind=slot.role==='base'?'torso':slot.role==='crown'?'head':slot.role==='sign'?'torso':'arm';const candidates=parts.filter(p=>!used.has(p.id)).map(p=>({p,rank:(p.kind===kind?9:0)+(recent.has(p.id)?-5:0)+Math.min(3,p.width/p.height*2)+Math.min(2,Math.log2(Math.max(1,(p.maskPixels||5000)/5000)))+random()*4})).sort((a,b)=>b.rank-a.rank);const picked=await ExhibitionColourPreference.pick(candidates.slice(0,18).map(r=>({p:r.p,score:candidates[0].rank-r.rank,url:r.p.url})),'light',random),p=picked?.p;if(!p)throw Error('Not enough V&A fragments for this composition.');const match=await ExhibitionStudio.recommendVividCity(p.id,new Set([...excluded,...pieces.map(p=>p.key)]));pieces.push({...slot,key:match.key,cityRotation:match.cityRotation,partId:p.id,vaPartId:p.id,name:p.name,rotation:Math.round((random()-.5)*8),flipX:false});used.add(p.id);}
 return {id:crypto.randomUUID(),title:'Borrowed body',theme:'sculpture-to-city',themeIndex:-1,sourceSurface:'sculpture',planner:'dense-portrait-collage-v2',createdAt:Date.now(),pieces};
}
async function run(){
 if(busy||window.ExhibitionAgentDrafts?.state().busy||!window.ExhibitionStudio||ExhibitionStudio.state().model.busy )return;
 if(!ExhibitionStudio.state().model.ready){error='The local 3D generator is unavailable.';setPhase('error',error);return;}
 total=Math.max(0,Math.min(50,Math.round(Number($('exhibition-agent-count').value)||0)));if(!total)return;completed=0;collagesCompleted=0;failures=[];stopRequested=false;$('exhibition-agent-stop').disabled=false;busy=true;error='';lock(true);let applied=false;
 try{
  await ExhibitionBrowse.close();await ExhibitionStudio.prepareAgent();previous=ExhibitionStudio.captureDraft();ExhibitionWorkspace.closePanel();
  for(let number=1;number<=total;number++){
   if(stopRequested)break;const direction=nextTarget==='city'?'sculpture':'city';setPhase('selecting',completed+' / '+total+' models / choosing '+(direction==='city'?'Las Vegas':'V&A')+' fragments');
   let proposed;const excluded=new Set();for(let attempt=0;attempt<3;attempt++){proposed=await makePlan(excluded,direction);setPhase('composing',completed+' / '+total+' models / composing');try{await ExhibitionStudio.applyAgentPlan(proposed);plan=ExhibitionStudio.getDocument().agentPlan;applied=true;break;}catch(e){proposed.pieces.forEach(p=>excluded.add(p.key));if(attempt===2)throw e;}}
   lastTheme=plan.themeIndex;plan.pieces.forEach(p=>{recent.add(p.key);if(p.partId)recent.add(p.partId);});while(recent.size>120)recent.delete(recent.values().next().value);render();
   const draft=await ExhibitionAgentDrafts.save(number);collagesCompleted++;ExhibitionAgentDrafts.setActive(draft.id);
   try{
    setPhase('generating',completed+' / '+total+' models / generating '+number);
    await ExhibitionAgentDrafts.update(draft.id,{generationStatus:'generating'});
    const result=await ExhibitionStudio.generate();if(!result?.record)throw Error('No model was produced.');
    await ExhibitionAgentDrafts.update(draft.id,{generationStatus:'complete',completedRecord:result.record});
    const entry=await ExhibitionLibrary.saveCurrent(number,{title:draft.title,group:'Agent batch'});
    await ExhibitionAgentDrafts.attachModel(draft.id,entry.id);completed++;nextTarget=nextTarget==='city'?'sculpture':'city';localStorage.setItem(DIRECTION_KEY,nextTarget);
   }catch(e){failures.push({id:draft.id,message:e.message});await ExhibitionAgentDrafts.update(draft.id,{generationStatus:'error',generationError:e.message});}finally{ExhibitionAgentDrafts.setActive(null);}
   ExhibitionStudio.releaseUnused();setPhase('ready',completed+' / '+total+' models saved');

  }
  setPhase(failures.length?'error':'ready',completed+' / '+total+' models saved / '+collagesCompleted+' collages'+(stopRequested?' / stopped':'')+(failures.length?' / '+failures.length+' failed: '+failures.at(-1).message:''));if(completed){$('model-history').open=true;window.ExhibitionArchives?.select('models');}await ExhibitionAgentDrafts.render();
 }catch(e){error=e.message;setPhase('error',completed+' / '+total+' models saved. '+(applied?'Current collage kept. ':'')+error);}
 finally{busy=false;lock(false);render();}
}
$('exhibition-agent-count').oninput=()=>{$('exhibition-agent-count-value').textContent=$('exhibition-agent-count').value;render();};
$('exhibition-agent-stop').onclick=()=>{stopRequested=true;status.textContent='Finishing and saving the current model, then stopping...';$('exhibition-agent-stop').disabled=true;};
runButton.onclick=run;
$('exhibition-agent-edit').onclick=()=>{if(busy||window.ExhibitionAgentDrafts?.state().busy)return;ExhibitionWorkspace.openPanel(ExhibitionStudio.state().sourceSurface==='sculpture'?'sculpture':'collage');$('exhibition-message').textContent='Every object is editable. Adjust the collage, then click Generate updated 3D.';};
$('exhibition-agent-previous').onclick=async()=>{
 if(busy||window.ExhibitionAgentDrafts?.state().busy||!previous)return;busy=true;lock(true);setPhase('restoring','Restoring your previous collage...');
 try{const old=previous;await ExhibitionBrowse.close();await ExhibitionStudio.restoreDraft(old);previous=null;plan=old.document.agentPlan||null;setPhase('idle','Previous collage restored.');ExhibitionWorkspace.openPanel('collage');}
 catch(e){error=e.message;setPhase('error',error);}finally{busy=false;lock(false);render();}
};
window.addEventListener('exhibition-counterparts-preparing',()=>{if(busy)setPhase('matching','Matching city silhouettes to V&A sculpture fragments...');});
window.addEventListener('exhibition-studio-ready',render);window.addEventListener('exhibition-draft-queue-change',render);
new MutationObserver(render).observe($('model-frame'),{attributes:true,attributeFilter:['aria-busy']});
window.ExhibitionAgent=Object.freeze({run,makePlan,state:()=>({busy,phase,error,completed,collagesCompleted,failures:structuredClone(failures),total,nextTarget,stopRequested,plan:plan?structuredClone(plan):null,canRestore:!!previous})});render();
})();
