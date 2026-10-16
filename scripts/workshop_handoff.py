"""Workshop handoff: streamed browser export and checked release install."""
from pathlib import Path, PurePosixPath
import argparse, hashlib, json, os, re, secrets, shutil, sys, threading, time, zipfile
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit
from github_api import release_for_download, asset_stream
ROOT = Path(__file__).resolve().parent.parent
TAG = 'teaching-workshop-v1'
FORMAT = 'learning-vegas-workshop-pack-v1'
SNAPSHOT = 'learning-vegas-browser-snapshot-v1'

def digest(path):
    h = hashlib.sha256()
    with path.open('rb') as source:
        for block in iter(lambda: source.read(1024 * 1024), b''): h.update(block)
    return h.hexdigest()

def allowed_path(name):
    parts = PurePosixPath(name).parts
    if not name or '\\' in name or ':' in name or '\0' in name or any(p in ('.', '..') or p.startswith('.') for p in parts):
        raise ValueError('Unsafe handoff path.')
    if name == 'site/assets/shared-workshop/manifest.json': return name
    if re.fullmatch(r'site/assets/shared-workshop/files/[a-f0-9]{64}\.bin', name): return name
    if name == 'site/assets/imported-sculptures/catalog.json': return name
    if re.fullmatch(r'site/assets/imported-sculptures/[a-f0-9]{64}/(?:model\.glb|model\.obj|preview\.png|upright-v1\.(?:glb|obj|png))', name): return name
    raise ValueError('File is outside the shared model and workshop directories.')

def install(archive, root=None):
    root = Path(root or ROOT).resolve()
    with zipfile.ZipFile(archive) as z:
        manifest = json.loads(z.read('workshop-pack.json'))
        if manifest.get('format') != FORMAT or not isinstance(manifest.get('files'), list):
            raise ValueError('Not a workshop handoff pack.')
        entries = manifest['files']; seen = set(); checked = []
        # Validate every path before writing any file.
        for row in entries:
            name = allowed_path(row['path'])
            if name in seen: raise ValueError('Duplicate handoff path.')
            seen.add(name)
            if not isinstance(row['bytes'], int) or not 0 <= row['bytes'] <= 2 * 1024**3:
                raise ValueError('Invalid handoff size.')
            if not re.fullmatch('[a-f0-9]{64}', row['sha256']): raise ValueError('Invalid checksum.')
            info = z.getinfo(name)
            if info.file_size != row['bytes'] or (info.external_attr >> 16) & 0o170000 == 0o120000:
                raise ValueError('Invalid archive member.')
            dest = (root / name).resolve(); dest.relative_to(root)
            checked.append((row, dest))
        # Stream all files into a staging area; a bad member never changes installed assets.
        stage = root / 'runtime' / ('handoff-install-' + secrets.token_hex(8)); stage.mkdir(parents=True)
        try:
            pending = []
            for i, (row, dest) in enumerate(checked):
                if dest.is_file() and dest.stat().st_size == row['bytes'] and digest(dest) == row['sha256']: continue
                temp = stage / str(i); h = hashlib.sha256(); size = 0
                with z.open(row['path']) as source, temp.open('wb') as output:
                    for block in iter(lambda: source.read(1024 * 1024), b''):
                        h.update(block); size += len(block); output.write(block)
                if size != row['bytes'] or h.hexdigest() != row['sha256']: raise ValueError('Checksum failed: ' + row['path'])
                pending.append((temp, dest))
            # Metadata goes last, so an interrupted install can simply be rerun.
            pending.sort(key=lambda pair: pair[1].suffix == '.json')
            for temp, dest in pending:
                dest.parent.mkdir(parents=True, exist_ok=True); temp.replace(dest)
        finally:
            for p in stage.iterdir(): p.unlink()
            stage.rmdir()
    print('Workshop assets checked and installed: ' + str(len(entries)) + ' files.', flush=True)
    return len(entries)

def download():
    token, release = release_for_download(TAG)
    assets = {a['name']: a for a in release['assets']}
    if 'workshop-download.json' not in assets: raise RuntimeError('The workshop release is not complete.')
    with asset_stream(token, assets['workshop-download.json']['id']) as response: row = json.load(response)
    if row.get('format') != FORMAT or row.get('name') != 'shared-workshop-v1.zip': raise ValueError('Invalid release manifest.')
    folder = ROOT / 'external-assets/downloads'; folder.mkdir(parents=True, exist_ok=True)
    target = folder / row['name']
    if not (target.is_file() and target.stat().st_size == row['bytes'] and digest(target) == row['sha256']):
        remote = assets.get(row['name'])
        if not remote or remote['size'] != row['bytes']: raise ValueError('The workshop archive is missing or incomplete.')
        temp = target.with_suffix('.downloading'); h = hashlib.sha256(); size = 0
        print('Downloading shared models and saved workshop (' + str(round(row['bytes'] / 1024**2)) + ' MiB)...', flush=True)
        try:
            with asset_stream(token, remote['id']) as source, temp.open('wb') as output:
                for block in iter(lambda: source.read(1024 * 1024), b''):
                    h.update(block); size += len(block); output.write(block)
            if size != row['bytes'] or h.hexdigest() != row['sha256']: raise ValueError('Workshop download checksum failed.')
            temp.replace(target)
        finally:
            if temp.exists(): temp.unlink()
    install(target)
    print('Next: START_SHARED_WORKSHOP.cmd, then Load shared workshop. Existing browser records are preserved.')

def build(source, stage):
    source = Path(source).resolve(); stage = Path(stage).resolve()
    files = []
    imports = source / 'site/assets/imported-sculptures'
    if imports.is_dir():
        for p in sorted(imports.rglob('*')):
            if not p.is_file(): continue
            name = p.relative_to(source).as_posix()
            try: allowed_path(name)
            except ValueError: continue
            files.append((name, p))
    manifest = stage / 'manifest.json'
    if manifest.is_file():
        snapshot = json.loads(manifest.read_text(encoding='utf-8'))
        if snapshot.get('format') != SNAPSHOT: raise ValueError('Invalid browser snapshot.')
        files.append(('site/assets/shared-workshop/manifest.json', manifest))
        for p in sorted((stage / 'files').glob('*.bin')):
            if digest(p) != p.stem: raise ValueError('Snapshot blob checksum failed.')
            files.append(('site/assets/shared-workshop/files/' + p.name, p))
    rows = [{'path': name, 'bytes': p.stat().st_size, 'sha256': digest(p)} for name, p in files]
    output = stage / 'shared-workshop-v1.zip'; temp = output.with_suffix('.writing')
    with zipfile.ZipFile(temp, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=1, allowZip64=True) as z:
        for name, p in files: z.write(p, name)
        z.writestr('workshop-pack.json', json.dumps({'format': FORMAT, 'files': rows}, separators=(',', ':')))
    temp.replace(output)
    row = {'format': FORMAT, 'name': output.name, 'bytes': output.stat().st_size, 'sha256': digest(output), 'files': len(files)}
    (stage / 'workshop-download.json').write_text(json.dumps(row, indent=2), encoding='utf-8')
    print(json.dumps(row), flush=True)
    return row

def capture(source, origin, port):
    source = Path(source).resolve()
    if not re.fullmatch(r'http://127\.0\.0\.1:\d{2,5}', origin): raise ValueError('Use the loopback website origin.')
    stage = source / 'runtime/teacher-handoff'; stage.mkdir(parents=True, exist_ok=True)
    (stage / 'files').mkdir(exist_ok=True)
    token = secrets.token_urlsafe(32)
    state = {'status': 'waiting', 'files': 0, 'bytes': 0}
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *args): pass
        def headers_ok(self): return self.headers.get('Origin') == origin and self.headers.get('X-Workshop-Key') == token
        def respond(self, code, obj):
            data = json.dumps(obj).encode()
            self.send_response(code); self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(data))); self.send_header('Access-Control-Allow-Origin', origin)
            self.send_header('Cache-Control', 'no-store'); self.end_headers(); self.wfile.write(data)
        def do_OPTIONS(self):
            if self.headers.get('Origin') != origin: return self.respond(403, {'error': 'Origin rejected'})
            self.send_response(204); self.send_header('Access-Control-Allow-Origin', origin)
            self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'X-Workshop-Key, Content-Type')
            self.send_header('Access-Control-Allow-Private-Network', 'true'); self.send_header('Content-Length', '0'); self.end_headers()
        def do_GET(self):
            if not self.headers_ok(): return self.respond(403, {'error': 'Unauthorized'})
            self.respond(200, state)
        def do_POST(self):
            if not self.headers_ok(): return self.respond(403, {'error': 'Unauthorized'})
            try:
                length = int(self.headers.get('Content-Length', '-1'))
                if not 0 <= length <= 2 * 1024**3: raise ValueError('Invalid export size.')
                self.connection.settimeout(120)
                if self.path == '/blob':
                    temp = stage / ('upload-' + secrets.token_hex(8)); h = hashlib.sha256(); remaining = length
                    try:
                        with temp.open('wb') as output:
                            while remaining:
                                block = self.rfile.read(min(remaining, 1024 * 1024))
                                if not block: raise ValueError('Truncated export.')
                                output.write(block); h.update(block); remaining -= len(block)
                        sha = h.hexdigest(); dest = stage / 'files' / (sha + '.bin')
                        if dest.exists(): temp.unlink()
                        else: temp.replace(dest)
                    finally:
                        if temp.exists(): temp.unlink()
                    state.update(status='exporting', files=state['files'] + 1, bytes=state['bytes'] + length)
                    return self.respond(200, {'file': 'files/' + sha + '.bin', 'bytes': length, 'sha256': sha})
                if self.path == '/manifest':
                    if length > 256 * 1024**2: raise ValueError('Snapshot metadata is too large.')
                    value = json.loads(self.rfile.read(length))
                    if value.get('format') != SNAPSHOT: raise ValueError('Invalid snapshot.')
                    (stage / 'manifest.json').write_text(json.dumps(value, separators=(',', ':')), encoding='utf-8')
                    state['status'] = 'building'
                    state['archive'] = build(source, stage); state['status'] = 'complete'
                    self.respond(200, state)
                    threading.Thread(target=server.shutdown, daemon=True).start()
                    return
                raise ValueError('Unknown export endpoint.')
            except Exception as e:
                state['status'] = 'error'; state['error'] = str(e); self.respond(400, {'error': str(e)})
    html = (ROOT / 'site/tools/workshop-transfer.html').read_text(encoding='utf-8')
    js = (ROOT / 'site/tools/workshop-transfer.js').read_text(encoding='utf-8')
    html = html.replace('<script src="workshop-transfer.js"></script>', '<script>' + js + '</script>')
    tool = source / 'site/assets/temporary-handoff-capture.html'
    tool.write_text(html, encoding='utf-8')
    (stage / 'capture-status.json').write_text(json.dumps({'status': 'waiting', 'port': port}), encoding='utf-8')
    url = origin + '/assets/temporary-handoff-capture.html#capture=' + str(port) + '&key=' + token
    server = ThreadingHTTPServer(('127.0.0.1', port), Handler)
    server.daemon_threads = True
    # Open a new normal browser tab; never attach to or inspect a browser profile.
    if os.name == 'nt':
        import subprocess
        chrome = Path(os.environ.get('LOCALAPPDATA', '')) / 'Google/Chrome/Application/chrome.exe'
        if chrome.is_file(): subprocess.Popen([str(chrome), url])
        else:
            import webbrowser
            webbrowser.open(url, new=2)
    else:
        import webbrowser
        webbrowser.open(url, new=2)
    print('Reading only this workshop browser data into the ignored runtime/teacher-handoff folder.', flush=True)
    try: server.serve_forever(poll_interval=.2)
    finally:
        server.server_close()
        (stage / 'capture-status.json').write_text(json.dumps(state), encoding='utf-8')
        if tool.exists(): tool.unlink()

def main():
    parser = argparse.ArgumentParser(description=__doc__); sub = parser.add_subparsers(dest='command', required=True)
    sub.add_parser('download')
    p = sub.add_parser('install'); p.add_argument('archive')
    p = sub.add_parser('build'); p.add_argument('--source', required=True); p.add_argument('--stage', required=True)
    p = sub.add_parser('capture'); p.add_argument('--source', required=True); p.add_argument('--origin', default='http://127.0.0.1:8065'); p.add_argument('--port', type=int, default=8097)
    args = parser.parse_args()
    if args.command == 'download': download()
    elif args.command == 'install': install(args.archive)
    elif args.command == 'build': build(args.source, args.stage)
    else: capture(args.source, args.origin, args.port)
if __name__ == '__main__':
    try: main()
    except Exception as error: print('Workshop setup failed: ' + str(error), file=sys.stderr); sys.exit(1)
