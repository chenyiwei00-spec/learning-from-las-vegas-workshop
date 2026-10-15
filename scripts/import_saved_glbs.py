"""Stage exported GLBs for the device-local saved-model library; never changes source files."""
import argparse, hashlib, json, shutil, struct, time, re
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

def obj_to_glb(path):
    """Convert this archive's vertex-colour, triangle/polygon OBJ exports without dependencies."""
    from array import array
    import math, sys
    text=path.read_text(encoding='utf-8')
    points=[];colours=bytearray();indices=array('I')
    for line in text.splitlines():
        fields=line.split()
        if not fields or fields[0].startswith('#'): continue
        if fields[0]=='v':
            values=list(map(float,fields[1:]))
            if len(values)!=6 or not all(math.isfinite(v) for v in values):
                raise ValueError(f'{path.name}: expected XYZ plus vertex RGB')
            points.append(values[:3]);colours.extend([round(max(0,min(1,c))*255) for c in values[3:6]]+[255])
        elif fields[0]=='f':
            face=[]
            for token in fields[1:]:
                if '/' in token: raise ValueError(f'{path.name}: texture/normal indexed OBJ needs a material-aware converter')
                index=int(token);index=index-1 if index>0 else len(points)+index
                if index<0 or index>=len(points): raise ValueError(f'{path.name}: invalid face index')
                face.append(index)
            if len(face)<3: raise ValueError(f'{path.name}: invalid face')
            for i in range(1,len(face)-1): indices.extend((face[0],face[i],face[i+1]))
        elif fields[0] not in ['o','g','s']:
            raise ValueError(f'{path.name}: unsupported OBJ field {fields[0]}')
    if not points or not indices: raise ValueError(f'{path.name}: empty mesh')
    positions=array('f',(v for point in points for v in point));normals=array('f',[0])*len(positions)
    for at in range(0,len(indices),3):
        a,b,c=(points[indices[at+k]] for k in range(3))
        u=[b[k]-a[k] for k in range(3)];v=[c[k]-a[k] for k in range(3)]
        normal=(u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0])
        for k in indices[at:at+3]:
            for axis in range(3): normals[k*3+axis]+=normal[axis]
    for at in range(0,len(normals),3):
        length=math.sqrt(sum(normals[at+k]**2 for k in range(3)))
        if length:
            for k in range(3): normals[at+k]/=length
    if sys.byteorder!='little':
        for a in [positions,normals,indices]: a.byteswap()
    parts=[positions.tobytes(),bytes(colours),normals.tobytes(),indices.tobytes()]
    views=[];binary=bytearray()
    for i,part in enumerate(parts):
        while len(binary)%4: binary.append(0)
        views.append(dict(buffer=0,byteOffset=len(binary),byteLength=len(part),target=34963 if i==3 else 34962));binary.extend(part)
    title=re.sub(r' \(\d+\)$','',path.stem)
    asset=dict(version='2.0',generator='Learning from Las Vegas vertex-colour OBJ import')
    if '# colourVersion saturation-1.35-v1' in text: asset['extras']=dict(colourVersion='saturation-1.35-v1',saturation=1.35)
    tree=dict(asset=asset,scene=0,scenes=[dict(nodes=[0])],nodes=[dict(mesh=0,name=title)],
              meshes=[dict(primitives=[dict(attributes=dict(POSITION=0,COLOR_0=1,NORMAL=2),indices=3,material=0)])],
              materials=[dict(pbrMetallicRoughness=dict(metallicFactor=0,roughnessFactor=1),doubleSided=True)],
              buffers=[dict(byteLength=len(binary))],bufferViews=views,
              accessors=[dict(bufferView=0,componentType=5126,count=len(points),type='VEC3',
                              min=[min(p[k] for p in points) for k in range(3)],max=[max(p[k] for p in points) for k in range(3)]),
                         dict(bufferView=1,componentType=5121,normalized=True,count=len(points),type='VEC4'),
                         dict(bufferView=2,componentType=5126,count=len(points),type='VEC3'),
                         dict(bufferView=3,componentType=5125,count=len(indices),type='SCALAR')])
    js=json.dumps(tree,separators=(',',':')).encode('utf-8');js+=b' '*((-len(js))%4);binary+=b'\0'*((-len(binary))%4)
    raw=struct.pack('<4sII',b'glTF',2,28+len(js)+len(binary))+struct.pack('<II',len(js),0x4e4f534a)+js+struct.pack('<II',len(binary),0x004e4942)+binary
    return raw,len(indices)//3

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('source',type=Path)
    p.add_argument('--include-obj',action='store_true')
    p.add_argument('--site',type=Path,default=Path(__file__).resolve().parents[1]/'site')
    args=p.parse_args()
    root=args.site/'assets/imported-sculptures'
    root.mkdir(parents=True,exist_ok=True)
    catalog=root/'catalog.json'
    rows=json.loads(catalog.read_text(encoding='utf-8'))['items'] if catalog.exists() else []
    by_hash={r['sha256']:r for r in rows}
    added=[];skipped=[]
    files=[f for f in args.source.iterdir() if f.is_file() and (f.suffix.lower()=='.glb' or args.include_obj and f.suffix.lower()=='.obj')]
    if not files: raise ValueError('No supported model files found.')
    by_source={r.get('sourceSha256',r['sha256']) for r in rows}
    for file in sorted(files,key=lambda f:f.name.casefold()):
        source_digest=hashlib.sha256(file.read_bytes()).hexdigest()
        if source_digest in by_source: skipped.append(file.name);continue
        raw,triangles=obj_to_glb(file) if file.suffix.lower()=='.obj' else inspect_glb(file)
        digest=hashlib.sha256(raw).hexdigest()
        if digest in by_hash: skipped.append(file.name);continue
        target=root/digest
        target.mkdir(exist_ok=True)
        (target/'model.glb').write_bytes(raw)
        if file.suffix.lower()=='.obj': shutil.copyfile(file,target/'model.obj')
        row=dict(sha256=digest,title=re.sub(r' \(\d+\)$','',file.stem),group='Imported from Collage Studio',
                 target='city' if file.stem.lower().startswith('city') else 'sculpture',
                 modelUrl=f'assets/imported-sculptures/{digest}/model.glb',
                 previewUrl=f'assets/imported-sculptures/{digest}/preview.png',
                 triangles=triangles,bytes=len(raw),savedAt=int(time.time()*1000))
        row['sourceSha256']=source_digest
        if file.suffix.lower()=='.obj': row['objUrl']=f'assets/imported-sculptures/{digest}/model.obj'
        rows.append(row);by_hash[digest]=row;by_source.add(source_digest);added.append(file.name)
    catalog.write_text(json.dumps(dict(format='learning-vegas-local-models-v1',items=rows),indent=2)+'\n',encoding='utf-8')
    print(json.dumps(dict(added=added,skippedDuplicates=skipped,total=len(rows),bytes=sum(r['bytes'] for r in rows)),ensure_ascii=False))
if __name__=='__main__': main()
