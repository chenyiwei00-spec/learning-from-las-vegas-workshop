import * as THREE from 'three';
/* Three nearby source textures share world-space feathered boundaries, never tiled UVs. */
export function applyWeatherTransition(material,recipe){
 if(!recipe.neighbours.length||!material.map)return;material.weatherTransition=recipe;material.userData.softSourceTransition=true;
 material.onBeforeCompile=shader=>{const uniforms={weatherCentre:{value:new THREE.Vector2(...recipe.centre)},weatherWidth:{value:recipe.width}};let declarations='varying vec3 vWeatherWorld;uniform vec2 weatherCentre;uniform float weatherWidth;\n',mix='vec3 weatherRGB=texture2D(map,vMapUv).rgb;float weatherSum=1.0;float weatherOwnDistance=length(vWeatherWorld.xz-weatherCentre);\n';
  recipe.neighbours.forEach((n,i)=>{uniforms['weatherTexture'+i]={value:n.map};uniforms['weatherNext'+i]={value:new THREE.Vector2(...n.centre)};declarations+='uniform sampler2D weatherTexture'+i+';uniform vec2 weatherNext'+i+';\n';mix+='float weatherWeight'+i+'=1.0-smoothstep(0.0,weatherWidth,length(vWeatherWorld.xz-weatherNext'+i+')-weatherOwnDistance);weatherRGB+=texture2D(weatherTexture'+i+',vMapUv).rgb*weatherWeight'+i+';weatherSum+=weatherWeight'+i+';\n';});
  Object.assign(shader.uniforms,uniforms);shader.vertexShader='varying vec3 vWeatherWorld;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvWeatherWorld=(modelMatrix*vec4(transformed,1.0)).xyz;');shader.fragmentShader=declarations+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n'+mix+'weatherRGB/=weatherSum;diffuseColor.rgb=diffuse*weatherRGB;');if(material.isMeshPhysicalMaterial)shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance=emissive*weatherRGB;');
 };
 material.customProgramCacheKey=()=> 'soft-weather-source-v1-'+recipe.neighbours.length;material.needsUpdate=true;
}
