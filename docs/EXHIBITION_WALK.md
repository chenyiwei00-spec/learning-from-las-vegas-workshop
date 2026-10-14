# Exhibition Walk: white room

The current Exhibition Walk is a single 3D viewport of an empty, enclosed gallery. Interior dimensions are 20 m wide × 20 m deep × 5 m high. Walking eye height is 1.65 m. The four walls, ceiling and floor use light neutral materials with soft lighting. A fine perimeter seam and soft contact shading make the wall/floor junctions visible.

Open exhibition.html from the local collaboration preview. Click the room to activate navigation. The viewport can be expanded to fullscreen; Esc returns to the page.

## View modes

The Two-point button keeps vertical wall edges parallel when looking up or down. It uses a level perspective camera with a shifted projection, and can be switched on/off independently.

The Axonometric button switches the same viewport to a true orthographic floor view. Only the exact 20 × 20 m floor is visible: the four walls, ceiling and room contact shadows are hidden. A faint grid has 21 lines in each direction, making 20 × 20 = 400 cells of 1 × 1 m each.

In Axonometric mode, left drag rotates the view, the wheel zooms, and right/middle drag pans on the ground plane. Reset view resets only that floor view. Walk/Fly and Two-point controls are disabled in this mode. Eye level restores the previous position, view direction, Walk/Fly mode and Two-point setting. Both views support fullscreen and Esc, with the same responsive viewport and toolbar.

## Floating making tools

The space viewport fills the full page width and is taller. Archive headings and navigation retain their existing gutters. Eye level and Axonometric are separate, prominent view buttons, including in fullscreen.

Two passive preview cards float at the upper right, aligned with the top of the navigation controls: Photo collage and 3D model. Fullscreen sits at the lower right of the viewport, with the navigation status above it. On narrow screens, the navigation toolbar reserves space for the cards and the view buttons stack where needed. Clicking either card opens its larger tool panel at the upper left. The panel can be closed without losing the composition or current model. A fixed Generate 3D footer is visible in either tool tab.

Photo collage accepts local PNG/JPEG/WebP uploads and archive images. The archive picker loads the catalog on demand, showing twelve images per page with text search and archive filtering. The existing editor supports moving, resizing, rotating, mirroring, erasing, group selection, Ctrl C/Ctrl V, layer ordering, undo/redo and PNG export. The small preview renders the composition without selection handles.

3D model uses the existing local TripoSR client and backend. The actual photo composition is converted to a transparent 1600 × 1000 PNG before generation. The returned GLB is shown in the larger rotatable viewer and the passive preview. Device-local model naming, grouping, history and GLB/OBJ export are retained. Keyboard/mouse interaction in the tool panel suspends room navigation. Actual generation still requires a configured local GPU runtime.

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

Edit src/exhibition-walk.js, site/exhibition.html and site/exhibition.css. Run npm run build and python3 scripts/check_project.py. The space view renders on demand and caps pixel density at 1.5. It does not load exhibit meshes. The media catalog loads only when the archive picker is opened; AI generation starts only from Generate 3D. The floating tools reuse site/exhibition-studio.js and the existing shared model modules, with site/exhibition-workspace.js coordinating the previews and panel state.

The earlier collage studio remains at collage.html. Existing media and saved browser data are retained; the white-room page does not load old exhibition placements.

## Verification

A local browser check verified the closed room geometry, single viewport, WASD/arrow walking, faster movement, left/right/middle mouse navigation, wheel movement, floor teleporting, Walk/Fly mode, wall/floor/ceiling bounds, idle rendering, fullscreen/Esc, focus release, and alignment at 1366, 760 and 390 px widths. Ten additional browser checks validated wall/floor separation, parallel verticals, equal orthographic scale at different depths, exact grid geometry, floor-only visibility, rotation/zoom/pan, mode isolation and restoration, fullscreen/Esc, idle rendering, and responsive control/help placement. The room and axonometric screenshots were visually reviewed. No JavaScript errors were observed.

Nine further browser checks validated full-width/taller layout, separate view switching, file uploads and archive selection, editing/live preview, panel retention, returned-mesh previews, saving, fullscreen dialogs and responsive bounds. Generation client integration was tested with a fixture response and an existing GLB, without running a new GPU inference. The live backend capability check succeeded. The previous 13 navigation and 10 projection/grid checks also passed after the layout change.
