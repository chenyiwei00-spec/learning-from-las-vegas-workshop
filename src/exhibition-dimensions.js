/* Cell indexes remain stable when changing physical exhibition size. */
export const FLOOR_SIZE=40,GRID_COUNT=20,CELL_SIZE=FLOOR_SIZE/GRID_COUNT,FLOOR_HALF=FLOOR_SIZE/2;
export const worldCell=(index,span=1)=>(index-GRID_COUNT/2+span/2)*CELL_SIZE;
