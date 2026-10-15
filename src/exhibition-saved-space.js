import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {roadSupport} from './inhabitable/road-surface.js';
import {applyMarble} from './inhabitable/road-marble.js';
/** Older saved GLBs have no navigation snapshot. Recover support and nearby triangle collision. */
export async function openLegacySpace(row){
 const group=(await new GLTFLoader().parseAsync(await row.glb.arrayBuffer(),'')).scene;group.updateMatrixWorld(true);
 const meshes=[],road={positions:[],walkIndex:[]},bins=new Map(),triangles=[],size=2,point=new THREE.Vector3(),a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3(),closest=new THREE.Vector3(),triangle=new THREE.Triangle();let count=0;
 group.traverse(o=>{if(!o.isMesh)return;meshes.push(o);o.castShadow=true;o.receiveShadow=true;if(o.userData.road){o.material.dispose();o.material=applyMarble(o.geometry);}const p=o.geometry.attributes.position,idx=o.geometry.index,n=idx?.count||p.count;count+=n/3;
  for(let k=0;k<n;k+=3){const points=[0,1,2].map(j=>new THREE.Vector3().fromBufferAttribute(p,idx?idx.getX(k+j):k+j).applyMatrix4(o.matrixWorld));const v=points.flatMap(v=>v.toArray()),id=triangles.length;triangles.push(v);
   for(let z=Math.floor(Math.min(v[2],v[5],v[8])/size);z<=Math.floor(Math.max(v[2],v[5],v[8])/size);z++)for(let y=Math.floor(Math.min(v[1],v[4],v[7])/size);y<=Math.floor(Math.max(v[1],v[4],v[7])/size);y++)for(let x=Math.floor(Math.min(v[0],v[3],v[6])/size);x<=Math.floor(Math.max(v[0],v[3],v[6])/size);x++){const key=x+','+y+','+z;if(!bins.has(key))bins.set(key,[]);bins.get(key).push(id);}
   if(o.userData.road){const normal=new THREE.Vector3().crossVectors(points[1].clone().sub(points[0]),points[2].clone().sub(points[0]));if(normal.y>1e-8){const first=road.positions.length/3;road.positions.push(...v);road.walkIndex.push(first,first+1,first+2);}}
  }
 });
 if(!meshes.length)throw Error('This saved space has no visible geometry.');
 const clear=(x,z,h,radius)=>{for(const y of [.45,1,1.65,2.15]){point.set(x,h+y,z);const ids=new Set();for(let zz=Math.floor((z-radius)/size);zz<=Math.floor((z+radius)/size);zz++)for(let yy=Math.floor((h+y-radius)/size);yy<=Math.floor((h+y+radius)/size);yy++)for(let xx=Math.floor((x-radius)/size);xx<=Math.floor((x+radius)/size);xx++)for(const id of bins.get(xx+','+yy+','+zz)||[])ids.add(id);for(const id of ids){const p=triangles[id];triangle.set(a.fromArray(p),b.fromArray(p,3),c.fromArray(p,6));triangle.closestPointToPoint(point,closest);if(closest.distanceToSquared(point)<radius*radius)return false;}}return true;};
 const bounds=new THREE.Box3().setFromObject(group),centre=bounds.getCenter(new THREE.Vector3()),footprints=new THREE.Group();
 const entrance={x:centre.x,z:bounds.max.z+3,y:0},gathering={x:centre.x,z:centre.z,y:0};
 return {legacy:true,legacyClear:clear,group,meshes,plan:{meshes:[],nodes:[],paths:[],entrance,gathering,validation:{routesClear:true,headroom:2.35}},bounds,footprints,offset:{x:0,y:0,z:0},scale:1,support:roadSupport(road),layout:row.layout||[],attribution:{},triangles:count};
}
