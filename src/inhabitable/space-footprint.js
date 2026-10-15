/* Fit the actual generated geometry to the occupied layout's bounding footprint.
   Uniform scaling keeps source shapes intact; the two planar extents share the
   input footprint's area instead of an arbitrary fixed enlargement/reduction. */
export function footprintScale(bounds,target){
 if(!target)return null;
 const width=bounds.maxX-bounds.minX,depth=bounds.maxZ-bounds.minZ;
 if(![width,depth,target.width,target.depth].every(v=>Number.isFinite(v)&&v>0))throw Error('The layout has no usable footprint.');
 return Math.sqrt(target.width*target.depth/(width*depth));
}
