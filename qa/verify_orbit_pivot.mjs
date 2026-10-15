import assert from 'node:assert/strict';
import * as THREE from 'three';
import {chooseOrbitPivot,createOrbitPivot} from '../src/exhibition-orbit-pivot.js';
const make=(x,y,z)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(10,20,10));m.position.set(x,y,z);return m;};
assert.deepEqual(chooseOrbitPivot([]).point.toArray(),[0,0,0]);
assert.deepEqual(chooseOrbitPivot([make(20,10,10)]).point.toArray(),[20,10,10]);
assert.deepEqual(chooseOrbitPivot([make(100,30,0)]).point.toArray(),[0,30,0]);
assert.deepEqual(chooseOrbitPivot([make(100,10,0),make(-30,30,0)]).point.toArray(),[0,20,0]);
class Controls extends THREE.EventDispatcher{constructor(camera){super();this.target=new THREE.Vector3();this.camera=camera;}update(){this.camera.lookAt(this.target);return true;}}
const camera=new THREE.OrthographicCamera(-100,100,100,-100,.1,2000);camera.position.set(480,480,480);camera.lookAt(0,0,0);camera.updateMatrixWorld();
const controls=new Controls(camera),before=camera.quaternion.clone(),position=camera.position.clone();let objects=[make(100,30,0)];
const pivot=createOrbitPivot({controls,camera,getObjects:()=>objects});controls.update();
assert(camera.position.distanceTo(position)<1e-8);assert(camera.quaternion.angleTo(before)<1e-7,'Retargeting must preserve the current camera orientation');
const anchor=chooseOrbitPivot(objects).point,projected=anchor.clone().project(camera),radius=camera.position.distanceTo(controls.target);
camera.position.sub(controls.target).applyAxisAngle(new THREE.Vector3(0,1,0),.2).add(controls.target);controls.update();
assert(Math.abs(camera.position.distanceTo(controls.target)-radius)<1e-8);assert(anchor.clone().project(camera).distanceTo(projected)<1e-7,'The new pivot must stay in place on screen during rotation');
objects=[];const q=camera.quaternion.clone();pivot.refresh();controls.update();assert(camera.quaternion.angleTo(q)<1e-7);assert.deepEqual(pivot.state().point,[0,0,0]);pivot.dispose();
console.log('PASS: empty-floor, near-single, far-single and multi-object pivots; retargeting keeps the view unchanged and rotation fixes the pivot on screen.');
