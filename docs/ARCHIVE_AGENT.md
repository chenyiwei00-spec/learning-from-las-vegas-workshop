# Exhibition composition and controls

The compact making sidebar has three independently collapsible previews and a single Agent button with a short status keyword. Preview expansion settings persist in the browser. Extended editing and previous-work controls live inside the making panel.

The direction button exchanges the source and counterpart stages. Las Vegas -> V&A selects city cutouts and submits the corresponding sculpture PNG; V&A -> Las Vegas selects body fragments and submits their city PNG. A direction change invalidates the current model fingerprint. The agent follows the same direction: city metadata/shape planning forwards, and head/torso/limb composition with matched city forms in reverse. Both paths retain editable linked layers and one video/audio association from the city sources.

Users can browse real V&A fragments in the reverse picker, copy/paste them, rematch city counterparts, or select a different city object. Transformations keep the two collages connected. Drafts, saved compositions and previous-work snapshots preserve the direction. Existing saved GLBs are not regenerated automatically.

Eye-level and axonometric views share one toggle in the upper-left corner. Selected exhibits have scale points and a circular outer-frame rotation handle in both views; Shift snaps rotation to 15 degrees. Rotation is saved with the floor layout. The former 1/4/9-cell option buttons are removed.

The double-click model browser places a video poster below its title and model text. Click the image to play; the video is forced muted. Separate audio can play alongside it. Expand video opens its own fullscreen view; Esc exits. Stop and model navigation halt playback.

Planning uses existing metadata and shape rules rather than a new language-model API. The 3D stage remains the existing local AI generator. No new paid API or model weights are required. Validation uses existing GLB fixtures without GPU inference and checks actual submitted city/sculpture PNGs, both agent directions, fragment editing, frame rotation, collapsed-state persistence and real media playback.
