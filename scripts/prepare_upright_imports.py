"""Prepare upright, floor-grounded presentations without changing source exports."""
from pathlib import Path
import argparse,hashlib,json,math,struct

VERSION=1
def unpack(raw):
    size=struct.unpack_from('<I',raw,12)[0]
    return json.loads(raw[20:20+size]),raw[28+size:]
def pack(tree,binary):
    js=json.dumps(tree,separators=(',',':')).encode();js+=b' '*((-len(js))%4)
    return struct.pack('<4sII',b'glTF',2,28+len(js)+len(binary))+struct.pack('<II',len(js),0x4e4f534a)+js+struct.pack('<II',len(binary),0x004e4942)+binary
def positions(tree,binary):
    for mesh in tree['meshes']:
        for primitive in mesh['primitives']:
            a=tree['accessors'][primitive['attributes']['POSITION']]
            assert a['componentType']==5126 and a['type']=='VEC3' and not a.get('sparse')
            v=tree['bufferViews'][a['bufferView']];base=v.get('byteOffset',0)+a.get('byteOffset',0);stride=v.get('byteStride',12)
            for i in range(a['count']): yield struct.unpack_from('<fff',binary,base+i*stride)
def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--site',type=Path,default=Path(__file__).resolve().parents[1]/'site');args=parser.parse_args()
    catalog=args.site/'assets/imported-sculptures/catalog.json';data=json.loads(catalog.read_text(encoding='utf-8'));report=[]
    for item in data['items']:
        if not item.get('sourceSha256'): continue
        source=args.site/item['modelUrl'];raw=source.read_bytes()
        assert hashlib.sha256(raw).hexdigest()==item['sha256']
        tree,binary=unpack(raw)
        assert all(not any(k in n for k in ['translation','rotation','scale','matrix']) for n in tree['nodes']), 'Only untransformed archive exports are supported'
        rotate=bool(item.get('objUrl'));lower=[math.inf]*3;upper=[-math.inf]*3
        for x,y,z in positions(tree,binary):
            p=(x,z,-y) if rotate else (x,y,z)
            for k in range(3): lower[k]=min(lower[k],p[k]);upper[k]=max(upper[k],p[k])
        lift=-lower[1];scene=tree['scenes'][tree.get('scene',0)]
        node=dict(name='Upright and grounded',children=scene['nodes'],translation=[0,lift,0])
        if rotate: node['rotation']=[-math.sqrt(.5),0,0,math.sqrt(.5)]
        scene['nodes']=[len(tree['nodes'])];tree['nodes'].append(node)
        tree['asset'].setdefault('extras',{})['importPresentation']='upright-floor-v1'
        output=source.with_name('upright-v1.glb');fixed=pack(tree,binary);output.write_bytes(fixed)
        root=item['modelUrl'].rsplit('/',1)[0]
        p=dict(revision=VERSION,modelUrl=root+'/upright-v1.glb',sha256=hashlib.sha256(fixed).hexdigest(),
               previewUrl=root+'/upright-v1.png',rotationXDegrees=-90 if rotate else 0,translationY=lift,resetCamera=rotate,
               boundsMin=[lower[0],0,lower[2]],boundsMax=[upper[0],upper[1]+lift,upper[2]])
        if rotate:
            lines=[]
            for line in (args.site/item['objUrl']).read_text(encoding='utf-8').splitlines():
                f=line.split()
                if f and f[0]=='v':
                    x,y,z=map(float,f[1:4]);line='v '+' '.join([format(x,'.9g'),format(z+lift,'.9g'),format(-y,'.9g'),*f[4:]])
                lines.append(line)
            obj=source.with_name('upright-v1.obj');obj.write_text('\n'.join(lines)+'\n',encoding='utf-8')
            p.update(objUrl=root+'/upright-v1.obj',objSha256=hashlib.sha256(obj.read_bytes()).hexdigest())
        item['presentation']=p;report.append(dict(title=item['title'],rotationX=p['rotationXDegrees'],bottom=0,height=p['boundsMax'][1]))
    catalog.write_text(json.dumps(data,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(report))
if __name__=='__main__': main()
