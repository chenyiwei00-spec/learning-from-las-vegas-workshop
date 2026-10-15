import * as THREE from 'three';
import {resolveSun} from './exhibition-solar.js';
import {FLOOR_SIZE} from './exhibition-dimensions.js';
const LIGHT_SCALE=FLOOR_SIZE/100;
import {createSunbeams} from './exhibition-sunbeams.js';

/* Real steel geometry casts a single cached directional shadow map through clear glazing. */
export function createSkylight({scene,renderer,height,floorMaterial,openAtmosphere=false}){
 const frame=new THREE.Group();frame.name='steel-glass-skylight';scene.add(frame);const steel=new THREE.MeshStandardMaterial({color:0x5f6870,roughness:.48,metalness:.65});const glazing=new THREE.MeshPhysicalMaterial({color:0xe7f1f4,roughness:.09,metalness:.02,transparent:true,opacity:.18,depthWrite:false,clearcoat:1,clearcoatRoughness:.06,side:THREE.DoubleSide});
 const glass=new THREE.Mesh(new THREE.PlaneGeometry(40,40),glazing);glass.name='skylight-glazing';glass.rotation.x=-Math.PI/2;glass.position.y=.12;frame.add(glass);
 const beams=[];for(let i=-20;i<=20;i+=4){for(const alongX of [true,false]){const mesh=new THREE.Mesh(new THREE.BoxGeometry(alongX?40:.16,.18,alongX?.16:40),steel);mesh.position.set(alongX?0:i,0,alongX?i:0);mesh.name='skylight-steel-beam';mesh.castShadow=true;mesh.receiveShadow=true;frame.add(mesh);beams.push(mesh);}}
 const sun=new THREE.DirectionalLight(0xffffff,9.0);sun.name='gallery-sunlight';sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-110,right:110,top:110,bottom:-110,near:.1,far:380*LIGHT_SCALE});sun.shadow.normalBias=.025*LIGHT_SCALE;sun.shadow.bias=-.00015;sun.shadow.radius=1.1;sun.target.position.set(0,0,0);scene.add(sun,sun.target);
 const shafts=createSunbeams({scene,sun});let roomMode=true,currentHeight=height,lighting=resolveSun({time:8});
 function updateSun(){sun.position.copy(lighting.direction).multiplyScalar(Math.max(180*LIGHT_SCALE,currentHeight*2+100));sun.color.copy(lighting.colour);sun.intensity=lighting.intensity;shafts.setHeight(currentHeight);sun.shadow.camera.updateProjectionMatrix();renderer.shadowMap.needsUpdate=true;}
 function setHeight(y){currentHeight=y;frame.position.y=y-.15;updateSun();}
 function setLighting(value){lighting=resolveSun(value);updateSun();return lighting;}
 function setRoomMode(value){roomMode=!!value;frame.visible=roomMode&&!openAtmosphere;shafts.setVisible(roomMode);sun.castShadow=roomMode;renderer.shadowMap.enabled=roomMode;renderer.shadowMap.needsUpdate=true;}
 setHeight(height);return {setHeight,setLighting,setRoomMode,updateCanopy:(result,active)=>{if(result&&active){const range=Math.max(25,Math.min(110*LIGHT_SCALE,result.bounds.getSize(new THREE.Vector3()).length()*.7+10));Object.assign(sun.shadow.camera,{left:-range,right:range,top:range,bottom:-range});sun.shadow.camera.updateProjectionMatrix();renderer.shadowMap.needsUpdate=true;}},state:()=>({lighting:{time:lighting.time,azimuth:lighting.azimuth,elevation:lighting.elevation,daylight:lighting.daylight,intensity:sun.intensity,colour:'#'+sun.color.getHexString(),sunPosition:sun.position.toArray()},visible:frame.visible,glass:!openAtmosphere,steelBeams:openAtmosphere?0:beams.length,height:frame.position.y+.15,shadowCasting:roomMode&&sun.castShadow,shadowResolution:2048,colouredLight:{active:false,ordinaryShadows:true},volumetric:shafts.state()}),dispose:()=>{shafts.dispose();scene.remove(frame,sun,sun.target);frame.children.forEach(m=>m.geometry.dispose());steel.dispose();glazing.dispose();sun.shadow.map?.dispose();}};
}
