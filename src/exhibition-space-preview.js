import * as THREE from 'three';
import {Sky} from 'three/examples/jsm/objects/Sky.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
/* One small reused renderer: space cards share the axonometric scene's light,
   environment and material response, instead of model-viewer's bright IBL. */
export function createSpacePreviews({scene}){
 let renderer=null,environment=null,count=0,disposed=false;const loader=new GLTFLoader();
 async function preview(row){
  if(disposed||!(row.glb instanceof Blob))throw Error('Space preview unavailable.');
  const root=(await loader.parseAsync(await row.glb.arrayBuffer(),'')).scene;
  const geometries=new Set(),materials=new Set(),textures=new Set();
  root.traverse(o=>{if(o.isMesh){geometries.add(o.geometry);o.castShadow=false;o.receiveShadow=false;for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);m.clippingPlanes=[];for(const v of Object.values(m))if(v?.isTexture)textures.add(v);}}});
  try{
   if(!renderer){renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(1);renderer.setSize(800,600,false);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
    // A PMREM render target belongs to its WebGL context. Recreate the same sky
    // once here instead of reading another renderer's empty GPU texture.
    const skyScene=new THREE.Scene(),sky=new Sky();sky.scale.setScalar(500);skyScene.add(sky);sky.material.uniforms.turbidity.value=2;sky.material.uniforms.rayleigh.value=1.8;sky.material.uniforms.mieCoefficient.value=.003;sky.material.uniforms.sunPosition.value.set(-.78,.32,.56);
    const pmrem=new THREE.PMREMGenerator(renderer);environment=pmrem.fromScene(skyScene,.04);pmrem.dispose();sky.geometry.dispose();sky.material.dispose();
   }
   const display=new THREE.Scene();display.background=new THREE.Color(0xf2f2f2);display.environment=environment.texture;display.environmentIntensity=scene.environmentIntensity;
   for(const original of scene.children)if(original.isHemisphereLight||original.isDirectionalLight){const light=original.clone();light.castShadow=false;display.add(light);if(light.isDirectionalLight){light.target=original.target.clone();display.add(light.target);}}
   display.add(root);root.updateMatrixWorld(true);const b=new THREE.Box3().setFromObject(root),centre=b.getCenter(new THREE.Vector3()),radius=Math.max(.01,b.getSize(new THREE.Vector3()).length()),camera=new THREE.OrthographicCamera(-1,1,1,-1,.01,radius*6+10);
   camera.position.copy(centre).addScaledVector(new THREE.Vector3(1,1,1).normalize(),radius*2+1);camera.lookAt(centre);camera.updateMatrixWorld(true);
   let x=0,y=0;for(let i=0;i<8;i++){const p=new THREE.Vector3(i&1?b.max.x:b.min.x,i&2?b.max.y:b.min.y,i&4?b.max.z:b.min.z).applyMatrix4(camera.matrixWorldInverse);x=Math.max(x,Math.abs(p.x));y=Math.max(y,Math.abs(p.y));}
   const half=Math.max(y,x/(4/3),.01)*1.08;camera.left=-half*4/3;camera.right=half*4/3;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();renderer.render(display,camera);count++;
   return await new Promise((resolve,reject)=>renderer.domElement.toBlob(blob=>blob?resolve(blob):reject(Error('Space card could not render.')),'image/png'));
  }finally{geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>{t.source?.data?.close?.();t.dispose();});renderer?.renderLists.dispose();}
 }
 return {preview,state:()=>({count,projection:'orthographic',background:'#f2f2f2',environmentIntensity:scene.environmentIntensity,lighting:'axonometric-scene'}),dispose:()=>{disposed=true;environment?.dispose();renderer?.dispose();renderer=null;}};
}
