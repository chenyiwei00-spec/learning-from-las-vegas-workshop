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
// This compact nine-fragment layout exhausted every automatic repair before
// connected doorway selection and the continuous sloping-spine repair.
const placed=[source('red',-4,-2),source('blue',3,3,0x2267ce)];
const input=await preparePlacedSources(placed,{...SETTINGS,moduleCount:9});
const plan=generateSurreal(input.items,input.sources,{...input.settings,seed:45});
assert(plan.validation.routesClear);assert(plan.validation.verticalRange>2);
assert.equal(plan.validation.growthAttempts,4);
assert.equal(plan.validation.terrainRepair.kind,'continuous-sloping-spine');
assert.equal(plan.validation.topology.boundaryEdges,0);assert.equal(plan.validation.topology.nonManifoldEdges,0);
assert(Math.abs(plan.validation.routeWidth*plan.settings.worldScale-SETTINGS.corridorWidth)<1e-6);
const {width,depth}=plan.validation.outputFootprint,t=plan.validation.targetFootprint;
assert(Math.abs(width*depth/(t.width*t.depth)-1)<1e-5);
console.log('PASS: formerly failing compact layout produces supported full-width sloping circulation, a closed core and the source-layout footprint.');
