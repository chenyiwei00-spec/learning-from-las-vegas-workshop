# Import exported GLBs into the workshop model library

The optional local bundle at site/assets/imported-sculptures/catalog.json adds models to the existing device-local saved-model library when Collage or Architecture opens. A browser imports each content hash once. Existing saved models, names and groups are kept; deleting an import prevents it from reappearing after refresh.

Stage self-contained GLB 2.0 files:

    py -3 scripts/import_saved_glbs.py "path/to/exported-glbs"

For vertex-colour OBJ exports from this archive, add --include-obj. Their original OBJ remains available for export; positions, face indices and vertex colours are preserved in the converted GLB. Textured/material-indexed OBJ files require a material-aware conversion instead.

This validates the files, counts triangles and copies their original bytes into content-addressed asset directories. Original exports are unchanged. City-prefixed names keep the city label; other exports use the sculpture label.

Generate previews with the existing isolated Playwright QA setup:

    node scripts/render_import_previews.mjs

Use the same PLAYWRIGHT_ANCHOR and CHROME_PATH configuration as the repository's browser checks. The local server must be running. This renders actual meshes on the standard 242 grey background; it does not run AI inference. Existing previews are reused; use --force to regenerate them. Prepare the previews before opening the model library.

Imports support the local 3D viewer, camera saving, GLB export, Place and Make space. A GLB alone does not include the old collage project, linked audio/video, saved camera or OBJ; these are not invented. Embedded colours and geometry remain in the model.

The bundle and binary files are private local assets ignored by Git. Source updates on main do not transfer models to teammates; share this asset directory separately if needed. Their browsers import the bundle on their next visit.

## Upright, floor-grounded presentations

Run py -3 scripts/prepare_upright_imports.py, then the preview renderer, to prepare the second archive batch. These OBJ exports use Z as their up axis, so their presentation rotates -90 degrees around X into the website's Y-up coordinates. All presentations translate their lowest vertex to Y=0. Source exports, mesh data and colours remain unchanged in their original files; corrected GLB/OBJ files are separate assets.

On reload, the library replaces corrected model bytes and previews in place without adding models. Names, groups and media stay intact. Old sideways camera views reset for rotated models; cameras on translation-only corrections shift with the model. Placed copies refresh from the corrected library and retain their floor centres and layout rotation.
