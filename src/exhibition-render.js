import * as THREE from 'three';
import {FLOOR_SIZE} from './exhibition-dimensions.js';
const ATMOSPHERE_SCALE=FLOOR_SIZE/100;
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {SSRPass} from 'three/examples/jsm/postprocessing/SSRPass.js';
import {GTAOPass} from 'three/examples/jsm/postprocessing/GTAOPass.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass.js';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {Sky} from 'three/examples/jsm/objects/Sky.js';

/** Human-view HDR pipeline; reflections/AO share the geometry buffer and render only on demand. */
export function createExhibitionRender({renderer,scene,camera}){
 let composer=null,ssr=null,ao=null,scattering=null,selectedRoads=[];
 function ensurePipeline(){if(composer)return;
 composer=new EffectComposer(renderer);ssr=new SSRPass({renderer,scene,camera,width:800,height:600,selects:[]});
 ssr.resolutionScale=.5;ssr.opacity=0;ssr.maxDistance=26;ssr.thickness=.16;ssr.infiniteThick=false;ssr.bouncing=false;ssr.fresnel=true;ssr.distanceAttenuation=true;
 ao=new GTAOPass(scene,camera,400,300);ao.setGBuffer(ssr.beautyRenderTarget.depthTexture,ssr.normalRenderTarget.texture);ao.blendIntensity=1.85;
 ao.updateGtaoMaterial({radius:1.2,thickness:1.1,distanceExponent:1.6,distanceFallOff:.65,samples:8,screenSpaceRadius:false});ao.updatePdMaterial({samples:8,radius:5});
 // Dust/shafts belong in the beauty pass, never in the solid normal buffer.
 const normalPass=ssr._renderOverride.bind(ssr);
 ssr._renderOverride=(...args)=>{const hidden=[];scene.traverse(o=>{if(o.visible&&(o.name==='studio-volumetric-sunlight'||o.isPoints||o.isLine)){hidden.push(o);o.visible=false;}});try{return normalPass(...args);}finally{hidden.forEach(o=>o.visible=true);}};
 scattering=new ShaderPass({
 uniforms:{tDiffuse:{value:null},tDepth:{value:ssr.beautyRenderTarget.depthTexture},inverseProjection:{value:camera.projectionMatrixInverse},cameraWorld:{value:camera.matrixWorld},sunDepth:{value:null},sunMatrix:{value:new THREE.Matrix4()},shadowReady:{value:0},worldScale:{value:ATMOSPHERE_SCALE},sunStrength:{value:1},sunDirection:{value:new THREE.Vector3(-.78,.32,.56).normalize()}},
 vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
 fragmentShader:`#include <packing>
 uniform sampler2D tDiffuse,tDepth,sunDepth;uniform mat4 inverseProjection,cameraWorld,sunMatrix;uniform float shadowReady,worldScale,sunStrength;uniform vec3 sunDirection;varying vec2 vUv;
 void main(){
  vec4 pixel=texture2D(tDiffuse,vUv),clip=vec4(vUv*2.0-1.0,texture2D(tDepth,vUv).x*2.0-1.0,1.0),view=inverseProjection*clip;view/=view.w;
  vec3 start=(cameraWorld*vec4(0.,0.,0.,1.)).xyz,end=(cameraWorld*view).xyz,ray=end-start;float L=min(length(ray),90.0*worldScale),amount=0.0,transmittance=1.0;ray=normalize(ray);
  float jitter=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
  float mu=dot(ray,sunDirection),phase=.32+.90*pow(max(0.,mu),5.);
  for(int i=0;i<24;i++){float t=(float(i)+jitter)/24.0;vec3 p=start+ray*L*t;vec4 q=sunMatrix*vec4(p,1.);q.xyz/=q.w;float lit=1.;
   if(shadowReady>.5&&q.x>0.&&q.x<1.&&q.y>0.&&q.y<1.&&q.z>0.&&q.z<1.)lit=step(q.z-.00065,unpackRGBAToDepth(texture2D(sunDepth,q.xy)));
   float density=.018/worldScale*exp(-max(0.,p.y)*.024/worldScale),scatter=1.-exp(-density*L/24.);
   amount+=lit*scatter*transmittance;transmittance*=1.-scatter;
  }
  vec3 haze=vec3(1.0)*amount*phase*1.5;
  pixel.rgb*=mix(.82,1.,transmittance);
  gl_FragColor=vec4(pixel.rgb+haze*sunStrength,pixel.a);
 }`
 });
 const finiteHDR=new ShaderPass({uniforms:{tDiffuse:{value:null}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 p=texture2D(tDiffuse,vUv);if(!(p.r>=0.))p.r=0.;if(!(p.g>=0.))p.g=0.;if(!(p.b>=0.))p.b=0.;gl_FragColor=vec4(min(p.rgb,vec3(64.)),1.);}'});
 const bloom=new UnrealBloomPass(new THREE.Vector2(800,600),.16,.35,3.8);
 const grade=new ShaderPass({uniforms:{tDiffuse:{value:null}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 p=texture2D(tDiffuse,vUv);float y=dot(p.rgb,vec3(.2126,.7152,.0722));vec3 c=max(vec3(0.),vec3(y)+(p.rgb-vec3(y))*1.13);c*=mix(.53,1.18,smoothstep(.025,1.1,y));gl_FragColor=vec4(c,p.a);}'});
 composer.addPass(ssr);composer.addPass(ao);composer.addPass(scattering);composer.addPass(finiteHDR);composer.addPass(bloom);composer.addPass(grade);composer.addPass(new OutputPass());
 ssr.selects=selectedRoads;resizePipeline();
 }
 const skyScene=new THREE.Scene(),sky=new Sky();sky.scale.setScalar(500);skyScene.add(sky);
 Object.assign(sky.material.uniforms.turbidity,{value:2});Object.assign(sky.material.uniforms.rayleigh,{value:1.8});sky.material.uniforms.mieCoefficient.value=.003;sky.material.uniforms.sunPosition.value.set(-.78,.32,.56);
 const pmrem=new THREE.PMREMGenerator(renderer),skyTarget=pmrem.fromScene(skyScene,.04),whiteRoom=new RoomEnvironment(),whiteTarget=pmrem.fromScene(whiteRoom,.04);whiteRoom.dispose();pmrem.dispose();sky.geometry.dispose();sky.material.dispose();
 const previousEnvironment=scene.environment;scene.environment=skyTarget.texture;scene.environmentIntensity=.24;
 const cubeTarget=new THREE.WebGLCubeRenderTarget(128,{type:THREE.HalfFloatType,generateMipmaps:true,minFilter:THREE.LinearMipmapLinearFilter}),cube=new THREE.CubeCamera(.1,200,cubeTarget);let cached=null,captured=null,pending=null,renders=0,frames=0,enabled=false,width=0,height=0;
 function capture(){
  if(!pending)return;const value=pending;pending=null;
  const roads=[];value.group.traverse(o=>{if(o.isMesh&&o.userData.road){roads.push(o);o.visible=false;}});
  const shafts=scene.getObjectByName('studio-volumetric-sunlight'),visible=shafts?.visible;if(shafts)shafts.visible=false;
  const old=renderer.getRenderTarget(),auto=renderer.shadowMap.autoUpdate;
  try{cube.position.set(0,Math.max(2,(value.bounds.min.y+value.bounds.max.y)*.3),0);renderer.shadowMap.autoUpdate=false;cube.update(renderer,scene);
   const pm=new THREE.PMREMGenerator(renderer),next=pm.fromCubemap(cubeTarget.texture);pm.dispose();captured?.dispose();captured=next;
   for(const road of roads){road.material.envMap=captured.texture;road.material.envMapIntensity=1.25;road.material.needsUpdate=true;}renders++;
  }finally{roads.forEach(o=>o.visible=true);if(shafts)shafts.visible=visible;renderer.setRenderTarget(old);renderer.shadowMap.autoUpdate=auto;}
 }
 function resizePipeline(){composer.setPixelRatio(1);composer.setSize(width||800,height||600);ssr.ssrMaterial.defines.MAX_STEP=Math.min(192,ssr.ssrMaterial.defines.MAX_STEP);ssr.ssrMaterial.needsUpdate=true;ao.setSize(Math.ceil((width||800)*.5),Math.ceil((height||600)*.5));}
 return {

  setLighting:light=>{scene.environmentIntensity=.025+.215*light.daylight;},
  updateSpace:(value,active)=>{const roads=[];if(value&&active)value.group.traverse(o=>{if(o.isMesh&&o.userData.road&&o.material.metalness>.8)roads.push(o);});selectedRoads=roads;if(ssr)ssr.selects=roads;
   if(roads.length&&value&&active&&value!==cached){cached=value;pending=value;}
  },
  setSize:(w,h)=>{const scale=Math.min(1,1400/Math.max(w,h)),W=Math.max(1,Math.round(w*scale)),H=Math.max(1,Math.round(h*scale));if(W===width&&H===height)return;width=W;height=H;if(composer)resizePipeline();},
  render:(room,viewCamera)=>{enabled=!!room;scene.environment=room?whiteTarget.texture:skyTarget.texture;if(!room){renderer.render(scene,viewCamera);return;}ensurePipeline();capture();ssr.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(camera.projectionMatrix);ssr.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(camera.projectionMatrixInverse);scattering.uniforms.inverseProjection.value.copy(camera.projectionMatrixInverse);scattering.uniforms.cameraWorld.value.copy(camera.matrixWorld);const sun=scene.getObjectByName('gallery-sunlight'),hadShadow=!!sun?.shadow.map;scattering.uniforms.sunStrength.value=(sun?.intensity||0)/9;if(sun?.shadow.map){scattering.uniforms.sunDirection.value.copy(sun.position).sub(sun.target.position).normalize();scattering.uniforms.sunDepth.value=sun.shadow.map.texture;scattering.uniforms.sunMatrix.value=sun.shadow.matrix;scattering.uniforms.shadowReady.value=1;}composer.render();frames++;return !hadShadow&&!!sun?.shadow.map;},
  state:()=>({enabled,passes:['screen-space-reflection','contact-occlusion','shadow-raymarched-scattering','bloom','colour-grade','HDR-output'],width,height,reflectionScale:.5,allocated:!!composer,mirrorMeshes:selectedRoads.length,environmentCaptures:renders,frames}),
  dispose:()=>{if(composer){for(const p of composer.passes)p.dispose?.();composer.dispose();}cubeTarget.dispose();captured?.dispose();skyTarget.dispose();whiteTarget.dispose();scene.environment=previousEnvironment;}
 };
}
