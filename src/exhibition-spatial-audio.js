/* Shared proximity rules for live walking and frame-independent film sound. */
export const SOUND_RANGE=4.2;
export function resolveSoundSources(sources,anchors=[]){
 return sources.flatMap(s=>{
  const matches=anchors.filter(a=>a.id===s.id);
  return matches.length?matches.map((a,i)=>({...s,...a,audio:s.audio?.url?s.audio:a.audio,id:s.id+':room:'+i})):anchors.length?[]:[s];
 }).concat(anchors.filter(a=>a.audio?.url&&!sources.some(s=>s.id===a.id))).filter(s=>s.audio?.url);
}
export function nearestSound(camera,sources,current=null){
 const ranked=sources.map(s=>({...s,distance:Math.hypot(Math.max(0,Math.hypot(camera.x-s.x,camera.z-s.z)-(s.width||0)/2),Number.isFinite(s.y)?Math.abs(camera.y-s.y)*1.5:0)})).sort((a,b)=>a.distance-b.distance);
 const old=ranked.find(s=>s.id===current?.id);
 return old&&old.distance<SOUND_RANGE&&ranked[0]&&old.distance<ranked[0].distance+.55?old:ranked[0]||null;
}
export const soundGain=distance=>Math.max(0,1-distance/SOUND_RANGE)**1.5*.58;
export const smoothGain=(level,target,dt)=>target+(level-target)*Math.exp(-dt/(target > level ? .65 : .45));
export function planSpatialSound({sources,duration,samplePose,step=.12}){
 const voices=[0,1].map(()=>({url:'',level:0,cursor:0,playing:false})),positions=new Map(),segments=[];let current=null;
 for(let t=0;t<duration-1e-9;t+=step){
  const dt=Math.min(step,duration-t),source=nearestSound(samplePose(t),sources,current);
  if(source&&source.distance<SOUND_RANGE&&(source.id!==current?.id||source.audio.url!==current?.audio?.url)){
   current=source;
   if(!voices.some(p=>p.url===source.audio.url)){
    const p=voices.reduce((a,b)=>a.level<b.level?a:b);positions.set(p.url,p.cursor);
    Object.assign(p,{url:source.audio.url,level:0,cursor:positions.get(source.audio.url)||0,playing:true});
   }
  }
  if(!source||source.distance>=SOUND_RANGE)current=null;
  for(const p of voices){
   const target=current?.audio.url===p.url?soundGain(source.distance):0,tau=target > p.level ? .65 : .45;
   if(target>0)p.playing=true;
   if(p.playing&&p.url&&(p.level>.00001||target>0))segments.push({url:p.url,start:t,end:t+dt,offset:p.cursor,level:p.level,target,tau});
   if(p.playing)p.cursor+=dt;
   p.level=smoothGain(p.level,target,dt);
   if(p.level<.003&&target===0)p.playing=false;
  }
 }
 return {segments,duration,urls:[...new Set(segments.map(s=>s.url))]};
}
// Decode only clips used along the path. PCM output is mixed in bounded chunks.
export function createSpatialSoundMixer(plan,{sampleRate=48000,signal,check=()=>{}}={}){
 const context=new OfflineAudioContext(2,1,sampleRate),cache=new Map();let bytes=0,disposed=false,decodedClips=0;
 async function decoded(url){
  check();if(disposed)throw Error('Sound mixer is closed.');
  if(cache.has(url)){const value=cache.get(url);cache.delete(url);cache.set(url,value);return value;}
  const response=await fetch(url,{signal:signal?AbortSignal.any([signal,AbortSignal.timeout(30000)]):AbortSignal.timeout(30000)});
  if(!response.ok)throw Error('Exhibition audio could not load ('+response.status+'). Check the linked recording or disable exhibition audio for this export.');
  let buffer;try{buffer=await context.decodeAudioData(await response.arrayBuffer());}catch(error){if(signal?.aborted)throw signal.reason;throw Error('Exhibition audio could not be decoded: '+url,{cause:error});}
  check();const size=buffer.length*buffer.numberOfChannels*4;
  while(cache.size&&(cache.size>=3||bytes+size>96*1024*1024)){const [key,value]=cache.entries().next().value;cache.delete(key);bytes-=value.length*value.numberOfChannels*4;}
  cache.set(url,buffer);bytes+=size;decodedClips++;return buffer;
 }
 async function chunk(start,end){
  check();const first=Math.round(start*sampleRate),last=Math.round(end*sampleRate),length=last-first;
  const buffer=new AudioBuffer({numberOfChannels:2,length,sampleRate}),out=[buffer.getChannelData(0),buffer.getChannelData(1)];
  for(const segment of plan.segments){
   if(segment.end<=start||segment.start>=end)continue;
   const source=await decoded(segment.url),input=[source.getChannelData(0),source.getChannelData(Math.min(1,source.numberOfChannels-1))];
   const lo=Math.max(first,Math.round(segment.start*sampleRate)),hi=Math.min(last,Math.round(segment.end*sampleRate));
   for(let n=lo;n<hi;n++){
    const elapsed=n/sampleRate-segment.start,gain=segment.target+(segment.level-segment.target)*Math.exp(-Math.max(0,elapsed)/segment.tau);
    const frame=((segment.offset+elapsed)*source.sampleRate%source.length+source.length)%source.length,a=Math.floor(frame),b=(a+1)%source.length,u=frame-a;
    for(let ch=0;ch<2;ch++)out[ch][n-first]+=(input[ch][a]*(1-u)+input[ch][b]*u)*gain;
   }
   check();
  }
  // Same two-voice limit as live playback; clamp only protects encoding from peaks.
  for(const channel of out)for(let n=0;n<length;n++)channel[n]=Math.max(-1,Math.min(1,channel[n]));
  return buffer;
 }
 return {chunk,state:()=>({decodedClips,cachedBytes:bytes,sourceCount:plan.urls.length}),dispose:()=>{disposed=true;cache.clear();bytes=0;}};
}
export const spatialSound=Object.freeze({resolve:resolveSoundSources,nearest:nearestSound,gain:soundGain,smooth:smoothGain});
