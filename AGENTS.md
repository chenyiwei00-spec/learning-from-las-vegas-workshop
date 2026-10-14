# Team website instructions

This is the local collaboration source for Learning from Las Vegas / Borrowed Worlds, including Las Vegas and V&A archive browsing, collage tools, and the desert exhibition studio.

## Start and edit
- Read README.md and docs/TEAM_GUIDE.md before changing behaviour.
- Run python3 serve_local.py --launch (Windows: py -3 serve_local.py --launch).
- The collaboration preview uses http://127.0.0.1:8065/. The original owner's site at port 8055 is separate.
- Preserve the existing visual style and current archive records unless the requested change says otherwise.
- Edit src/exhibition-walk.js and src/exhibition-model-studio.js for the exhibition. Run npm ci, then npm run build and commit both the source and generated site bundles.
- Plain site HTML/CSS/JS can be edited directly; there is no framework installation requirement for startup.
- Run python3 scripts/check_project.py before committing.
- Keep resource use low: do not start AI generation or bulk processing as part of routine checks.

## Collaboration
- Fetch the latest main before starting a change. Use a work/<name>/<task> branch.
- Commit focused changes, push the branch, and open a pull request into main.
- Do not force push, overwrite another person's changes, or run git reset --hard/clean as a sync method.
- main is the shared accepted version. The sync tool only fast-forwards a clean main checkout.
- Do not publish the owner's original Sites project or change its project identity as part of collaboration edits.
- Source sync updates code; each browser's drafts and saved model history are local unless separately exported.

## Assets and secrets
- Large images, films, audio, GLB/Blender files, checkpoints, node_modules, generated models and personal settings stay outside Git.
- Install the separate team asset pack with scripts/import_assets.py.
- Browsing media can fall back to the existing shared public archive through the local proxy.
- Never commit settings.local.json, authentication credentials, API keys, .env files or personal absolute drive paths.
- Model generation is optional. A compatible local GPU runtime and weights must be configured explicitly; missing generation capability must not break browsing or editing.
