(function (root) {
  'use strict';
  const normalize = value => String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const aliases = {'nyc':'new york','new york city':'new york','纽约':'new york','天空':'sky','树':'trees','树木':'trees','棕榈树':'palm trees','建筑':'buildings','建筑物':'buildings','人':'people','人物':'people','汽车':'vehicles','车':'vehicles','水':'water','法国':'france','巴黎':'paris','埃及':'egypt','金字塔':'pyramid','意大利':'italy','威尼斯':'venice','埃菲尔铁塔':'eiffel tower','自由女神像':'statue of liberty','french':'france','egyptian':'egypt','italian':'italy','venetian':'venice'};
  const synonymSets = [
    ['tree','trees'],
    ['person','persons','people','human'],
    ['car','cars'],['vehicle','vehicles'],
    ['building','buildings','architecture','architectural'],
    ['road','roads','street','streets','walkway','walkways'],
    ['sign','signs','signage'],
    ['water'],
    ['bridge','bridges'],['pyramid','pyramids'],['statue','statues','sculpture','sculptures'],
    ['advertisement','advertisements','advertising','ads'],['logo','logos'],['television','tv','televisions'],
    ['photomontage','photomontages','collage','collages'],['detournement','subvertising','counteradvertising']
  ];
  const synonyms = new Map(synonymSets.flatMap(set => set.map(word => [word, set])));
  for(const key of ['tree','trees'])synonyms.set(key,['tree','trees','canopy','foliage','vegetation','palm','palms']);
  for(const key of ['vehicle','vehicles'])synonyms.set(key,['vehicle','vehicles','car','cars','traffic','bus','buses','truck','trucks']);
  synonyms.set('water',['water','lake','lakes','fountain','fountains','canal','canals','pool','pools']);
  const stop = new Set(['a','an','the','of','in','and','with','at']);
  function canonical(query) {const key=normalize(query);return aliases[key] || key;}
  function terms(query) {return canonical(query).split(' ').flatMap(t=>(aliases[t]||t).split(' ')).filter(t=>t&&!stop.has(t)).map(t=>synonyms.get(t)||[t]);}
  function words(value) {return normalize(value).split(' ').filter(Boolean);}
  function matchesWord(list, term) {return list.some(w => w===term || (term.length>=4 && w.startsWith(term)));}
  function createIndex(items) {
    return items.map(item => {
      const fields=[{text:[item.title,item.subjectTitle].filter(Boolean).join(' '),weight:8},{text:item.tags.join(' '),weight:6},{text:item.objects.join(' '),weight:5},{text:[item.referenceCountry,item.referenceContext].join(' '),weight:7},{text:item.elements.join(' '),weight:4},{text:(item.symbols||[]).join(' '),weight:7},{text:[item.mediaFormat,...(item.associatedNames||[]),...(item.credits||[]).map(c=>c.creator),item.sourceContext,...(item.sourcePeriods||[])].filter(Boolean).join(' '),weight:4},{text:[item.collection,item.archiveTitle].filter(Boolean).join(' '),weight:2},{text:item.description,weight:2},{text:(item.frameDescriptions||[]).map(f=>f.caption).join(' '),weight:1},{text:item.location,weight:1}].map(f=>({...f,normalized:normalize(f.text),words:words(f.text)}));
      return {item,fields,words:[...new Set(fields.flatMap(f=>f.words))]};
    });
  }
  function run(index,state={}) {
    const query=canonical(state.q), groups=terms(state.q), matched=[];
    for(const entry of index){
      if(groups.length && !groups.every(group=>group.some(term=>matchesWord(entry.words,term))))continue;
      let score=0;
      if(groups.length)for(const field of entry.fields){
        for(const group of groups)if(group.some(term=>matchesWord(field.words,term)))score+=field.weight;
        if(field.normalized.includes(query))score+=field.weight*3;
      }
      matched.push({item:entry.item,score});
    }
    const countries={},elements={},collections={},media={};
    for(const {item} of matched){
      const inMedia=!state.media||item.type===state.media;
      if(state.archive&&(item.archiveKey||'las-vegas')!==state.archive)continue;
      const inCollection=!state.collection||item.collectionKey===state.collection, inCountry=!state.country||item.referenceCountry===state.country,inElement=!state.element||item.elements.includes(state.element);
      if(inCollection&&inElement&&inMedia)countries[item.referenceCountry]=(countries[item.referenceCountry]||0)+1;
      if(inCollection&&inCountry&&inMedia)for(const e of item.elements)elements[e]=(elements[e]||0)+1;
      if(inCountry&&inElement&&inMedia)collections[item.collectionKey]=(collections[item.collectionKey]||0)+1;
      if(inCollection&&inCountry&&inElement)media[item.type]=(media[item.type]||0)+1;
    }
    const selected=matched.filter(({item})=>(!state.archive||(item.archiveKey||'las-vegas')===state.archive)&&(!state.media||item.type===state.media)&&(!state.collection||item.collectionKey===state.collection)&&(!state.country||item.referenceCountry===state.country)&&(!state.element||item.elements.includes(state.element)));
    selected.sort((a,b)=>{
      if(state.sort==='title')return a.item.title.localeCompare(b.item.title,'en')||a.item.number-b.item.number;
      if(state.sort==='resolution')return b.item.width*b.item.height-a.item.width*a.item.height||a.item.number-b.item.number;
      if(state.sort!=='collection' && groups.length)return b.score-a.score||a.item.number-b.item.number;
      return a.item.number-b.item.number;
    });
    return {items:selected.map(x=>x.item),countries,elements,collections,media,total:selected.length,queryMatched:matched.length};
  }
  const api={normalize,canonical,createIndex,run};root.ArchiveSearch=api;
  if(typeof module!=='undefined' && module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
