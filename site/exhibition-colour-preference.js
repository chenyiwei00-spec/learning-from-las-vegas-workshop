/* Measure alpha-covered cutouts; preferences change probability, never recolour an archive source. */
(()=>{'use strict';const cache=new Map(),clamp=v=>Math.max(0,Math.min(1,v));
function measure(image){
 const c=document.createElement('canvas');c.width=c.height=48;const g=c.getContext('2d',{willReadFrequently:true});g.drawImage(image,0,0,48,48);
 const p=g.getImageData(0,0,48,48).data;let light=0,vivid=0,dark=0,yellow=0,pinkPurple=0,n=0;
 for(let i=0;i<p.length;i+=4){
  if(p[i+3]<80)continue;const r=p[i]/255,k=p[i+1]/255,b=p[i+2]/255,max=Math.max(r,k,b),min=Math.min(r,k,b),chroma=max-min,l=r*.2126+k*.7152+b*.0722;
  light+=l;vivid+=chroma;dark+=l<.22?1:0;n++;
  if(chroma<.08)continue;let hue=max===r?((k-b)/chroma)%6:max===k?(b-r)/chroma+2:(r-k)/chroma+4;hue=(hue*60+360)%360;
  if(hue>=25&&hue<=78)yellow+=chroma;
  if(hue>=260&&hue<=350)pinkPurple+=chroma;
 }
 return {light:n?light/n:.5,vivid:n?vivid/n:.2,dark:n?dark/n:0,yellow:n?yellow/n:0,pinkPurple:n?pinkPurple/n:0};
}
async function score(url){if(cache.has(url))return cache.get(url);const task=(async()=>{try{const im=new Image();im.decoding='async';im.src=url;await im.decode();return measure(im);}catch{return{light:.5,vivid:.2,dark:0};}})();cache.set(url,task);if(cache.size>1200)cache.delete(cache.keys().next().value);return task;}
function weight(stats,preference){const l=clamp((stats.light-.12)/.68),v=clamp((stats.vivid-.035)/.40),dark=clamp(stats.dark||0);const balance=(1-.82*clamp((stats.yellow||0)*3))*(1+1.25*clamp((stats.pinkPurple||0)*3));return preference==='vivid'?(.045+6*Math.pow(.10+.90*v,1.8)*Math.pow(.14+.86*l,1.3)*(1-.80*dark))*balance:.045+7*Math.pow(l,2.8)*(1-.85*dark)*(stats.light>.94?.7:1);}
async function pick(candidates,preference,random=Math.random){if(!candidates.length)return null;const baseline=Math.min(...candidates.map(c=>c.score||0)),stats=await Promise.all(candidates.map(c=>score(c.url)));const weights=candidates.map((c,i)=>Math.exp(-Math.max(0,(c.score||0)-baseline)*1.6)*weight(stats[i],preference));let draw=random()*weights.reduce((a,b)=>a+b,0);for(let i=0;i<candidates.length;i++){draw-=weights[i];if(draw<=0)return candidates[i];}return candidates.at(-1);}
window.ExhibitionColourPreference=Object.freeze({measure,pick,score,weight});
})();
