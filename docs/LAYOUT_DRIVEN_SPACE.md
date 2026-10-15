# Layout-driven refinement of the shared space engine

Current multilevel and rendering behaviour: [MULTILEVEL_RENDERING.md](MULTILEVEL_RENDERING.md).

The default engine remains the team's source-volume/SDF fusion and carved-navigation engine in src/inhabitable. The registered ExhibitionSpaceEngine adapter still takes precedence.

MAKE SPACE anchors a first source volume per placed sculpture and expands source-derived rooms with the original split-level growth logic. A canonical model-and-layout hash determines the seed; changing instance UUIDs, names or insertion order does not change geometry. Repeating generation with the same models, layout and transformation settings reproduces the same geometry and colour buffers. Seed is derived; Fragments controls expanded source rooms (default nine).

Relative X/Z source positions and quarter-turn rotations anchor the volumes. Nearest-neighbour overhead connections fuse separated source bodies. Up to 50 instances are accepted within a 1.5 million triangle budget across unique sources. Large layouts are uniformly compressed to a 24 m anchor span before growth; the final visible bounds are translated to the 40 m floor's centre without changing the camera. The generated audioAnchors API returns each original placement ID at its transformed room position, and proximity playback uses those positions while the space is visible. This preserves relative layout, rather than promising identical absolute grid coordinates after centring/compression.

The core uses finer bounded voxel sampling, mild volume-preserving surface relaxation and smoothed normals. Circulation and collision occupancy are validated against the final rendered triangles. Source colours are interpolated and blended near shared boundaries; original palettes remain elsewhere. Vertex-colour reconstruction remains an approximation of scanned textures, not a new UV unwrap or a photorealistic texture reconstruction.

Generated contact cells use pale yellow depth-tested planes and are separate from the exported GLB. No scale figures are added. Eye level has a 100 m white fog environment, a white ground, directional sunlight/shadows, reflective physical materials and the HDR postprocessing pipeline described above; the hall shell/skylight structure is hidden. These are real-time approximations of scattering, not a path-traced volumetric renderer.

Run:
- npm run build
- node qa/verify_layout_driven_space.mjs
- py -3 scripts/check_project.py

The regression check uses two synthetic coloured sculptures: no AI inference, private assets or user history. Browser checks also verify exact saved camera framing versus reset-camera PLACE previews, white caption edges, an unchanged axonometric camera, contact cells and generated audio anchors.

Existing saved GLB files keep their geometry. Click MAKE SPACE again on a placed layout to apply the revised generator.
