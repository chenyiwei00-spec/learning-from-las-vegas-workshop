import assert from 'node:assert/strict';
import * as THREE from 'three';
import {preparePlacedSources,layoutSeed,layoutSignature,locateInHall} from '../src/exhibition-inhabitable-input.js';
import {generateSurreal} from '../src/inhabitable/surreal-generator.js';
import {createArchitecture} from '../src/inhabitable/form-scene.js';
import {topology} from '../src/inhabitable/surreal-volume.js';
import {vertexColor} from '../src/inhabitable/surreal-volume.js';
import {SETTINGS} from '../src/inhabitable/form-state.js';
function source(id,x,z,color=0xcf5830){
 const geometry=new THREE.CylinderGeometry(.7,1.1,4,24,24),mesh=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color}));mesh.position.y=2;
 const object=new THREE.Group();object.add(mesh);object.position.set(x,0,z);
 return {id:'placement-'+id,modelId:'model-'+id,name:id,object,layout:{col:(x+20)/2,row:(z+20)/2,span:1,scale:1,rotation:0,offsetX:0,offsetZ:0}};
}
const placed=[source('red',-4,-2),source('blue',3,3,0x2267ce)];
const input=await preparePlacedSources(placed,{...SETTINGS,moduleCount:3}),a=generateSurreal(input.items,input.sources,input.settings),b=generateSurreal(input.items,input.sources,input.settings);
assert.equal(a.nodes.length,3);assert(a.validation.verticalRange>2,'A multilevel space must have real floor height variation.');assert(a.validation.maxGrade>.025,'Routes must include slopes.');assert(a.validation.routesClear&&a.validation.topology.components===1);
assert.equal(a.validation.topology.boundaryEdges,0);
const roadTopology=topology(a.meshes.find(m=>m.road));assert.equal(roadTopology.boundaryEdges,0);assert.equal(roadTopology.nonManifoldEdges,0);
a.meshes.forEach((m,i)=>{assert.deepEqual(m.positions,b.meshes[i].positions);assert.deepEqual(m.colors,b.meshes[i].colors);if(m.normals)assert.deepEqual(m.normals,b.meshes[i].normals);});
for(const item of input.items){const n=a.nodes.find(n=>n.sourceId===item.id);assert.equal(n.center.x,item.x);assert.equal(n.center.z,item.z);}
const idsChanged=placed.toReversed().map((p,i)=>({...p,id:'new-instance-'+i,name:'renamed'}));
assert.equal(layoutSeed(idsChanged),layoutSeed(placed));
assert.notEqual(layoutSignature({spaceSources:()=>idsChanged}),layoutSignature({spaceSources:()=>placed})); // old sound anchors must be rebound
const changed=placed.map((p,i)=>i?{...p,layout:{...p.layout,rotation:Math.PI/2}}:p);
assert.notEqual(layoutSeed(changed),layoutSeed(placed));
const group=createArchitecture({...a,meshes:a.meshes.filter(m=>m.name!=='Surrounding ground')}),{bounds}=locateInHall(group,{x:15,z:15});
assert(Math.abs(bounds.min.x+bounds.max.x)<1e-5&&Math.abs(bounds.min.z+bounds.max.z)<1e-5);
assert(!group.getObjectByName('Visitor / 1.72 m'));
assert(group.children.some(m=>m.material.metalness>=.4&&m.geometry.attributes.normal));
for(const p of placed){const original=p.id==='placement-red'?[-4,0,-2]:[3,0,3];assert.deepEqual(p.object.position.toArray(),original);}
// Constant source colours blend continuously at an attribution boundary.
const profile=Array.from({length:2},()=>new Float32Array([1,1,1,1]));
const mod=(x,color)=>({x,z:0,cy:0,scaleX:1,scaleY:1,scaleZ:1,matrix:[1,0,0,0,1,0,0,0,1],distortion:0,phase:0,a:{height:4,maxRadius:1,bands:2,angles:4,profile,colors:[Float32Array.from(Array(4).fill(color).flat()),Float32Array.from(Array(4).fill(color).flat())]}});
const mods=[mod(-1,[1,0,0]),mod(1,[0,0,1])],left=vertexColor(mods,-.001,0,0).color,right=vertexColor(mods,.001,0,0).color;
assert(left.every((v,i)=>Math.abs(v-right[i])<.01));assert(left[0]>.4&&left[2]>.4);
console.log(JSON.stringify(a.validation));
console.log('PASS: deterministic buffers, stable identity/order, layout anchors, manifold walkable fusion, centred bounds, no visitors, metallic smooth surfaces and continuous source-colour seams. No private assets or AI generation.');
