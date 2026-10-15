import * as THREE from 'three';
/** Shared metallic finish for collage exhibits, retaining source textures and vertex colours. */
export function exhibitionMaterials(root){
 const converted=new Map();
 const make=original=>{
  if(converted.has(original))return converted.get(original);
  const material=new THREE.MeshPhysicalMaterial({
   color:original.color?.clone()||new THREE.Color(0xffffff),map:original.map||null,vertexColors:original.vertexColors,
   normalMap:original.normalMap||null,normalScale:original.normalScale?.clone()||new THREE.Vector2(1,1),roughness:.32,metalness:.48,
   clearcoat:.4,clearcoatRoughness:.22,transparent:original.transparent,opacity:original.opacity,
   alphaMap:original.alphaMap||null,alphaTest:original.alphaTest,side:original.side,
   depthWrite:original.depthWrite,depthTest:original.depthTest,toneMapped:true
  });
  material.name=original.name;material.userData={...original.userData,exhibitionColour:'metallic-archive-v2'};converted.set(original,material);return material;
 };
 root.traverse(o=>{if(!o.isMesh||!o.material)return;if(!o.geometry.attributes.normal)o.geometry.computeVertexNormals();o.material=Array.isArray(o.material)?o.material.map(make):make(o.material);});
 for(const original of converted.keys())original.dispose();
 return {mode:'metallic-archive-v2',toneMapped:true,metalness:.48,roughness:.32,clearcoat:.4};
}
