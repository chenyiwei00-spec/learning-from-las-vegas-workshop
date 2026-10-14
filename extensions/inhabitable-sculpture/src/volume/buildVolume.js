import * as T from 'three';
import {voxelSurface} from './surface.js';
export function buildVolume(volume){
 const root=new T.Group(),materials=[],geometries=[],stages=new Map(),material=new T.MeshStandardMaterial({vertexColors:true,roughness:.9,side:T.FrontSide});materials.push(material);root.name=volume.name+' / inhabitable sculptural solid';root.userData.volume=true;root.userData.modelId=volume.modelId;
 function stage(name,options){const surface=voxelSurface(volume,options),geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(surface.positions,3));geometry.setAttribute('normal',new T.BufferAttribute(surface.normals,3));geometry.setAttribute('color',new T.BufferAttribute(surface.colors,3));geometries.push(geometry);const mesh=new T.Mesh(geometry,material);mesh.name=name;mesh.castShadow=true;mesh.receiveShadow=true;mesh.userData={faceCount:surface.faces,stage:name};root.add(mesh);stages.set(name,mesh);return mesh;}
 stage('enlarged',{enlarged:true});stage('exterior',{});stage('cutaway',{cut:true});
 const lights=new T.Group();if(volume.viable){const point=new T.PointLight('#fff3da',35,18,2);point.position.set(volume.inside.x,1.9,volume.inside.z);lights.add(point);root.add(lights);}
 function setStage(name){for(const [id,m] of stages)m.visible=id===(name==='first-person'?'exterior':name);lights.visible=name==='first-person'||name==='cutaway';}
 function setCut(value){const old=stages.get('cutaway');root.remove(old);old.geometry.dispose();stages.delete('cutaway');stage('cutaway',{cut:true,cutZ:value});setStage('cutaway');}
 setStage('exterior');return {root,materials,stages,setStage,setCut,volume,originalMeshCount:0,dispose(){geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}};
}
