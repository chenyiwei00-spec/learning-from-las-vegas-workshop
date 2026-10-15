(()=>{
'use strict';
const embedded=window.parent!==window,kind=location.pathname.endsWith('exhibition.html')?'architecture':location.pathname.endsWith('collage.html')?'collage':'archive';
document.documentElement.classList.add(embedded?'workshop-embedded':'workshop-module-direct');
const nav=document.createElement('nav');nav.className='workshop-nav workshop-child-nav';nav.setAttribute('aria-label','Workshop sections');
nav.innerHTML=[['archive','01','DATABASE'],['collage','02','COLLAGE WORKSHOP'],['architecture','03','ARCHITECTURE']].map(([key,n,label])=>'<a href="index.html?view='+key+'" data-workshop-view="'+key+'"'+(key===kind?' aria-current="page"':'')+'><span>'+n+'</span>'+label+'</a>').join('');
document.body.prepend(nav);
function navigate(view,search=''){if(embedded)parent.postMessage({type:'workshop-navigate',view,search},location.origin);else location.href='index.html?view='+view+(search?'&'+search.slice(1):'');}
document.addEventListener('click',e=>{
 const a=e.target.closest('a');if(!a||a.target==='_blank'||a.hasAttribute('download')||e.ctrlKey||e.metaKey||e.shiftKey)return;
 if(a.dataset.workshopView){e.preventDefault();navigate(a.dataset.workshopView);return;}
 const url=new URL(a.href,location.href);if(url.origin!==location.origin)return;
 const file=url.pathname.split('/').pop();
 const view=file==='collage.html'?'collage':file==='exhibition.html'?'architecture':['','index.html','archive.html'].includes(file)?'archive':null;
 if(view&&embedded){e.preventDefault();navigate(view,url.search);}
},true);
document.addEventListener('fullscreenchange',()=>{
 document.documentElement.dataset.workshopFullscreen=String(!!document.fullscreenElement);
});
window.addEventListener('message',e=>{
 if(e.origin!==location.origin||e.source!==parent||e.data?.type!=='workshop-visibility')return;
 document.documentElement.dataset.workshopVisible=String(e.data.visible);
 if(!e.data.visible){window.ExhibitionWalk?.suspendNavigation();window.ExhibitionMedia?.stop();for(const media of document.querySelectorAll('video,audio'))if(media.id!=='background-music')media.pause();}
 window.dispatchEvent(new Event('resize'));
});
})();
