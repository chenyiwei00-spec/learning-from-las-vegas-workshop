/* Shared device-local history also appears in the floating workspace. */
(()=>{'use strict';const $=id=>document.getElementById(id),urls=new Map();let rendering=0,placing=false;
async function render(){const ticket=++rendering,rows=await SavedSculptures.list();if(ticket!==rendering)return;for(const u of urls.values())URL.revokeObjectURL(u);urls.clear();const grid=$('workspace-library-grid');grid.replaceChildren();$('workspace-library-count').textContent=String(rows.length);
 for(const row of rows){const button=document.createElement('button');button.className='workspace-library-item';button.dataset.libraryId=row.id;button.type='button';const img=document.createElement('img');img.alt=row.title;if(row.preview instanceof Blob){const url=URL.createObjectURL(row.preview);urls.set(row.id,url);img.src=url;}const name=document.createElement('span');name.textContent=row.title;button.append(img,name);button.title='Open '+row.title;button.onclick=()=>{if(window.ExhibitionAgent?.state().busy||placing)return;window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:row.id}}));};grid.append(button);}
 $('exhibition-layout-run').disabled=placing||(!rows.length&&!window.ExhibitionWalk?.placement.state().modelCount)||!!window.ExhibitionAgent?.state().busy;
}
async function saveCurrent(number){const model=ExhibitionStudio.captureModel(),viewer=$('generated-sculpture-viewer');if(!model.record||!ExhibitionStudio.state().model.loaded)throw Error('The generated model is not ready to save.');const result=await SavedSculptures.save(model.record,viewer,{title:(model.record.target==='city'?'City':'Sculpture')+' / '+new Date().toLocaleTimeString('en-GB')+' / '+number,group:'Agent batch'});$('workspace-model-library').open=true;await render();return result.entry;}
const random=()=>crypto.getRandomValues(new Uint32Array(1))[0]/4294967296;
async function arrange(){if(placing||window.ExhibitionAgent?.state().busy)return;placing=true;$('exhibition-layout-run').disabled=true;let done=0;
 try{await ExhibitionWalk.placement.ready;const floor=ExhibitionWalk.placement.state().models,centre=ExhibitionWalk.state().axonometric.target,options={random,centre:[centre[0]+10,centre[2]+10]};
  ExhibitionWalk.space?.showOriginal();
  if(floor.length){const layout=ExhibitionLayoutPlanner.plan(floor,options);await ExhibitionWalk.placement.applyLayout(layout);done=layout.length;$('exhibition-layout-status').textContent=done+' rearranged';}
  else{const all=await SavedSculptures.list();if(!all.length)throw Error('Generate or save models first.');const rows=all.slice(0,50),layout=ExhibitionLayoutPlanner.plan(rows,options);
   for(let i=0;i<rows.length;i++){const row=rows[i],hash=await crypto.subtle.digest('SHA-256',await row.glb.arrayBuffer()),id=[...new Uint8Array(hash)].map(v=>v.toString(16).padStart(2,'0')).join('');await ExhibitionWalk.placement.place({id,blob:row.glb,name:row.title,preview:row.preview,record:row.record,composition:row.composition,camera:row.camera,libraryId:row.id,obj:row.obj},layout[i]);done++;$('exhibition-layout-status').textContent='Placing '+done+' / '+rows.length;await new Promise(r=>requestAnimationFrame(r));}
   $('exhibition-layout-status').textContent=done+' placed'+(all.length>50?' / first 50 library models':'');
  }
  ExhibitionWalk.setViewMode('axonometric');
 }catch(e){$('exhibition-layout-status').textContent=e.message;}finally{placing=false;await render();}
}
function refreshLayoutButton(){$('exhibition-layout-run').disabled=placing||!!window.ExhibitionAgent?.state().busy||(!window.ExhibitionWalk?.placement.state().modelCount&&!Number($('workspace-library-count').textContent));}
window.addEventListener('exhibition-placement-change',refreshLayoutButton);window.ExhibitionWalk?.placement.ready.then(refreshLayoutButton);
$('exhibition-layout-run').onclick=arrange;SavedSculptures.subscribe(()=>render().catch(e=>$('workspace-library-status').textContent=e.message));window.addEventListener('pagehide',()=>{for(const u of urls.values())URL.revokeObjectURL(u);});
window.ExhibitionLibrary=Object.freeze({render,saveCurrent,arrange,state:()=>({placing,count:Number($('workspace-library-count').textContent)})});render().catch(e=>$('workspace-library-status').textContent=e.message);
})();
