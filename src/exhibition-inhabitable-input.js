import * as THREE from 'three';
import {extractSource} from './inhabitable/form-source.js';
import {SETTINGS,validateComposition} from './inhabitable/form-state.js';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const layoutSnapshot=placement=>placement.spaceSources().map(s=>({id:s.id,modelId:s.modelId,name:s.name,...s.layout}));
const canonical=placed=>placed.map(s=>({modelId:s.modelId,...s.layout})).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
// Instance identity also guards in-flight generation and source-audio attribution.
export const layoutSignature=placement=>JSON.stringify(placement.spaceSources().map(s=>({id:s.id,modelId:s.modelId,...s.layout})).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b))));
export function layoutSeed(placed){let hash=2166136261;for(const c of JSON.stringify(canonical(placed)))hash=Math.imul(hash^c.charCodeAt(0),16777619);return (hash>>>0)%1000000;}
export function checkSettings(settings){return validateComposition({format:'borrowed-worlds-model-architecture',version:1,items:[],settings:{...SETTINGS,...settings}},[]).settings;}
/** Read the current placed objects without changing original geometry, transforms or materials. */
export async function preparePlacedSources(placed,settings,onProgress=()=>{}){
 if(placed.some(s=>s.target==='space'))throw Error('Saved spaces are display-only and cannot be fused into another space.');
 if(!placed.length)throw Error('Place at least one model before making a space.');
 if(placed.length>50)throw Error('Use up to 50 placed models for this space. Keep other models in the library.');
 placed=[...placed].sort((a,b)=>JSON.stringify({modelId:a.modelId,...a.layout}).localeCompare(JSON.stringify({modelId:b.modelId,...b.layout})));
 const measured=placed.map(s=>{s.object.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(s.object),size=bounds.getSize(new THREE.Vector3()),position=new THREE.Vector3().setFromMatrixPosition(s.object.matrixWorld);return {s,size,position};});
 const lo=new THREE.Vector3(Infinity,0,Infinity),hi=new THREE.Vector3(-Infinity,0,-Infinity);
 for(const m of measured){lo.min(m.position);hi.max(m.position);}
 let sourceTriangles=0;
 // Work in compact numerical units, then restore the measured metre scale.
 // This conversion is homogeneous: scaling all inputs 4x scales the space 4x.
 const sizes=measured.map(m=>Math.max(m.size.x,m.size.y,m.size.z)).sort((a,b)=>a-b);
 const worldScale=Math.max(sizes[Math.floor(sizes.length/2)]/3.2,(hi.x-lo.x)/24,(hi.z-lo.z)/24);
 if(!Number.isFinite(worldScale)||worldScale<=0)throw Error('The placed models have no measurable size.');
 const centre=lo.clone().add(hi).multiplyScalar(.5),layoutScale=1/worldScale,sources={},items=[],attribution={};
 for(let k=0;k<measured.length;k++){
  const {s,size,position}=measured[k],key=String(s.modelId);
  if(!sources[key]){
   const copy=s.object.clone(true);copy.position.set(0,0,0);copy.quaternion.identity();copy.scale.set(1,1,1);copy.updateMatrix();copy.updateMatrixWorld(true);
   const b=new THREE.Box3().setFromObject(copy),d=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3());if(!d.length()||!Number.isFinite(d.length()))throw Error(s.name+' contains no usable geometry.');
   copy.position.set(-c.x,-b.min.y,-c.z);const root=new THREE.Group();root.add(copy);root.scale.setScalar(3.2/Math.max(d.x,d.y,d.z));root.updateMatrixWorld(true);sources[key]=extractSource(root);sourceTriangles+=sources[key].index.length/3;
   if(sourceTriangles>1500000)throw Error('This layout exceeds the 1.5 million source-triangle budget. Use lighter models or a smaller collection for Make space.');
  }
  items.push({id:s.id,asset:key,x:(position.x-centre.x)*layoutScale,z:(position.z-centre.z)*layoutScale,rotation:s.layout.rotation||0,scale:clamp(Math.max(size.x,size.y,size.z)/(3.2*worldScale),.5,1.4)});
  attribution[s.id]={modelId:key,name:s.name,layout:{...s.layout},originalPosition:{x:position.x,z:position.z}};
  onProgress(Math.round((k+1)/measured.length*100),'Reading source model '+(k+1)+' / '+measured.length);
  await new Promise(resolve=>typeof requestAnimationFrame==='function'?requestAnimationFrame(resolve):setTimeout(resolve,0));
 }
 return {items,sources,settings:{...checkSettings(settings),layoutDriven:true,worldScale,moduleCount:Math.max(items.length,settings.moduleCount||9),seed:layoutSeed(placed)},centre:{x:0,z:0},layoutScale,worldScale,attribution};
}
export function locateInHall(group,centre,half=20){
 group.updateMatrixWorld(true);const local=new THREE.Box3().setFromObject(group),margin=.6;
 if(local.max.x-local.min.x>half*2-margin*2||local.max.z-local.min.z>half*2-margin*2)throw Error('This growth is wider than the hall. Reduce the fragment count or scale and make space again.');
 const x=-(local.min.x+local.max.x)/2,z=-(local.min.z+local.max.z)/2;
 group.position.set(x,.06,z);group.updateMatrixWorld(true);return {offset:{x,y:.06,z},bounds:new THREE.Box3().setFromObject(group)};
}
