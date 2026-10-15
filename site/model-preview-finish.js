/* View-only Collage Studio finish. Source GLB bytes and room materials stay intact. */
(()=>{
'use strict';
const version='collage-studio-preview-v1';
function configure(viewer){
 viewer.environmentImage='neutral';viewer.exposure=1;viewer.toneMapping='neutral';
 viewer.shadowIntensity=.6;viewer.shadowSoftness=1;
}
function apply(viewer,{target='sculpture'}={}){
 if(target==='space')return;
 configure(viewer);
 for(const material of viewer.model?.materials||[]){
  const p=material.pbrMetallicRoughness;if(!p)continue;
  p.setMetallicFactor(0);p.setRoughnessFactor(.85);
  if(material.clearcoatFactor>0)material.setClearcoatFactor(0);
 }
 viewer.dataset.previewFinish=version;
}
window.ModelPreviewFinish=Object.freeze({configure,apply,version});
})();
