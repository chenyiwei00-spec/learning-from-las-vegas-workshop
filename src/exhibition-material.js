import * as THREE from 'three';

/* Keep archive colour legible under the gallery's white lighting. */
export function exhibitionMaterials(root){
 const converted=new Map();
 const make=original=>{
  if(converted.has(original))return converted.get(original);
  const material=new THREE.MeshBasicMaterial({
   color:original.color?.clone()||new THREE.Color(0xffffff),map:original.map||null,
   vertexColors:original.vertexColors,transparent:original.transparent,opacity:original.opacity,
   alphaMap:original.alphaMap||null,alphaTest:original.alphaTest,side:original.side,
   depthWrite:original.depthWrite,depthTest:original.depthTest,toneMapped:false
  });
  material.name=original.name;material.userData={...original.userData,exhibitionColour:'vivid-archive-v1'};
  material.onBeforeCompile=shader=>{
   shader.vertexShader='varying vec3 vArchiveNormal;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvArchiveNormal = normalize(normalMatrix * normal);');
   shader.fragmentShader='varying vec3 vArchiveNormal;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',[
    '#include <opaque_fragment>',
    'float archiveLuma = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));',
    'vec3 archiveColour = vec3(archiveLuma) + (gl_FragColor.rgb - vec3(archiveLuma)) * 1.18;',
    'float archiveDepth = 0.84 + 0.16 * max(dot(normalize(vArchiveNormal), normalize(vec3(-0.35, 0.7, 1.0))), 0.0);',
    'gl_FragColor.rgb = clamp(archiveColour * archiveDepth, 0.0, 1.0);'
   ].join('\n'));
  };
  material.customProgramCacheKey=()=> 'vivid-archive-v1';
  converted.set(original,material);return material;
 };
 root.traverse(object=>{
  if(!object.isMesh||!object.material)return;
  if(!object.geometry.attributes.normal)object.geometry.computeVertexNormals();
  object.material=Array.isArray(object.material)?object.material.map(make):make(object.material);
 });
 for(const original of converted.keys())original.dispose();
 return {mode:'vivid-archive-v1',toneMapped:false,saturation:1.18,minShading:.84};
}
