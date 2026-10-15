(()=>{
'use strict';
const files={archive:'archive.html',collage:'collage.html',architecture:'exhibition.html'},frames=new Map(),app=document.getElementById('workshop-app'),cover=document.getElementById('workshop-cover'),loading=document.getElementById('workshop-loading');
let current='archive',entered=false;
const valid=v=>Object.hasOwn(files,v)?v:'archive';
function visible(frame,value){frame.contentWindow?.postMessage({type:'workshop-visibility',visible:value},location.origin);}
function coverChanged(){window.dispatchEvent(new CustomEvent('workshop-cover-change',{detail:{visible:!entered}}));}
function switchTo(view,search=''){
 current=valid(view);if(!entered)return;
 for(const frame of frames.values()){frame.hidden=true;visible(frame,false);}
 let frame=frames.get(current);
 if(!frame){frame=document.createElement('iframe');frame.className='workshop-frame';frame.title={archive:'Media database',collage:'Collage workshop',architecture:'Architecture workshop'}[current];frame.allow='fullscreen';frame.allowFullscreen=true;frame.dataset.view=current;frame.src=files[current]+search;frame.addEventListener('load',()=>{const shown=entered&&current===frame.dataset.view;visible(frame,shown);if(shown)loading.hidden=true;});frames.set(current,frame);document.getElementById('workshop-frames').append(frame);loading.hidden=false;}
 else if(search&&new URL(frame.src).search!==search)frame.src=files[current]+search;
 frame.hidden=false;visible(frame,true);
 document.querySelectorAll('#workshop-nav [data-view]').forEach(a=>{if(a.dataset.view===current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 history.replaceState(null,'',location.pathname+'#'+current);
}
async function showCover(){
 if(document.fullscreenElement)await document.exitFullscreen();
 entered=false;sessionStorage.removeItem('learning-vegas-workshop-entered');app.hidden=true;cover.hidden=false;loading.hidden=true;
 for(const frame of frames.values())visible(frame,false);
 history.replaceState(null,'',location.pathname+'#cover');coverChanged();document.getElementById('workshop-enter').focus({preventScroll:true});
}
document.getElementById('workshop-enter').onclick=()=>{entered=true;sessionStorage.setItem('learning-vegas-workshop-entered','yes');cover.hidden=true;app.hidden=false;coverChanged();switchTo(current,location.search.replace(/[?&]view=[^&]*/g,'').replace(/^&/,'?'));};
document.getElementById('workshop-home').onclick=showCover;
document.getElementById('workshop-nav').addEventListener('click',async e=>{const a=e.target.closest('[data-view]');if(!a)return;e.preventDefault();if(document.fullscreenElement)await document.exitFullscreen();switchTo(a.dataset.view);});
window.addEventListener('message',async e=>{
 if(e.origin!==location.origin||![...frames.values()].some(f=>f.contentWindow===e.source)||e.data?.type!=='workshop-navigate')return;
 if(e.data.view==='cover'){await showCover();return;}
 if(document.fullscreenElement)await document.exitFullscreen();switchTo(e.data.view,e.data.search||'');
});
const initial=location.hash.slice(1);
current=valid(initial||new URLSearchParams(location.search).get('view'));
if(initial!=='cover'&&sessionStorage.getItem('learning-vegas-workshop-entered')==='yes')document.getElementById('workshop-enter').click();
window.addEventListener('hashchange',()=>{const view=location.hash.slice(1);if(view==='cover'){showCover();return;}current=valid(view);if(entered)switchTo(current);});
document.addEventListener('fullscreenchange',()=>{document.documentElement.dataset.workshopFullscreen=String(!!document.fullscreenElement);});
window.Workshop=Object.freeze({switchTo,showCover,state:()=>({entered,current,loaded:[...frames.keys()]})});
})();
