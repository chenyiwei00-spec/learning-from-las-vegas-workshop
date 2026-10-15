import assert from 'node:assert/strict';
import * as THREE from 'three';
import {roundRoad,roadSupport} from '../src/inhabitable/road-surface.js';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {openLegacySpace} from '../src/exhibition-saved-space.js';
import {applyMarble} from '../src/inhabitable/road-marble.js';
import {topology} from '../src/inhabitable/surreal-volume.js';
const p=[],offsets=[],step=.28;
for(let z=0;z<12;z++)for(let x=0;x<4;x++){const q=[[x*step,1+z*.02,z*step],[(x+1)*step,1+z*.02,z*step],[(x+1)*step,1+(z+1)*.02,(z+1)*step],[x*step,1+(z+1)*.02,(z+1)*step]];offsets.push(p.length);for(const i of [0,1,2,0,2,3])p.push(...q[i]);}
const road=roundRoad({positions:Float32Array.from(p),thickness:.24},offsets,step),v=(i)=>new THREE.Vector3().fromArray(road.positions,i*3);
for(let k=0;k<road.walkIndex.length;k+=3){const ids=Array.from(road.walkIndex.subarray(k,k+3)),a=v(ids[0]),b=v(ids[1]),c=v(ids[2]),cross=b.sub(a).cross(c.sub(a));assert(cross.y>0,'Rendered road top must face upward in both beauty and normal passes');for(const i of ids)assert(road.normals[i*3+1]>.9);}
const top=topology({...road,index:road.sectionIndex});assert.equal(top.boundaryEdges,0);assert.equal(top.nonManifoldEdges,0);
assert(roadSupport(road)(.6,1.5).some(y=>y>1));
const oldIndices=road.index.slice();for(let i=0;i<oldIndices.length;i+=3)[oldIndices[i+1],oldIndices[i+2]]=[oldIndices[i+2],oldIndices[i+1]];
const oldNormals=Float32Array.from(road.normals,n=>-n),indicesBefore=oldIndices.slice(),normalsBefore=oldNormals.slice(),geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(road.positions,3));geometry.setAttribute('normal',new THREE.BufferAttribute(oldNormals,3));geometry.setIndex(new THREE.BufferAttribute(oldIndices,1));
const mat=applyMarble(geometry);assert.equal(mat.side,THREE.FrontSide);assert.deepEqual(geometry.index.array,road.index);assert.deepEqual(geometry.attributes.normal.array,road.normals);assert.deepEqual(oldIndices,indicesBefore);assert.deepEqual(oldNormals,normalsBefore);
const index=geometry.index,normal=geometry.attributes.normal;applyMarble(geometry);assert.equal(geometry.index,index);assert.equal(geometry.attributes.normal,normal);
console.log('PASS: upward road tops, outward closed slabs, stable walking support; inward saved roads repair idempotently without mutating stored arrays.');
// Previously exported GLBs must keep their real upper walking surface after repair.
globalThis.FileReader=class{readAsArrayBuffer(blob){blob.arrayBuffer().then(result=>{this.result=result;this.onloadend?.();});}};
const legacyGeometry=new THREE.BufferGeometry();legacyGeometry.setAttribute('position',new THREE.BufferAttribute(road.positions,3));legacyGeometry.setAttribute('normal',new THREE.BufferAttribute(oldNormals,3));legacyGeometry.setIndex(new THREE.BufferAttribute(oldIndices,1));
const legacyMesh=new THREE.Mesh(legacyGeometry,new THREE.MeshStandardMaterial({side:THREE.DoubleSide}));legacyMesh.userData.road=true;const legacyGroup=new THREE.Group();legacyGroup.add(legacyMesh);
const glb=new Blob([await new GLTFExporter().parseAsync(legacyGroup,{binary:true})],{type:'model/gltf-binary'}),opened=await openLegacySpace({glb});
assert(opened.support(.6,1.5).some(y=>y>1),'Reopened old GLBs must support walking on the top, not the underside');assert.equal(opened.meshes[0].material.side,THREE.FrontSide);
console.log('PASS: exported inward-wound legacy roads reopen opaque with upward walking support.');
