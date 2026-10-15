import * as THREE from 'three';
import {inspectGLB,sha256,MAX_MODEL_BYTES} from './glb.js';
import {modelStorage} from './storage.js';

export class ModelRepository extends EventTarget{
 constructor({models=[],loader}){super();this.loader=loader;this.models=models.map(m=>({...m,origin:'original'}));this.buffers=new Map();this.cache=new Map();}
 async initialize(){try{for(const stored of await modelStorage('readonly')){this.buffers.set(stored.id,stored.buffer);this.models.push(stored.entry);}}catch{this.dispatchEvent(new CustomEvent('warning',{detail:'Imports work for this session. Browser storage is unavailable.'}));}return this.models;}
 list(){return this.models.map(m=>({...m}));}
 async load(id){
  if(this.cache.has(id))return this.cache.get(id);
  const entry=this.models.find(m=>m.id===id);if(!entry)throw Error('This model is not in the library.');
  const task=(async()=>{let buffer=this.buffers.get(id);if(!buffer){const response=await fetch(entry.url);if(!response.ok)throw Error('The model could not be read ('+response.status+').');if(Number(response.headers.get('Content-Length'))>MAX_MODEL_BYTES)throw Error('This model exceeds the 100 MB limit.');buffer=await response.arrayBuffer();}return this.parse(buffer,entry);})();
  this.cache.set(id,task);try{return await task;}catch(error){this.cache.delete(id);throw error;}
 }
 async parse(buffer,entry){
  const inspected=inspectGLB(buffer),gltf=await this.loader.parseAsync(buffer,'');
  gltf.scene.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(gltf.scene),size=box.getSize(new THREE.Vector3());
  if(box.isEmpty()||![...box.min,...box.max].every(Number.isFinite)||Math.max(...size)<=0){disposeModel(gltf.scene);throw Error('This model has no displayable geometry.');}
  const metadata={bytes:inspected.bytes,vertices:inspected.vertices,triangles:inspected.triangles,meshes:inspected.meshes,materials:inspected.materials,images:inspected.images,dimensions:size.toArray(),bounds:{min:box.min.toArray(),max:box.max.toArray()},sha256:await sha256(buffer),extensions:inspected.extensions};
  return {entry,scene:gltf.scene,animations:gltf.animations,metadata};
 }
 async importFile(file){
  if(!/\.glb$/i.test(file.name))throw Error('Choose a .glb file. Other formats are not imported.');
  if(file.size>MAX_MODEL_BYTES)throw Error('Choose a GLB smaller than 100 MB.');
  const buffer=await file.arrayBuffer();inspectGLB(buffer);const hash=await sha256(buffer),id='import-'+hash;
  const existing=this.models.find(m=>m.id===id);if(existing)return existing;
  const entry={id,name:file.name.replace(/\.glb$/i,''),subtitle:'Imported GLB / saved in this browser',filename:file.name,origin:'imported'};
  const loaded=await this.parse(buffer,entry);
  try{await modelStorage('readwrite',{id,entry,buffer});}catch{entry.subtitle='Imported GLB / this session only';this.dispatchEvent(new CustomEvent('warning',{detail:'The model is available this session, but browser storage could not save it.'}));}
  this.buffers.set(id,buffer);this.cache.set(id,Promise.resolve(loaded));this.models.push(entry);this.dispatchEvent(new CustomEvent('change',{detail:this.list()}));return entry;
 }
 async dispose(){for(const task of this.cache.values()){try{disposeModel((await task).scene);}catch{}}this.cache.clear();this.buffers.clear();}
}
export function disposeModel(root){const geometries=new Set(),materials=new Set(),textures=new Set();root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of [].concat(o.material||[])){materials.add(m);Object.values(m).forEach(t=>{if(t?.isTexture)textures.add(t);});}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>{t.dispose();t.source?.data?.close?.();});}
