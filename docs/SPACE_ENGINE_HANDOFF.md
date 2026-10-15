# Replacing the Exhibition Walk space engine

The current main interface keeps collage editing, batch generation, the model libraries,
placement, cameras and media independent of the space-building algorithm.

## One replacement point

Edit `src/exhibition-space.js`. It is the only factory imported by
`src/exhibition-walk.js`. Replace the fallback `createCanopy(context)` call with
your engine factory. Keep the old canopy files as a fallback until your engine
has been verified; do not replace the complete exhibition HTML or compiled bundle
with the older version from a feature branch.

Alternatively, load a same-origin script **before** `exhibition-walk.js` that sets:

```js
globalThis.ExhibitionSpaceEngine = {
  apiVersion: 1,
  create(context) {
    return createMySpaceAdapter(context);
  }
};
```

A registered engine takes priority. The old canopy factory is not called, so its
buttons, listeners and automatic restoration do not compete with the replacement.
This is startup selection, not hot swapping an engine while a job is running.

## Input

The factory receives the current Three.js `scene`, `renderer` and `placement`,
plus `getView`, `setView`, `navigate`, `invalidate`, `onSpaceBounds` and
`onSpaceLight`.

- Await `placement.ready` before reading inputs.
- `placement.spaceSources()` returns the actual placed models: placement ID,
  model ID, name, world-space Object3D and grid layout (col, row, span, scale,
  rotation, optional offsetX/offsetZ). Rotation is radians and offsets are metres.
  Group edits can position exhibits between grid centres; read the actual world
  Object3D transform rather than rebuilding a snapped position from col/row alone.
  Read/clone the objects; preserve the originals.
- `placement.browseEntries()` returns original GLB blobs, records, compositions,
  saved camera and linked media. Match `exhibit:<modelId>` to the placement model ID.
- Use `src/exhibition-dimensions.js` for dimensions. The current hall is 40 m square,
  with 20 x 20 cells at 2 m each.
- Snapshot inputs before computation. If placement changes during generation,
  discard the stale result rather than hiding a newer layout.

No absolute paths or generated/private GLB files belong in the shared code.

## Returned controller (API version 1)

Return a controller with a `ready` Promise and these functions:

| Function | Responsibility |
| --- | --- |
| `generate()` | Generate/update from current placements; return a Promise. |
| `enter()` | Enter the generated space using the existing room camera. |
| `showOriginal()` | Hide the result and show the source exhibits. |
| `showSpace()` | Show the result without reframing the axis camera. |
| `constrain(position, radius)` | Apply walk collisions to a Three.js Vector3. |
| `collisionMeshes()` | Return active Three.js meshes for ray casting, or []. |
| `exportGLB()` | Export the generated space. |
| `state()` | Return at least active, busy, stale and error. |
| `dispose()` | Remove engine objects/listeners and release owned resources. |

The adapter owns the existing Make Space, Enter Space, Original Models and Export
controls, and their status/visibility updates. Reuse the IDs in `exhibition.html`;
do not install a second competing Make Space click handler.
Use `placement.showSources(false, {keepFootprints:true})` to retain yellow cells
behind the new mesh, and `placement.showSources(true)` when returning to originals.

Call `invalidate()` after changes. Only `enter()` should explicitly navigate the
camera; generation must preserve the current room/axis framing.
`onSpaceBounds(bounds)` accepts a Three.js Box3 for room-height adjustments.
`onSpaceLight(result, active)` currently expects the canopy lighting data model;
an alternative engine should supply an adapter for it, or leave that optional
callback unused and implement its own lighting.

An iframe or other Three.js version can be bridged using copies of the GLB blobs
rather than passing Object3D instances between runtimes.

## Teammate branch integration

A remote branch currently contains the independent inhabitable-sculpture module:
`work/linxichen07-design/inhabitable-integration`. It is based on an older
exhibition interface. Port its engine/adapter into this latest main, preserving
the current libraries and controls. The module has not been merged or activated
by this interface update; the engine author should verify the final adapter.

After implementation:

```text
npm ci
npm run build
py -3 scripts/check_project.py
```

Commit source and generated bundles. Verify on an independent work branch, then
submit the replacement through the normal pull request into main.

## Current local integration
The inhabitable adapter now uses this seam as the default. See [MAKE_SPACE_INTEGRATION.md](MAKE_SPACE_INTEGRATION.md). The host additionally supplies optional getCamera() and passes {fly, eyeHeight} as the third constrain argument; existing API-1 providers may ignore these additions.


## Saving generated spaces in the shared library

The optional device-local window.ExhibitionArchives service is loaded after the exhibition UI. A replacement engine can call await ExhibitionArchives.saveSpace({glb, preview, camera, triangles, signature, layout}) after a successful generation. glb must be a binary GLB Blob and preview a PNG Blob. camera uses the saved viewer schema: {orbit:{theta,phi,radius}, target:{x,y,z}, fieldOfView} (angles in radians, field of view in degrees). layout can retain the source placement records. The service stores actual bytes in IndexedDB, deduplicates identical GLBs, and exposes preview, export and deletion in the lower Spaces tab.

The fallback canopy implements optional captureArchive() and automatically calls this service. These are not new required engine methods: API version 1 and the replacement priority remain unchanged. The context also exposes getCamera() for a replacement that needs the current scene camera. Keep source and camera snapshots independent; saving a space must not reframe the exhibition view.
