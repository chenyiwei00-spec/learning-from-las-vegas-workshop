/* One video and one audio per composition, matched from actual archive metadata. */
(()=>{
'use strict';
let indexPromise=null,activeKey='',active=null;const recentAudio=[];const random=()=>crypto.getRandomValues(new Uint32Array(1))[0]/4294967296;
const $=id=>document.getElementById(id),video=$('exhibition-linked-video'),audio=$('exhibition-linked-audio');
const stopWords=new Set('a an the and or of to in on at by for from with is are this that it its as be has have into other image photo photograph photographs video audio sound model sculpture replica vegas las nevada usa united states unknown unspecified architecture advertisement publicity inspiration detournement'.split(' '));
const aliases={buildings:'building',trees:'tree',roads:'road',street:'road',streets:'road',vehicles:'vehicle',cars:'vehicle',car:'vehicle',traffic:'vehicle',automobile:'vehicle',automobiles:'vehicle',buses:'vehicle',bus:'vehicle',signs:'sign',signage:'sign',signboard:'sign',billboard:'sign',billboards:'sign',crowds:'people',crowd:'people',person:'people',pedestrian:'people',pedestrians:'people',voices:'voice',speech:'voice',talking:'voice',conversation:'voice',music:'music',musical:'music',birdsong:'bird',birds:'bird',leaves:'tree',foliage:'tree',fountains:'fountain',waterfall:'water',waterfalls:'water'};
function tokens(value){return String(value||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().match(/[a-z0-9]+/g)?.filter(w=>w.length>2&&!stopWords.has(w)).map(w=>aliases[w]||w)||[];}
function features(item){const map=new Map();const add=(value,weight)=>{for(const t of new Set(tokens(value)))map.set(t,(map.get(t)||0)+weight);};add(item.title,5);add(item.subjectTitle,2);add((item.tags||[]).join(' '),4);add((item.objects||[]).join(' '),2);add((item.elements||[]).join(' '),1.5);add(item.description,1);if(item.type==='video')add((item.frameDescriptions||[]).map(f=>f.caption+' '+(f.labels||[]).join(' ')).join(' '),.7);return map;}
async function index(){
 if(!indexPromise)indexPromise=(async()=>{const data=window.ARCHIVE_DATA||await fetch('catalog.json').then(r=>{if(!r.ok)throw Error('Archive descriptions unavailable.');return r.json();});const items=new Map(data.items.map(x=>[x.id,x])),candidates=data.items.filter(x=>['audio','video'].includes(x.type)&&(x[x.type]||x.playbackUrl));const df=new Map(),vectors=new Map();for(const item of candidates){const v=features(item);vectors.set(item.id,v);for(const t of v.keys())df.set(t,(df.get(t)||0)+1);}return{items,candidates,vectors,idf:t=>1+Math.log((candidates.length+1)/((df.get(t)||0)+1))};})();
 return indexPromise;
}
async function associate(composition){
 const data=await index(),query=new Map(),sourceIds=[...new Set((composition?.layers||[]).map(l=>String(l.sourceId||l.objectId||'').split('::')[0]))];
 const add=(map,weight=1)=>{for(const [t,w]of map)query.set(t,(query.get(t)||0)+w*weight);};
 for(const id of sourceIds){const item=data.items.get(id);if(item)add(features(item));}
 for(const l of composition?.layers||[]){const title=composition.assets?.[l.sourceId]?.title||composition.assets?.[l.objectId]?.title||'';add(features({title}),2);}
 // Extend visual subjects to the corresponding audible context, with lower weight.
 const themes={road:['vehicle','engine'],vehicle:['engine','traffic'],tree:['bird','wind'],people:['voice','footsteps'],hotel:['crowd','music'],casino:['slot','machine','music'],fountain:['water','splash'],water:['water','splash'],sign:['road','vehicle'],tower:['city','road']};
 for(const [key,related]of Object.entries(themes))if(query.has(key))for(const word of related){const t=aliases[word]||word;query.set(t,(query.get(t)||0)+Math.min(3,query.get(key)*.2));}
 const norm=v=>Math.sqrt([...v].reduce((sum,[t,w])=>sum+(w*data.idf(t))**2,0)),qn=norm(query);
 function best(type){
  const ranked=data.candidates.filter(x=>x.type===type).map(item=>{const v=data.vectors.get(item.id),terms=[...query.keys()].filter(t=>v.has(t)),dot=terms.reduce((n,t)=>n+query.get(t)*v.get(t)*data.idf(t)**2,0),score=dot/Math.max(1,qn*norm(v));return {item,score,terms};}).sort((a,b)=>b.score-a.score||a.item.id.localeCompare(b.item.id));if(!ranked.length)return null;
  let winner=ranked[0],basis=winner.score>0?'description-and-tags':'archive-context';
  if(type==='audio'){
   const strong=ranked.filter(r=>r.terms.length>=2&&r.score>=.08&&r.score>=ranked[0].score*.72&&!recentAudio.includes(r.item.id));
   if(strong.length){winner=strong[Math.floor(random()*Math.min(8,strong.length))];basis='description-and-tags-varied';}
   else{const fresh=ranked.filter(r=>!recentAudio.includes(r.item.id)),pool=fresh.length?fresh:ranked;winner=pool[Math.floor(random()*pool.length)];basis='random-audio-fallback';}
   recentAudio.push(winner.item.id);while(recentAudio.length>Math.min(24,ranked.length-1))recentAudio.shift();
  }
  const {item,score,terms}=winner;return {id:item.id,type,title:item.title,url:item[type]||item.playbackUrl,...(type==='video'?{thumbnail:item.thumbnail||''}:{}),score:Number(score.toFixed(5)),matchedTerms:terms.sort((a,b)=>query.get(b)*data.idf(b)-query.get(a)*data.idf(a)).slice(0,8),basis,muted:type==='video'};
 }

 return {version:2,sourceIds,video:best('video'),audio:best('audio')};
}
const card=$('exhibition-video-card'),playButton=$('exhibition-play-video');let posterEpoch=0;
function syncPlayback(){card.dataset.playing=String(!video.paused);playButton.setAttribute('aria-pressed',String(!video.paused));$('exhibition-play-audio').setAttribute('aria-pressed',String(!audio.paused));$('exhibition-play-audio').textContent=audio.paused?'Play audio':'Pause audio';}
function stop(){video.pause();audio.pause();audio.hidden=true;syncPlayback();}
function resetSources(){posterEpoch++;stop();for(const media of [video,audio]){media.removeAttribute('src');media.load();}video.controls=false;video.removeAttribute('poster');$('exhibition-video-placeholder').hidden=false;}
function mute(){video.muted=true;video.defaultMuted=true;video.volume=0;}
video.addEventListener('volumechange',mute);video.addEventListener('play',mute);
function render(){for(const type of ['video','audio']){const b=$('exhibition-play-'+type),item=active?.[type];b.disabled=!item;b.title=item?item.title:'No linked '+type+' available';}$('exhibition-video-fullscreen').disabled=!active?.video;$('exhibition-media-close').disabled=!active;$('exhibition-media-title').textContent=active?.video?.title||'';}
async function setPoster(){const id=active?.video?.id;if(!id)return;const ticket=++posterEpoch;let url=active.video.thumbnail;try{if(!url)url=(await index()).items.get(id)?.thumbnail;if(ticket!==posterEpoch||id!==active?.video?.id)return;if(url){video.poster=url;$('exhibition-video-placeholder').hidden=true;}}catch{}}
function onState({record,busy,stale,switching}){
 const key=busy||stale||switching?'':record?.id||'',next=key?record.linkedMedia||null:null;
 if(key===activeKey&&JSON.stringify(next)===JSON.stringify(active))return;activeKey=key;active=next;resetSources();render();setPoster();
}
async function play(type){const item=active?.[type];if(!item)return;const target=type==='video'?video:audio;if(!target.paused){target.pause();return;}
 if(target.getAttribute('src')!==item.url)target.src=item.url;
 if(type==='video'){mute();video.controls=true;$('exhibition-video-placeholder').hidden=true;}else audio.hidden=false;
 try{await target.play();syncPlayback();}catch{$('exhibition-media-match').textContent='Playback unavailable. Try the player controls.';}
}
for(const type of ['video','audio']){$('exhibition-play-'+type).onclick=()=>play(type);const media=type==='video'?video:audio;for(const event of ['play','pause','ended'])media.addEventListener(event,syncPlayback);}
video.addEventListener('click',e=>{const r=video.getBoundingClientRect();if(!video.controls||e.clientY<r.bottom-40)play('video');});
$('exhibition-video-fullscreen').onclick=async()=>{try{if(document.fullscreenElement===card)await document.exitFullscreen();else await card.requestFullscreen();}catch{$('exhibition-media-match').textContent='Video fullscreen is unavailable.';}};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&(document.fullscreenElement===card||document.fullscreenElement===video)){e.preventDefault();e.stopImmediatePropagation();document.exitFullscreen().catch(()=>{});} },true);
$('exhibition-media-close').onclick=stop;
window.addEventListener('saved-sculpture-next',stop);window.addEventListener('saved-sculpture-open',stop);
window.ExhibitionMedia=Object.freeze({associate,onState,stop,state:()=>({modelId:activeKey,linkedMedia:active,videoMuted:video.muted,audioPlaying:!audio.paused,videoPlaying:!video.paused})});render();
})();
