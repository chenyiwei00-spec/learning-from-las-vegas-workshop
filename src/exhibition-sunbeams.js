import * as THREE from 'three';
/* Static dust and shadow-masked forward scattering, rendered only with the walking camera. */
export function createSunbeams({scene,sun}){
 const group=new THREE.Group();group.name='studio-volumetric-sunlight';scene.add(group);const beams=[],materials=[],dustMaterial=new THREE.PointsMaterial({color:0xfff1d5,size:.045,transparent:true,opacity:.12,depthWrite:false});let height=30;
 function rebuild(y){height=y;group.children.forEach(o=>o.geometry.dispose());materials.forEach(m=>m.dispose());materials.length=0;group.clear();beams.length=0;const positions=[],direction=sun.target.position.clone().sub(sun.position).normalize(),origins=[[-2,y-.5,0],[6,y-.5,0],[-2,y-.5,8],[6,y-.5,8],...[ -5,5,15].map(z=>[19.8,y-8,z]),...[ -5,5,15].map(x=>[x,y-8,19.8])];
  if(direction.y>=-.02||sun.intensity<.01)return;
  for(const at of origins){const origin=new THREE.Vector3(...at),length=origin.y/-direction.y,end=origin.clone().addScaledVector(direction,length),geometry=new THREE.CylinderGeometry(.35,1.5,length,18,1,true),uniforms={sunDepth:{value:null},sunMatrix:{value:sun.shadow.matrix},beamDirection:{value:direction},shadowReady:{value:0}};
   const material=new THREE.ShaderMaterial({uniforms,transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,vertexShader:`varying vec3 beamPosition;varying vec3 beamNormal;varying float alongBeam;void main(){vec4 p=modelMatrix*vec4(position,1.0);beamPosition=p.xyz;beamNormal=normalize(mat3(modelMatrix)*normal);alongBeam=uv.y;gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`#include <packing>
 uniform sampler2D sunDepth;uniform mat4 sunMatrix;uniform float shadowReady;uniform vec3 beamDirection;varying vec3 beamPosition;varying vec3 beamNormal;varying float alongBeam;
 void main(){vec4 q=sunMatrix*vec4(beamPosition,1.0);q.xyz/=q.w;float light=1.0;if(shadowReady>.5&&q.x>0.0&&q.y>0.0&&q.x<1.0&&q.y<1.0){float depth=unpackRGBAToDepth(texture2D(sunDepth,q.xy));light=step(q.z-.0015,depth);}vec3 view=normalize(cameraPosition-beamPosition);float face=pow(abs(dot(view,normalize(beamNormal))),1.7),forward=.30+.70*pow(abs(dot(view,beamDirection)),2.0),fade=pow(max(0.0,sin(3.14159265*alongBeam)),.6);vec3 colour=vec3(1.0,.78,.43);gl_FragColor=vec4(colour,light*face*forward*fade*.22);
 #include <colorspace_fragment>
 }`});materials.push(material);const mesh=new THREE.Mesh(geometry,material);mesh.position.copy(origin).add(end).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.clone().negate());mesh.onBeforeRender=()=>{if(sun.shadow.map){uniforms.sunDepth.value=sun.shadow.map.texture;uniforms.shadowReady.value=1;}};group.add(mesh);beams.push(mesh);
   for(let i=0;i<24;i++){const t=(i+.5)/24,p=origin.clone().lerp(end,t);p.x+=Math.sin(i*17.1)*(.35+t);p.z+=Math.cos(i*11.3)*(.35+t);positions.push(p.x,p.y,p.z);}
  }
  const dust=new THREE.BufferGeometry();dust.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));group.add(new THREE.Points(dust,dustMaterial));
 }
 return {setHeight:rebuild,setVisible:value=>group.visible=!!value,state:()=>({beams:beams.length,visible:group.visible,height,shadowMasked:true,dustParticles:beams.length*24}),dispose:()=>{scene.remove(group);group.children.forEach(o=>o.geometry.dispose());materials.forEach(m=>m.dispose());dustMaterial.dispose();}};
}
