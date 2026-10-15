(()=>{
'use strict';
const files={archive:'archive.html',collage:'collage.html',architecture:'exhibition.html'},frames=new Map(),app=document.getElementById('workshop-app'),cover=document.getElementById('workshop-cover'),loading=document.getElementById('workshop-loading');
let current='archive',entered=false;
const valid=v=>Object.hasOwn(files,v)?v:'archive';
function switchTo(view,search=''){
 current=valid(view);if(!entered)return;
 for(const frame of frames.values()){frame.hidden=true;frame.contentWindow?.postMessage({type:'workshop-visibility',visible:false},location.origin);}
 let frame=frames.get(current);
 if(!frame){frame=document.createElement('iframe');frame.className='workshop-frame';frame.title={archive:'Media database',collage:'Collage workshop',architecture:'Architecture workshop'}[current];frame.allow='fullscreen';frame.allowFullscreen=true;frame.dataset.view=current;frame.src=files[current]+search;frame.addEventListener('load',()=>{if(current===frame.dataset.view)loading.hidden=true;});frames.set(current,frame);document.getElementById('workshop-frames').append(frame);loading.hidden=false;}
 else if(search&&new URL(frame.src).search!==search)frame.src=files[current]+search;
 frame.hidden=false;frame.contentWindow?.postMessage({type:'workshop-visibility',visible:true},location.origin);
 document.querySelectorAll('#workshop-nav [data-view]').forEach(a=>{if(a.dataset.view===current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 history.replaceState(null,'',location.pathname+'#'+current);
}
document.getElementById('workshop-enter').onclick=()=>{entered=true;sessionStorage.setItem('learning-vegas-workshop-entered','yes');cover.hidden=true;app.hidden=false;switchTo(current,location.search.replace(/[?&]view=[^&]*/g,'').replace(/^&/,'?'));};
document.getElementById('workshop-nav').onclick=async e=>{const a=e.target.closest('[data-view]');if(!a)return;e.preventDefault();if(document.fullscreenElement)await document.exitFullscreen();switchTo(a.dataset.view);};
window.addEventListener('message',async e=>{
 if(e.origin!==location.origin||![...frames.values()].some(f=>f.contentWindow===e.source)||e.data?.type!=='workshop-navigate')return;
 if(document.fullscreenElement)await document.exitFullscreen();switchTo(e.data.view,e.data.search||'');
});
current=valid(location.hash.slice(1)||new URLSearchParams(location.search).get('view'));
if(sessionStorage.getItem('learning-vegas-workshop-entered')==='yes')document.getElementById('workshop-enter').click();
window.addEventListener('hashchange',()=>{if(entered)switchTo(location.hash.slice(1));});
window.Workshop=Object.freeze({switchTo,state:()=>({entered,current,loaded:[...frames.keys()]})});
})();
