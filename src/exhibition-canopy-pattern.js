/* Deterministic periodic quilting from foreground pixels; no cutout background survives. */
export function abstractModelPattern(pixels,width,height,{seed=1,size=256}={}){
 let state=typeof seed==='number'?seed:2166136261; if(typeof seed==='string')for(const c of seed)state=Math.imul(state^c.charCodeAt(0),16777619);state>>>=0;
 const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
 const foreground=[],ink=[];for(let i=0;i<width*height;i++){const at=i*4;if(pixels[at+3]<180)continue;foreground.push(i);const r=pixels[at],g=pixels[at+1],b=pixels[at+2];if(Math.max(r,g,b)-Math.min(r,g,b)>24||Math.max(r,g,b)<226)ink.push(i);}
 if(!foreground.length)throw Error('The model has no visible colour pixels.');
 const pool=ink.length>Math.max(16,foreground.length*.08)?ink:foreground,valid=new Uint8Array(width*height);for(const i of pool)valid[i]=1;
 const count=12,anchors=Array.from({length:count*count},()=>{const index=pool[Math.floor(random()*pool.length)],angle=random()*Math.PI*2;return {x:index%width,y:Math.floor(index/width),index,c:Math.cos(angle),s:Math.sin(angle)};});
 const wrap=(v,n)=>(v%n+n)%n,output=new Uint8Array(size*size*4),smooth=v=>v*v*(3-2*v),period=Math.PI*2/size;
 function sample(anchor,fx,fy){const reach=Math.min(width,height)*.045,sx=Math.round(anchor.x+(fx*anchor.c-fy*anchor.s)*reach),sy=Math.round(anchor.y+(fx*anchor.s+fy*anchor.c)*reach);const index=sx>=0&&sx<width&&sy>=0&&sy<height&&valid[sy*width+sx]?sy*width+sx:anchor.index;return index*4;}
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const u=wrap(x+size*.1*Math.sin(period*y)+size*.045*Math.sin(period*(2*x+y)),size)/size*count,v=wrap(y+size*.09*Math.sin(period*x)+size*.04*Math.cos(period*(x-2*y)),size)/size*count,gx=Math.floor(u),gy=Math.floor(v),fx=u-gx,fy=v-gy,ax=smooth(fx),ay=smooth(fy),at=(y*size+x)*4;
  const weights=[(1-ax)*(1-ay),ax*(1-ay),(1-ax)*ay,ax*ay],indices=[];
  for(let j=0;j<2;j++)for(let i=0;i<2;i++){const a=anchors[wrap(gy+j,count)*count+wrap(gx+i,count)];indices.push(sample(a,fx-i,fy-j));}
  for(let channel=0;channel<3;channel++)output[at+channel]=Math.round(indices.reduce((sum,index,i)=>sum+pixels[index+channel]*weights[i],0));output[at+3]=255;
 }
 return {pixels:output,width:size,height:size,foregroundCount:pool.length,sourceForegroundCount:foreground.length,backgroundRemoved:true};
}
