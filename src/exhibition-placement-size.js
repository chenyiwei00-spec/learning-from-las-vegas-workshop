/* Saved architecture remains an exhibit, with its own footprint/handle limits. */
export function placementRange(value){
 const space=value?.kind==='space'||value?.record?.kind==='space'||value?.record?.target==='space'||value?.target==='space';
 return space?{minSpan:2,maxSpan:5,minUnits:1.8}:{minSpan:1,maxSpan:3,minUnits:.35};
}

export function cellShape(record={}){
 const span=record.span||1;
 return {spanX:record.spanX||span,spanZ:record.spanZ||span};
}
export function modelFootprint(model,span,rotation=0,minSpan=1){
 const width=Math.max(1e-6,Number(model?.sourceWidth??model?.width)||1e-6),depth=Math.max(1e-6,Number(model?.sourceDepth??model?.depth)||1e-6),c=Math.abs(Math.cos(rotation)),s=Math.abs(Math.sin(rotation)),x=width*c+depth*s,z=width*s+depth*c,long=Math.max(x,z);
 return {spanX:Math.max(minSpan,Math.min(span,Math.round(span*x/long))),spanZ:Math.max(minSpan,Math.min(span,Math.round(span*z/long)))};
}
export function footprintsSeparated(a,b,gap=1){
 const A=cellShape(a),B=cellShape(b);
 return a.col+A.spanX+gap<=b.col||b.col+B.spanX+gap<=a.col||a.row+A.spanZ+gap<=b.row||b.row+B.spanZ+gap<=a.row;
}
globalThis.ExhibitionFootprints=Object.freeze({shape:modelFootprint,cells:cellShape,separated:footprintsSeparated});
