"""Check original vertex colours and topology survive the archive OBJ conversion."""
from pathlib import Path
import argparse,hashlib,json,struct
from array import array
p=argparse.ArgumentParser();p.add_argument('--site',type=Path,default=Path(__file__).resolve().parents[1]/'site');args=p.parse_args()
bundle=json.loads((args.site/'assets/imported-sculptures/catalog.json').read_text(encoding='utf-8'))
checked=0
for item in bundle['items']:
    if not item.get('objUrl'): continue
    original=(args.site/item['objUrl']).read_bytes()
    assert hashlib.sha256(original).hexdigest()==item['sourceSha256']
    positions=array('f');colours=bytearray();faces=array('I')
    for line in original.decode().splitlines():
        f=line.split()
        if not f: continue
        if f[0]=='v': positions.extend(map(float,f[1:4]));colours.extend([round(max(0,min(1,float(c)))*255) for c in f[4:7]]+[255])
        elif f[0]=='f': faces.extend(int(i)-1 for i in f[1:])
    raw=(args.site/item['modelUrl']).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==item['sha256']
    size=struct.unpack_from('<I',raw,12)[0];tree=json.loads(raw[20:20+size]);binary=raw[28+size:]
    prim=tree['meshes'][0]['primitives'][0]
    def data(index):
        a=tree['accessors'][index];v=tree['bufferViews'][a['bufferView']]
        return binary[v['byteOffset']:v['byteOffset']+v['byteLength']]
    assert data(prim['attributes']['POSITION'])==positions.tobytes()
    assert data(prim['attributes']['COLOR_0'])==bytes(colours)
    assert data(prim['indices'])==faces.tobytes()
    assert tree['asset']['extras']['colourVersion']=='saturation-1.35-v1'
    assert len(faces)//3==item['triangles']
    checked+=1
print(f'{checked} OBJ conversions preserve original positions, triangle indices, vertex RGB and colour-version metadata.')
