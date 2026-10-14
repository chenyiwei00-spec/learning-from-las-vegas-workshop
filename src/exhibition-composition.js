import * as THREE from 'three';

const MODEL = /^assets\/(exhibition-desert\/models\/sign_0[1-7]_(preview|full)\.glb|generated-sculptures\/[a-f0-9]{64}\/sculpture\.glb)$/;
const vector = (v, n) => Array.isArray(v) && v.length === n && v.every(x => Number.isFinite(x) && Math.abs(x) < 10000);
export function validDescriptor(value, depth = 0, budget = {count: 0}) {
  if (!value || depth > 6 || ++budget.count > 80 || typeof value.name !== 'string' || value.name.length > 160) return false;
  if (value.kind === 'composition') return Array.isArray(value.parts) && value.parts.length > 0 && value.parts.length <= 40 && value.parts.every(p =>
    vector(p.position, 3) && vector(p.quaternion, 4) && Math.abs(Math.hypot(...p.quaternion)-1)<.001 && vector(p.scale, 3) && p.scale.every(s => Math.abs(s) > 0.000001) && validDescriptor(p.descriptor, depth + 1, budget));
  if (value.kind === 'photo') return /^(data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+|assets\/[\w/ .-]+\.(png|jpg|jpeg|webp))$/.test(value.imageUrl || '') && !value.imageUrl.includes('..') && value.imageUrl.length <= 12 * 1024 * 1024;
  return MODEL.test(value.previewUrl || '');
}

export function environmentState(entries, startingCount = 7) {
  const changed = entries.filter(e => e.original === false);
  const colors = changed.map(e => e.palette).filter(c => /^#[a-f0-9]{6}$/i.test(c || ''));
  const color = new THREE.Color('#d4b39a');
  if (colors.length) { color.setRGB(0, 0, 0); colors.forEach(c => color.add(new THREE.Color(c))); color.multiplyScalar(1 / colors.length); }
  return {amount: Math.min(1, changed.length / Math.max(1, startingCount)), changed: changed.length, palette: '#' + color.getHexString()};
}

function independentClone(source) {
  const object = source.clone(true), geometries = new Map(), materials = new Map(), textures = new Map();
  object.traverse(o => {
    if (!o.isMesh) return;
    if (!geometries.has(o.geometry)) geometries.set(o.geometry, o.geometry.clone());
    o.geometry = geometries.get(o.geometry);
    const copy = material => {
      if (!materials.has(material)) {
        const m = material.clone();
        for (const [key, texture] of Object.entries(m)) if (texture?.isTexture) {
          if (!textures.has(texture)) textures.set(texture, texture.clone());
          m[key] = textures.get(texture);
        }
        materials.set(material, m);
      }
      return materials.get(material);
    };
    o.material = Array.isArray(o.material) ? o.material.map(copy) : copy(o.material);
  });
  return object;
}

export function modelFactory(loader) {
  const templates = new Map();
  async function raw(desc) {
    if (!validDescriptor(desc)) throw Error('This artwork contains an unsupported model or transform.');
    if (desc.kind === 'composition') {
      const object = new THREE.Group();
      for (const part of desc.parts) {
        const child = await normalized(part.descriptor);
        child.position.fromArray(part.position); child.quaternion.fromArray(part.quaternion); child.scale.fromArray(part.scale);
        object.add(child);
      }
      return object;
    }
    if (desc.kind === 'photo') {
      const texture = await new THREE.TextureLoader().loadAsync(desc.imageUrl);
      texture.colorSpace = THREE.SRGBColorSpace;
      return new THREE.Mesh(new THREE.PlaneGeometry(2.7 * texture.image.width / texture.image.height, 2.7), new THREE.MeshBasicMaterial({map: texture, transparent: true, side: THREE.DoubleSide, depthWrite: false}));
    }
    if (!templates.has(desc.previewUrl)) {
      templates.set(desc.previewUrl, loader.loadAsync(desc.previewUrl).catch(error => { templates.delete(desc.previewUrl); throw error; }));
    }
    return independentClone((await templates.get(desc.previewUrl)).scene);
  }
  async function normalized(desc) {
    const content = await raw(desc);
    if (desc.kind === 'photo') return content;
    content.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(content), size = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3());
    const object = new THREE.Group(); content.position.sub(center); object.add(content); object.scale.setScalar(2.7 / Math.max(size.x, size.y, size.z, .001));
    return object;
  }
  return {raw, normalized};
}

export function placementStorage(mode, value) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('learning-vegas-white-exhibition-v1', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('exhibition');
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result, tx = db.transaction('exhibition', mode);
      const operation = mode === 'readonly' ? tx.objectStore('exhibition').get('current') : tx.objectStore('exhibition').put(value, 'current');
      let result; operation.onsuccess = () => { result = operation.result; };
      tx.oncomplete = () => { db.close(); resolve(result); };
      tx.onabort = tx.onerror = () => { db.close(); reject(tx.error || Error('Exhibition storage unavailable.')); };
    };
  });
}
