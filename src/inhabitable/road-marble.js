import * as THREE from 'three';
let stoneTexture;
/** A small seamless stone map; shared between roads, without environment reflections. */
function texture(){
 if(stoneTexture)return stoneTexture;
 const size=512,data=new Uint8Array(size*size*4),tau=Math.PI*2;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const u=x/size,v=y/size,w=Math.sin(tau*(u+v))*.45+Math.cos(tau*(2*u-v))*.23+Math.sin(tau*(5*u+3*v))*.10;
  const vein=Math.exp(-Math.abs(Math.sin(tau*(3*u+2*v)+w*4.5))*23);
  const grain=(Math.sin(tau*(37*u+41*v))*.5+Math.cos(tau*(67*u-53*v))*.5)*2;
  const value=Math.round(232-vein*38+w*5+grain),i=(y*size+x)*4;data.set([value,Math.max(0,value-2),Math.max(0,value-5),255],i);
 }
 stoneTexture=new THREE.DataTexture(data,size,size,THREE.RGBAFormat);stoneTexture.colorSpace=THREE.SRGBColorSpace;stoneTexture.wrapS=stoneTexture.wrapT=THREE.RepeatWrapping;stoneTexture.magFilter=THREE.LinearFilter;stoneTexture.minFilter=THREE.LinearMipmapLinearFilter;stoneTexture.generateMipmaps=true;stoneTexture.anisotropy=4;stoneTexture.needsUpdate=true;
 return stoneTexture;
}
export function applyMarble(geometry){
 const p=geometry.attributes.position,uv=new Float32Array(p.count*2);for(let i=0;i<p.count;i++){uv[i*2]=p.getX(i)/5;uv[i*2+1]=p.getZ(i)/5;}geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));
 const map=texture(),mat=new THREE.MeshStandardMaterial({map,bumpMap:map,bumpScale:.018,color:0xffffff,roughness:.94,metalness:0,transparent:false,opacity:1,depthWrite:true,blending:THREE.NoBlending,side:THREE.DoubleSide});mat.name='Honed pale marble';mat.userData.roadFinish='rough-marble-v1';return mat;
}
