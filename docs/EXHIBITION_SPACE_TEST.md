# Exhibition experiment (independent test branch)

In Exhibition Walk, arrange saved models in the 20 x 20 floor grid, then click **Make space**. Each measured footprint becomes a support at the same point; its height controls the canopy height there. Smooth flared supports join a continuous roof along a spanning tree, so distant points remain connected. The roof is a closed solid with approximately 0.24 m vertical thickness. Model appearances are rendered from their actual materials into projection textures, shared by each support and its nearest canopy region. This is procedural geometry, not AI architectural reconstruction, and does not reproduce the reference photograph's perforations.

**Enter space** chooses a clear spot under the roof and restores WASD navigation. Supports constrain movement. Low source models keep their original dimensions; enlarge them if the roof is too low. **Original models** restores the editable exhibition; edits mark the previous space out of date. **Export GLB** downloads geometry and embedded appearance textures. Original placements are never replaced. A small local recipe rebuilds the active preview after refresh.

The first agent has a 0-50 model slider. It runs one local generation at a time, randomly chooses the Las Vegas-to-V&A or V&A-to-Las-Vegas workflow, and automatically saves completed models in the floating workspace library and the existing saved gallery. **Stop** finishes/saves the current job and skips queued jobs. Missing local generation capability leaves an editable collage; it does not report that models were generated. No new hosted service or paid API is introduced.

The second agent places copies from the device-local library in random available grid cells with random rotations. Existing exhibits stay in place. One placement operation uses at most 50 library models to bound resource use; further clicks add copies. Library contents and floor layouts remain private to this browser/device.

Audio uses varied credible metadata matches; when these are weak or exhausted it falls back to a random archive audio, avoiding the most recent 24 choices where possible. The basis is recorded in linkedMedia. Existing version-1 saved associations are upgraded once on opening while preserving their video, saved camera, model bytes and group. Videos stay muted.

Validation: npm run build; py -3.14 scripts/check_project.py; node qa/verify_canopy_geometry.mjs. The geometry audit checks a single welded closed connected surface for distant supports, finite attributes, retained sizes and unchanged original buffers/materials. Browser validation uses isolated test data and intercepted generation responses with actual GLB fixtures, without running AI inference, to check batch count/directions, saving, stop, layout, audio diversity/migration, walking, texture export and mobile width.

The accepted shared main and the public site are unchanged. This experiment stays on work/chenyiwei/exhibition-testing until reviewed.
