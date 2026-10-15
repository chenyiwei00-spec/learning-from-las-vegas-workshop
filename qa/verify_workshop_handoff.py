"""Check path restrictions, checksums, and non-destructive reinstall."""
from pathlib import Path
import hashlib, io, json, sys, tempfile, zipfile
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from workshop_handoff import allowed_path, install, FORMAT
def pack(files, corrupt=None):
    b=io.BytesIO(); rows=[]
    with zipfile.ZipFile(b,'w') as z:
        for name,data in files.items():
            rows.append({'path':name,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
            z.writestr(name,corrupt.get(name,data) if corrupt else data)
        z.writestr('workshop-pack.json',json.dumps({'format':FORMAT,'files':rows}))
    b.seek(0);return b
for name in ['../evil.py','site/app.js','site/assets/shared-workshop/../../serve_local.py','site/assets/imported-sculptures/catalog.js','C:/temp/a','site/assets/shared-workshop/files/x.bin','/site/assets/shared-workshop/manifest.json','site/assets/imported-sculptures/../catalog.json']:
    try:allowed_path(name)
    except ValueError:pass
    else:raise AssertionError(name)
with tempfile.TemporaryDirectory(prefix='workshop-check-',dir=Path(__file__).resolve().parents[1]/'runtime') as tmp:
    root=Path(tmp);a='site/assets/shared-workshop/manifest.json';b='site/assets/shared-workshop/files/'+'a'*64+'.bin'
    files={a:b'old',b:b'blob'}
    assert install(pack(files),root)==2
    assert install(pack(files),root)==2
    try:install(pack({a:b'new',b:b'next'}, {b:b'NEXT'}),root)
    except ValueError:pass
    else:raise AssertionError('Corrupt asset accepted')
    assert (root/a).read_bytes()==b'old'
    assert not list((root/'runtime').iterdir())
    try:install(pack({a:b'new','site/app.js':b'bad'}),root)
    except ValueError:pass
    else:raise AssertionError('Code path accepted')
    assert (root/a).read_bytes()==b'old'
print('Workshop installer: path rejection, full-pack checksum staging and idempotent reinstall passed.')
