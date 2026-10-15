from pathlib import Path
import json,re,csv,collections
ROOT=Path(__file__).resolve().parent.parent
path=ROOT/'site/catalog.json'
data=json.loads(path.read_text(encoding='utf-8'))
if data.get('modelAliases'):
 print('Model catalog is already deduplicated.');raise SystemExit(0)
groups=collections.defaultdict(list)
for row in data['items']:
 if row['type']=='model':
  title=re.sub(r'\s+',' ',row['title']).strip().casefold()
  # Supplied museum scans retain their individual identities.
  key=(row.get('archiveKey'),row['id'] if row.get('modelKind') in ['mesh_scan','gaussian_splat'] else title)
  groups[key].append(row)
quality={'mesh_scan':6,'gaussian_splat':6,'simplified_procedural_geometry':5,'rounded_photo_textured_volume':4,'photo_textured_surface_reference':2,'shallow_photo_textured_reference':1}
kept=[];aliases={};report=[]
for rows in groups.values():
 ranked=sorted(rows,key=lambda x:(quality.get(x.get('modelKind'),0),not x.get('suppliedReviewRequired'),x.get('gltfMaterials',0),x.get('width',0)*x.get('height',0),x.get('previewBytes',0)),reverse=True)
 row=ranked[0]
 row['relatedSourceImageIds']=list(dict.fromkeys(x.get('sourceImageId') for x in rows if x.get('sourceImageId')))
 for field in ['tags','sources','objects','elements']:
  row[field]=list(dict.fromkeys(v for x in rows for v in x.get(field,[])))
 row['credits']=list({json.dumps(c,sort_keys=True):c for x in rows for c in x.get('credits',[])}.values())
 row['sourceVariantCount']=len(rows)
 kept.append(row)
 for other in rows[1:] if rows[0] is row else [r for r in rows if r is not row]:aliases[other['id']]=row['id']
 if len(rows)>1:report.append({'representative':row['id'],'title':row['title'],'variants':[r['id'] for r in rows]})
ids={r['id'] for r in kept}
data['items']=[r for r in data['items'] if r['type']!='model' or r['id'] in ids]
data['count']=len(data['items']);data['modelAliases']=aliases
for collection in data['collections']:collection['count']=sum(r['collectionKey']==collection['key'] for r in data['items'])
for media in data['mediaTypes']:media['count']=sum(r['type']==media['key'] for r in data['items'])
for archive in data['archives']:archive['count']=sum(r.get('archiveKey')==archive['key'] for r in data['items'])
path.write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
(ROOT/'site/catalog.js').write_text('window.ARCHIVE_DATA = '+json.dumps(data,ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
(ROOT/'site/model-deduplication.json').write_text(json.dumps({'policy':'One representative per repeated model subject; original model files retained','before':sum(len(v) for v in groups.values()),'after':len(kept),'groups':report},ensure_ascii=False,indent=2),encoding='utf-8')
csvpath=ROOT/'site/model_catalog.csv'
if csvpath.exists():
 with csvpath.open(encoding='utf-8-sig',newline='') as f:
  reader=csv.DictReader(f);fields=reader.fieldnames;records=list(reader)
 idfield=next((k for k in fields if k.lower() in ['id','model_id','item_id']),None)
 if idfield:
  with csvpath.open('w',encoding='utf-8-sig',newline='') as f:
   writer=csv.DictWriter(f,fields);writer.writeheader();writer.writerows(r for r in records if r.get(idfield) in ids)
print('Model catalog:',sum(len(v) for v in groups.values()),'->',len(kept),'representatives;',data['count'],'total archive records')
