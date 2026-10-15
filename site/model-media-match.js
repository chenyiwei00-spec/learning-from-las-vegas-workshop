/* Shared archive matching; no player or model-generation dependency. */
(()=>{'use strict';let indexPromise=null;const recentAudio=[];const random=()=>crypto.getRandomValues(new Uint32Array(1))[0]/4294967296;
const stopWords=new Set('a an the and or of to in on at by for from with is are this that it its as be has have into other image photo photograph photographs video audio sound model sculpture replica vegas las nevada usa united states unknown unspecified architecture advertisement publicity inspiration detournement'.split(' '));
const aliases={buildings:'building',trees:'tree',roads:'road',street:'road',streets:'road',vehicles:'vehicle',cars:'vehicle',car:'vehicle',traffic:'vehicle',automobile:'vehicle',automobiles:'vehicle',buses:'vehicle',bus:'vehicle',signs:'sign',signage:'sign',signboard:'sign',billboard:'sign',billboards:'sign',crowds:'people',crowd:'people',person:'people',pedestrian:'people',pedestrians:'people',voices:'voice',speech:'voice',talking:'voice',conversation:'voice',music:'music',musical:'music',birdsong:'bird',birds:'bird',leaves:'tree',foliage:'tree',fountains:'fountain',waterfall:'water',waterfalls:'water'};
function tokens(value){return String(value||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().match(/[a-z0-9]+/g)?.filter(w=>w.length>2&&!stopWords.has(w)).map(w=>aliases[w]||w)||[];}
function features(item){const map=new Map();const add=(value,weight)=>{for(const t of new Set(tokens(value)))map.set(t,(map.get(t)||0)+weight);};add(item.title,5);add(item.subjectTitle,2);add((item.tags||[]).join(' '),4);add((item.objects||[]).join(' '),2);add((item.elements||[]).join(' '),1.5);add(item.description,1);if(item.type==='video')add((item.frameDescriptions||[]).map(f=>f.caption+' '+(f.labels||[]).join(' ')).join(' '),.7);return map;}
async function index(){
 if(!indexPromise)indexPromise=(async()=>{const data=window.ARCHIVE_DATA||await fetch('catalog.json').then(r=>{if(!r.ok)throw Error('Archive descriptions unavailable.');return r.json();});const items=new Map(data.items.map(x=>[x.id,x])),candidates=data.items.filter(x=>['audio','video'].includes(x.type)&&(x[x.type]||x.playbackUrl));const df=new Map(),vectors=new Map();for(const item of candidates){const v=features(item);vectors.set(item.id,v);for(const t of v.keys())df.set(t,(df.get(t)||0)+1);}return{items,candidates,vectors,idf:t=>1+Math.log((candidates.length+1)/((df.get(t)||0)+1))};})();
 return indexPromise;
}
function queryFor(composition,metadata,data){
 const query=new Map(),sourceIds=[...new Set((composition?.layers||[]).map(l=>String(l.sourceId||l.objectId||'').split('::')[0]))];
 const add=(map,weight=1)=>{for(const [t,w]of map)query.set(t,(query.get(t)||0)+w*weight);};
 for(const id of sourceIds){const item=data.items.get(id);if(item)add(features(item));}
 for(const l of composition?.layers||[]){const title=composition.assets?.[l.sourceId]?.title||composition.assets?.[l.objectId]?.title||'';add(features({title}),2);}
 add(features(metadata||{}));
 // Extend visual subjects to the corresponding audible context, with lower weight.
 const themes={road:['vehicle','engine'],vehicle:['engine','traffic'],tree:['bird','wind'],people:['voice','footsteps'],hotel:['crowd','music'],casino:['slot','machine','music'],fountain:['water','splash'],water:['water','splash'],sign:['road','vehicle'],tower:['city','road']};
 for(const [key,related]of Object.entries(themes))if(query.has(key))for(const word of related){const t=aliases[word]||word;query.set(t,(query.get(t)||0)+Math.min(3,query.get(key)*.2));}
 return {query,sourceIds};
}
async function associate(composition){
 const data=await index(),{query,sourceIds}=queryFor(composition,null,data);
 const norm=v=>Math.sqrt([...v].reduce((sum,[t,w])=>sum+(w*data.idf(t))**2,0)),qn=norm(query);
 function best(type){
  const ranked=data.candidates.filter(x=>x.type===type).map(item=>{const v=data.vectors.get(item.id),terms=[...query.keys()].filter(t=>v.has(t)),dot=terms.reduce((n,t)=>n+query.get(t)*v.get(t)*data.idf(t)**2,0),score=dot/Math.max(1,qn*norm(v));return {item,score,terms};}).sort((a,b)=>b.score-a.score||a.item.id.localeCompare(b.item.id));if(!ranked.length)return null;
  let winner=ranked[0],basis=winner.score>0?'description-and-tags':'archive-context';
  if(type==='audio'){
   const strong=ranked.filter(r=>r.terms.length>=2&&r.score>=.08&&r.score>=ranked[0].score*.72&&!recentAudio.includes(r.item.id));
   if(strong.length){winner=strong[Math.floor(random()*Math.min(8,strong.length))];basis='description-and-tags-varied';}
   else{const fresh=ranked.filter(r=>!recentAudio.includes(r.item.id)),pool=fresh.length?fresh:ranked;winner=pool[Math.floor(random()*pool.length)];basis='random-audio-fallback';}
   recentAudio.push(winner.item.id);while(recentAudio.length>Math.min(24,ranked.length-1))recentAudio.shift();
  }
  const {item,score,terms}=winner;return {id:item.id,type,title:item.title,url:item[type]||item.playbackUrl,...(type==='video'?{thumbnail:item.thumbnail||''}:{}),score:Number(score.toFixed(5)),matchedTerms:terms.sort((a,b)=>query.get(b)*data.idf(b)-query.get(a)*data.idf(a)).slice(0,8),basis,muted:type==='video'};
 }

 return {version:2,sourceIds,video:best('video'),audio:best('audio')};
}

// Canonical keys also exclude duplicate catalogue rows pointing at the same file.
const usable=x=>typeof x?.url==='string'&&x.url.trim().length>0;
function canonical(url){try{const u=new URL(url,document.baseURI);return u.origin+u.pathname;}catch{return String(url||'');}}
async function createAllocator(){
 const data=await index(),byURL=new Map(data.candidates.map(x=>[canonical(x[x.type]||x.playbackUrl),x]));
 const keys=x=>{const item=data.items.get(x?.id)||byURL.get(canonical(x?.url));return [x?.id&&'id:'+x.id,x?.url&&'url:'+canonical(x.url),item?.sha256&&'sha:'+item.sha256].filter(Boolean);};
 return rows=>{
  const used={video:new Set(),audio:new Set()};
  const reserve=(type,media)=>{if(usable(media))for(const key of keys(media))used[type].add(key);};
  for(const row of rows)for(const type of ['video','audio'])reserve(type,row.record?.linkedMedia?.[type]);
  const norm=v=>Math.sqrt([...v].reduce((sum,[t,w])=>sum+(w*data.idf(t))**2,0));
  return row=>{
   if(!row.record||row.record.target==='space')return null;
   const previous=row.record.linkedMedia||{};
   if(usable(previous.video)&&usable(previous.audio))return null;
   const {query,sourceIds}=queryFor(row.composition,{...row.record,...row,title:row.title||row.record.title},data),qn=norm(query);
   const next={...previous,version:Math.max(2,previous.version||0),sourceIds:previous.sourceIds||sourceIds};
   let changed=false;
   for(const type of ['video','audio']){
    if(usable(previous[type]))continue;
    const ranked=data.candidates.filter(item=>item.type===type).map(item=>{
     const url=item[type]||item.playbackUrl,media={id:item.id,url};
     if(keys(media).some(k=>used[type].has(k)))return null;
     const v=data.vectors.get(item.id),terms=[...query.keys()].filter(t=>v.has(t));
     const score=terms.reduce((n,t)=>n+query.get(t)*v.get(t)*data.idf(t)**2,0)/Math.max(1,qn*norm(v));
     return {item,url,score,terms};
    }).filter(Boolean).sort((a,b)=>b.score-a.score||a.item.id.localeCompare(b.item.id));
    if(!ranked.length)continue;
    const matched=ranked[0].score>=.06&&ranked[0].terms.length>0;
    const winner=matched?ranked[0]:ranked[Math.floor(random()*ranked.length)];
    next[type]={id:winner.item.id,type,title:winner.item.title,url:winner.url,
     ...(type==='video'?{thumbnail:winner.item.thumbnail||''}:{}),
     score:Number(winner.score.toFixed(5)),matchedTerms:matched?winner.terms.slice(0,8):[],
     basis:matched?'description-and-tags':'random-unique-fallback',muted:type==='video'};
    reserve(type,next[type]);changed=true;
   }
   return changed?{...next,completedAt:new Date().toISOString(),completionPolicy:'fill-missing-unique-v1'}:null;
  };
 };
}
window.ModelMediaMatch=Object.freeze({associate,index,createAllocator,usable});

})();
