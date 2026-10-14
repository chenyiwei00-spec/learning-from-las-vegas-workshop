/* Whole-floor square packing: compute first, then apply one non-overlapping layout. */
(()=>{'use strict';
function plan(models,{random=Math.random,centre=[10,10]}={}){
 if(models.length>400)throw Error('The floor supports at most 400 non-overlapping models.');
 const cx=Math.max(0,Math.min(20,Number.isFinite(centre[0])?centre[0]:10)),cz=Math.max(0,Math.min(20,Number.isFinite(centre[1])?centre[1]:10));
 const rows=models.map(m=>{const r=random();let span=r<.28?1:r<.82?2:3,scale=.58+random()*.37;let units=span*scale;
  if(m.height>=4.60&&m.footprint)units=Math.max(.30,Math.min(units,m.footprint/.98*(.6+random()*.2)));
  if(Math.abs(units-(m.span||1)*(m.scale||1))<.1)units=Math.max(.3,units*.72);
  span=Math.max(1,Math.min(3,Math.ceil(units)));scale=units/span;let rotation=random()*Math.PI*2;if(Math.abs(Math.atan2(Math.sin(rotation-(m.rotation||0)),Math.cos(rotation-(m.rotation||0))))<.25)rotation=(rotation+Math.PI*.37)%(Math.PI*2);
  return {id:m.id,span,scale,rotation,rank:random()};});
 const area=()=>rows.reduce((s,r)=>s+r.span*r.span,0);while(area()>Math.min(360,Math.max(models.length,Math.ceil(models.length*4.8)))){const large=rows.filter(r=>r.span>1);if(!large.length)break;const r=large[Math.floor(random()*large.length)];r.span--;r.scale=Math.min(r.scale,.94);}
 function pack(){const used=new Uint8Array(400),result=new Map(),ordered=[...rows].sort((a,b)=>b.span-a.span||a.rank-b.rank);for(const row of ordered){let best=null;const n=row.span;for(let z=0;z<=20-n;z++)for(let x=0;x<=20-n;x++){let free=true;for(let j=0;j<n&&free;j++)for(let i=0;i<n;i++)if(used[(z+j)*20+x+i]){free=false;break;}if(!free)continue;const score=(x+n/2-cx)**2+(z+n/2-cz)**2+random()*.65;if(!best||score<best.score)best={col:x,row:z,score};}if(!best)return null;for(let j=0;j<n;j++)for(let i=0;i<n;i++)used[(best.row+j)*20+best.col+i]=1;result.set(row.id,{id:row.id,col:best.col,row:best.row,span:n,scale:row.scale,rotation:row.rotation,valid:true});}const packed=models.map(m=>result.get(m.id));if(packed.length){const meanX=packed.reduce((s,r)=>s+r.col+r.span/2,0)/packed.length,meanZ=packed.reduce((s,r)=>s+r.row+r.span/2,0)/packed.length,shiftX=Math.max(-Math.min(...packed.map(r=>r.col)),Math.min(20-Math.max(...packed.map(r=>r.col+r.span)),Math.round(cx-meanX))),shiftZ=Math.max(-Math.min(...packed.map(r=>r.row)),Math.min(20-Math.max(...packed.map(r=>r.row+r.span)),Math.round(cz-meanZ)));for(const r of packed){r.col+=shiftX;r.row+=shiftZ;}}return packed;}
 for(let attempt=0;attempt<models.length*2+1;attempt++){const result=pack();if(result)return result;const largest=[...rows].sort((a,b)=>b.span-a.span).find(r=>r.span>1);if(!largest)break;largest.span--;largest.scale=Math.min(largest.scale,.94);}
 throw Error('This collection could not fit without overlaps.');
}
globalThis.ExhibitionLayoutPlanner=Object.freeze({plan});
})();
