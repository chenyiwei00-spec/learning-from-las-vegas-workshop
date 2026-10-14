/* Small overlapping source-texture samples preserve weathering and exact pigments without photo stamps. */
export function abstractModelPattern(pixels,width,height,{seed=1,size=512}={}){
 let state=typeof seed==='number'?seed:2166136261;if(typeof seed==='string')for(const c of seed)state=Math.imul(state^c.charCodeAt(0),16777619);state>>>=0;const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
 const foreground=[],ink=[],valid=new Uint8Array(width*height);for(let i=0;i<valid.length;i++){const a=i*4;if(pixels[a+3]<180)continue;foreground.push(i);const lo=Math.min(pixels[a],pixels[a+1],pixels[a+2]),hi=Math.max(pixels[a],pixels[a+1],pixels[a+2]);if(!(lo>224&&hi-lo<15)){ink.push(i);valid[i]=1;}}
 if(!foreground.length)throw Error('The model has no visible colour pixels.');if(!ink.length)for(const i of foreground)valid[i]=1;
 const pool=ink.length?ink:foreground,integral=new Uint32Array((width+1)*(height+1));for(let y=0;y<height;y++){let sum=0;for(let x=0;x<width;x++){sum+=valid[y*width+x];integral[(y+1)*(width+1)+x+1]=integral[y*(width+1)+x+1]+sum;}}
 const count=(x,y,n)=>integral[(y+n)*(width+1)+x+n]-integral[y*(width+1)+x+n]-integral[(y+n)*(width+1)+x]+integral[y*(width+1)+x];
 let patch=Math.max(2,Math.min(6,Math.floor(Math.min(width,height)/64))),positions=[];
 while(patch>=2){positions=[];for(let y=0;y<=height-patch;y++)for(let x=0;x<=width-patch;x++)if(count(x,y,patch)===patch*patch)positions.push([x,y]);if(positions.length>=8||patch===2)break;patch=Math.max(2,Math.floor(patch*.65));}
 const output=new Uint8Array(size*size*4),palette=new Map();const take=(x,y,candidate)=>{let xx=x,yy=y;for(let i=0;i<candidate.turn;i++){const a=xx;xx=patch-1-yy;yy=a;}return ((candidate.y+yy)*width+candidate.x+xx)*4;};
 if(!positions.length){for(let i=0;i<size*size;i++){const src=pool[Math.floor(random()*pool.length)]*4;output.set(pixels.subarray(src,src+3),i*4);output[i*4+3]=255;}}else{
  const overlap=Math.max(1,Math.floor(patch/4)),step=patch-overlap,recent=[];
  for(let y=0;y<size;y+=step)for(let x=0;x<size;x+=step){let best=null;for(let trial=0;trial<12;trial++){const index=Math.floor(random()*positions.length),[sx,sy]=positions[index],candidate={x:sx,y:sy,turn:Math.floor(random()*4),index};let error=0,samples=0;for(let py=0;py<patch&&y+py<size;py+=2)for(let px=0;px<patch&&x+px<size;px+=2){if(!(x>0&&px<overlap||y>0&&py<overlap))continue;const a=take(px,py,candidate),b=((y+py)*size+x+px)*4;for(let k=0;k<3;k++)error+=(pixels[a+k]-output[b+k])**2;samples++;}const score=error/Math.max(1,samples)+(recent.includes(index)?12000:0)+random()*400;if(!best||score<best.score)best={...candidate,score};}recent.push(best.index);if(recent.length>Math.min(64,positions.length/2))recent.shift();
   // Least-error cut paths preserve source pixels instead of averaging pigments to grey.
   const cut=(vertical)=>{const length=Math.min(patch,vertical?size-y:size-x),cost=new Float64Array(length*overlap),back=new Int16Array(length*overlap);for(let i=0;i<length;i++)for(let j=0;j<overlap;j++){const px=vertical?j:i,py=vertical?i:j,a=take(px,py,best),b=((y+py)*size+x+px)*4;let error=0;for(let k=0;k<3;k++)error+=(pixels[a+k]-output[b+k])**2;let previous=j;if(i){for(let d=Math.max(0,j-1);d<=Math.min(overlap-1,j+1);d++)if(cost[(i-1)*overlap+d]<cost[(i-1)*overlap+previous])previous=d;error+=cost[(i-1)*overlap+previous];}cost[i*overlap+j]=error;back[i*overlap+j]=previous;}const path=new Int16Array(length);let at=0;for(let j=1;j<overlap;j++)if(cost[(length-1)*overlap+j]<cost[(length-1)*overlap+at])at=j;for(let i=length-1;i>=0;i--){path[i]=at;at=back[i*overlap+at];}return path;};
   const left=x>0?cut(true):null,top=y>0?cut(false):null;
   for(let py=0;py<patch&&y+py<size;py++)for(let px=0;px<patch&&x+px<size;px++){if(left&&px<overlap&&px<left[py]||top&&py<overlap&&py<top[px])continue;const a=take(px,py,best),b=((y+py)*size+x+px)*4;output.set(pixels.subarray(a,a+3),b);output[b+3]=255;}

  }
 }
 for(const i of pool){const at=i*4,key=[pixels[at]>>4,pixels[at+1]>>4,pixels[at+2]>>4].join(':');if(!palette.has(key))palette.set(key,[...pixels.subarray(at,at+3)]);}
 return {pixels:output,width:size,height:size,foregroundCount:pool.length,sourceForegroundCount:foreground.length,backgroundRemoved:true,naturalMaterial:true,photographicTiles:false,sourceTexelsPreserved:true,patchSize:patch,palette:[...palette.values()]};
}
