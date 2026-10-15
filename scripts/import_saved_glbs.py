"""Stage exported GLBs for the device-local saved-model library; never changes source files."""
import argparse, hashlib, json, shutil, struct, time
from pathlib import Path

def inspect_glb(path):
    raw=path.read_bytes()
    if len(raw)<28 or struct.unpack_from('<4sII',raw)!=(b'glTF',2,len(raw)):
        raise ValueError(f'{path.name}: invalid GLB 2.0 header')
    size,kind=struct.unpack_from('<II',raw,12)
    if kind!=0x4e4f534a or size+20>len(raw):
        raise ValueError(f'{path.name}: invalid GLB JSON chunk')
    tree=json.loads(raw[20:20+size])
    for item in tree.get('buffers',[])+tree.get('images',[]):
        if item.get('uri') and not item['uri'].startswith('data:'):
            raise ValueError(f'{path.name}: external resources are not embedded')
    accessors=tree.get('accessors',[])
    triangles=0
    for mesh in tree.get('meshes',[]):
        for prim in mesh.get('primitives',[]):
            if prim.get('mode',4)!=4: continue
            idx=prim.get('indices',prim.get('attributes',{}).get('POSITION'))
            if idx is not None: triangles+=accessors[idx]['count']//3
    if not triangles: raise ValueError(f'{path.name}: no triangles')
    return raw,triangles

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('source',type=Path)
    p.add_argument('--site',type=Path,default=Path(__file__).resolve().parents[1]/'site')
    args=p.parse_args()
    root=args.site/'assets/imported-sculptures'
    root.mkdir(parents=True,exist_ok=True)
    catalog=root/'catalog.json'
    rows=json.loads(catalog.read_text(encoding='utf-8'))['items'] if catalog.exists() else []
    by_hash={r['sha256']:r for r in rows}
    added=[]
    for file in sorted(args.source.glob('*.glb'),key=lambda f:f.name.casefold()):
        raw,triangles=inspect_glb(file)
        digest=hashlib.sha256(raw).hexdigest()
        if digest in by_hash: continue
        target=root/digest
        target.mkdir(exist_ok=True)
        shutil.copyfile(file,target/'model.glb')
        row=dict(sha256=digest,title=file.stem,group='Imported from Collage Studio',
                 target='city' if file.stem.lower().startswith('city') else 'sculpture',
                 modelUrl=f'assets/imported-sculptures/{digest}/model.glb',
                 previewUrl=f'assets/imported-sculptures/{digest}/preview.png',
                 triangles=triangles,bytes=len(raw),savedAt=int(time.time()*1000))
        rows.append(row);by_hash[digest]=row;added.append(file.name)
    catalog.write_text(json.dumps(dict(format='learning-vegas-local-models-v1',items=rows),indent=2)+'\n',encoding='utf-8')
    print(json.dumps(dict(added=added,total=len(rows),bytes=sum(r['bytes'] for r in rows)),ensure_ascii=False))
if __name__=='__main__': main()
