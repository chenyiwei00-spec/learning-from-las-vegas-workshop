(() => {
  'use strict';
  const audio=document.getElementById('background-music'),button=document.getElementById('music-toggle');
  let sourceData=window.ARCHIVE_MUSIC_SOURCE;
  let context,master,filter,dry,wet,blobUrl,enabled=true,starting=false,failed=false,pauseTimer,heard=false;
  const playing=new Set();
  try{enabled=localStorage.getItem('archive-music-enabled')!=='false';}catch{}
  const inDialog=()=>['detail-dialog','about-dialog'].some(id=>document.getElementById(id)?.open);
  const blocked=()=>playing.size>0;
  function render(){
    const label=failed?'Music: unavailable':!enabled?'Music: off':blocked()?'Music: paused':!audio.paused&&context?.state==='running'?'Music: on':'Music: start';
    button.textContent=label;button.setAttribute('aria-pressed',String(enabled));
    button.setAttribute('aria-label',label+'. '+(enabled?'Turn background music off':'Turn background music on'));
  }
  function ramp(param,value,seconds){
    if(!param)return;const now=context.currentTime;
    if(param.cancelAndHoldAtTime)param.cancelAndHoldAtTime(now);
    else{const current=param.value;param.cancelScheduledValues(now);param.setValueAtTime(current,now);}
    if(seconds)param.linearRampToValueAtTime(value,now+seconds);
    else param.setValueAtTime(value,now);
  }
  function setSpace(seconds=.9){
    if(!context)return;const enclosed=inDialog();
    ramp(filter.frequency,enclosed?1300:20000,seconds);
    ramp(dry.gain,enclosed?.78:1,seconds);ramp(wet.gain,enclosed?.32:0,seconds);
    if(!enabled||blocked()||audio.paused)ramp(master.gain,0,0);
    else ramp(master.gain,enclosed?.16:.35,seconds);
  }
  function setup(){
    if(context)return;
    const AudioEngine=window.AudioContext||window.webkitAudioContext;
    if(!AudioEngine||!sourceData?.base64)throw new Error('Music engine unavailable');
    const binary=atob(sourceData.base64),bytes=new Uint8Array(binary.length);
    for(let n=0;n<binary.length;n++)bytes[n]=binary.charCodeAt(n);
    blobUrl=URL.createObjectURL(new Blob([bytes],{type:'audio/mpeg'}));
    audio.src=blobUrl;audio.loop=true;audio.preload='auto';
    context=new AudioEngine();
    const source=context.createMediaElementSource(audio);
    filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=20000;filter.Q.value=.55;
    dry=context.createGain();wet=context.createGain();wet.gain.value=0;
    master=context.createGain();master.gain.value=0;
    const reverb=context.createConvolver(),length=Math.floor(context.sampleRate*1.65);
    const impulse=context.createBuffer(2,length,context.sampleRate);
    for(let channel=0;channel<2;channel++){
      const samples=impulse.getChannelData(channel);
      for(let n=0;n<length;n++){
        const time=n/context.sampleRate;
        samples[n]=time<.018?0:(Math.random()*2-1)*Math.exp(-time*4.5)*.18;
      }
      for(const [time,gain] of [[.043,.35],[.089,.19],[.137,.11]])samples[Math.floor(time*context.sampleRate)]+=gain;
    }
    reverb.buffer=impulse;
    source.connect(filter);filter.connect(dry);dry.connect(master);
    filter.connect(reverb);reverb.connect(wet);wet.connect(master);master.connect(context.destination);
    context.addEventListener('statechange',render);
    delete window.ARCHIVE_MUSIC_SOURCE;sourceData=null;
    setSpace(0);
  }
  function stop(soft=false){
    clearTimeout(pauseTimer);
    // pause() preserves the exact playback position; muting the output also removes reverb tails.
    if(context)ramp(master.gain,0,soft?.35:0);
    if(soft&&!audio.paused)pauseTimer=setTimeout(()=>{audio.pause();render();},350);else audio.pause();
    render();
  }
  function start(){
    if(!enabled||blocked()||failed){render();return;}
    clearTimeout(pauseTimer);
    try{setup();}catch{failed=true;render();return;}
    context.resume().then(()=>{if(context.state==='running'&&!blocked()&&enabled){if(audio.paused&&!starting)start();else if(!audio.paused)setSpace(1.7);}render();}).catch(render);
    if(starting||!audio.paused){render();return;}
    starting=true;ramp(master.gain,0,0);
    const result=audio.play();
    Promise.resolve(result).then(()=>{
      starting=false;
      if(!enabled||blocked()){stop();return;}
      if(context.state==='running'){heard=true;setSpace(1.7);}else{audio.pause();if(!heard)audio.currentTime=0;}
      render();
    }).catch(()=>{starting=false;render();});
  }
  function sync(){if(!enabled||blocked())stop();else start();}
  const isContent=e=>e.target!==audio&&['AUDIO','VIDEO'].includes(e.target.tagName);
  for(const event of ['play','playing'])document.addEventListener(event,e=>{
    if(!isContent(e))return;playing.add(e.target);stop();
  },true);
  for(const event of ['pause','ended','emptied','error','abort'])document.addEventListener(event,e=>{
    if(!isContent(e))return;playing.delete(e.target);sync();
  },true);
  for(const id of ['detail-dialog','about-dialog'])document.getElementById(id).addEventListener('close',()=>setSpace(1.2));
  document.addEventListener('pointerdown',e=>{if(!e.target.closest?.('#music-toggle'))start();},true);
  document.addEventListener('keydown',e=>{if(e.key!=='Escape'&&e.target!==button)start();},true);
  button.addEventListener('click',()=>{
    enabled=!enabled;
    // An autoplay-blocked "Music: start" control is an explicit request to start, not to mute.
    if(!enabled&&button.textContent==='Music: start')enabled=true;
    try{localStorage.setItem('archive-music-enabled',String(enabled));}catch{}
    if(enabled)start();else stop(true);
  });
  audio.addEventListener('error',()=>{failed=true;stop();});
  window.addEventListener('pagehide',()=>{stop();if(blobUrl)URL.revokeObjectURL(blobUrl);if(context)context.close();});
  window.addEventListener('pageshow',e=>{if(e.persisted)location.reload();});
  window.ArchiveMusic={dialogChanged(){setSpace(1);},start};
  render();start();
})();