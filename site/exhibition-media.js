/* One video and one audio per composition, matched from actual archive metadata. */
(()=>{
'use strict';
let activeKey='',active=null;
const $=id=>document.getElementById(id),video=$('exhibition-linked-video'),audio=$('exhibition-linked-audio');
const associate=composition=>ModelMediaMatch.associate(composition),index=()=>ModelMediaMatch.index();
const card=$('exhibition-video-card'),playButton=$('exhibition-play-video');let posterEpoch=0;
const transport={wantsPlay:false,recovering:false,retries:0,time:0,progress:performance.now(),source:'',epoch:0};let recoveryTimer=0,pauseIntentUntil=0;
function cancelTransport(){clearTimeout(recoveryTimer);recoveryTimer=0;transport.epoch++;transport.wantsPlay=false;transport.recovering=false;transport.retries=0;transport.time=0;transport.source='';}
function scheduleRecovery(delay=500,reload=false){if(!transport.wantsPlay||recoveryTimer)return;recoveryTimer=setTimeout(()=>{recoveryTimer=0;recoverVideo(reload);},delay);}
async function recoverVideo(reload=false){
 if(!transport.wantsPlay||transport.recovering||transport.retries>=12||video.ended||!active?.video||document.hidden)return;
 const ticket=++transport.epoch,url=active.video.url,position=Math.max(transport.time,video.currentTime||0);transport.recovering=true;transport.retries++;
 try{
  if(reload||video.error){
   video.preload='auto';
   const loaded=new Promise((resolve,reject)=>{const timeout=setTimeout(()=>done(Error('Media buffering timed out')),15000);const ok=()=>done(),bad=()=>done(Error('Media stream unavailable'));function done(error){clearTimeout(timeout);video.removeEventListener('loadedmetadata',ok);video.removeEventListener('error',bad);error?reject(error):resolve();}video.addEventListener('loadedmetadata',ok,{once:true});video.addEventListener('error',bad,{once:true});});
   video.src=url;video.load();await loaded;
   if(ticket!==transport.epoch||!transport.wantsPlay||url!==active?.video?.url)return;
   if(Number.isFinite(video.duration))video.currentTime=Math.min(position,Math.max(0,video.duration-.10));
  }
  if(ticket!==transport.epoch||!transport.wantsPlay||url!==active?.video?.url)return;
  mute();if(video.paused)await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Playback is still buffering')),10000);video.play().then(()=>{clearTimeout(timer);resolve();},e=>{clearTimeout(timer);reject(e);});});
 }catch(error){if(ticket===transport.epoch){$('exhibition-media-match').textContent='Video is buffering. Playback will resume from the same point.';if(error.name==='NotAllowedError')transport.wantsPlay=false;}}
 finally{if(ticket===transport.epoch){transport.recovering=false;syncPlayback();if(transport.wantsPlay&&video.paused)scheduleRecovery(Math.min(5000,500*transport.retries),true);}}
}
video.addEventListener('timeupdate',()=>{if(Math.abs(video.currentTime-transport.time)>.02){transport.time=video.currentTime;transport.progress=performance.now();if(!transport.recovering){transport.retries=0;clearTimeout(recoveryTimer);recoveryTimer=0;}}});
video.addEventListener('play',()=>{transport.wantsPlay=true;transport.progress=performance.now();});
video.addEventListener('pointerdown',e=>{const r=video.getBoundingClientRect();if(video.controls&&e.clientY>=r.bottom-44&&e.clientX-r.left<52)pauseIntentUntil=performance.now()+1500;},true);
video.addEventListener('keydown',e=>{if([' ','k','K'].includes(e.key))pauseIntentUntil=performance.now()+1500;});
video.addEventListener('pause',()=>{if(transport.recovering||!transport.wantsPlay)return;if(video.ended||performance.now()<pauseIntentUntil)transport.wantsPlay=false;else scheduleRecovery(250,false);});
video.addEventListener('ended',()=>{transport.wantsPlay=false;clearTimeout(recoveryTimer);recoveryTimer=0;});
video.addEventListener('error',()=>{if(video.error&&[2,3].includes(video.error.code))scheduleRecovery(500,true);});
for(const event of ['stalled','waiting'])video.addEventListener(event,()=>scheduleRecovery(3000,false));
const transportWatch=setInterval(()=>{if(!transport.wantsPlay||transport.recovering||video.seeking||video.ended||document.hidden)return;const gap=performance.now()-transport.progress;if(video.paused)scheduleRecovery(100,false);else if(gap>10000)scheduleRecovery(100,true);},1000);
window.addEventListener('pagehide',event=>{cancelTransport();if(!event.persisted)clearInterval(transportWatch);video.pause();audio.pause();});
function syncPlayback(){card.dataset.playing=String(!video.paused);playButton.setAttribute('aria-pressed',String(!video.paused));$('exhibition-play-audio').setAttribute('aria-pressed',String(!audio.paused));$('exhibition-play-audio').textContent=audio.paused?'Play audio':'Pause audio';}
function stop(){cancelTransport();video.pause();audio.pause();audio.hidden=true;syncPlayback();}
function resetSources(){posterEpoch++;stop();for(const media of [video,audio]){media.removeAttribute('src');media.load();}video.controls=false;video.removeAttribute('poster');$('exhibition-video-placeholder').hidden=false;}
function mute(){if(!video.muted)video.muted=true;if(!video.defaultMuted)video.defaultMuted=true;if(video.volume!==0)video.volume=0;}
video.addEventListener('volumechange',mute);video.addEventListener('play',mute);
function render(){for(const type of ['video','audio']){const b=$('exhibition-play-'+type),item=active?.[type];b.disabled=!item;b.title=item?item.title:'No linked '+type+' available';}$('exhibition-video-fullscreen').disabled=!active?.video;$('exhibition-media-close').disabled=!active;$('exhibition-media-title').textContent=active?.video?.title||'';}
async function setPoster(){const id=active?.video?.id;if(!id)return;const ticket=++posterEpoch;let url=active.video.thumbnail;try{if(!url)url=(await index()).items.get(id)?.thumbnail;if(ticket!==posterEpoch||id!==active?.video?.id)return;if(url){video.poster=url;$('exhibition-video-placeholder').hidden=true;}}catch{}}
function onState({record,busy,stale,switching}){
 const key=busy||stale||switching?'':record?.id||'',next=key?record.linkedMedia||null:null;
 if(key===activeKey&&next?.video?.url===active?.video?.url&&next?.audio?.url===active?.audio?.url){active=next;render();return;}
 activeKey=key;active=next;resetSources();render();setPoster();
}
async function play(type){const item=active?.[type];if(!item)return;const target=type==='video'?video:audio;if(!target.paused){if(type==='video')transport.wantsPlay=false;target.pause();return;}
 if(target.getAttribute('src')!==item.url)target.src=item.url;target.preload='auto';if(type==='video'){transport.wantsPlay=true;transport.source=item.url;transport.retries=0;transport.progress=performance.now();}
 if(type==='video'){mute();video.controls=true;$('exhibition-video-placeholder').hidden=true;}else audio.hidden=false;
 try{await target.play();syncPlayback();}catch{$('exhibition-media-match').textContent='Playback unavailable. Try the player controls.';}
}
for(const type of ['video','audio']){$('exhibition-play-'+type).onclick=()=>play(type);const media=type==='video'?video:audio;for(const event of ['play','pause','ended'])media.addEventListener(event,syncPlayback);}
video.addEventListener('click',e=>{const r=video.getBoundingClientRect();if(!video.controls||e.clientY<r.bottom-40){e.preventDefault();play('video');}});
$('exhibition-video-fullscreen').onclick=async()=>{try{if(document.fullscreenElement===card)await document.exitFullscreen();else await card.requestFullscreen();}catch{$('exhibition-media-match').textContent='Video fullscreen is unavailable.';}};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&(document.fullscreenElement===card||document.fullscreenElement===video)){e.preventDefault();e.stopImmediatePropagation();document.exitFullscreen().catch(()=>{});} },true);
$('exhibition-media-close').onclick=stop;
window.addEventListener('saved-sculpture-next',stop);window.addEventListener('saved-sculpture-open',stop);
window.ExhibitionMedia=Object.freeze({associate,onState,stop,state:()=>({modelId:activeKey,linkedMedia:active,videoMuted:video.muted,audioPlaying:!audio.paused,videoPlaying:!video.paused,playback:{...transport}})});render();
})();
