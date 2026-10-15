import * as THREE from 'three';
export function chooseOrbitPivot(objects,nearRadius=60){
 const bounds=new THREE.Box3();let count=0;
 for(const object of objects){object.updateWorldMatrix(true,true);const b=new THREE.Box3().setFromObject(object);if(!b.isEmpty()){bounds.union(b);count++;}}
 if(!count)return {point:new THREE.Vector3(),mode:'floor',count:0};
 const point=bounds.getCenter(new THREE.Vector3()),mode=count===1&&Math.hypot(point.x,point.z)<=nearRadius?'object':'centred-height';
 if(mode!=='object'){point.x=0;point.z=0;}return {point,mode,count};
}
export function createOrbitPivot({controls,camera,getObjects,nearRadius=60}){
 const originalUpdate=controls.update,offset=new THREE.Quaternion(),basis=new THREE.Matrix4();let chosen={point:new THREE.Vector3(),mode:'floor',count:0};
 // Retarget the orbit without reframing the current image. The orientation
 // offset keeps an off-centre pivot at its current screen position while orbiting.
 controls.update=function(...args){const changed=originalUpdate.apply(controls,args);camera.quaternion.multiply(offset);camera.updateMatrixWorld(true);return changed;};
 function refresh({reset=false}={}){
  chosen=chooseOrbitPivot(getObjects(),nearRadius);
  if(!reset&&controls.target.distanceToSquared(chosen.point)<1e-12)return;
  const quaternion=camera.quaternion.clone();controls.target.copy(chosen.point);basis.lookAt(camera.position,chosen.point,camera.up);const look=new THREE.Quaternion().setFromRotationMatrix(basis);
  if(reset){offset.identity();camera.quaternion.copy(look);}else{offset.copy(look).invert().multiply(quaternion);camera.quaternion.copy(quaternion);}
  camera.updateMatrixWorld(true);
 }
 const ended=()=>refresh();controls.addEventListener('end',ended);refresh();
 return {refresh,state:()=>({mode:chosen.mode,count:chosen.count,point:chosen.point.toArray(),quaternion:camera.quaternion.toArray()}),dispose:()=>{controls.removeEventListener('end',ended);controls.update=originalUpdate;}};
}
