# Multilevel spaces and human-view rendering

The layout hash still determines generation. The first room from each sculpture remains anchored to its relative X/Z placement and orientation. Additional source-derived rooms use the teammate's seeded growth and split-level floor logic, instead of forcing floor height to zero. Default expansion is nine fragments; the Fragments control is available again. Legacy recipes from the single-level revision migrate to that default. One layout plus the same transformation parameters remains reproducible.

Three-dimensional audio anchors now include eye height. Each expanded room retains its source sculpture ID, and proximity selection considers vertical separation as well as horizontal distance.

Paths have 0.24 m geometric thickness with undersides and exposed perimeter faces. Walking uses the same upper surface triangles; overhead clearance accounts for the slab thickness. Roads use dark physical material, metalness 0.96, roughness 0.055 and a clear coat. Those material values are included in GLB exports.

The human walking boundary is 100 x 100 m. The editable axonometric floor remains 40 x 40 m with the same 400 two-metre cells, saved placements and model scale.

The human-view pipeline in src/exhibition-render.js adds selective screen-space reflections on the roads, GTAO contact shading, shadow-map ray-marched light scattering, restrained highlight bloom and colour grading before HDR output. Procedural daylight lights the metallic materials; a cached scene cubemap provides off-screen reflection fallback. The visible environment remains white with fog and directional sun shadows.

For resource use, postprocessing buffers are allocated on first entering human view, not at startup. AO and reflections share the geometry buffer. Effect resolution is capped at 1400 pixels on the longest side, SSR uses half resolution and at most 192 steps, and ambient occlusion uses eight samples. Cubemap reflection capture runs when the space changes, not every animation frame. Idle views retain on-demand rendering.

This is a WebGL real-time approximation. Screen-space reflections cannot show off-screen objects perfectly, and the cubemap fallback is approximate. This is not equivalent to Enscape/Lumion's complete lighting or ray-tracing system.

Small collage models use matching 0.48 metalness / 0.32 roughness with clear coat in placement, previews and GLB downloads. ModelColour upgrades material parameters without moving geometry or changing UVs, indices or alpha. Previously saturated files keep their existing colour data, and the finish is idempotent. Generated spaces are exempt so their dark mirror roads retain their own material settings.

Checks:
- node qa/verify_layout_driven_space.mjs (repeatability, floor range and actual slopes)
- node qa/verify_multilevel_walk.mjs (actual controller floor-following, flight and landing)
- node qa/verify_model_finish.mjs (GLB geometry/alpha preservation and legacy colour idempotence)
- npm run build
- py -3 scripts/check_project.py

Isolated browser verification also covers the human reflection/AO/scattering pipeline, generated road meshes, 100 m bounds, unchanged 40 m edit grid, camera preservation and metallic GLB previews. No AI generation is required. Existing saved space snapshots stay unchanged; use MAKE SPACE again to apply the revised architecture.
