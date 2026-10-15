import * as THREE from 'three';
import {extractSource} from './inhabitable/form-source.js';
import {SETTINGS,validateComposition} from './inhabitable/form-state.js';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const layoutSnapshot=placement=>placement.spaceSources().map(s=>({id:s.id,modelId:s.modelId,name:s.name,...s.layout}));
export const layoutSignature=placement=>JSON.stringify(layoutSnapshot(placement));
export function checkSettings(settings){return validateComposition({format:'borrowed-worlds-model-architecture',version:1,items:[],settings:{...SETTINGS,...settings}},[]).settings;}
/** Read the current placed objects without changing original geometry, transforms or materials. */
export async function preparePlacedSources(placed,settings,onProgress=()=>{}){
 if(!placed.length)throw Error('Place at least one model before making a space.');
 if(placed.length>12)throw Error('Use up to 12 placed models for this space. Keep other models in the library.');
 const measured=placed.map(s=>{s.object.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(s.object),size=bounds.getSize(new THREE.Vector3()),position=new THREE.Vector3().setFromMatrixPosition(s.object.matrixWorld);return {s,size,position};});
 const centre=measured.reduce((p,m)=>p.add(m.position),new THREE.Vector3()).multiplyScalar(1/measured.length),sources={},items=[],attribution={};
 for(let k=0;k<measured.length;k++){
  const {s,size,position}=measured[k],key=String(s.modelId);
  if(!sources[key]){
   const copy=s.object.clone(true);copy.position.set(0,0,0);copy.quaternion.identity();copy.scale.set(1,1,1);copy.updateMatrix();copy.updateMatrixWorld(true);
   const b=new THREE.Box3().setFromObject(copy),d=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3());if(!d.length()||!Number.isFinite(d.length()))throw Error(s.name+' contains no usable geometry.');
   copy.position.set(-c.x,-b.min.y,-c.z);const root=new THREE.Group();root.add(copy);root.scale.setScalar(3.2/Math.max(d.x,d.y,d.z));root.updateMatrixWorld(true);sources[key]=extractSource(root);
  }
  items.push({id:s.id,asset:key,x:clamp(position.x-centre.x,-18,18),z:clamp(position.z-centre.z,-18,18),rotation:s.layout.rotation||0,scale:clamp(Math.max(size.x,size.y,size.z)/3.2,.5,1.4)});
  attribution[s.id]={modelId:key,name:s.name,layout:{...s.layout}};
  onProgress(Math.round((k+1)/measured.length*100),'Reading source model '+(k+1)+' / '+measured.length);
  await new Promise(resolve=>typeof requestAnimationFrame==='function'?requestAnimationFrame(resolve):setTimeout(resolve,0));
 }
 return {items,sources,settings:checkSettings(settings),centre:{x:centre.x,z:centre.z},attribution};
}
export function locateInHall(group,centre,half=20){
 group.updateMatrixWorld(true);const local=new THREE.Box3().setFromObject(group),margin=.6;
 if(local.max.x-local.min.x>half*2-margin*2||local.max.z-local.min.z>half*2-margin*2)throw Error('This growth is wider than the hall. Reduce the fragment count or scale and make space again.');
 const x=clamp(centre.x,-half+margin-local.min.x,half-margin-local.max.x),z=clamp(centre.z,-half+margin-local.min.z,half-margin-local.max.z);
 group.position.set(x,.06,z);group.updateMatrixWorld(true);return {offset:{x,y:.06,z},bounds:new THREE.Box3().setFromObject(group)};
}
