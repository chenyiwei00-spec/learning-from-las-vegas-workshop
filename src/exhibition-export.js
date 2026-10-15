import * as THREE from 'three';
import {Output,Mp4OutputFormat,WebMOutputFormat,BufferTarget,CanvasSource,AudioBufferSource,Quality,getFirstEncodableVideoCodec,getFirstEncodableAudioCodec} from 'mediabunny';
import {spatialSound,planSpatialSound,createSpatialSoundMixer} from './exhibition-spatial-audio.js';
const wait=()=>new Promise(r=>setTimeout(r,0));
export function validateCameraPath(keys){
 if(!Array.isArray(keys)||keys.length<2)throw Error('Add at least two camera views.');
 const path=[...keys].sort((a,b)=>a.time-b.time);
 if(path[0].time!==0||path.some((k,i)=>!Number.isFinite(k.time)||k.time<0||(i&&k.time<=path[i-1].time)||!['x','y','z','yaw','pitch'].every(n=>Number.isFinite(k.pose?.[n]))))throw Error('Camera times must start at 0 and increase; positions must be finite.');
 if(path.at(-1).time>600)throw Error('Keep each film under ten minutes.');
 return path;
}
export function sampleCameraPath(keys,time,smooth=true){
 const path=validateCameraPath(keys),t=THREE.MathUtils.clamp(time,0,path.at(-1).time);let i=path.findIndex((k,n)=>n<path.length-1&&t<=path[n+1].time);if(i<0)i=path.length-2;
 const a=path[i],b=path[i+1],u=(t-a.time)/(b.time-a.time),positions=path.map(k=>new THREE.Vector3(k.pose.x,k.pose.y,k.pose.z));
 // Centripetal interpolation limits overshoot through tight architectural paths.
 const p=smooth?new THREE.CatmullRomCurve3(positions,false,'centripetal').getPoint((i+u)/(path.length-1)):positions[i].clone().lerp(positions[i+1],u);
 const qa=new THREE.Quaternion().setFromEuler(new THREE.Euler(a.pose.pitch,a.pose.yaw,0,'YXZ')),qb=new THREE.Quaternion().setFromEuler(new THREE.Euler(b.pose.pitch,b.pose.yaw,0,'YXZ')),e=new THREE.Euler().setFromQuaternion(qa.slerp(qb,u),'YXZ');
 const lightA=a.light||{time:8},lightB=b.light||lightA,light={};
 for(const name of ['time','azimuth','elevation'])if(Number.isFinite(lightA[name])&&Number.isFinite(lightB[name]))light[name]=THREE.MathUtils.lerp(lightA[name],lightB[name],u);
 return {pose:{x:p.x,y:p.y,z:p.z,yaw:e.y,pitch:e.x,fly:true},light};
}
export function createExhibitionExport({renderer,scene,pipeline,getCamera,getView,setView,getPose,setPose,lighting,orient,lock,unlock}){
 let busy=false,cancelled=false,progress=0,scratch=null,audioController=null;
 function check(){if(cancelled)throw new DOMException('Export cancelled.','AbortError');}
 function dimensions(width,height){if(!Number.isInteger(width)||!Number.isInteger(height)||width<64||height<64||width>3840||height>3840||width*height>3840*2160)throw Error('Choose an output up to 3840 x 2160.');}
 function begin(width,height){
  if(busy)throw Error('Finish the current render first.');dimensions(width,height);busy=true;cancelled=false;progress=0;
  const camera=getCamera(),saved={size:renderer.getSize(new THREE.Vector2()),ratio:renderer.getPixelRatio(),view:getView(),pose:getPose(),light:lighting.state(),aspect:camera.aspect,projection:camera.projectionMatrix.clone(),inverse:camera.projectionMatrixInverse.clone(),camera};
  lock();renderer.setPixelRatio(1);renderer.setSize(width,height,false);pipeline.setSize(width,height,{highQuality:true});
  if(camera.isPerspectiveCamera){camera.aspect=width/height;camera.updateProjectionMatrix();}
  else{const half=(camera.top-camera.bottom)/2,cx=(camera.left+camera.right)/2;camera.left=cx-half*width/height;camera.right=cx+half*width/height;camera.updateProjectionMatrix();}
  saved.frustum={left:saved.camera.left,right:saved.camera.right,top:saved.camera.top,bottom:saved.camera.bottom};
  const sun=scene.getObjectByName('gallery-sunlight');saved.sun=sun;saved.shadowSize=sun?.shadow.mapSize.clone();
  if(sun){sun.shadow.mapSize.set(4096,4096);sun.shadow.map?.dispose();sun.shadow.map=null;renderer.shadowMap.needsUpdate=true;}
  return saved;
 }
 function end(saved){
  if(!saved)return;
  setView(saved.view);setPose(saved.pose);lighting.set(saved.light);lighting.flush?.();
  renderer.setPixelRatio(saved.ratio);renderer.setSize(saved.size.x,saved.size.y,false);pipeline.setSize(saved.size.x,saved.size.y);
  saved.camera.aspect=saved.aspect;saved.camera.projectionMatrix.copy(saved.projection);saved.camera.projectionMatrixInverse.copy(saved.inverse);
  if(saved.sun){saved.sun.shadow.mapSize.copy(saved.shadowSize);saved.sun.shadow.map?.dispose();saved.sun.shadow.map=null;renderer.shadowMap.needsUpdate=true;}
  if(scratch){scratch.width=scratch.height=1;scratch=null;}busy=false;unlock();
 }
 async function draw(width,height,samples=1){
  const out=scratch||(scratch=document.createElement('canvas'));if(out.width!==width||out.height!==height){out.width=width;out.height=height;}const ctx=out.getContext('2d');ctx.clearRect(0,0,width,height);
  for(let i=0;i<samples;i++){check();orient();const cam=getCamera(),projection=cam.projectionMatrix.clone();cam.projectionMatrix.elements[8]+=2*(([.125,-.375,.375,-.125][i%4]))/width;cam.projectionMatrix.elements[9]+=2*(([.375,.125,-.125,-.375][i%4]))/height;cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();pipeline.render(getView()==='room',cam);ctx.globalAlpha=1/(i+1);ctx.drawImage(renderer.domElement,0,0);cam.projectionMatrix.copy(projection);cam.projectionMatrixInverse.copy(projection).invert();await wait();}
  return out;
 }
 async function still({width=2560,height=1440,samples=4}={}){
  let saved;try{saved=begin(width,height);const canvas=await draw(width,height,samples);check();const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('PNG could not be encoded.')),'image/png'));return{blob,width,height,pose:getPose(),light:lighting.state(),view:getView()};}finally{end(saved);}
 }
 async function film({keys,width=1920,height=1080,fps=24,smooth=true,includeAudio=true,onProgress=()=>{}}){
  const path=validateCameraPath(keys);if(![12,24,25,30,60].includes(fps))throw Error('Choose a supported frame rate.');dimensions(width,height);
  if(busy)throw Error('Finish the current render first.');
  if(typeof VideoEncoder==='undefined')throw Error('This browser cannot encode films. Open the local website in Chrome or Edge.');
  let codec=await getFirstEncodableVideoCodec(['avc','vp9','vp8'],{width,height});if(!codec)throw Error('No supported video encoder is available.');
  let mp4=codec==='avc',audioCodec=null;
  if(includeAudio){
   audioCodec=await getFirstEncodableAudioCodec(mp4?['aac']:['opus'],{numberOfChannels:2,sampleRate:48000,bitrate:160000});
   if(!audioCodec&&mp4){
    const alternate=await getFirstEncodableVideoCodec(['vp9','vp8'],{width,height}),opus=await getFirstEncodableAudioCodec(['opus'],{numberOfChannels:2,sampleRate:48000,bitrate:160000});
    if(alternate&&opus){codec=alternate;mp4=false;audioCodec=opus;}
   }
   if(!audioCodec)throw Error('No supported audio encoder. Use Chrome or Edge, or turn off Include exhibition audio.');
  }
  const output=new Output({format:mp4?new Mp4OutputFormat({fastStart:'in-memory'}):new WebMOutputFormat(),target:new BufferTarget()});let saved,source,audioSource,mixer,poster,soundSuspended=false;
  try{
   if(getView()!=='room')throw Error('Use eye-level view before exporting a camera path.');
   saved=begin(width,height);audioController=new AbortController();
   const duration=path.at(-1).time,count=Math.ceil(duration*fps);
   let soundPlan=null;
   if(includeAudio){
    const proximity=window.ExhibitionProximityAudio;
    if(!proximity?.capture)throw Error('Exhibition sound is not ready. Wait for the space to finish loading.');
    const sounds=await proximity.capture();check();
    soundPlan=planSpatialSound({sources:sounds,duration,samplePose:t=>sampleCameraPath(path,t,smooth).pose});
    mixer=createSpatialSoundMixer(soundPlan,{signal:audioController.signal,check});
    audioSource=new AudioBufferSource({codec:audioCodec,quality:new Quality({bitrate:160000})});output.addAudioTrack(audioSource);
   }
   // Export runs on film timestamps, not wall time. Keep live speakers quiet meanwhile.
   window.ExhibitionProximityAudio?.suspend();soundSuspended=true;
   const encoderCanvas=document.createElement('canvas');encoderCanvas.width=width;encoderCanvas.height=height;const ctx=encoderCanvas.getContext('2d');
   source=new CanvasSource(encoderCanvas,{codec,quality:new Quality({bitrate:Math.max(4000000,width*height*fps*.16)}),latencyMode:'quality'});output.addVideoTrack(source,{frameRate:fps});await output.start();
   let audioTime=0;
   for(let i=0;i<count;i++){
    check();const t=i/fps,value=sampleCameraPath(path,t,smooth);setPose(value.pose);lighting.set(value.light);lighting.flush?.();
    const canvas=await draw(width,height,1);ctx.drawImage(canvas,0,0);if(!poster)poster=await new Promise(r=>canvas.toBlob(r,'image/png'));
    await source.add(t,Math.min(1/fps,duration-t));
    if(audioSource&&audioTime<Math.min(duration,t+1/fps)-1e-8){
     const endTime=Math.min(duration,audioTime+1);await audioSource.add(await mixer.chunk(audioTime,endTime));audioTime=endTime;
    }
    progress=(i+1)/count;onProgress(progress);await wait();
   }
   source.close();audioSource?.close();await output.finalize();check();
   return{blob:new Blob([output.target.buffer],{type:mp4?'video/mp4':'video/webm'}),poster,width,height,fps,duration,extension:mp4?'mp4':'webm',keys:path,
    audio:{included:!!audioSource,codec:audioCodec,sources:soundPlan?.urls.length||0,mode:'exhibition-proximity'}};
  }catch(e){if(output.state!=='finalized'&&output.state!=='canceled')await output.cancel();throw e;}
  finally{audioController?.abort();audioController=null;mixer?.dispose();end(saved);if(soundSuspended)window.ExhibitionProximityAudio?.resume();}
 }

 return Object.freeze({still,film,sound:spatialSound,cancel:()=>{cancelled=true;audioController?.abort(new DOMException('Export cancelled.','AbortError'));},state:()=>({busy,progress,maxResolution:[3840,2160]})});
}
