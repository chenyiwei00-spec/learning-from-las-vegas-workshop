# Exhibition Walk

Exhibition Walk is a single 3D viewport of a 20 m × 20 m × 5 m enclosed white gallery. Walking eye height is 1.65 m. A fine perimeter seam and soft contact shading distinguish the walls from the floor. Open exhibition.html in the local collaboration preview.

## Views and navigation

Eye level and Axonometric are separate prominent buttons. Two-point perspective uses a level perspective camera and vertical lens shift, keeping vertical edges parallel when looking up or down.

Axonometric is a true orthographic view of only the 20 × 20 m floor and the exhibited models. Walls and ceiling are hidden. Twenty-one faint grid lines in each direction make 400 cells measuring 1 × 1 m. Left drag rotates, wheel zooms, and right/middle drag pans. Returning to Eye level restores the walking camera and Two-point setting.

In Eye level, click the room to activate navigation. WASD/arrows walk; Shift/Ctrl increase speed; left drag looks around, right drag orbits around the cursor, middle drag pans, wheel moves forward/back, double-clicking the floor moves there smoothly. Space switches Walk/Fly; Q/E change height in Fly. Room bounds prevent leaving through the floor, ceiling or walls. Fullscreen and Esc work in both views. Navigation follows [Enscape's control bindings](https://docs-chaos.atlassian.net/wiki/spaces/enscape/pages/842203139/Control%2Band%2BInput), subject to browser-reserved shortcuts.

## Object collage

Two small preview cards float at the upper right. Clicking Collage or 3D model opens a larger panel at the same upper-right anchor, covering those cards. A pointer-transparent shade dims the scene and interfaces underneath. Closing retains the composition and model.

Las Vegas objects opens a searchable archive picker with twelve photos per page. It includes only Las Vegas photos with existing isolated-object masks. Local uploads, V&A browsing and whole-photo insertion are not available in this workspace.

Choose a photograph, then click the visible surface of an object. Selection checks the actual alpha pixels of the saved cutout, rather than accepting a bounding rectangle or the entire photograph. The selected object is tinted on the source and shown separately against a checkerboard. Object labels provide an alternate selection method. A two-display-pixel tolerance helps select thin edges.

Ctrl+C copies the selected object; Ctrl+V pastes its transparent cutout into the collage and closes the picker. Copy object / Paste on board buttons provide the same actions. The editor supports move, resize, rotate, mirror, eraser, marquee/group selection, Alt-drag duplication, Ctrl+C/V for board layers, Ctrl+[ / Ctrl+] layer ordering, undo/redo and PNG export. Existing drafts remain available; new additions are verified against the Las Vegas object library.

Generate 3D uses the existing local TripoSR client/backend and the actual collage flattened to a transparent 1600 × 1000 image. A compatible configured generator is required. Returned models appear in both the interactive larger viewer and the second small preview card. Naming, groups, history and GLB/OBJ exports remain available.

## Putting models in the gallery

Drag from the second small preview card, or from Drag model into room in the expanded model tools. A snapshot of that exact model follows the pointer. A coloured floor square and cell number indicate the destination. Release over a free cell to place the textured GLB. Drops outside the floor, behind room walls, over interface panels or onto occupied cells leave the layout unchanged.

The model origin snaps to the cell centre. Its footprint fits within 0.86 m and its height is capped at 2.4 m, preserving proportions. Both cameras use one shared scene group, so placement, movement and rotation appear immediately in either view.

Click an exhibited model to select it. Drag it to move it to another free cell, or use Move and click a destination. Rotate changes its orientation by 45 degrees. Remove deletes that instance; Done clears selection. Fine mesh edges have a two-pixel click tolerance. Camera gestures remain available on empty space.

Each placed copy retains an independent GLB Blob, so changing or clearing the current generator preview cannot remove the exhibited model. The floor layout and unique mesh files are stored atomically in browser IndexedDB and restored after refresh. Repeated instances share geometry/materials in memory and one stored GLB. Removing the final instance prunes its mesh resources. Drafts, models and gallery layouts are local to each browser and are not shared by Git source synchronization.

## Development and checks

Edit src/exhibition-walk.js and src/exhibition-placement.js for the room and shared placement layer; run npm run build and commit the generated site/exhibition-walk.js. The making tools use site/exhibition-studio.js, exhibition-picker.js, exhibition-workspace.js and exhibition-transfer.js. Run python3 scripts/check_project.py before committing.

The scene renders on demand with pixel density capped at 1.5. Media catalogs/masks load when opening the archive picker, and only the selected photograph's masks are rasterized. AI generation starts only from Generate 3D. Routine checks use an existing GLB and a fixture job response; they do not start GPU inference. This verifies client transport, model display and placement without claiming a newly inferred model's quality.

Local browser checks cover object alpha selection, Las Vegas-only filtering, transparent cutout copy/paste, board transformations, overlapping/dimmed tools, returned-model previews, cursor ghosts, placement in both views, occupied-cell rejection, moving/rotating/removing placed models, independent persistence after refresh and clear, fullscreen and responsive bounds. Navigation and projection/grid checks are rerun after the placement changes. The original Collage Studio and public website are separate and remain available.
