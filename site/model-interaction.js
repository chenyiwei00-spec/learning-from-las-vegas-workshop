/* Explicit wheel ownership: hovering never takes scrolling away from the page. */
(()=>{
'use strict';
function attach(stage,viewer,{fullscreenButton,zoomButton,note}={}){
 let active=false;
 function setActive(value){active=!!value;viewer.disableZoom=!active;stage.dataset.zoomActive=String(active);if(zoomButton){zoomButton.setAttribute('aria-pressed',String(active));zoomButton.textContent=active?'Zoom model':'Scroll page';}if(note)note.textContent=active?'Scroll to zoom · click outside to scroll the page':'Click the grey area to zoom · drag to rotate';}
 stage.addEventListener('wheel',e=>{if(!active)e.stopImmediatePropagation();},{capture:true,passive:false});
 stage.addEventListener('pointerdown',e=>{if(!e.target.closest('button,a,input,select,summary'))setActive(true);},true);
 document.addEventListener('pointerdown',e=>{if(!stage.contains(e.target))setActive(false);},true);
 zoomButton?.addEventListener('click',()=>setActive(!active));
 async function toggleFullscreen(){
  try{if(document.fullscreenElement===stage)await document.exitFullscreen();else{setActive(true);await stage.requestFullscreen();}}
  catch{if(note)note.textContent='Fullscreen is unavailable in this browser.';}
 }
 fullscreenButton?.addEventListener('click',toggleFullscreen);
 function fullscreenChanged(){const full=document.fullscreenElement===stage;stage.dataset.fullscreen=String(full);if(fullscreenButton){fullscreenButton.textContent=full?'Exit fullscreen ↙':'Fullscreen ↗';fullscreenButton.setAttribute('aria-pressed',String(full));}setActive(full);window.dispatchEvent(new Event('resize'));}
 document.addEventListener('fullscreenchange',fullscreenChanged);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.fullscreenElement===stage){e.preventDefault();document.exitFullscreen().catch(()=>{});}});
 window.addEventListener('blur',()=>{if(document.fullscreenElement!==stage)setActive(false);});
 setActive(false);
 return Object.freeze({reset:()=>setActive(false),state:()=>({zoomActive:active,fullscreen:document.fullscreenElement===stage})});
}
window.ModelInteraction=Object.freeze({attach});
})();