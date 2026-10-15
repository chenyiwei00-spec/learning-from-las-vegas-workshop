import {Euler} from 'three';
import {moveWithCollisions} from './collision.js';
import {moveInVolume,canOccupy} from '../volume/collision.js';
export class FirstPersonController{
 constructor(viewer,layout,onMove=()=>{}){
  this.viewer=viewer;this.layout=layout;this.onMove=onMove;this.canvas=viewer.renderer.domElement;this.keys=new Set();this.active=false;this.yaw=layout.entranceDirection?Math.atan2(-layout.entranceDirection[0],-layout.entranceDirection[1]):-Math.PI/2;this.pitch=0;this.dragging=false;this.position={...layout.spawn};this.abort=new AbortController();const options={signal:this.abort.signal};
  const input=e=>e.target.closest?.('input,textarea,select');
  window.addEventListener('keydown',e=>{if(this.active&&e.code==='Escape'){this.keys.clear();this.dragging=false;if(document.pointerLockElement===this.canvas)document.exitPointerLock();return;}if(!this.active||input(e)||!['KeyW','KeyA','KeyS','KeyD','ShiftLeft','ShiftRight','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))return;if(document.activeElement!==this.canvas&&document.pointerLockElement!==this.canvas)return;e.preventDefault();this.keys.add(e.code);viewer.invalidate();},options);
  window.addEventListener('keyup',e=>this.keys.delete(e.code),options);window.addEventListener('blur',()=>this.keys.clear(),options);document.addEventListener('visibilitychange',()=>this.keys.clear(),options);
  document.addEventListener('pointerlockchange',()=>{this.keys.clear();this.dragging=false;this.onMove(this.getState());},options);
  this.canvas.addEventListener('pointerdown',e=>{if(!this.active)return;this.canvas.focus();this.dragging=true;this.lastPointer=[e.clientX,e.clientY];},options);
  this.canvas.addEventListener('click',()=>{if(!this.active||document.pointerLockElement===this.canvas)return;try{const p=this.canvas.requestPointerLock?.();p?.catch(()=>this.onMove(this.getState()));}catch{this.onMove(this.getState());}},options);
  window.addEventListener('pointerup',()=>this.dragging=false,options);
  window.addEventListener('pointermove',e=>{if(!this.active)return;const locked=document.pointerLockElement===this.canvas;if(!locked&&!this.dragging)return;const dx=locked?e.movementX:e.clientX-this.lastPointer[0],dy=locked?e.movementY:e.clientY-this.lastPointer[1];this.lastPointer=[e.clientX,e.clientY];this.yaw-=dx*.002;this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-dy*.002));this.applyCamera();viewer.invalidate();},options);
 }
 enter(){this.active=true;this.viewer.controls.enabled=false;this.viewer.camera.fov=70;this.viewer.camera.updateProjectionMatrix();this.viewer.frameTick=dt=>this.update(dt);this.applyCamera();this.canvas.focus();this.viewer.invalidate();this.onMove(this.getState());}
 leave(){this.active=false;this.keys.clear();if(document.pointerLockElement===this.canvas)document.exitPointerLock();this.viewer.frameTick=null;this.viewer.controls.enabled=true;this.viewer.camera.fov=38;this.viewer.camera.updateProjectionMatrix();}
 applyCamera(){this.viewer.camera.position.set(this.position.x,this.layout.avatar.eye,this.position.z);this.viewer.camera.quaternion.setFromEuler(new Euler(this.pitch,this.yaw,0,'YXZ'));}
 update(dt){if(!this.active)return false;let f=Number(this.keys.has('KeyW')||this.keys.has('ArrowUp'))-Number(this.keys.has('KeyS')||this.keys.has('ArrowDown')),s=Number(this.keys.has('KeyD')||this.keys.has('ArrowRight'))-Number(this.keys.has('KeyA')||this.keys.has('ArrowLeft'));if(!f&&!s)return false;const len=Math.hypot(f,s),speed=(this.keys.has('ShiftLeft')||this.keys.has('ShiftRight')?5:3)*Math.min(.05,Math.max(0,dt));f=f/len*speed;s=s/len*speed;const move=this.layout.mode==='inhabitable-sculpture'?moveInVolume:moveWithCollisions;this.position=move(this.layout,this.position,-Math.sin(this.yaw)*f+Math.cos(this.yaw)*s,-Math.cos(this.yaw)*f-Math.sin(this.yaw)*s);this.applyCamera();this.onMove(this.getState());return true;}
 getState(){return {active:this.active,position:{...this.position},positionValid:this.layout.mode==='inhabitable-sculpture'?canOccupy(this.layout,this.position.x,this.position.z):undefined,yaw:this.yaw,pitch:this.pitch,pointerLocked:document.pointerLockElement===this.canvas};}
 dispose(){this.leave();this.abort.abort();}
}
