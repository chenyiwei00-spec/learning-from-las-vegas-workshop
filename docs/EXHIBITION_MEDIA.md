# Exhibition model media and selection

In Exhibition Walk, click a model to select it; double-click the mesh or a saved model thumbnail to enter the shared 3D browser. Drag the bounding-box handles for proportional scaling, or use the 1/4/9-cell controls in the room. Occupied cells are yellow in axonometric view; overlaps are allowed and survive refresh.

Each generated model retains one video and one audio reference. The matcher uses the selected objects and their source photographs, weighting titles, tags, object names and descriptions. Inverse document frequency reduces generic keywords; a small set of visual-to-audible context terms connects roads with vehicles and trees with birds/wind. The selected archive IDs, URLs, source image IDs and matching terms are stored in the model record. A zero-overlap result is explicitly marked as archive context, not a confirmed subject match. Existing saved models with compositions acquire links when opened.

The 3D browser offers Play video and Play audio. Video is forcibly muted; linked audio can play alongside it. Closing the player or leaving/switching the model stops playback. Associations are stored with model history and floor placements. Media files remain in the archive and are loaded only when played.

Validation: project syntax/catalog checks and seven focused headless-browser integration checks passed. Tests used an existing GLB fixture rather than running AI inference, checked real video/audio endpoints and playback, and verified selection, scaling, overlaps, matching, saved metadata and refresh restoration. No public site deployment is involved.
