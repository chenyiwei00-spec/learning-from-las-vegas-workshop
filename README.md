# Learning from Las Vegas — team collaboration

This repository contains the current local interactive website: archive search, Las Vegas / V&A collages, 3D model history, and the desert exhibition studio. Source is shared through GitHub. Large media and AI weights are separate.

For a teacher or first-time visitor, follow [Teacher quick start](docs/TEACHER_QUICKSTART.md), including the shared saved-project supplement.

## Start
Windows: double-click START_TEAM_WEBSITE.cmd.
macOS/Linux: run python3 serve_local.py --open.
Requires Python 3.10 or newer and Git. Node.js is needed for JavaScript development checks and rebuilding exhibition source.
The preview normally opens at http://127.0.0.1:8065/. Port 8055 remains the owner's original local website.

## Media
Search can read existing published media through the archive proxy with an internet connection.
For complete collage and exhibition operation, accept the GitHub invitation and download the private asset release. Windows: double-click DOWNLOAD_TEAM_ASSETS.cmd. macOS/Linux:

    python3 scripts/download_assets.py

The download is approximately 10 GB; allow about 21 GB of free disk space for downloads and installed assets. Download parts are SHA-256 checked, resumable by completed part, and imported directly without joining another large ZIP. The helper uses your existing GitHub CLI or Git Credential Manager login. For GitHub CLI, first run gh auth login; otherwise use git credential-manager github login --browser. Sign in with your own collaborator account. On Windows use py -3 instead of python3. The importer validates each asset's SHA-256 and writes assets only to approved asset directories. It does not replace source code.
Optional local paths belong in settings.local.json, copied from settings.local.example.json. This file is ignored by Git. No owner's F: drive path is required on a teammate's machine.

## Work together
1. Clone the private repository after accepting the owner's collaborator invitation.
2. Read AGENTS.md with your own Codex.
3. Fetch main, create a work/<name>/<task> branch, make your change and run the checks.
4. Commit and push your branch; open a pull request into main.
5. After the change is merged, others run SYNC_UPDATES.cmd (or python3 scripts/team_sync.py).
6. START_LIVE_SYNC.cmd enables guarded 30-second synchronization for a clean main checkout. The page detects changed frontend files and refreshes within about 3 seconds.

Live sync pauses while tracked files have local edits or you are on a feature branch. It never resets or discards your edits. This is synchronization after commits are merged, not simultaneous editing of the same file.

## Build and check
To edit the 3D exhibition source:

    npm ci
    npm run build

Then commit src/ and the generated site/exhibition-walk.js and site/exhibition-model-studio.js.
Run python3 scripts/check_project.py. This performs syntax, record, manifest, and secret/path checks without generating 3D models.

## Generation and saved state
3D generation requires a separately configured compatible GPU runtime and weights. The owner's machine already has one. Teammates can edit the website and use existing models without installing the AI weights.
Drafts and saved model galleries remain in each browser. Code synchronization does not merge those private drafts.
The original public website is a separate deployment. GitHub pushes do not deploy to it.

See docs/TEAM_GUIDE.md and docs/TEAM_GUIDE_ZH.md for the handoff.
