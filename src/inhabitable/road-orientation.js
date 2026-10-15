import * as THREE from 'three';
/** Repair inward-wound older road slabs without modifying their stored arrays. */
export function orientRoadGeometry(geometry){
 if(geometry.userData.roadOrientation==='outward-v1')return;
 const p=geometry.attributes.position,idx=geometry.index;
 geometry.computeBoundingBox();const centre=geometry.boundingBox.getCenter(new THREE.Vector3()),size=geometry.boundingBox.getSize(new THREE.Vector3());
 const a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3(),cross=new THREE.Vector3();let volume=0;
 for(let i=0,n=idx?idx.count:p.count;i<n;i+=3){a.fromBufferAttribute(p,idx?idx.getX(i):i).sub(centre);b.fromBufferAttribute(p,idx?idx.getX(i+1):i+1).sub(centre);c.fromBufferAttribute(p,idx?idx.getX(i+2):i+2).sub(centre);volume+=a.dot(cross.crossVectors(b,c));}
 if(volume< -Math.max(1e-10,size.x*size.y*size.z*1e-8)){
  const count=idx?idx.count:p.count,indices=new Uint32Array(count);
  for(let i=0;i<count;i+=3){indices[i]=idx?idx.getX(i):i;indices[i+1]=idx?idx.getX(i+2):i+2;indices[i+2]=idx?idx.getX(i+1):i+1;}
  geometry.setIndex(new THREE.BufferAttribute(indices,1));
  if(geometry.attributes.normal){const normals=geometry.attributes.normal.clone();for(let i=0;i<normals.count;i++)normals.setXYZ(i,-normals.getX(i),-normals.getY(i),-normals.getZ(i));geometry.setAttribute('normal',normals);}
  else geometry.computeVertexNormals();
 }
 geometry.userData.roadOrientation='outward-v1';
}
