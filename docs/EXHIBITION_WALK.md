# Exhibition Walk: white room

The current Exhibition Walk is a single 3D viewport of an empty, enclosed gallery. Interior dimensions are 20 m wide × 20 m deep × 5 m high. Walking eye height is 1.65 m. The four walls, ceiling and floor use white materials with soft lighting.

Open exhibition.html from the local collaboration preview. Click the room to activate navigation. The viewport can be expanded to fullscreen; Esc returns to the page.

## Navigation

| Input | Action |
| --- | --- |
| W / Up arrow | Move forward |
| S / Down arrow | Move backward |
| A / Left arrow | Move left |
| D / Right arrow | Move right |
| Left mouse drag | Look around |
| Right mouse drag | Orbit around the surface under the cursor |
| Middle mouse drag | Pan; vertical pan is available in Fly mode |
| Mouse wheel | Move forward / backward |
| Double-click floor | Move smoothly to that floor position |
| Shift | Move faster |
| Ctrl | Move faster still where the browser permits that key combination |
| Space | Switch Walk / Fly |
| Q / E | Move down / up in Fly mode |
| Esc | Exit fullscreen |

The room bounds apply in both Walk and Fly mode. Walking stays on the floor; flying stops below the ceiling and above the floor. Click outside the viewport to release navigation and scroll the page. Reset view restores the starting walking position.

Navigation follows [Enscape's documented control bindings](https://docs-chaos.atlassian.net/wiki/spaces/enscape/pages/842203139/Control%2Band%2BInput). Browser-reserved shortcuts remain controlled by the browser.

## Development

Edit src/exhibition-walk.js, site/exhibition.html and site/exhibition.css. Run npm run build and python3 scripts/check_project.py. The view renders on demand, caps pixel density at 1.5, and does not load the media catalog, exhibit meshes, model editor or AI generator.

The earlier collage studio remains at collage.html. Existing media and saved browser data are retained; the white-room page does not load old exhibition placements.

## Verification

A local browser check verified the closed room geometry, single viewport, WASD/arrow walking, faster movement, left/right/middle mouse navigation, wheel movement, floor teleporting, Walk/Fly mode, wall/floor/ceiling bounds, idle rendering, fullscreen/Esc, focus release, and alignment at 1366, 760 and 390 px widths. No JavaScript errors were observed.
