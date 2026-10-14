import {Matrix4, Vector3} from 'three';

/** Bake static mesh instances into analysis coordinates. Source geometry is never changed. */
export function collectGeometry(scene){
 scene.updateMatrixWorld(true);const meshes=[];let count=0,faces=0;
 scene.traverse(o=>{if(!o.isMesh||!o.geometry.attributes.position)return;
  if(o.isSkinnedMesh||o.geometry.morphAttributes.position?.length)throw new Error('Geometry analysis currently requires static meshes; animated/deformed meshes remain available in the model viewer.');
  const p=o.geometry.attributes.position,n=o.isInstancedMesh?o.count:1;meshes.push({o,p,n});count+=p.count*n;faces+=(o.geometry.index?.count??p.count)/3*n;});
 if(!count||count>2000000||faces>4000000)throw new Error('Analysis supports static GLBs with up to 2 million vertices and 4 million triangles.');
 const positions=new Float64Array(count*3),indices=new Uint32Array(Math.floor(faces)*3),v=new Vector3(),instance=new Matrix4(),world=new Matrix4();let offset=0,t=0;
 for(const {o,p,n} of meshes)for(let k=0;k<n;k++){
  world.copy(o.matrixWorld);if(o.isInstancedMesh){o.getMatrixAt(k,instance);world.multiply(instance);}
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(world);positions.set(v.toArray(),(offset+i)*3);}
  const ix=o.geometry.index,total=ix?.count??p.count;
  for(let i=0;i+2<total;i+=3){const a=offset+(ix?ix.getX(i):i),b=offset+(ix?ix.getX(i+1):i+1),c=offset+(ix?ix.getX(i+2):i+2);indices.set(world.determinant()<0?[a,c,b]:[a,b,c],t);t+=3;}
  offset+=p.count;
 }
 return {positions,indices:indices.subarray(0,t),meshInstances:meshes.reduce((n,m)=>n+m.n,0)};
}
