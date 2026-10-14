/* Floating making tools. Preview cards remain passive; editors overlap the cards at the upper right. */
(() => {
'use strict';
const $=id=>document.getElementById(id),surface=$('walk-surface'),panel=$('workspace-expanded');
if(!surface||!panel)return;
const thumbnail=$('workspace-model-thumbnail'),viewer=$('generated-sculpture-viewer');
let currentPanel=null,previewFrame=0,modelPreviewSrc='';
function suspendScene(){window.ExhibitionWalk?.suspendNavigation();}
function syncCollagePreview(){
 previewFrame=0;
 const studio=window.ExhibitionStudio;
 if(!studio)return;
 studio.renderPreview($('workspace-collage-preview'),'city');studio.renderPreview($('workspace-sculpture-preview'),'sculpture');
 const count=studio.state().layers;
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
 if(!['collage','sculpture','model'].includes(kind))return;
 window.ExhibitionBrowse?.dock();suspendScene();currentPanel=kind;panel.hidden=false;surface.dataset.workspaceOpen=kind;$('workspace-shade').hidden=false;
 $('workspace-collage-pane').hidden=kind==='model';if(kind!=='model')window.ExhibitionStudio?.setSurface(kind==='sculpture'?'sculpture':'city');$('workspace-model-pane').hidden=kind!=='model';
 $('workspace-expanded-title').textContent=kind==='collage'?'LAS VEGAS COLLAGE':kind==='sculpture'?'V&A SCULPTURE COLLAGE':'GENERATED MODEL';
 $('exhibition-export').hidden=kind==='model';
 $('workspace-tab-collage').setAttribute('aria-pressed',String(kind==='collage'));
 $('workspace-tab-sculpture').setAttribute('aria-pressed',String(kind==='sculpture'));$('open-sculpture-preview').setAttribute('aria-expanded',String(kind==='sculpture'));
 $('workspace-tab-model').setAttribute('aria-pressed',String(kind==='model'));
 $('open-collage-preview').setAttribute('aria-expanded',String(kind==='collage'));
 $('open-model-preview').setAttribute('aria-expanded',String(kind==='model'));
 panel.querySelector('.workspace-expanded-body').scrollTop=0;
 requestAnimationFrame(()=>{
  window.dispatchEvent(new Event('resize'));
  if(kind!=='model')$('exhibition-canvas').focus({preventScroll:true});
  else $('workspace-close').focus({preventScroll:true});
  queueCollagePreview();syncModelPreview();
 });
}
function closePanel(){
 window.ExhibitionMedia?.stop();const previous=currentPanel;panel.hidden=true;$('workspace-shade').hidden=true;currentPanel=null;surface.dataset.workspaceOpen='none';
 $('open-sculpture-preview').setAttribute('aria-expanded','false');$('open-collage-preview').setAttribute('aria-expanded','false');$('open-model-preview').setAttribute('aria-expanded','false');
 queueCollagePreview();syncModelPreview();
 if(previous)$(previous==='collage'?'open-collage-preview':previous==='sculpture'?'open-sculpture-preview':'open-model-preview').focus({preventScroll:true});
}
$('open-collage-preview').addEventListener('click',()=>openPanel('collage'));
$('open-sculpture-preview').addEventListener('click',()=>openPanel('sculpture'));
$('open-model-preview').addEventListener('click',()=>openPanel('model'));
$('workspace-tab-collage').addEventListener('click',()=>openPanel('collage'));
$('workspace-tab-sculpture').addEventListener('click',()=>openPanel('sculpture'));
$('workspace-tab-model').addEventListener('click',()=>openPanel('model'));
$('workspace-close').addEventListener('click',closePanel);
panel.addEventListener('pointerdown',suspendScene,true);
panel.addEventListener('wheel',event=>event.stopPropagation(),{passive:true});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&currentPanel&&!document.fullscreenElement&&!$('exhibition-materials').open&&!$('saved-model-edit').open){closePanel();event.preventDefault();}
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
window.ExhibitionWorkspace=Object.freeze({openPanel,closePanel,state:()=>({panel:currentPanel,collagePreviewLayers:window.ExhibitionStudio?.state().layers||0,modelPreview:!!modelPreviewSrc})});
})();
