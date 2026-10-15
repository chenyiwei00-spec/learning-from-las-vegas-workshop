import * as THREE from 'three';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),r=Math.PI/180;
// Solar time at Las Vegas latitude near the equinox, with optional art direction.
export function sunForTime(time=8){
 const h=(clamp(time,0,24)-12)*15*r,latitude=36.17*r;
 return {time:clamp(time,0,24),azimuth:(Math.atan2(Math.sin(h),Math.cos(h)*Math.sin(latitude))/r+180+360)%360,elevation:Math.asin(Math.cos(latitude)*Math.cos(h))/r};
}
export function resolveSun(value={}){
 const base=sunForTime(value.time),azimuth=clamp(Number.isFinite(value.azimuth)?value.azimuth:base.azimuth,0,360),elevation=clamp(Number.isFinite(value.elevation)?value.elevation:base.elevation,-90,85);
 const daylight=THREE.MathUtils.smoothstep(elevation,-6,12),warmth=1-THREE.MathUtils.smoothstep(elevation,4,48),a=azimuth*r,e=elevation*r;
 return {...base,azimuth,elevation,daylight,intensity:daylight*(6+3*Math.sin(Math.max(0,e))),colour:new THREE.Color(0xfff1dc).lerp(new THREE.Color(0xffc37c),warmth),direction:new THREE.Vector3(Math.sin(a)*Math.cos(e),Math.sin(e),Math.cos(a)*Math.cos(e))};
}
