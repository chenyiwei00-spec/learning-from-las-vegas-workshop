/* Pack large varied footprints tightly, keeping one complete white cell between them. */
(()=>{'use strict';
function plan(models,{random=Math.random,minSpan=1,maxSpan=3}={}){
 minSpan=Math.max(1,Math.min(5,Math.round(minSpan)));maxSpan=Math.max(minSpan,Math.min(5,Math.round(maxSpan)));
 const capacity=Math.floor((20+1)/(minSpan+1))**2;
 if(models.length>capacity)throw Error('At most '+capacity+' models fit with a one-cell white gap. Existing models are kept.');
 const cx=10,cz=10;
 const rows=models.map(m=>{const r=random(),span=minSpan===1&&maxSpan===3?(r<.07?1:r<.38?2:3):Math.min(maxSpan,minSpan+Math.floor(Math.sqrt(r)*(maxSpan-minSpan+1)));let scale=.90+random()*.09;if(span===(m.span||1)&&Math.abs(scale-(m.scale||1))<.025)scale=(m.scale||1)>.945?.90:.99;let slot=Math.min(3,Math.floor(random()*4)),rotation=(slot+1)*Math.PI/2;if(Math.abs(Math.sin((rotation-(m.rotation||0))/2))<.01)rotation=((slot+1)%4+1)*Math.PI/2;return {id:m.id,span,scale,rotation,rank:random()};});
 if(rows.length>1&&new Set(rows.map(r=>r.span)).size===1){const at=Math.floor(random()*rows.length);rows[at].span=rows[at].span===maxSpan?Math.max(minSpan,maxSpan-1):maxSpan;}
 function recenter(packed){if(!packed.length)return packed;const x=packed.reduce((s,r)=>s+r.col+r.span/2,0)/packed.length,z=packed.reduce((s,r)=>s+r.row+r.span/2,0)/packed.length,shiftX=Math.max(-Math.min(...packed.map(r=>r.col)),Math.min(20-Math.max(...packed.map(r=>r.col+r.span)),Math.round(cx-x))),shiftZ=Math.max(-Math.min(...packed.map(r=>r.row)),Math.min(20-Math.max(...packed.map(r=>r.row+r.span)),Math.round(cz-z)));return packed.map(r=>({...r,col:r.col+shiftX,row:r.row+shiftZ}));}
 function pack(){const blocked=new Uint8Array(400),result=new Map(),ordered=[...rows].sort((a,b)=>b.span-a.span||a.rank-b.rank);for(const row of ordered){let best=null;const n=row.span;for(let z=0;z<=20-n;z++)for(let x=0;x<=20-n;x++){let free=true;for(let j=0;j<n&&free;j++)for(let i=0;i<n;i++)if(blocked[(z+j)*20+x+i]){free=false;break;}if(!free)continue;const score=(x+n/2-cx)**2+(z+n/2-cz)**2+random()*.45;if(!best||score<best.score)best={col:x,row:z,score};}if(!best)return null;for(let z=Math.max(0,best.row-1);z<Math.min(20,best.row+n+1);z++)for(let x=Math.max(0,best.col-1);x<Math.min(20,best.col+n+1);x++)blocked[z*20+x]=1;result.set(row.id,{id:row.id,col:best.col,row:best.row,span:n,scale:row.scale,rotation:row.rotation,valid:true});}return recenter(models.map(m=>result.get(m.id)));}
 // Start with the largest requested sizes; reduce only when packing cannot fit them.
 for(let attempt=0;attempt<models.length*(maxSpan-minSpan)+1;attempt++){const result=pack();if(result)return result;const largest=[...rows].sort((a,b)=>b.span-a.span||a.rank-b.rank).find(r=>r.span>minSpan);if(!largest)break;largest.span--;}
 // A regular lattice guarantees the full 100-model capacity without touching yellow cells.
 const points=[];for(let z=minSpan===1?1:0;z+minSpan<=20;z+=minSpan+1)for(let x=minSpan===1?1:0;x+minSpan<=20;x+=minSpan+1)points.push({col:x,row:z,score:(x+minSpan/2-cx)**2+(z+minSpan/2-cz)**2+random()*.45});points.sort((a,b)=>a.score-b.score);return recenter(models.map((m,i)=>({id:m.id,col:points[i].col,row:points[i].row,span:minSpan,scale:rows[i].scale,rotation:rows[i].rotation,valid:true})));
}
globalThis.ExhibitionLayoutPlanner=Object.freeze({plan});
})();
