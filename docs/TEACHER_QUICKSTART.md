# Teacher quick start

This is the private, downloadable Learning from Las Vegas workshop. The source includes the archive, collage studio, exhibition editor, and the team's model-to-space engine. Running your copy uses your computer; it does not depend on the owner's computer staying on.

## First use

1. Send your GitHub username to the project owner and accept the private repository invitation.
2. Install Git and Python 3.10 or newer. Clone this repository with GitHub Desktop or Git. Use your own GitHub account.
3. For the complete collage cutouts and exhibition assets, run **DOWNLOAD_TEAM_ASSETS.cmd** on Windows. On macOS/Linux: python3 scripts/download_assets.py. The base release is approximately 10 GB. Allow at least 21 GB free for the download and installed files.
4. Run **DOWNLOAD_SHARED_WORKSHOP.cmd** to add the newer imported models and the owner's shared saved project. On macOS/Linux: python3 scripts/workshop_handoff.py download. This is a separate supplement; it does not download the 10 GB base pack again.
5. Close other workshop tabs. Run **START_SHARED_WORKSHOP.cmd**. Click **Load shared workshop** once, wait for **Ready**, then **Open website**. On macOS/Linux: python3 serve_local.py --open --shared-workshop.
6. For later visits, **START_TEAM_WEBSITE.cmd** opens the website directly. Keep using the same browser and local address.

If download authentication fails, sign in with gh auth login, or git credential-manager github login --browser. Never use someone else's token. Asset downloads are private GitHub Releases, separate from the code repository; **Download ZIP** alone does not contain them.

## What you can use

- Search and browse the image, film, sound and model archive.
- Build and edit collages using the installed cutouts.
- View, place and rearrange existing 3D models; generate architectural spaces from them in the browser using the included space engine.
- Load the shared saved models, camera views, collages, spaces, exhibition layout and camera path when included in the snapshot.
- Create new local saved work without changing anyone else's copy.

Archive audio, video and some original models still use the existing online archive when not installed locally. Keep an internet connection for those files. The GitHub release is not a fully offline mirror of every original media file.

Generating a new AI sculpture from a collage requires a separately configured compatible local GPU runtime and model weights. They are not included in this GitHub download. This is separate from the browser-based model-to-space engine. Existing models, the archive, collages and the space engine can be used without installing AI weights. This setup starts no paid service and does not start AI generation during installation.

## Saved work and updates

Load the snapshot before beginning your own work for the closest match to the owner's project. Repeating the import skips existing database keys and existing preferences; it never replaces your current layout or existing models. A failed or interrupted import can be rerun. Keep other workshop tabs closed during import.

Models and layouts remain in each browser's local storage. Git synchronizes source code, not live browser sessions. Use the same origin (including port) for saved work; private/incognito windows do not retain it.

For code updates, return to a clean main branch and run **SYNC_UPDATES.cmd**. Restart the server after Python changes. For edits with your own Codex, read [TEAM_GUIDE.md](TEAM_GUIDE.md), work on a branch and open a pull request.

For an asset-only installation from a downloaded supplement ZIP:

    python3 scripts/workshop_handoff.py install /path/to/shared-workshop-v1.zip

The installer checks SHA-256 hashes and only writes model and shared-workshop assets. API keys, AI weights, personal drive settings and unrelated browser information are excluded.

## Sharing link

Repository: https://github.com/chenyiwei00-spec/learning-from-las-vegas-workshop

This is a private code/download link, not a public hosted website. The owner must invite your GitHub account before the repository and its private releases are visible.
