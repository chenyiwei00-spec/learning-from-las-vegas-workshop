/* Saved architecture remains an exhibit, with its own footprint/handle limits. */
export function placementRange(value){
 const space=value?.kind==='space'||value?.record?.kind==='space'||value?.record?.target==='space'||value?.target==='space';
 return space?{minSpan:2,maxSpan:5,minUnits:1.8}:{minSpan:1,maxSpan:3,minUnits:.35};
}
