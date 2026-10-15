import * as THREE from 'three';
import {sunForTime} from './exhibition-solar.js';
export function createLightControls({scene,skylight,renderPipeline,invalidate}){
 const $=id=>document.getElementById(id),button=$('walk-lighting'),panel=$('walk-lighting-panel'),reset=$('walk-light-reset'),time=$('walk-light-time'),azimuth=$('walk-light-direction'),elevation=$('walk-light-elevation'),key='learning-vegas-sun-v1';
 let value=sunForTime(8),view='axonometric',opened=false,frame=0,disposed=false;
 try{const saved=JSON.parse(localStorage.getItem(key));if(saved&&['time','azimuth','elevation'].every(k=>Number.isFinite(saved[k])))value={time:Math.max(0,Math.min(24,saved.time)),azimuth:Math.max(0,Math.min(360,saved.azimuth)),elevation:Math.max(-90,Math.min(85,saved.elevation))};}catch{}
 function ui(){
  button.hidden=false;panel.hidden=!opened;button.setAttribute('aria-pressed',String(!panel.hidden));
  time.value=String(value.time);azimuth.value=String(value.azimuth);elevation.value=String(Math.max(-90,value.elevation));
  const minutes=Math.round(value.time*60);$('walk-light-time-value').textContent=String(Math.floor(minutes/60)).padStart(2,'0')+':'+String(minutes%60).padStart(2,'0');
  $('walk-light-direction-value').textContent=Math.round(value.azimuth)+'°';$('walk-light-elevation-value').textContent=Math.round(value.elevation)+'°';
 }
 function apply(){
  frame=0;if(disposed)return;const light=skylight.setLighting(value);renderPipeline.setLighting(light);
  const ambient=scene.children.find(o=>o.isHemisphereLight);if(ambient){ambient.intensity=.035+.045*light.daylight;ambient.color.set(view==='room'?0xffffff:0xdde4ed);ambient.groundColor.set(view==='room'?0x424242:0x42352b);}
  if(view==='room'){const background=new THREE.Color(0x282828).lerp(new THREE.Color(0xffffff),light.daylight);scene.background.copy(background);if(scene.fog)scene.fog.color.copy(background);}
  invalidate();
 }
 function set(next){
  if(Number.isFinite(next.time)){value=sunForTime(next.time);}
  for(const k of ['azimuth','elevation'])if(Number.isFinite(next[k]))value[k]=Math.max(k==='azimuth'?0:-90,Math.min(k==='azimuth'?360:85,next[k]));
  ui();if(!frame)frame=requestAnimationFrame(apply);try{localStorage.setItem(key,JSON.stringify(value));}catch{}
 }
 const toggle=()=>{opened=!opened;ui();},defaults=()=>set(sunForTime(8)),changeTime=()=>set({time:Number(time.value)}),changeDirection=()=>set({azimuth:Number(azimuth.value)}),changeHeight=()=>set({elevation:Number(elevation.value)}),stop=e=>e.stopPropagation();
 button.addEventListener('click',toggle);reset.addEventListener('click',defaults);time.addEventListener('input',changeTime);azimuth.addEventListener('input',changeDirection);elevation.addEventListener('input',changeHeight);
 panel.addEventListener('pointerdown',stop);panel.addEventListener('wheel',stop);panel.addEventListener('keydown',stop);
 apply();ui();
 return {set,setViewMode:mode=>{view=mode;ui();apply();},state:()=>({...value,open:!panel.hidden,daylight:skylight.state().lighting.daylight}),dispose:()=>{disposed=true;if(frame)cancelAnimationFrame(frame);button.removeEventListener('click',toggle);reset.removeEventListener('click',defaults);time.removeEventListener('input',changeTime);azimuth.removeEventListener('input',changeDirection);elevation.removeEventListener('input',changeHeight);panel.removeEventListener('pointerdown',stop);panel.removeEventListener('wheel',stop);panel.removeEventListener('keydown',stop);}};
}
