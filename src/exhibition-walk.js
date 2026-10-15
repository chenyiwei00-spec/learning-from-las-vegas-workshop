import * as THREE from 'three';
import {FLOOR_SIZE,CELL_SIZE} from './exhibition-dimensions.js';
import {createFactoryRoom} from './exhibition-factory-room.js';
import {createSkylight} from './exhibition-skylight.js';
import {createExhibitionSpace} from './exhibition-space.js';
import {createExhibitionPlacement} from './exhibition-placement.js';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

(() => {
  'use strict';
  const surface = document.getElementById('walk-surface');
  const host = document.getElementById('walk-canvas-host');
  if (!surface || !host) return;
  const $ = id => document.getElementById(id);
  let ROOM = Object.freeze({width:40, depth:40, height:30, wallThickness:0.18});
  const EYE_HEIGHT = 1.65, RADIUS = 0.35, SPEED = 1.8;
  const LIMIT = ROOM.width / 2 - RADIUS;
  const keys = new Set(), raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
  const eye = new THREE.Vector3(0, EYE_HEIGHT, 14);
  const forward = new THREE.Vector3(), right = new THREE.Vector3(), direction = new THREE.Vector3();
  let renderer, scene, camera, roomCamera, axonCamera, axonControls, axonGroup, roomDetailGroup, floorGrid;
  let space=null,skylight=null,factoryRoom=null;
  let roomMeshes = [], ready = false, disposed = false, viewMode = 'room', twoPoint = false;
  let yaw = 0, pitch = 0, fly = false, active = false, drag = null;
  let immersive=false, pageScroll=0;
  let raf = 0, lastTime = 0, frameCount = 0, teleport = null;
  const clamp = (value,min,max) => Math.max(min,Math.min(max,value));
  const navigationKeys = new Set(['KeyW','KeyA','KeyS','KeyD','KeyQ','KeyE','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight','ControlLeft','ControlRight']);
  const walkingKeys = ['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];
  const held = (...codes) => codes.some(code => keys.has(code));

  function constrain(position) {
    position.x = clamp(position.x,-LIMIT,LIMIT);
    position.z = clamp(position.z,-LIMIT,LIMIT);
    position.y = fly ? clamp(position.y,RADIUS,Math.min(ROOM.height,factoryRoom?.ceilingAt(position.x)||ROOM.height)-RADIUS) : EYE_HEIGHT;
    space?.constrain(position,RADIUS);
    position.x=clamp(position.x,-LIMIT,LIMIT);position.z=clamp(position.z,-LIMIT,LIMIT);
    return position;
  }
  function orient() {
    if (viewMode === 'axonometric') {
      camera.updateMatrixWorld();
      return;
    }
    camera.position.copy(eye);
    camera.rotation.set(twoPoint ? 0 : pitch,yaw,0,'YXZ');
    camera.updateProjectionMatrix();
    if (twoPoint) {
      // Level the camera and shift the projection instead of tilting verticals.
      camera.projectionMatrix.elements[9] = Math.tan(clamp(pitch,-0.8,0.8))*camera.projectionMatrix.elements[5];
      camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    }
    camera.updateMatrixWorld();
  }
  function ui() {
    const axon = viewMode === 'axonometric';
    $('walk-two-point').hidden = axon;
    $('exhibition-proximity-sound').hidden = axon;
    $('walk-two-point').textContent = 'Two-point ' + (twoPoint ? 'on' : 'off');
    $('walk-two-point').setAttribute('aria-pressed',String(twoPoint));
    $('walk-view-toggle').textContent=axon?'Axonometric / switch':'Eye level / switch';$('walk-view-toggle').setAttribute('aria-pressed',String(axon));
    $('walk-status').textContent = axon ? 'AXONOMETRIC / 2 M GRID' : (fly ? 'FLY' : 'WALK') + ' / EYE ' + eye.y.toFixed(2) + ' M';
    $('walk-view-label').textContent = axon ? 'FLOOR PLAN' : 'WHITE ROOM';
    $('walk-caption-text').textContent = axon ? 'Drag to rotate · Wheel to zoom · Right / middle drag to pan' : 'Click to explore · Drag to look · WASD to walk · Shift to move faster';
    $('walk-dimensions').textContent = axon ? '40 \u00d7 40 M / 400 CELLS' : '40 \u00d7 40 \u00d7 '+ROOM.height.toFixed(1)+' M';
    surface.setAttribute('aria-label',axon ? 'Orthographic floor view with four hundred two metre grid cells. Drag to rotate; wheel to zoom; right or middle drag to pan.' : 'Walk through a forty by forty metre white studio hall with windows');
    surface.dataset.view = viewMode;
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
  function suspendNavigation() {
    active=false;
    if(axonControls)axonControls.enabled=false;
    clearInput();teleport=null;
    if(document.activeElement===surface)surface.blur();
  }
  function focusView() {
    if(!immersive){suspendNavigation();return;}
    active = true;
    if (axonControls) axonControls.enabled = viewMode === 'axonometric';
    surface.focus({preventScroll:true});
  }
  function enterImmersive() {
    if(immersive)return;
    pageScroll=window.scrollY;immersive=true;
    document.documentElement.classList.add('exhibition-immersive');
    surface.classList.add('is-immersive');surface.dataset.immersive='true';
    $('walk-exit-bar').hidden=false;
    surface.requestFullscreen({navigationUI:'hide'}).then(()=>{resize();focusView();}).catch(()=>{$('walk-notice').textContent='Fullscreen was blocked by the browser. The expanded view remains available.';});
    resize();focusView();
  }
  function leaveImmersive() {
    if(!immersive)return;
    immersive=false;surface.dataset.immersive='false';
    surface.classList.remove('is-immersive','show-exit');
    $('walk-exit-bar').hidden=true;
    document.documentElement.classList.remove('exhibition-immersive');
    window.ExhibitionWorkspace?.closePanel();window.ExhibitionBrowse?.close();
    placement.endDragPreview();suspendNavigation();
    if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});
    resize();window.scrollTo({top:pageScroll,behavior:'instant'});
  }
  function movingByKeys() {
    return viewMode === 'room' && active && (walkingKeys.some(key => keys.has(key)) || (fly && held('KeyQ','KeyE')));
  }
  function requestFrame() {
    if (!ready || disposed || document.hidden || raf) return;
    raf = requestAnimationFrame(frame);
  }
  function invalidateScene(){if(renderer)renderer.shadowMap.needsUpdate=true;requestFrame();}
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
    placement.updateHandles();renderer.render(scene,camera);
    frameCount++;
    ui();
    if (movingByKeys() || teleport) requestFrame();
    else lastTime = 0;
  }
  function reset() {
    clearInput(); teleport = null;
    if (viewMode === 'axonometric') {
      axonCamera.position.set(48,48,48); axonCamera.zoom = 1;
      axonControls.target.set(0,0,0); axonCamera.updateProjectionMatrix(); axonControls.update();
    } else {
      fly = false; eye.set(0,EYE_HEIGHT,7); yaw = 0; pitch = 0;
    }
    ui(); requestFrame();
  }
  function resize() {
    if (!renderer || disposed) return;
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1,1.5));
    renderer.setSize(rect.width,rect.height,false);
    const aspect = rect.width / rect.height;
    roomCamera.aspect = aspect; roomCamera.updateProjectionMatrix();
    const halfHeight = Math.max(44,64/aspect)/2;
    axonCamera.left = -halfHeight*aspect; axonCamera.right = halfHeight*aspect;
    axonCamera.top = halfHeight; axonCamera.bottom = -halfHeight;
    axonCamera.updateProjectionMatrix();
    surface.style.setProperty('--walk-toolbar-height',$('walk-toolbar').offsetHeight+'px');
    requestFrame();
  }
  function hitAt(event) {
    orient();
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
    raycaster.setFromCamera(pointer,camera);
    return raycaster.intersectObjects(viewMode === 'room' ? [...roomMeshes,...(space?.collisionMeshes()||[])] : [axonGroup.getObjectByName('axonometric-floor')],false)[0] || null;
  }
  function showError(message) {
    $('walk-error').textContent = message;
    $('walk-error').hidden = false;
    surface.setAttribute('aria-busy','false');
  }
  try {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#f2f2f2');
    roomCamera = new THREE.PerspectiveCamera(62,1,0.05,180);
    axonCamera = new THREE.OrthographicCamera(-40,40,22,-22,0.05,350);
    axonCamera.position.set(48,48,48);
    axonCamera.lookAt(0,0,0);
    camera = roomCamera;
    renderer = new THREE.WebGLRenderer({antialias:true,powerPreference:'low-power'});
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.shadowMap.enabled = true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;
    host.append(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden','true');

    const wall = new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.94,metalness:0});
    const floor = new THREE.MeshStandardMaterial({color:0xe2e5e8,roughness:0.83,metalness:0});
    const t = ROOM.wallThickness, half = ROOM.width/2;
    function box(name,width,height,depth,x,y,z,material=wall) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(width,height,depth),material);
      mesh.receiveShadow=true;mesh.name = name; mesh.position.set(x,y,z); scene.add(mesh); roomMeshes.push(mesh);
      return mesh;
    }
    box('floor',40+2*t,t,40+2*t,0,-t/2,0,floor);
    box('ceiling',40+2*t,t,40+2*t,0,ROOM.height+t/2,0,new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));
    factoryRoom=createFactoryRoom({scene,height:ROOM.height,wallMaterial:wall});roomMeshes.push(...factoryRoom.collisionMeshes());
    // Gentle contact shading and a fine perimeter seam clarify wall/floor junctions.
    roomDetailGroup = new THREE.Group(); roomDetailGroup.name = 'room-floor-junctions'; scene.add(roomDetailGroup);
    const seamGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-19.996,0.009,-19.996),new THREE.Vector3(19.996,0.009,-19.996),
      new THREE.Vector3(19.996,0.009,19.996),new THREE.Vector3(-19.996,0.009,19.996)
    ]);
    roomDetailGroup.add(new THREE.LineLoop(seamGeometry,new THREE.LineBasicMaterial({color:0xb8c0c8,transparent:true,opacity:0.7,toneMapped:false})));
    const contactGeometry = new THREE.PlaneGeometry(40,0.22,1,12);
    const coordinates = contactGeometry.attributes.position, colors = [];
    for (let i=0;i<coordinates.count;i++) {
      const distance = clamp((coordinates.getY(i)+0.11)/0.22,0,1);
      colors.push(1,1,1,0.16*Math.pow(distance,2));
    }
    contactGeometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,4));
    const contactMaterial = new THREE.MeshBasicMaterial({color:0x919aa3,vertexColors:true,transparent:true,depthWrite:false,toneMapped:false,side:THREE.DoubleSide});
    for (const [x,z,rotation] of [[0,-19.89,0],[0,19.89,Math.PI],[-19.89,0,Math.PI/2],[19.89,0,-Math.PI/2]]) {
      const contact = new THREE.Mesh(contactGeometry,contactMaterial);
      contact.rotation.set(-Math.PI/2,0,rotation);contact.position.set(x,0.005,z);
      roomDetailGroup.add(contact);
    }

    // A separate exact 40m floor avoids exposing the room's wall thickness in plan.
    axonGroup = new THREE.Group();axonGroup.name='axonometric-floor-view';axonGroup.visible=false;scene.add(axonGroup);
    const planFloor = new THREE.Mesh(new THREE.PlaneGeometry(40,40),new THREE.MeshBasicMaterial({color:0xf2f2f2,side:THREE.DoubleSide,toneMapped:false}));
    planFloor.name='axonometric-floor';planFloor.rotation.x=-Math.PI/2;axonGroup.add(planFloor);
    floorGrid = new THREE.GridHelper(40,20,0xadb5bd,0xadb5bd);
    floorGrid.name='two-metre-grid';floorGrid.position.y=0.004;
    floorGrid.material.transparent=true;floorGrid.material.opacity=0.48;
    floorGrid.material.depthWrite=false;floorGrid.material.toneMapped=false;
    axonGroup.add(floorGrid);
    const planBorder = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-20,0.006,-20),new THREE.Vector3(20,0.006,-20),
        new THREE.Vector3(20,0.006,20),new THREE.Vector3(-20,0.006,20)
      ]),new THREE.LineBasicMaterial({color:0x9eabb6,transparent:true,opacity:0.6,toneMapped:false})
    );
    axonGroup.add(planBorder);

    // White materials with gentle lighting retain the depth of the empty room.
    scene.add(new THREE.HemisphereLight(0xe4efff,0xd1c5b7,.60));
    for (const x of [-5,5]) for (const z of [-5,5]) {
      const light = new THREE.PointLight(0xffffff,7,28,2);
      light.name='gallery-ceiling-light';light.position.set(x,ROOM.height-.45,z); scene.add(light);
    }
    skylight=createSkylight({scene,renderer,height:ROOM.height,floorMaterial:floor});const pmrem=new THREE.PMREMGenerator(renderer),environment=new RoomEnvironment();scene.environment=pmrem.fromScene(environment,.05).texture;scene.environmentIntensity=.28;pmrem.dispose();environment.dispose();
    ready = true;
    surface.setAttribute('aria-busy','false');
    ui();
  } catch (error) {
    console.error('White exhibition room:',error);
    showError('The 3D room could not start. Enable WebGL in your browser and reload this page.');
    return;
  }

  const canvas = renderer.domElement;
  const placement=createExhibitionPlacement({scene,canvas,getCamera:()=>camera,getRoomMeshes:()=>roomMeshes,isRoom:()=>viewMode==='room',orient,invalidate:invalidateScene,previewInvalidate:requestFrame,suspend:suspendNavigation,getMaxHeight:()=>23});
  space=createExhibitionSpace({scene,renderer,placement,onSpaceLight:(result,active)=>skylight.updateCanopy(result,active),onSpaceBounds:frameSpace,getView:()=>viewMode,setView:setViewMode,navigate:value=>{clearInput();teleport=null;fly=false;eye.set(value.x,value.y,value.z);yaw=value.yaw;pitch=value.pitch||0;constrain(eye);ui();requestFrame();focusView();},invalidate:invalidateScene});
  // Enter at the parent capture phase; the entry click must not also edit an exhibit.
  surface.addEventListener('pointerdown',event=>{
    if(event.target===canvas&&!immersive&&event.button===0){
      event.preventDefault();event.stopPropagation();enterImmersive();
    }
  },true);
  surface.addEventListener('pointermove',event=>{
    if(immersive)surface.classList.toggle('show-exit',event.clientY-surface.getBoundingClientRect().top<54);
  });
  surface.addEventListener('pointerleave',()=>surface.classList.remove('show-exit'));
  $('walk-exit').addEventListener('click',leaveImmersive);
  // Capture focus before OrbitControls receives the pointer-down event.
  canvas.addEventListener('pointerdown',() => {if(viewMode==='axonometric')focusView();},true);
  axonControls = new OrbitControls(axonCamera,canvas);
  axonControls.enabled=false;axonControls.enableDamping=false;
  axonControls.minPolarAngle=0.12;axonControls.maxPolarAngle=Math.PI/2-0.10;
  axonControls.minZoom=0.35;axonControls.maxZoom=12;
  axonControls.screenSpacePanning=false;
  axonControls.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.PAN,RIGHT:THREE.MOUSE.PAN};
  axonControls.addEventListener('change',requestFrame);
  function setViewMode(mode) {
    if(!['room','axonometric'].includes(mode))throw new TypeError('Unknown gallery view.');
    clearInput();teleport=null;viewMode=mode;
    const axon=mode==='axonometric';scene.background.set(axon?'#ffffff':'#f2f2f2');
    roomMeshes.forEach(mesh=>mesh.visible=!axon);
    factoryRoom.setVisible(!axon);roomDetailGroup.visible=!axon;axonGroup.visible=axon;skylight.setRoomMode(!axon);
    camera=axon?axonCamera:roomCamera;placement.setViewMode(mode);
    axonControls.enabled=axon&&active;
    ui();resize();requestFrame();
  }
  function setRoomHeight(value){const height=clamp(Number(value)||30,30,70);if(Math.abs(height-ROOM.height)<.01)return;ROOM=Object.freeze({...ROOM,height});roomMeshes.find(m=>m.name==='ceiling').position.y=height+ROOM.wallThickness/2;factoryRoom.setHeight(height);roomMeshes=roomMeshes.filter(m=>['floor','ceiling'].includes(m.name)).concat(factoryRoom.collisionMeshes());roomMeshes.forEach(m=>m.visible=viewMode==='room');scene.traverse(o=>{if(o.isPointLight&&o.name==='gallery-ceiling-light')o.position.y=height-.45;});skylight.setHeight(height);constrain(eye);ui();invalidateScene();}

  function frameSpace(bounds){setRoomHeight(Math.max(30,bounds.max.y+3));requestFrame();}

  function setTwoPoint(value) {
    twoPoint=!!value;
    if(twoPoint)pitch=clamp(pitch,-0.8,0.8);
    ui();requestFrame();
  }
  ui();resize();
  canvas.addEventListener('contextmenu',event => event.preventDefault());
  canvas.addEventListener('pointerdown',event => {
    if (!immersive || viewMode === 'axonometric' || event.button > 2) return;
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
      yaw -= dx*0.0035; pitch = clamp(pitch-dy*0.0035,twoPoint ? -0.8 : -1.45,twoPoint ? 0.8 : 1.45);
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
      yaw = euler.y; pitch = clamp(euler.x-(fly ? 0 : dy*0.0035),twoPoint ? -0.8 : -1.45,twoPoint ? 0.8 : 1.45);
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
    if (viewMode === 'axonometric' || event.button !== 0) return;
    const hit = hitAt(event);
    if (!hit || hit.object.name !== 'floor') return;
    focusView();
    const destination = hit.point.clone();destination.y = fly ? eye.y : EYE_HEIGHT;
    constrain(destination);
    teleport = {from:eye.clone(),to:destination,start:performance.now()};
    requestFrame();
  });
  canvas.addEventListener('wheel',event => {
    if (viewMode === 'axonometric' || !active) return;
    event.preventDefault(); teleport = null;
    const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? host.clientHeight : 1;
    const distance = clamp(event.deltaY*multiplier*0.006,-1.2,1.2);
    const verticalPitch = fly ? pitch : 0;
    forward.set(-Math.sin(yaw)*Math.cos(verticalPitch),Math.sin(verticalPitch),-Math.cos(yaw)*Math.cos(verticalPitch));
    eye.addScaledVector(forward,-distance); constrain(eye); requestFrame();
  },{passive:false});
  document.addEventListener('keydown',event => {
    if (event.code === 'Escape' && document.querySelector('#exhibition-materials[open],#saved-model-edit[open]'))return;
    if (event.code === 'Escape' && document.fullscreenElement === surface) {
      clearInput();teleport=null;
      leaveImmersive();
      return;
    }
    if(event.code==='Escape'&&immersive&&!document.querySelector('dialog[open]')&&surface.dataset.workspaceOpen!=='collage'&&surface.dataset.workspaceOpen!=='sculpture'&&surface.dataset.workspaceOpen!=='model'&&surface.dataset.modelBrowse!=='true'){
      event.preventDefault();leaveImmersive();return;
    }
    if (!active || document.activeElement !== surface || viewMode === 'axonometric') return;
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
  surface.addEventListener('focus',() => {active=immersive;if(axonControls)axonControls.enabled=immersive&&viewMode==='axonometric';});
  surface.addEventListener('blur',() => {active=false;axonControls.enabled=false;clearInput();teleport=null;});
  document.addEventListener('pointerdown',event => {
    if (!surface.contains(event.target)) {active=false;axonControls.enabled=false;clearInput();teleport=null;surface.blur();}
  },true);
  window.addEventListener('blur',() => {active=false;axonControls.enabled=false;clearInput();teleport=null;});
  document.addEventListener('visibilitychange',() => {
    if (document.hidden) {clearInput();teleport=null;if(raf)cancelAnimationFrame(raf);raf=0;}
    else requestFrame();
  });
  $('walk-two-point').addEventListener('click',() => {setTwoPoint(!twoPoint);focusView();});
  $('walk-view-toggle').addEventListener('click',() => {setViewMode(viewMode==='room'?'axonometric':'room');focusView();});
  $('walk-reset').addEventListener('click',() => {reset();focusView();});
  document.addEventListener('fullscreenchange',() => {
    const fullscreen = document.fullscreenElement === surface;
    if(!document.fullscreenElement&&immersive){leaveImmersive();return;}
    clearInput(); resize();
    if(surface.dataset.modelBrowse==='true'||(document.fullscreenElement&&document.fullscreenElement!==surface)||(surface.dataset.workspaceOpen&&surface.dataset.workspaceOpen!=='none'))suspendNavigation();
    else focusView();
  });
  canvas.addEventListener('webglcontextlost',event => {
    event.preventDefault();ready=false;clearInput();
    showError('The graphics connection was interrupted. Reload this page to reopen the room.');
  });
  const observer = new ResizeObserver(resize); observer.observe(host);observer.observe($('walk-toolbar'));
  window.addEventListener('resize',resize);
  window.addEventListener('pagehide',event => {
    clearInput(); if(raf)cancelAnimationFrame(raf);raf=0;
    if (!event.persisted) {
      disposed=true;observer.disconnect();
      axonControls.dispose();
      const geometries=new Set(),materials=new Set();
      scene.traverse(object=>{
        if(object.geometry)geometries.add(object.geometry);
        if(object.material)for(const material of (Array.isArray(object.material)?object.material:[object.material]))materials.add(material);
      });
      geometries.forEach(geometry=>geometry.dispose());materials.forEach(material=>material.dispose());
      space?.dispose();skylight?.dispose();factoryRoom?.dispose();scene.environment?.dispose();renderer.dispose();
    }
  });
  window.addEventListener('pageshow',() => {resize();});
  window.ExhibitionWalk = Object.freeze({
    state:() => ({
      space:space.state(),skylight:skylight.state(),ready,environment:'white-enclosed-gallery',room:{...ROOM,closed:true,wallCount:4,floor:true,ceiling:true},
      camera:viewMode==='room'?{x:eye.x,y:eye.y,z:eye.z,yaw,pitch}:{x:axonCamera.position.x,y:axonCamera.position.y,z:axonCamera.position.z},
      viewMode,twoPoint,projection:camera.isOrthographicCamera?'orthographic':'perspective',
      walkingCamera:{x:eye.x,y:eye.y,z:eye.z,yaw,pitch},fly,active,immersive,fullscreen:document.fullscreenElement===surface,
      axonometric:{zoom:axonCamera.zoom,target:axonControls.target.toArray(),wallsVisible:roomMeshes.filter(mesh=>mesh.name.includes('wall')&&mesh.visible).length,ceilingVisible:roomMeshes.find(mesh=>mesh.name==='ceiling').visible},
      factory:factoryRoom.state(),grid:{visible:axonGroup.visible,size:40,divisions:20,cellSize:2,cells:400,lines:floorGrid.geometry.attributes.position.count/2,opacity:floorGrid.material.opacity},
      floorJunctions:{visible:roomDetailGroup.visible,seam:true,softContactShading:true},
      walkingBounds:{x:[-LIMIT,LIMIT],z:[-LIMIT,LIMIT],y:[RADIUS,ROOM.height-RADIUS]},
      displayCount:placement.state().modelCount,modelsLoaded:placement.state().modelCount,textureCount:placement.state().textureCount,placements:placement.state(),
      performance:{triangles:renderer.info.render.triangles,drawCalls:renderer.info.render.calls,pixelRatio:renderer.getPixelRatio(),shadows:renderer.shadowMap.enabled,shadowAutoUpdate:renderer.shadowMap.autoUpdate,continuousRendering:!!raf,frameCount},
      moving:!!teleport || movingByKeys()
    }),
    reset,setViewMode,setTwoPoint,setRoomHeight,suspendNavigation,enterImmersive,leaveImmersive,placement,space,
    gridSegments:()=>Array.from(floorGrid.geometry.attributes.position.array),
    setCamera:value => {
      clearInput();teleport=null;
      if(typeof value.fly==='boolean')fly=value.fly;
      eye.set(value.x??eye.x,value.y??eye.y,value.z??eye.z);constrain(eye);
      yaw=value.yaw??yaw;pitch=clamp(value.pitch??pitch,twoPoint ? -0.8 : -1.45,twoPoint ? 0.8 : 1.45);
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
