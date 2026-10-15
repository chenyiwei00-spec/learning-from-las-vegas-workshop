/** Increase generated-space pigment chroma while preserving hue and luminance.
 * Gamut-bound limiting avoids clipped highlights; original source arrays stay intact.
 */
export function spacePigments(source){
 const out=new Float32Array(source.length);
 for(let i=0;i<source.length;i+=3){
  const c=[source[i],source[i+1],source[i+2]],y=c[0]*.2126+c[1]*.7152+c[2]*.0722;let amount=1.65;
  for(const v of c){const d=v-y;if(d>0)amount=Math.min(amount,(1-y)/d);else if(d<0)amount=Math.min(amount,-y/d);}
  for(let k=0;k<3;k++)out[i+k]=Math.max(0,Math.min(1,y+(c[k]-y)*amount));
 }
 return out;
}
