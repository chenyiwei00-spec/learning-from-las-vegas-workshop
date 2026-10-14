import * as THREE from 'three';
export class ModelThumbnails{
 constructor(environment){this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,powerPreference:'low-power'});this.renderer.setSize(192,160);this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.15;this.environment=environment;}
 render(loaded){this.renderer.setSize(192,160);this.renderer.toneMappingExposure=1.15;const scene=new THREE.Scene();scene.environment=this.environment;scene.environmentIntensity=.65;scene.add(new THREE.HemisphereLight('#ffffff','#d3cdc4',2));const light=new THREE.DirectionalLight('#fff8ee',3.2);light.position.set(-4,7,5);scene.add(light);
  const object=loaded.scene.clone(true),holder=new THREE.Group(),box=new THREE.Box3().setFromObject(object),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3()),k=2.6/Math.max(...size);
  holder.add(object);holder.scale.setScalar(k);holder.position.copy(center).multiplyScalar(-k);scene.add(holder);const camera=new THREE.PerspectiveCamera(38,192/160,.01,30);camera.position.set(3,1.6,4.6);camera.lookAt(0,0,0);this.renderer.render(scene,camera);return this.renderer.domElement.toDataURL('image/png');}
 dispose(){this.renderer.dispose();}
}
