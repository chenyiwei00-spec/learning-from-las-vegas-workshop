# Exhibition Walk

Exhibition Walk is a single 3D viewport of a 40 m × 40 m enclosed white studio hall, initially 30 m high. Walking eye height is 1.65 m. A steel-grid glass skylight casts cached sunlight shadows in eye-level view. Nearby associated exhibit audio fades in after the first click; axis/editing views fade it out. A fine perimeter seam and soft contact shading distinguish the walls from the floor. Open exhibition.html in the local collaboration preview.

The page has no extra Exhibition Walk introduction/title block above the viewport. Click the room canvas to expand it across the browser page and activate navigation. This does not hide the browser address bar. Move the pointer to the top edge to reveal a small close button; closing restores the previous page scroll position and disables room navigation and wheel zoom. Esc also exits when no editor or dialog is open. Editors suspend room shortcuts while active. The existing Fullscreen button remains available for browser fullscreen.

## Views and navigation

Eye level and Axonometric are separate prominent buttons. Two-point perspective uses a level perspective camera and vertical lens shift, keeping vertical edges parallel when looking up or down.

Axonometric is a true orthographic view of only the 40 × 40 m floor and the exhibited models. Walls and ceiling are hidden. Twenty-one faint grid lines in each direction make 400 cells measuring 2 × 2 m. Left drag rotates, wheel zooms, and right/middle drag pans. Returning to Eye level restores the walking camera and Two-point setting.

In Eye level, click the room to activate navigation. WASD/arrows walk; Shift/Ctrl increase speed; left drag looks around, right drag orbits around the cursor, middle drag pans, wheel moves forward/back, double-clicking the floor moves there smoothly. Space switches Walk/Fly; Q/E change height in Fly. Room bounds prevent leaving through the floor, ceiling or walls. Fullscreen and Esc work in both views. Navigation follows [Enscape's control bindings](https://docs-chaos.atlassian.net/wiki/spaces/enscape/pages/842203139/Control%2Band%2BInput), subject to browser-reserved shortcuts.

## Object collage

Two small preview cards align with the top edge of the viewport at the upper right. Fullscreen remains at the lower right, preserving the accepted teammate control layout. Clicking Collage or 3D model opens a larger panel at the same upper-right anchor, covering those cards. A pointer-transparent shade dims the scene and interfaces underneath. Closing retains the composition and model.

Las Vegas objects opens a searchable archive picker with twelve photos per page. It includes only Las Vegas photos with existing isolated-object masks. Local uploads, V&A browsing and whole-photo insertion are not available in this workspace.

Choose a photograph, then click the visible surface of an object. Selection checks the actual alpha pixels of the saved cutout, rather than accepting a bounding rectangle or the entire photograph. The selected object is tinted on the source and shown separately against a checkerboard. Object labels provide an alternate selection method. A two-display-pixel tolerance helps select thin edges.

Ctrl+C copies the selected object; Ctrl+V pastes its transparent cutout into the collage and closes the picker. Copy object / Paste on board buttons provide the same actions. The editor supports move, resize, rotate, mirror, eraser, marquee/group selection, Alt-drag duplication, Ctrl+C/V for board layers, Ctrl+[ / Ctrl+] layer ordering, undo/redo and PNG export. Existing drafts remain available; new additions are verified against the Las Vegas object library.

Generate 3D uses the existing local TripoSR client/backend and the actual target collage flattened from the portrait board to a transparent image. A compatible configured generator is required. Returned models appear in both the interactive larger viewer and the second small preview card. Naming, groups, history and GLB/OBJ exports remain available. The saved model library now sits below the exhibition. Clicking a library model opens the same large browser. Arrows and left/right keys browse saved models and unsaved exhibits, using the existing eased transitions and automatic overview rotation. Click the overview model to enter its saved view. Back to exhibition / Esc returns to the room without losing the working collage. Unsaved exhibits can be saved directly from their retained GLB even after clearing the generator; OBJ export is enabled only when actual OBJ bytes exist.

## Putting models in the gallery

Drag from the second small preview card, or from Drag model into room in the expanded model tools. A transparent live 3D mesh follows the pointer at the source viewing angle; over the floor it appears directly in the shared room scene at the current camera angle. A coloured floor square and cell number indicate the destination. Release over a free cell to place the textured GLB. Materials retain the texture and vertex colours, bypass the room tone mapping and use gentle directional shading with a modest saturation boost, making the exhibits stand out against the white room. Drops outside the floor, behind room walls, over interface panels or onto occupied cells leave the layout unchanged.

The model origin snaps to the cell centre. Its footprint fills 98% of its allocated area. Choose 1, 4 or 9 cells (1 × 1, 2 × 2 or 3 × 3) using the size buttons or minus/plus. Resizing, moving and restoring check the full occupied rectangle, including room boundaries. Proportions are preserved; very tall models stop below the ceiling at 23 m. Both cameras use one shared scene group, so placement, movement and rotation appear immediately in either view.

Double-click an exhibited model in either view to open the shared large 3D model browser. Dragging instead of clicking still moves the instance. Drag it to move it to another free cell, or use Move and click a destination. Rotate uses 90-degree steps. Remove deletes that instance; Done clears selection. Fine mesh edges have a two-pixel click tolerance. Camera gestures remain available on empty space.

Each placed copy retains an independent GLB Blob, so changing or clearing the current generator preview cannot remove the exhibited model. The floor layout and unique mesh files are stored atomically in browser IndexedDB and restored after refresh. Repeated instances share geometry/materials in memory and one stored GLB. Removing the final instance prunes its mesh resources. Drafts, models and gallery layouts are local to each browser and are not shared by Git source synchronization.

## Development and checks

Edit src/exhibition-walk.js and src/exhibition-placement.js for the room and shared placement layer; run npm run build and commit the generated site/exhibition-walk.js. The making tools use site/exhibition-studio.js, exhibition-picker.js, exhibition-workspace.js, exhibition-browse.js and exhibition-transfer.js. Exhibition-only carousel entry providers leave the original Collage Studio behaviour intact. Run python3 scripts/check_project.py before committing.

The scene renders on demand with pixel density capped at 1.5. Media catalogs/masks load when opening the archive picker, and only the selected photograph's masks are rasterized. The agent creates 5-10-element portrait collages in a local Collage library, never model jobs. AI model generation starts only from Generate 3D. Routine checks use an existing GLB and a fixture job response; they do not start GPU inference. This verifies client transport, model display and placement without claiming a newly inferred model's quality.

Local browser checks cover object alpha selection, Las Vegas-only filtering, transparent cutout copy/paste, board transformations, overlapping/dimmed tools, returned-model previews, cursor ghosts, placement in both views, occupied-cell rejection, moving/rotating/removing placed models, independent persistence after refresh and clear, fullscreen and responsive bounds. Navigation and projection/grid checks are rerun after the placement changes. The original Collage Studio and public website are separate and remain available.
