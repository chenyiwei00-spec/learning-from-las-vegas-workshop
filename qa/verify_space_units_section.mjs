import assert from 'node:assert/strict';
import * as THREE from 'three';
import {preparePlacedSources} from '../src/exhibition-inhabitable-input.js';
import {sectionSegments} from '../src/exhibition-section.js';
import {SETTINGS} from '../src/inhabitable/form-state.js';
import {FLOOR_SIZE,CELL_SIZE,GRID_COUNT,WALK_SIZE} from '../src/exhibition-dimensions.js';
assert.equal(FLOOR_SIZE,400);assert.equal(CELL_SIZE,20);assert.equal(GRID_COUNT,20);assert(WALK_SIZE>=FLOOR_SIZE);
const make=factor=>[0,1].map(i=>{
 const object=new THREE.Mesh(new THREE.BoxGeometry(2,4,2),new THREE.MeshStandardMaterial());
 object.position.set((i?4:-4)*factor,2*factor,(i?2:-2)*factor);object.scale.setScalar(factor);
 return {id:'source-'+i,modelId:'model-'+i,name:'Test',object,layout:{col:8+i*3,row:9+i,span:1,scale:1,rotation:0}};
});
const small=await preparePlacedSources(make(1),SETTINGS),large=await preparePlacedSources(make(4),SETTINGS);
assert.equal(large.worldScale,small.worldScale*4);assert.equal(large.settings.worldScale,large.worldScale);
assert.deepEqual(large.items,small.items);assert.equal(large.settings.seed,small.settings.seed);
for(const key of Object.keys(small.sources))assert.deepEqual(large.sources[key].positions,small.sources[key].positions);
const mesh=new THREE.Mesh(new THREE.BoxGeometry(2,4,6));mesh.position.set(5,3,-2);mesh.rotation.y=.3;mesh.scale.set(2,3,4);mesh.updateMatrixWorld();
for(const axis of ['x','y','z']){
 const normal=new THREE.Vector3();normal[axis]=-1;const plane=new THREE.Plane(normal,mesh.position[axis]),segments=sectionSegments(mesh,plane);
 assert(segments.length>=24);for(let i=0;i<segments.length;i+=3)assert(Math.abs(plane.distanceToPoint(new THREE.Vector3(...segments.slice(i,i+3))))<1e-5);
}
assert.equal(sectionSegments(mesh,new THREE.Plane(new THREE.Vector3(0,-1,0),1000)).length,0);
console.log('PASS: 400m plan / 20m cells; exact 4x physical conversion without multiplying the solver volume; world-aligned opaque cut contours for all section axes.');
