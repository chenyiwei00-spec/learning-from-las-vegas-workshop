from pathlib import Path
import ast,json,subprocess
ROOT=Path(__file__).resolve().parent.parent
for p in [ROOT/'serve_local.py',* (ROOT/'scripts').glob('*.py'),* (ROOT/'qa').rglob('*.py')]:
 ast.parse(p.read_text(encoding='utf-8-sig'),filename=str(p))
catalog=json.loads((ROOT/'site/catalog.json').read_text(encoding='utf-8'))
assert catalog['count']==len(catalog['items'])==7720
assert len({x['id'] for x in catalog['items']})==7720
for name in ['index.html','collage.html','exhibition.html']:assert (ROOT/'site'/name).is_file()
manifest=json.loads((ROOT/'site/assets/exhibition-desert/model-manifest.json').read_text(encoding='utf-8'))
assert len(manifest)==7
for model in manifest:
 for key in ['previewUrl','fullUrl']:assert model[key].startswith('assets/exhibition-desert/models/')
config=json.loads((ROOT/'team_config.json').read_text(encoding='utf-8'))
assert config['localOnly'] and config['publishDisabled']
assert all(not (isinstance(v,str) and (v.startswith('F:') or v.startswith('C:'))) for v in config.values())
for name in ['app.js','sculpture-3d.js','model-preview-finish.js','exhibition-walk.js','exhibition-model-studio.js','team-live.js','exhibition-studio.js','exhibition-workspace.js','exhibition-picker.js','exhibition-transfer.js','exhibition-browse.js','exhibition-media.js','exhibition-proximity-audio.js','exhibition-agent.js','exhibition-agent-drafts.js','exhibition-library.js','exhibition-layout.js','exhibition-counterparts.js','exhibition-fragments.js','sculpture-link.js','model-gallery.js','saved-models.js','exhibition-space-worker.js']:
 result=subprocess.run(['node','--check',str(ROOT/'site'/name)],capture_output=True,text=True)
 if result.returncode:raise RuntimeError(result.stderr)
print('Python and JavaScript syntax, 7720 records, seven exhibits and portable configuration passed.')
