# Three-part workshop
Open the local root URL, enter through the cover, then use Database, Collage Workshop and Architecture. Workspaces load on demand and remain alive when switched, so mesh generation is not interrupted. The three links also remain available in a fullscreen workspace.

The Database model catalog presents one representative per repeated model subject, preferring volumetric geometry. Museum scans keep their individual identities. The site/model-deduplication.json file records merged IDs; original model assets are retained. Images, audio and films are unchanged.

## Generating and placing
The model agent alternates Las Vegas and V&A targets, starting with Las Vegas on a new browser. A 409 busy response waits and retries the same frozen composition, rather than dropping it during generator process cleanup. The device still runs one local mesh generation at a time. Place and Make space can run independently on already saved models.

Use Recover completed to import completed local jobs from the past day that are missing from the browser library. Deliberately deleted jobs are excluded. Retry unfinished uses saved collages without attached models. A saved model card's Place in space adds a copy on a free central cell without replacing the layout.

Real model thumbnails render serially and persist to IndexedDB. A collage fallback is not presented as the finished 3D thumbnail.

## Images and films
In Architecture choose Render / film. Render image supports 1920 x 1080, 2560 x 1440, and 3840 x 2160 PNG. Export rendering raises shadow-map resolution, ambient-occlusion and volumetric sampling, applies spatial supersampling and antialiasing, then restores the working camera and interactive quality.

For a film switch to Eye-level view, move to a viewpoint and Add current camera. Add a second viewpoint, edit film times and sunlight times, then preview or scrub the path. Position and look direction can be edited numerically. Paths can be exported/imported as JSON. Smooth interpolation uses centripetal camera positions and shortest-path quaternion rotation.

Film export renders every frame at explicit timestamps, so a slow render does not change film duration or skip frames. AVC produces MP4 where supported; VP9/VP8 produce WebM otherwise. Export can be cancelled. Images and films are saved in Renderings / films below the workspace and can be viewed, renamed, deleted and exported at their original resolution. Outputs and histories remain private to the browser.

The browser renderer uses raster lighting, contact occlusion and volumetric scattering; it is not an Enscape or Lumion engine. Quality depends on source geometry and textures.

Video encoding links unchanged Mediabunny 1.61.4 under MPL-2.0. Its license is retained at site/vendor/mediabunny-LICENSE.txt. Upstream source and API: https://github.com/Vanilagy/mediabunny and https://mediabunny.dev/guide/writing-media-files.
