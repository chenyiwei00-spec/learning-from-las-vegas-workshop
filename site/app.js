(() => {
  'use strict';
  const $=id=>document.getElementById(id),data=window.ARCHIVE_DATA;
  if(!data?.items?.length||!data.collections){$('result-count').textContent='The catalog could not be loaded.';return;}
  const items=data.items,collections=data.collections,index=ArchiveSearch.createIndex(items),PAGE_SIZE=50;
  const collectionMap=new Map(collections.map(c=>[c.key,c])),itemMap=new Map(items.map(i=>[i.id,i]));
  for(const [alias,id]of Object.entries(data.modelAliases||{}))if(itemMap.has(id))itemMap.set(alias,itemMap.get(id));
  const mediaTypes=[{key:'image',name:'Images'},{key:'video',name:'Videos'},{key:'audio',name:'Audio'},{key:'model',name:'Models'}];
  const mediaTotals=Object.fromEntries(mediaTypes.map(t=>[t.key,items.filter(i=>i.type===t.key).length]));
  const countries=[...new Set(items.map(i=>i.referenceCountry))].sort((a,b)=>a==='Unspecified'?1:b==='Unspecified'?-1:a.localeCompare(b));
  const preferred=['Buildings','Signs & logos','People','Speech & voices','Music','Vehicles','Water','Art & sculpture','Advertising installations','Trees','Sky','Printed layouts','Weather & wind','Animals','Footsteps','Ambient sound','Quiet ambience','Models & maquettes','Products & objects','Screens & media','Food & drink','Plants & flowers','Streets','Bridges','Interiors'];
  const elements=[...new Set([...preferred,...items.flatMap(i=>i.elements||[])])].filter(e=>items.some(i=>i.elements.includes(e)));
  const archives=[{key:'',name:'All collections'},{key:'las-vegas',name:'Las Vegas'},{key:'va',name:'V&A'}];
  const archiveName=k=>archives.find(a=>a.key===k)?.name||'All collections';
  const state={q:'',media:'',archive:'',collection:'',country:'',element:'',sort:'relevance',page:1};
  let current=[],detailItem=null,debounce;
  const format=n=>n.toLocaleString('en-GB');
  const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const validUrl=v=>{try{const u=new URL(v);return ['https:','http:'].includes(u.protocol)?u.href:'';}catch{return '';}};
  const duration=n=>{n=Math.round(Number(n)||0);return Math.floor(n/60)+':'+String(n%60).padStart(2,'0');};
  const fileFor=i=>i.audio||i.video||i.model||i.image||i.file||'';
  const sourceName=i=>collectionMap.get(i.collectionKey)?.name||i.collection||'';
  const mediaName=k=>mediaTypes.find(t=>t.key===k)?.name||'All media';
  function readUrl(){
    const p=new URLSearchParams(location.search);
    state.q=(p.get('q')||'').slice(0,200);
    state.media=mediaTypes.some(t=>t.key===p.get('media'))?p.get('media'):'';
    state.archive=archives.some(a=>a.key===p.get('archive'))?p.get('archive'):'';
    state.collection=collectionMap.has(p.get('collection'))?p.get('collection'):'';
    state.country=countries.includes(p.get('country'))?p.get('country'):'';
    state.element=elements.includes(p.get('element'))?p.get('element'):'';
    state.sort=['relevance','collection','title','resolution'].includes(p.get('sort'))?p.get('sort'):'relevance';
    state.page=Math.max(1,Math.min(Math.ceil(items.length/PAGE_SIZE),parseInt(p.get('page'),10)||1));
  }
  function writeUrl(){
    const p=new URLSearchParams();
    for(const k of ['q','media','archive','collection','country','element'])if(state[k])p.set(k,state[k]);
    if(state.sort!=='relevance')p.set('sort',state.sort);if(state.page>1)p.set('page',state.page);
    try{history.replaceState(null,'',location.pathname+(p.size?'?'+p:'')+location.hash);}catch{}
  }
  function renderMedia(result){
    const all=Object.values(result.media).reduce((a,b)=>a+b,0);
    const types=[{key:'',name:'All media'},...mediaTypes];
    const notes={'':'The complete collection',image:'Photographs & printed works',video:'Clips & moving images',audio:'Recordings & soundscapes',model:'One model per repeated subject'};
    $('media-tabs').innerHTML=types.map((t,n)=>{
      const count=t.key?(result.media[t.key]||0):all;
      return '<button class="media-entry" data-media="'+t.key+'" aria-pressed="'+(state.media===t.key)+'"><span class="media-number" aria-hidden="true">'+String(n).padStart(2,'0')+'</span><span class="media-copy"><span class="media-name">'+t.name.toUpperCase()+'</span><span class="media-count">'+format(count)+' '+(count===1?'ITEM':'ITEMS')+'</span><span class="media-note">'+notes[t.key]+'</span></span></button>';
    }).join('');
  }
  function renderSubjects(){
    const result=ArchiveSearch.run(index,{q:state.q,media:state.media,archive:state.archive,collection:state.collection,country:state.country,sort:state.sort});
    const feature=state.media==='audio'?['Speech & voices','Music','Vehicles','Water','Weather & wind','Animals','Footsteps','Ambient sound']:state.media==='video'?['Buildings','Signs & logos','Vehicles','Water','History & documentary','Urban change','Interiors','Landscapes & nature']:['Buildings','Signs & logos','People','Speech & voices','Music','Vehicles','Water','Art & sculpture'];
    const featured=feature.filter(e=>elements.includes(e)),more=elements.filter(e=>!featured.includes(e));
    const button=(value,label,count)=>'<button data-subject="'+escape(value)+'" aria-pressed="'+(state.element===value)+'"'+(value&&!count&&state.element!==value?' disabled':'')+'><span>'+escape(label)+'</span><span class="subject-count">'+format(count)+'</span></button>';
    let html=button('','All subjects',result.total)+featured.map(e=>button(e,e,result.elements[e]||0)).join('');
    if(more.length)html+='<label class="sr-only" for="more-subjects">More subjects</label><select id="more-subjects" aria-label="More subjects"><option value="">More subjects</option>'+more.map(e=>'<option value="'+escape(e)+'"'+(state.element===e?' selected':'')+(!result.elements[e]&&state.element!==e?' disabled':'')+'>'+escape(e)+' ('+format(result.elements[e]||0)+')</option>').join('')+'</select>';
    $('subject-tabs').innerHTML=html;
  }
  function option(kind,value,label,count){return '<label class="filter-option"><input type="radio" name="'+kind+'" value="'+escape(value)+'" '+(state[kind]===value?'checked':'')+'><span>'+escape(label)+'</span><span class="facet-count">'+format(count)+'</span></label>';}
  function renderFilters(result){
    const all=Object.values(result.collections).reduce((a,b)=>a+b,0);
    const source=(key,label,count)=>'<button data-collection="'+escape(key)+'" aria-pressed="'+(state.collection===key)+'"><span>'+escape(label)+'</span><span class="collection-count">'+format(count)+'</span></button>';
    const available=collections.filter(c=>result.collections[c.key]||state.collection===c.key);
    const archiveResult=ArchiveSearch.run(index,{...state,archive:'',collection:''});
    const totals={'':archiveResult.total};for(const i of archiveResult.items){const key=i.archiveKey||'las-vegas';totals[key]=(totals[key]||0)+1;}
    $('archive-tabs').innerHTML=archives.map(a=>'<button data-archive="'+a.key+'" aria-pressed="'+(state.archive===a.key)+'"><span>'+escape(a.name)+'</span><span class="archive-count">'+format(totals[a.key]||0)+'</span></button>').join('');
    $('collection-tabs').innerHTML=source('','All sources',all)+available.map(c=>source(c.key,c.name,result.collections[c.key]||0)).join('');
    $('source-summary').textContent=state.collection?'Source: '+collectionMap.get(state.collection).name:'Source collections';

    $('clear-filters').hidden=!(state.archive||state.country||state.element||state.collection);
    renderSubjects();
  }
  function stopCards(except=null){for(const player of $('results').querySelectorAll('audio,video'))if(player!==except)player.pause();}
  function renderCards(pageItems){
    stopCards();
    $('results').innerHTML=pageItems.map((item,i)=>{
      const audio=item.type==='audio',video=item.type==='video',model=item.type==='model';
      const art=audio?'<div class="audio-wave" aria-hidden="true">'+Array.from({length:29},(_,n)=>'<i style="height:'+(12+Math.abs(Math.sin(n*1.8))*48+Math.abs(Math.cos(n*.6))*20)+'%"></i>').join('')+'</div>':'<img src="'+escape(item.thumbnail)+'" alt="'+escape(item.title)+'" loading="'+(i<8?'eager':'lazy')+'" decoding="async" width="512" height="512">';
      const mark=video?'<span class="play-mark" aria-hidden="true">&#9654;</span>':model?'<span class="model-mark" aria-hidden="true">3D</span>':'';
      const length=audio||video?'<span class="clip-duration">'+duration(item.durationSeconds)+'</span>':'';
      const context=(item.archiveTitle||'Las Vegas')+' \u00b7 '+(model?item.modelLabel:item.elements.slice(0,2).join(' \u00b7 '));
      return '<button class="image-card '+item.type+'-card" data-id="'+escape(item.id)+'" aria-label="View '+escape(item.title)+'"><div class="card-photo">'+art+mark+length+'<span class="card-type">'+item.type.toUpperCase()+'</span></div><h3 class="card-title">'+escape(item.title)+'</h3><div class="card-meta"><span class="country">'+escape(context)+'</span><span class="image-number">'+String(item.collectionNumber).padStart(3,'0')+'</span></div></button>';
    }).join('');
  }
  function mixMedia(rows){
    const interleave=rows=>{const groups=['las-vegas','va'].map(k=>rows.filter(i=>(i.archiveKey||'las-vegas')===k)),out=[];for(let n=0;groups.some(g=>g[n]);n++)for(const g of groups)if(g[n])out.push(g[n]);return out;};
    const queues=mediaTypes.map(t=>interleave(rows.filter(i=>i.type===t.key))),mixed=[];
    for(let n=0;queues.some(q=>q[n]);n++)for(const q of queues)if(q[n])mixed.push(q[n]);
    return mixed;
  }
  function renderPagination(total){
    const pages=Math.ceil(total/PAGE_SIZE);if(pages<=1){$('pagination').innerHTML='';return;}
    const numbers=new Set([1,pages,state.page-1,state.page,state.page+1]);
    if(state.page<=3)numbers.add(2),numbers.add(3);if(state.page>=pages-2)numbers.add(pages-1),numbers.add(pages-2);
    let html='<button class="page-arrow" data-page="'+(state.page-1)+'" '+(state.page===1?'disabled':'')+' aria-label="Previous page">\u2190 Prev</button>',last=0;
    for(const n of [...numbers].filter(n=>n>0&&n<=pages).sort((a,b)=>a-b)){if(last&&n-last>1)html+='<span class="page-ellipsis">\u2026</span>';html+='<button data-page="'+n+'" '+(n===state.page?'aria-current="page"':'')+' aria-label="Page '+n+'">'+n+'</button>';last=n;}
    html+='<button class="page-arrow" data-page="'+(state.page+1)+'" '+(state.page===pages?'disabled':'')+' aria-label="Next page">Next \u2192</button>';
    $('pagination').innerHTML=html;
  }
  function render(){
    const result=ArchiveSearch.run(index,state);current=!state.media&&!state.q&&state.sort==='relevance'?mixMedia(result.items):result.items;state.page=Math.min(state.page,Math.max(1,Math.ceil(result.total/PAGE_SIZE)));
    $('query').value=state.q;$('sort').value=state.sort;
    $('archive-statement').textContent=state.archive==='las-vegas'?'A city of copies. A culture of its own.':state.archive==='va'?'A museum visit, recorded through objects, spaces and sounds.':'Copies, collections and worlds made from elsewhere.';
    $('result-count').textContent=format(result.total)+' '+(result.total===1?'item':'items');
    const start=(state.page-1)*PAGE_SIZE+1,end=Math.min(state.page*PAGE_SIZE,result.total);
    $('result-context').textContent=archiveName(state.archive)+' \u00b7 '+mediaName(state.media)+(state.element?' \u00b7 '+state.element:'')+(state.collection?' \u00b7 '+collectionMap.get(state.collection).name:'')+(state.q?' \u00b7 Matching "'+state.q+'"':'')+(result.total?' \u00b7 Showing '+format(start)+'\u2013'+format(end):'');
    renderMedia(result);renderFilters(result);renderCards(current.slice(start-1,end));renderPagination(result.total);
    const awaiting=state.media&&!mediaTotals[state.media];$('empty-state').hidden=!!result.total;
    $('empty-title').textContent=awaiting?mediaName(state.media)+' are coming soon':'No items found';
    $('empty-message').textContent=awaiting?'Files from your group have not been added yet. Browse images, videos or audio in the meantime.':'Try a broader keyword, another media type, or remove a subject or source filter.';
    $('active-filters').innerHTML=['archive','collection','country','element'].filter(k=>state[k]).map(k=>'<button class="active-chip" data-clear="'+k+'" aria-label="Remove '+escape(state[k])+' filter">'+escape(k==='archive'?archiveName(state[k]):k==='collection'?collectionMap.get(state[k]).name:state[k])+'<span>\u00d7</span></button>').join('');
    $('download-catalog').textContent='Download '+format(result.total)+' results';writeUrl();
  }
  function search(q){clearTimeout(debounce);state.q=String(q).trim().slice(0,200);state.page=1;render();}
  function reset(){clearTimeout(debounce);Object.assign(state,{q:'',media:'',archive:'',collection:'',country:'',element:'',sort:'relevance',page:1});render();}
  function chooseSubject(value){if(value&&!elements.includes(value))return;state.collection='';state.element=value;state.page=1;render();}
  function chooseMedia(value){if(value&&!mediaTypes.some(t=>t.key===value))return;state.media=value;state.collection='';state.country='';state.element='';state.page=1;render();}
  function stopDetail(){window.ArchiveModels.dispose();$('detail-model-panel').hidden=true;for(const id of ['detail-audio','detail-video']){const p=$(id);p.pause();p.removeAttribute('src');p.load();}}
  function closeDetail(){stopDetail();if($('detail-dialog').open)$('detail-dialog').close();detailItem=null;window.ArchiveMusic?.dialogChanged();}
  function openDetail(item,show=true){
    if(!item)return;stopCards();stopDetail();detailItem=item;
    const pos=current.findIndex(i=>i.id===item.id),isAudio=item.type==='audio',isVideo=item.type==='video',isModel=item.type==='model';
    const sourceModelFormat=item.modelKind==='gaussian_splat'?'PLY':item.modelFormat==='obj'?'OBJ':'Blender';
    $('detail-position').textContent=pos<0?'Linked item':(pos+1)+' / '+format(current.length);$('previous-image').disabled=pos<=0;$('next-image').disabled=pos<0||pos>=current.length-1;
    $('detail-image').hidden=isAudio||isVideo||isModel;$('detail-audio-panel').hidden=!isAudio;$('detail-audio').hidden=!isAudio;$('detail-video').hidden=!isVideo;
    if(isAudio){$('detail-audio').src=item.audio;$('detail-audio-duration').textContent=duration(item.durationSeconds)+' \u00b7 '+(item.audioCodecLabel||'MP3');}
    else if(isVideo){$('detail-video').src=item.video;$('detail-video').poster=item.thumbnail;$('detail-video').preload='metadata';}
    else if(!isModel){$('detail-image').src=item.image;$('detail-image').alt=item.title;$('detail-image').width=item.displayWidth;$('detail-image').height=item.displayHeight;}
        $('detail-model-panel').hidden=!isModel;$('model-status').textContent=isModel?'Loading 3D preview...':'';
    $('model-notes').hidden=!isModel;$('model-geometry').textContent=isModel?item.modelLabel+'. '+item.geometryLimitations:'';
    $('download-glb').hidden=!isModel;if(isModel){$('download-glb').href=item.modelPreview;$('download-glb').download=item.id+(item.modelKind==='gaussian_splat'?'.splat':'.glb');$('download-glb').textContent=item.modelKind==='gaussian_splat'?'Download splat preview':'Download GLB';}
    const related=isModel?[itemMap.get(item.sourceImageId)]:items.filter(i=>i.type==='model'&&i.sourceImageId===item.id);
    $('related-items').hidden=!related.filter(Boolean).length;
    $('related-links').innerHTML=related.filter(Boolean).map(i=>'<button class="outline-link" data-related="'+escape(i.id)+'">'+(i.type==='model'?'View related model':'View source image')+'</button>').join('');
    $('detail-title').textContent=item.title;$('detail-eyebrow').textContent=item.type.toUpperCase()+' / '+sourceName(item);
    $('detail-format').textContent=item.mediaFormat+((item.sourcePeriods||[]).length?' \u00b7 Source-stated period: '+item.sourcePeriods.join(', '):'');
    $('detail-location-label').textContent=isVideo?'SOURCE LOCATION CONTEXT':isAudio?'RECORDING LOCATION':isModel?'SCAN LOCATION CONTEXT':item.location?(item.collectionKey==='publicity'?'PUBLICATION PLACE CONTEXT':'RECORDED IMAGE LOCATION'):'LOCATION STATUS';
    $('detail-location').textContent=item.location|| (isAudio?'Not verified. Source titles and file labels do not establish the recording location.':'Not established by the source record. The image may show a depicted or imagined scene.');
    if(item.collectionKey==='publicity'&&item.location)$('detail-location').textContent+=' \u2014 publication context, not verified photograph geolocation.';
    $('detail-reference').textContent=[item.referenceCountry==='Unspecified'?'No specific origin recorded':item.referenceCountry,item.referenceContext].filter(Boolean).join(' \u00b7 ');
    $('detail-description').textContent=item.description;$('detail-objects').textContent=item.objects.join(' \u00b7 ');
    $('detail-objects-label').textContent=isAudio?'Annotated sound content':'Annotated visible elements';
    $('detail-symbols-section').hidden=!item.symbols.length;$('detail-symbols').textContent=item.symbols.join(' \u00b7 ');
    $('detail-review').hidden=!item.uncertainty&&!isAudio&&!isVideo&&!isModel;$('detail-review').textContent=isModel?(item.reviewStatus==='needs_review'?'Supplied model flagged for review. ':'')+(item.modelKind==='gaussian_splat'?'Recorded 3D appearance; sparse or missing scan regions are retained. The compact preview uses constant colour; download PLY for the full scan.': 'Preview preserves the supplied geometry; it does not reconstruct unseen surfaces.'):isVideo?'Source-informed description and automated sampled-frame annotations. '+(item.uncertainty||''):isAudio?'AI-generated description and tags; pending human listening review. '+(item.uncertainty||''):(item.uncertainty||'');
    $('video-moments').hidden=!isVideo;
    $('video-moment-list').innerHTML=isVideo?(item.frameDescriptions||[]).map(f=>'<button class="moment-button" data-time="'+Number(f.time)+'" aria-label="Seek to '+duration(f.time)+'"><span class="moment-time">'+duration(f.time)+'</span><span class="moment-caption">'+escape(f.caption)+'</span></button>').join(''):'';
    $('video-analysis-note').textContent=isVideo?(item.frameDescriptions||[]).length+' sampled frames. Captions are automated observations, not a verified transcript.':'';
    $('transcript-section').hidden=!isAudio||!item.transcriptDraft;$('detail-transcript').textContent=item.transcriptDraft||'';
    $('detail-tags').innerHTML=item.tags.map(t=>'<button data-tag="'+escape(t)+'">'+escape(t)+'</button>').join('');
    const file=fileFor(item);$('download-image').href=file;$('download-image').download=item.downloadName;$('download-image').textContent=isModel?(sourceModelFormat==='PLY'?'Download PLY scan':sourceModelFormat==='OBJ'?'Download OBJ':'Download Blender'):isVideo?'Download video':isAudio?'Download audio':'Download image';
    $('open-image').hidden=isModel;$('open-image').href=file;$('open-image').textContent=isModel?'Open Blender file':isVideo?'Open video file':isAudio?'Open audio file':'Open larger';
    $('detail-size').textContent=isModel?(sourceModelFormat==='PLY'?'PLY scan':sourceModelFormat+' file')+' \u00b7 '+(item.bytes/1048576).toFixed(1)+' MB \u00b7 '+(item.modelKind==='gaussian_splat'?'Splat':'GLB')+' preview '+(item.previewBytes/1048576).toFixed(1)+' MB':isVideo?'MP4 / H.264 \u00b7 '+duration(item.durationSeconds)+' \u00b7 '+item.width+' \u00d7 '+item.height+' px \u00b7 '+(item.hasAudio?'With audio':'No audio track')+' \u00b7 '+(item.bytes/1048576).toFixed(1)+' MB':isAudio?(item.audioCodecLabel||'MP3')+' \u00b7 '+duration(item.durationSeconds)+' \u00b7 '+format(item.sampleRateHz)+' Hz \u00b7 '+item.channels+' channels':'Web copy: '+format(item.displayWidth)+' \u00d7 '+format(item.displayHeight)+' px \u00b7 Source: '+format(item.width)+' \u00d7 '+format(item.height)+' px';
    let sources=item.sources.filter(validUrl).map((s,n)=>'<p><a href="'+escape(validUrl(s))+'" target="_blank" rel="noopener">'+(item.sources.length===1?'Original source page':'Source page '+(n+1))+' \u2197</a></p>').join('');
    for(const c of item.credits){if(c.creator)sources+='<p>Source-recorded creator: '+escape(c.creator)+'</p>';if(c.license){const url=validUrl(c.licenseUrl);sources+='<p>License: '+(url?'<a href="'+escape(url)+'" target="_blank" rel="noopener">'+escape(c.license)+'</a>':escape(c.license))+'</p>';}}
    if(item.sourceContext)sources+='<p>Source context: '+escape(item.sourceContext)+'</p>';
    if(item.associatedNames.length)sources+='<p>Source-associated subjects: '+escape(item.associatedNames.join('; '))+'. These associations do not independently verify identity or authorship.</p>';
    $('detail-source').innerHTML=sources||'<p>Source attribution is not available in the retained record.</p>';
    document.querySelector('.detail-info').scrollTop=0;if(show&&!$('detail-dialog').open)$('detail-dialog').showModal();
    window.ArchiveMusic?.dialogChanged();if(isModel)window.ArchiveModels.open(item);
  }
  function moveDetail(delta){if(!detailItem)return;const pos=current.findIndex(i=>i.id===detailItem.id);if(pos<0)return;if(current[pos+delta])openDetail(current[pos+delta],false);}
  function restoreFocus(container,attr,value){[...$(container).querySelectorAll('['+attr+']')].find(b=>b.getAttribute(attr)===value)?.focus({preventScroll:true});}
  $('search-form').addEventListener('submit',e=>{e.preventDefault();search($('query').value);});
  $('query').addEventListener('input',()=>{clearTimeout(debounce);debounce=setTimeout(()=>search($('query').value),180);});
  document.querySelector('.search-suggestions').addEventListener('click',e=>{const b=e.target.closest('[data-query]');if(b){state.collection='';state.country='';state.element='';search(b.dataset.query);}});
  $('archive-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-archive]');if(b){state.archive=b.dataset.archive;state.collection='';state.page=1;render();restoreFocus('archive-tabs','data-archive',b.dataset.archive);}});
  $('media-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-media]');if(b){chooseMedia(b.dataset.media);restoreFocus('media-tabs','data-media',b.dataset.media);}});
  $('subject-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-subject]');if(b&&!b.disabled){chooseSubject(b.dataset.subject);restoreFocus('subject-tabs','data-subject',b.dataset.subject);}});
  $('subject-tabs').addEventListener('change',e=>{if(e.target.id==='more-subjects'&&e.target.value){chooseSubject(e.target.value);$('more-subjects')?.focus({preventScroll:true});}});
  $('collection-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-collection]');if(b){state.collection=b.dataset.collection;state.page=1;render();$('source-collections').open=false;restoreFocus('collection-tabs','data-collection',b.dataset.collection);}});
  $('clear-filters').addEventListener('click',()=>{state.archive='';state.collection='';state.country='';state.element='';state.page=1;render();});
  $('active-filters').addEventListener('click',e=>{const b=e.target.closest('[data-clear]');if(b){state[b.dataset.clear]='';state.page=1;render();}});
  $('sort').addEventListener('change',()=>{state.sort=$('sort').value;state.page=1;render();});
  $('reset-search').addEventListener('click',reset);
  $('results').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)openDetail(itemMap.get(b.dataset.id));});
  $('results').addEventListener('play',e=>{if(['AUDIO','VIDEO'].includes(e.target.tagName))stopCards(e.target);},true);
  $('pagination').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b&&!b.disabled){state.page=Number(b.dataset.page);render();document.querySelector('.results-toolbar').scrollIntoView({behavior:'smooth',block:'start'});$('results').focus({preventScroll:true});}});
  $('close-detail').addEventListener('click',closeDetail);$('previous-image').addEventListener('click',()=>moveDetail(-1));$('next-image').addEventListener('click',()=>moveDetail(1));
  $('detail-dialog').addEventListener('close',()=>{stopDetail();detailItem=null;});
  $('video-moment-list').addEventListener('click',e=>{
    const b=e.target.closest('[data-time]');
    if(!b||detailItem?.type!=='video')return;
    const activeId=detailItem.id,player=$('detail-video'),seek=()=>{if(detailItem?.id!==activeId)return;player.currentTime=Math.min(Number(b.dataset.time),Math.max(0,detailItem.durationSeconds-.05));player.focus();};
    if(player.readyState>=1)seek();else player.addEventListener('loadedmetadata',seek,{once:true});
  });
  $('related-links').addEventListener('click',e=>{const b=e.target.closest('[data-related]');if(b)openDetail(itemMap.get(b.dataset.related),false);});
  $('detail-tags').addEventListener('click',e=>{const b=e.target.closest('[data-tag]');if(b){closeDetail();state.media='';state.collection='';state.country='';state.element='';search(b.dataset.tag);}});
  for(const dialog of [$('detail-dialog'),$('about-dialog')])dialog.addEventListener('click',e=>{if(e.target===dialog){const box=dialog.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)dialog.close();}});
  $('about-button').addEventListener('click',()=>{$('about-dialog').showModal();window.ArchiveMusic?.dialogChanged();});$('close-about').addEventListener('click',()=>$('about-dialog').close());$('about-browse').addEventListener('click',()=>$('about-dialog').close());
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('detail-dialog').open&&!$('about-dialog').open){e.preventDefault();$('query').focus();}if($('detail-dialog').open&&!['INPUT','TEXTAREA','SELECT','VIDEO','AUDIO','MODEL-VIEWER','CANVAS'].includes(document.activeElement.tagName)){if(e.key==='ArrowLeft'){e.preventDefault();moveDetail(-1);}if(e.key==='ArrowRight'){e.preventDefault();moveDetail(1);}}});
  window.addEventListener('popstate',()=>{readUrl();render();});
  $('download-catalog').addEventListener('click',()=>{
    const cols=['id','type','archive','source_collection','title','description','tags','subjects','media_format','duration_seconds','review_status','reference_country','recorded_location','source_context','file','source','creator','license','timed_annotations','model_kind','geometry_limitations','preview_file','source_image_id'];
    const rows=current.map(i=>[i.id,i.type,i.archiveTitle||'Las Vegas',i.collection,i.title,i.description,i.tags.join('; '),i.elements.join('; '),i.mediaFormat,i.durationSeconds??'',i.reviewStatus||'',i.referenceCountry,i.location,i.sourceContext,fileFor(i),i.sources.join('; '),i.credits.map(c=>c.creator).join('; '),i.credits.map(c=>c.license).join('; '),i.type==='video'?JSON.stringify(i.frameDescriptions):'',i.modelKind||'',i.geometryLimitations||'',i.modelPreview||'',i.sourceImageId||'']);
    const csv='\ufeff'+[cols,...rows].map(row=>row.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\r\n');
    const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));link.download='borrowed-worlds-'+(state.media||'all')+'-'+current.length+'-items.csv';link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
  });
  $('about-summary').textContent='Explore Las Vegas and the V&A visit through '+format(mediaTotals.image)+' images and '+format(mediaTotals.audio)+' audio clips and '+format(mediaTotals.video)+' video clips and '+format(mediaTotals.model)+' models.';
  $('footer-count').textContent=format(mediaTotals.image)+' images \u00b7 '+format(mediaTotals.audio)+' audio clips \u00b7 '+format(mediaTotals.video)+' videos \u00b7 '+format(mediaTotals.model)+' models \u00b7 Las Vegas / V&A';
  readUrl();render();
})();
