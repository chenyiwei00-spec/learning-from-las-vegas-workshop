# Teacher quick start

Learning from Las Vegas is a publicly downloadable workshop: the archive, collage studio, exhibition editor and the team's model-to-space engine. No GitHub account or invitation is needed to view or download it. Your copy runs on your own computer and does not depend on the owner's computer staying on.

## Windows: first use

1. [Download the current code ZIP](https://github.com/chenyiwei00-spec/learning-from-las-vegas-workshop/archive/refs/heads/main.zip) and extract it. Open the extracted folder; do not run files from inside the ZIP.
2. Install [Python 3.10 or newer](https://www.python.org/downloads/) if needed. Git and Node.js are not required just to run the downloaded website.
3. Double-click **SETUP_WORKSHOP.cmd**. It downloads and checks the base assets (approximately 10 GB) and shared-project supplement (approximately 810 MB), then opens the project-loading page. Allow about 25 GB of free disk space including the installed project and browser saves. Use a folder on a drive with enough free space.
4. Keep other workshop tabs closed. Click **Load shared workshop**, wait for **Ready**, then click **Open website**.
5. For later visits, double-click **START_TEAM_WEBSITE.cmd**. Keep using the same browser and local address.

Downloads run directly from public GitHub Releases without requesting a GitHub login. Completed base-pack parts are reused if setup is interrupted. A failed file is never installed without its SHA-256 check passing.

## macOS / Linux

Install Python 3.10 or newer, download and extract the code ZIP, then run these commands from the extracted folder:

    python3 scripts/download_assets.py
    python3 scripts/workshop_handoff.py download
    python3 serve_local.py --open --shared-workshop

Click **Load shared workshop** once, wait for **Ready**, then **Open website**. For later visits: python3 serve_local.py --open.

## What you can use

- Search and browse the image, film, sound and model archive.
- Build and edit collages using the installed cutouts.
- View, place and rearrange existing 3D models; generate architectural spaces from them in the browser using the included space engine.
- Load the shared snapshot: 20 saved sculptures, 20 saved spaces, 50 collage drafts, exhibition layout, saved views, camera path and three render outputs. The supplement also includes 18 imported model source bundles.
- Create your own local saved work without changing anyone else's copy.

Archive audio, video and some original models use the existing online archive when not installed locally. Keep an internet connection for those files. These releases are not a fully offline mirror of every original media file.

Generating a new AI sculpture from a collage requires a separately configured compatible local GPU runtime and model weights. They are not included in this download. This is separate from the browser-based model-to-space engine, which is included. Installing the workshop starts no paid service or AI-generation jobs.

## Saved work and updates

Load the snapshot before beginning your own work for the closest match to the shared project. Repeating the import skips existing database keys and preferences; it never replaces your current layout or existing models. An interrupted import can be rerun. Keep other workshop tabs closed while importing.

Saved models and layouts remain in each browser. Use the same address and port; private/incognito windows do not retain work. Git synchronizes code, not live browser sessions.

To receive code updates, optionally clone the repository with Git instead of downloading the ZIP. Collaborators with write access can use SYNC_UPDATES.cmd from a clean main checkout. Restart the server after Python changes. For code edits, read [TEAM_GUIDE.md](TEAM_GUIDE.md).

The separate download steps remain available as DOWNLOAD_TEAM_ASSETS.cmd and DOWNLOAD_SHARED_WORKSHOP.cmd. For an already downloaded supplement:

    python3 scripts/workshop_handoff.py install /path/to/shared-workshop-v1.zip

API keys, AI weights, personal drive settings and unrelated browser information are excluded.

Repository: https://github.com/chenyiwei00-spec/learning-from-las-vegas-workshop

This is a public code and asset download, not a publicly hosted interactive website. Run your downloaded copy locally using the instructions above.
