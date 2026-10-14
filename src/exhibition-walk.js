import * as THREE from 'three';

(() => {
  'use strict';
  const surface = document.getElementById('walk-surface');
  const host = document.getElementById('walk-canvas-host');
  if (!surface || !host) return;
  const $ = id => document.getElementById(id);
  const ROOM = Object.freeze({width:20, depth:20, height:5, wallThickness:0.18});
  const EYE_HEIGHT = 1.65, RADIUS = 0.35, SPEED = 1.8;
  const LIMIT = ROOM.width / 2 - RADIUS;
  const keys = new Set(), raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
  const eye = new THREE.Vector3(0, EYE_HEIGHT, 7);
  const forward = new THREE.Vector3(), right = new THREE.Vector3(), direction = new THREE.Vector3();
  let renderer, scene, camera, roomMeshes = [], ready = false, disposed = false;
  let yaw = 0, pitch = 0, fly = false, active = false, drag = null;
  let raf = 0, lastTime = 0, frameCount = 0, teleport = null;
  const clamp = (value,min,max) => Math.max(min,Math.min(max,value));
  const navigationKeys = new Set(['KeyW','KeyA','KeyS','KeyD','KeyQ','KeyE','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight','ControlLeft','ControlRight']);
  const walkingKeys = ['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];
  const held = (...codes) => codes.some(code => keys.has(code));

  function constrain(position) {
    position.x = clamp(position.x,-LIMIT,LIMIT);
    position.z = clamp(position.z,-LIMIT,LIMIT);
    position.y = fly ? clamp(position.y,RADIUS,ROOM.height-RADIUS) : EYE_HEIGHT;
    return position;
  }
  function orient() {
    camera.position.copy(eye);
    camera.rotation.set(pitch,yaw,0,'YXZ');
    camera.updateMatrixWorld();
  }
  function ui() {
    $('walk-mode').textContent = fly ? 'Fly mode' : 'Walk mode';
    $('walk-mode').setAttribute('aria-pressed',String(fly));
    $('walk-mode').title = 'Space: switch between walking and flying';
    $('walk-status').textContent = (fly ? 'FLY' : 'WALK') + ' / EYE ' + eye.y.toFixed(2) + ' M';
  }
  function clearInput() {
    keys.clear();
    if (drag) {
      try {renderer.domElement.releasePointerCapture(drag.id);} catch {}
    }
    drag = null;
    surface.classList.remove('is-dragging');
    lastTime = 0;
  }
  function focusView() {
    active = true;
    surface.focus({preventScroll:true});
  }
  function movingByKeys() {
    return active && (walkingKeys.some(key => keys.has(key)) || (fly && held('KeyQ','KeyE')));
  }
  function requestFrame() {
    if (!ready || disposed || document.hidden || raf) return;
    raf = requestAnimationFrame(frame);
  }
  function frame(time) {
    raf = 0;
    if (disposed || document.hidden) return;
    const dt = lastTime ? Math.min((time-lastTime)/1000,0.05) : 1/60;
    lastTime = time;
    if (teleport) {
      const progress = clamp((time-teleport.start)/420,0,1);
      const eased = progress*progress*(3-2*progress);
      eye.lerpVectors(teleport.from,teleport.to,eased);
      constrain(eye);
      if (progress === 1) teleport = null;
    }
    if (movingByKeys()) {
      teleport = null;
      const verticalPitch = fly ? pitch : 0;
      forward.set(-Math.sin(yaw)*Math.cos(verticalPitch),Math.sin(verticalPitch),-Math.cos(yaw)*Math.cos(verticalPitch));
      right.set(Math.cos(yaw),0,-Math.sin(yaw));
      direction.set(0,0,0);
      if (held('KeyW','ArrowUp')) direction.add(forward);
      if (held('KeyS','ArrowDown')) direction.sub(forward);
      if (held('KeyD','ArrowRight')) direction.add(right);
      if (held('KeyA','ArrowLeft')) direction.sub(right);
      if (fly && held('KeyE')) direction.y += 1;
      if (fly && held('KeyQ')) direction.y -= 1;
      const multiplier = held('ControlLeft','ControlRight') ? 6 : held('ShiftLeft','ShiftRight') ? 3 : 1;
      if (direction.lengthSq()) eye.addScaledVector(direction.normalize(),SPEED*multiplier*dt);
      constrain(eye);
    }
    orient();
    renderer.render(scene,camera);
    frameCount++;
    ui();
    if (movingByKeys() || teleport) requestFrame();
    else lastTime = 0;
  }
  function reset() {
    clearInput(); teleport = null; fly = false;
    eye.set(0,EYE_HEIGHT,7); yaw = 0; pitch = 0;
    ui(); requestFrame();
  }
  function resize() {
    if (!renderer || disposed) return;
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1,1.5));
    renderer.setSize(rect.width,rect.height,false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    requestFrame();
  }
  function hitAt(event) {
    orient();
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
    raycaster.setFromCamera(pointer,camera);
    return raycaster.intersectObjects(roomMeshes,false)[0] || null;
  }
  function showError(message) {
    $('walk-error').textContent = message;
    $('walk-error').hidden = false;
    surface.setAttribute('aria-busy','false');
  }
  try {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#ffffff');
    camera = new THREE.PerspectiveCamera(62,1,0.05,80);
    renderer = new THREE.WebGLRenderer({antialias:true,powerPreference:'low-power'});
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.shadowMap.enabled = false;
    host.append(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden','true');

    const wall = new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.94,metalness:0});
    const floor = new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.88,metalness:0});
    const t = ROOM.wallThickness, half = ROOM.width/2;
    function box(name,width,height,depth,x,y,z,material=wall) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(width,height,depth),material);
      mesh.name = name; mesh.position.set(x,y,z); scene.add(mesh); roomMeshes.push(mesh);
      return mesh;
    }
    box('floor',20+2*t,t,20+2*t,0,-t/2,0,floor);
    box('ceiling',20+2*t,t,20+2*t,0,ROOM.height+t/2,0);
    box('west-wall',t,ROOM.height,20+2*t,-half-t/2,ROOM.height/2,0);
    box('east-wall',t,ROOM.height,20+2*t,half+t/2,ROOM.height/2,0);
    box('north-wall',20,ROOM.height,t,0,ROOM.height/2,-half-t/2);
    box('south-wall',20,ROOM.height,t,0,ROOM.height/2,half+t/2);
    // White materials with gentle lighting retain the depth of the empty room.
    scene.add(new THREE.HemisphereLight(0xffffff,0xf3f3f3,3.8));
    for (const x of [-5,5]) for (const z of [-5,5]) {
      const light = new THREE.PointLight(0xffffff,24,28,2);
      light.position.set(x,4.55,z); scene.add(light);
    }
    ready = true;
    surface.setAttribute('aria-busy','false');
    ui(); resize();
  } catch (error) {
    console.error('White exhibition room:',error);
    showError('The 3D room could not start. Enable WebGL in your browser and reload this page.');
    return;
  }

  const canvas = renderer.domElement;
  canvas.addEventListener('contextmenu',event => event.preventDefault());
  canvas.addEventListener('pointerdown',event => {
    if (event.button > 2) return;
    event.preventDefault(); focusView(); teleport = null;
    const hit = event.button === 2 ? hitAt(event) : null;
    const pivot = hit?.point.clone() || eye.clone().add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(5));
    drag = {id:event.pointerId,button:event.button,x:event.clientX,y:event.clientY,pivot};
    canvas.setPointerCapture(event.pointerId);
    surface.classList.add('is-dragging');
  });
  canvas.addEventListener('pointermove',event => {
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX-drag.x, dy = event.clientY-drag.y;
    drag.x = event.clientX; drag.y = event.clientY;
    if (drag.button === 0) {
      yaw -= dx*0.0035; pitch = clamp(pitch-dy*0.0035,-1.45,1.45);
    } else if (drag.button === 1) {
      right.set(Math.cos(yaw),0,-Math.sin(yaw));
      eye.addScaledVector(right,-dx*0.008);
      if (fly) eye.y += dy*0.008;
      constrain(eye);
    } else {
      const offset = eye.clone().sub(drag.pivot);
      const spherical = new THREE.Spherical().setFromVector3(offset);
      spherical.theta -= dx*0.0035;
      if (fly) spherical.phi = clamp(spherical.phi+dy*0.0035,0.1,Math.PI-0.1);
      eye.copy(drag.pivot).add(new THREE.Vector3().setFromSpherical(spherical));
      constrain(eye);
      camera.position.copy(eye); camera.lookAt(drag.pivot);
      const euler = new THREE.Euler().setFromQuaternion(camera.quaternion,'YXZ');
      yaw = euler.y; pitch = clamp(euler.x-(fly ? 0 : dy*0.0035),-1.45,1.45);
    }
    requestFrame();
  });
  function endDrag(event) {
    if (drag?.id !== event.pointerId) return;
    try {canvas.releasePointerCapture(event.pointerId);} catch {}
    drag = null; surface.classList.remove('is-dragging');
  }
  canvas.addEventListener('pointerup',endDrag);
  canvas.addEventListener('pointercancel',endDrag);
  canvas.addEventListener('lostpointercapture',() => {drag=null;surface.classList.remove('is-dragging');});
  canvas.addEventListener('dblclick',event => {
    if (event.button !== 0) return;
    const hit = hitAt(event);
    if (!hit || hit.object.name !== 'floor') return;
    focusView();
    const destination = hit.point.clone();destination.y = fly ? eye.y : EYE_HEIGHT;
    constrain(destination);
    teleport = {from:eye.clone(),to:destination,start:performance.now()};
    requestFrame();
  });
  canvas.addEventListener('wheel',event => {
    if (!active) return;
    event.preventDefault(); teleport = null;
    const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? host.clientHeight : 1;
    const distance = clamp(event.deltaY*multiplier*0.006,-1.2,1.2);
    const verticalPitch = fly ? pitch : 0;
    forward.set(-Math.sin(yaw)*Math.cos(verticalPitch),Math.sin(verticalPitch),-Math.cos(yaw)*Math.cos(verticalPitch));
    eye.addScaledVector(forward,-distance); constrain(eye); requestFrame();
  },{passive:false});
  document.addEventListener('keydown',event => {
    if (event.code === 'Escape' && document.fullscreenElement === surface) {
      clearInput();teleport=null;
      document.exitFullscreen().catch(() => {});
      return;
    }
    if (!active || document.activeElement !== surface) return;
    if (event.code === 'Escape') {clearInput();teleport=null;return;}
    if (event.code === 'Space') {
      event.preventDefault();
      if (!event.repeat) {fly=!fly;constrain(eye);ui();requestFrame();}
      return;
    }
    if (navigationKeys.has(event.code)) {
      event.preventDefault(); keys.add(event.code); requestFrame();
    }
  });
  document.addEventListener('keyup',event => {
    if (keys.delete(event.code)) requestFrame();
  });
  surface.addEventListener('focus',() => {active=true;});
  surface.addEventListener('blur',() => {active=false;clearInput();teleport=null;});
  document.addEventListener('pointerdown',event => {
    if (!surface.contains(event.target)) {active=false;clearInput();teleport=null;surface.blur();}
  },true);
  window.addEventListener('blur',() => {active=false;clearInput();teleport=null;});
  document.addEventListener('visibilitychange',() => {
    if (document.hidden) {clearInput();teleport=null;if(raf)cancelAnimationFrame(raf);raf=0;}
    else requestFrame();
  });
  $('walk-mode').addEventListener('click',() => {fly=!fly;constrain(eye);ui();focusView();requestFrame();});
  $('walk-reset').addEventListener('click',() => {reset();focusView();});
  $('walk-help-toggle').addEventListener('click',() => {
    const open = $('walk-help-panel').hidden;
    $('walk-help-panel').hidden = !open;
    $('walk-help-toggle').setAttribute('aria-expanded',String(open));
  });
  $('walk-fullscreen').addEventListener('click',async () => {
    try {
      if (document.fullscreenElement === surface) await document.exitFullscreen();
      else await surface.requestFullscreen();
      focusView();
    } catch {
      $('walk-notice').textContent = 'Fullscreen is unavailable in this browser. You can still explore the room here.';
    }
  });
  document.addEventListener('fullscreenchange',() => {
    const fullscreen = document.fullscreenElement === surface;
    $('walk-fullscreen').textContent = fullscreen ? 'Exit fullscreen' : 'Fullscreen';
    $('walk-fullscreen').setAttribute('aria-pressed',String(fullscreen));
    clearInput(); resize(); focusView();
  });
  canvas.addEventListener('webglcontextlost',event => {
    event.preventDefault();ready=false;clearInput();
    showError('The graphics connection was interrupted. Reload this page to reopen the room.');
  });
  const observer = new ResizeObserver(resize); observer.observe(host);
  window.addEventListener('resize',resize);
  window.addEventListener('pagehide',event => {
    clearInput(); if(raf)cancelAnimationFrame(raf);raf=0;
    if (!event.persisted) {
      disposed=true;observer.disconnect();
      roomMeshes.forEach(mesh => mesh.geometry.dispose());
      new Set(roomMeshes.map(mesh => mesh.material)).forEach(material => material.dispose());
      renderer.dispose();
    }
  });
  window.addEventListener('pageshow',() => {resize();});
  window.ExhibitionWalk = Object.freeze({
    state:() => ({
      ready,environment:'white-enclosed-gallery',room:{...ROOM,closed:true,wallCount:4,floor:true,ceiling:true},
      camera:{x:eye.x,y:eye.y,z:eye.z,yaw,pitch},fly,active,fullscreen:document.fullscreenElement===surface,
      walkingBounds:{x:[-LIMIT,LIMIT],z:[-LIMIT,LIMIT],y:[RADIUS,ROOM.height-RADIUS]},
      displayCount:0,modelsLoaded:0,textureCount:0,
      performance:{triangles:renderer.info.render.triangles,drawCalls:renderer.info.render.calls,pixelRatio:renderer.getPixelRatio(),continuousRendering:!!raf,frameCount},
      moving:!!teleport || movingByKeys()
    }),
    reset,
    setCamera:value => {
      clearInput();teleport=null;
      if(typeof value.fly==='boolean')fly=value.fly;
      eye.set(value.x??eye.x,value.y??eye.y,value.z??eye.z);constrain(eye);
      yaw=value.yaw??yaw;pitch=clamp(value.pitch??pitch,-1.45,1.45);
      ui();requestFrame();
    },
    projectWorld:points => {
      orient();const rect=canvas.getBoundingClientRect();
      return points.map(point => {
        const p=new THREE.Vector3().fromArray(point).project(camera);
        return {x:rect.left+(p.x+1)*rect.width/2,y:rect.top+(1-p.y)*rect.height/2,depth:p.z};
      });
    }
  });
})();
