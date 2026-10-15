/* Floating making tools. Preview cards remain passive; editors overlap the cards at the upper right. */
(() => {
'use strict';
document.addEventListener('pointerdown',e=>{
 for(const details of document.querySelectorAll('.exhibition-agents .agent-library-control[open],#exhibition-space-options[open]'))if(!details.contains(e.target))details.open=false;
},true);

const $=id=>document.getElementById(id),surface=$('walk-surface'),panel=$('workspace-expanded');
if(!surface||!panel)return;
const thumbnail=$('workspace-model-thumbnail'),viewer=$('generated-sculpture-viewer');
let currentPanel=null,previewFrame=0,modelPreviewSrc='';
window.ModelPreviewFinish?.configure(thumbnail);thumbnail.addEventListener('load',()=>window.ModelPreviewFinish?.apply(thumbnail,{target:window.ExhibitionStudio?.captureModel().record?.target}));
function suspendScene(){window.ExhibitionWalk?.suspendNavigation();}
function syncCollagePreview(){
 previewFrame=0;
 const studio=window.ExhibitionStudio;
 if(!studio)return;
 studio.renderPreview($('workspace-collage-preview'),studio.state().editingView);studio.renderPreview($('workspace-sculpture-preview'),'sculpture');
 const count=studio.state().layers,state=studio.state(),reverse=state.sourceSurface==='sculpture',converted=state.editingView!==state.sourceSurface;$('mini-city').style.order='1';$('mini-model').style.order='2';$('mini-city-title').textContent='01 / COLLAGE';$('mini-model-title').textContent='02 / 3D MODEL';$('exhibition-view-conversion').setAttribute('aria-pressed',String(converted));$('exhibition-view-conversion').textContent=converted?'Show source':'View conversion';$('exhibition-view-conversion').disabled=count===0;if(currentPanel==='collage')$('workspace-expanded-title').textContent=(state.editingView==='sculpture'?'V&A':'LAS VEGAS')+(converted?' INTERPRETATION':' COLLAGE');
 $('workspace-collage-placeholder').hidden=count>0;
 $('workspace-collage-preview').hidden=count===0;$('workspace-sculpture-preview').hidden=count===0;$('workspace-sculpture-placeholder').hidden=count>0;$('workspace-sculpture-caption').textContent=count?count+' LINKED V&A FRAGMENTS':'CITY / SCULPTURE COUNTERPARTS';
 $('workspace-collage-caption').textContent=count?count+' OBJECT'+(count===1?'':'S')+' / COMPOSITION':'OBJECT COMPOSITION';
}
function queueCollagePreview(){if(!previewFrame)previewFrame=requestAnimationFrame(syncCollagePreview);}
function syncModelPreview(){
 const state=window.ExhibitionStudio?.state().model;
 const ready=state&&!state.busy&&!state.stale&&state.jobId&&viewer.src;
 if(ready){
  if(modelPreviewSrc!==viewer.src){
   modelPreviewSrc=viewer.src;thumbnail.src=modelPreviewSrc;
   thumbnail.cameraOrbit='0deg 85deg auto';
  }
  thumbnail.hidden=false;$('workspace-drag-model').disabled=!state.loaded;
  $('workspace-model-placeholder').hidden=true;
  $('workspace-model-caption').textContent=state.loaded?'MODEL READY / DRAG TO ROOM':'OPENING MODEL';
 }else{
  modelPreviewSrc='';$('workspace-drag-model').disabled=true;
  if(thumbnail.hasAttribute('src')){thumbnail.src=null;thumbnail.removeAttribute('src');}
  thumbnail.hidden=true;$('workspace-model-placeholder').hidden=false;
  $('workspace-model-caption').textContent=state?.busy?'GENERATING 3D':state?.stale?'COMPOSITION CHANGED':'IMAGE TO VOLUME';
 }
}
function openPanel(kind){
 if(kind==='sculpture')kind='collage';window.ExhibitionMedia?.stop();
 if(!['collage','sculpture','model','drafts','agent-models','placement'].includes(kind))return;const library=['drafts','agent-models','placement'].includes(kind);
 window.ExhibitionBrowse?.dock({preserve:kind==='model'});suspendScene();currentPanel=kind;panel.hidden=false;panel.dataset.panel=kind;surface.dataset.workspaceOpen=kind;$('workspace-shade').hidden=false;
 $('workspace-drafts-pane').hidden=kind!=='drafts';$('workspace-agent-models-pane').hidden=kind!=='agent-models';$('workspace-placement-pane').hidden=kind!=='placement';$('place-model-footer').hidden=kind!=='placement';$('agent-model-toggle').setAttribute('aria-expanded',String(kind==='agent-models'));$('place-model-toggle').setAttribute('aria-expanded',String(kind==='placement'));$('workspace-collage-library').hidden=true;$('workspace-model-library').hidden=true;$('workspace-production-actions').hidden=true;$('agent-draft-footer').hidden=kind!=='drafts';panel.querySelector('.workspace-tabs').hidden=true;$('agent-draft-toggle').setAttribute('aria-expanded',String(kind==='drafts'));$('workspace-collage-pane').hidden=kind==='model'||library;if(kind==='collage'||kind==='sculpture')window.ExhibitionStudio?.setSurface(window.ExhibitionStudio.state().sourceSurface);$('workspace-model-pane').hidden=kind!=='model';
 $('workspace-expanded-title').textContent=kind==='collage'?'LAS VEGAS COLLAGE':kind==='sculpture'?'V&A SCULPTURE COLLAGE':kind==='drafts'?'COLLAGE LIBRARY':kind==='agent-models'?'MODEL LIBRARY':kind==='placement'?'PLACEMENT COLLECTION':'GENERATED MODEL';
 $('exhibition-export').hidden=kind==='model'||kind==='drafts';
 $('workspace-tab-collage').setAttribute('aria-pressed',String(kind==='collage'));
 $('workspace-tab-sculpture').setAttribute('aria-pressed',String(kind==='sculpture'));$('open-sculpture-preview').setAttribute('aria-expanded',String(kind==='sculpture'));
 $('workspace-tab-model').setAttribute('aria-pressed',String(kind==='model'));
 $('open-collage-preview').setAttribute('aria-expanded',String(kind==='collage'));
 $('open-model-preview').setAttribute('aria-expanded',String(kind==='model'));
 panel.querySelector('.workspace-expanded-body').scrollTop=0;
 requestAnimationFrame(()=>{
  window.dispatchEvent(new Event('resize'));
  if(kind==='collage'||kind==='sculpture')$('exhibition-canvas').focus({preventScroll:true});
  else $('workspace-close').focus({preventScroll:true});
  queueCollagePreview();syncModelPreview();
 });
}
function closePanel(){
 window.ExhibitionMedia?.stop();const previous=currentPanel;panel.hidden=true;$('workspace-shade').hidden=true;currentPanel=null;surface.dataset.workspaceOpen='none';
 $('open-sculpture-preview').setAttribute('aria-expanded','false');$('open-collage-preview').setAttribute('aria-expanded','false');$('open-model-preview').setAttribute('aria-expanded','false');$('agent-draft-toggle').setAttribute('aria-expanded','false');$('agent-model-toggle').setAttribute('aria-expanded','false');$('place-model-toggle').setAttribute('aria-expanded','false');
 if(previous)window.ExhibitionBrowse?.presentInline();queueCollagePreview();syncModelPreview();
 if(previous==='placement')$('place-agent-options').querySelector('summary').focus({preventScroll:true});
 else if(previous)$(previous==='drafts'?'agent-draft-toggle':previous==='agent-models'?'agent-model-toggle':previous==='placement'?'place-model-toggle':previous==='collage'?'open-collage-preview':previous==='sculpture'?'open-sculpture-preview':'open-model-preview').focus({preventScroll:true});
}
$('open-collage-preview').addEventListener('click',()=>openPanel('collage'));
$('open-sculpture-preview').addEventListener('click',()=>openPanel('sculpture'));
$('open-model-preview').addEventListener('click',()=>openPanel('model'));
$('workspace-tab-collage').addEventListener('click',()=>openPanel('collage'));
$('workspace-tab-sculpture').addEventListener('click',()=>openPanel('sculpture'));
$('workspace-tab-model').addEventListener('click',()=>openPanel('model'));
$('workspace-close').addEventListener('click',closePanel);
$('exhibition-view-conversion').onclick=()=>{const state=ExhibitionStudio.state();ExhibitionStudio.setSurface(state.editingView==='city'?'sculpture':'city');$('exhibition-canvas').focus({preventScroll:true});};
new ResizeObserver(()=>{const r=$('exhibition-paper').getBoundingClientRect(),scale=Math.min(r.width/1050,r.height/1400);$('exhibition-paper').style.setProperty('--paper-left',(r.width-1050*scale)/2+'px');$('exhibition-paper').style.setProperty('--paper-bottom',(r.height-1400*scale)/2+'px');}).observe($('exhibition-paper'));
panel.addEventListener('pointerdown',suspendScene,true);
panel.addEventListener('wheel',event=>event.stopPropagation(),{passive:true});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&currentPanel&&!document.fullscreenElement&&!$('exhibition-materials').open&&!$('saved-model-edit').open&&!$('exhibition-va-picker').open){closePanel();event.preventDefault();}
});
$('generate-model').addEventListener('click',()=>openPanel('model'));

window.addEventListener('exhibition-collage-change',queueCollagePreview);
window.addEventListener('exhibition-studio-ready',()=>{queueCollagePreview();syncModelPreview();});
viewer.addEventListener('load',syncModelPreview);
viewer.addEventListener('camera-change',event=>{
 if(event.detail?.source!=='user-interaction'||!modelPreviewSrc)return;
 const orbit=viewer.getCameraOrbit();
 thumbnail.cameraOrbit=orbit.theta*180/Math.PI+'deg '+orbit.phi*180/Math.PI+'deg auto';
});
new MutationObserver(syncModelPreview).observe($('model-panel'),{subtree:true,childList:true,attributes:true,attributeFilter:['src','hidden','aria-busy']});
surface.dataset.workspaceOpen='none';queueCollagePreview();syncModelPreview();
const MINI_KEY='learning-vegas-mini-panels-v1';
try{const saved=JSON.parse(localStorage.getItem(MINI_KEY)||'null');if(saved)for(const detail of document.querySelectorAll('[data-mini]'))if(typeof saved[detail.dataset.mini]==='boolean')detail.open=saved[detail.dataset.mini];}catch{}
for(const detail of document.querySelectorAll('[data-mini]'))detail.addEventListener('toggle',()=>{try{localStorage.setItem(MINI_KEY,JSON.stringify(Object.fromEntries([...document.querySelectorAll('[data-mini]')].map(d=>[d.dataset.mini,d.open]))));}catch{}});
window.ExhibitionWorkspace=Object.freeze({openPanel,closePanel,state:()=>({panel:currentPanel,collagePreviewLayers:window.ExhibitionStudio?.state().layers||0,modelPreview:!!modelPreviewSrc})});
})();
