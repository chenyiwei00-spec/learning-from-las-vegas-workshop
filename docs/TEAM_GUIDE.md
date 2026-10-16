# Teammate quick start

1. Viewing and downloading the public repository requires no GitHub account.
2. For team editing, send your GitHub username to the owner and accept the collaborator invitation.
3. Clone the repository using GitHub Desktop, Git or your own Codex. Use Clone, not Download ZIP, to receive later code updates.
4. Install Python 3.10+ if absent. Double-click START_TEAM_WEBSITE.cmd on Windows; on macOS run python3 serve_local.py --open.
5. Run DOWNLOAD_TEAM_ASSETS.cmd (macOS/Linux: python3 scripts/download_assets.py) to install the public GitHub asset release. For the newer models and shared saved project, also follow [Teacher quick start](TEACHER_QUICKSTART.md).
6. Open this repository directory in your own Codex. Read AGENTS.md. Create a feature branch before editing.
7. Commit and push your change, then submit a pull request into main. Coordinate when two people edit the same component.
8. To view the shared accepted version, return to a clean main branch and run SYNC_UPDATES.cmd. START_LIVE_SYNC.cmd checks every 30 seconds while open. Stop with Ctrl+C.
9. The website refreshes when frontend files change. Changes to server Python require restarting the local server.
10. AI model generation is optional and separate; saved browser drafts remain private to your device.

Suggested first prompt for Codex:
Read AGENTS.md and README.md. Verify the project starts, fetch main, and create a work/<my-name>/<task> branch. Implement only the requested change, run scripts/check_project.py, rebuild the exhibition bundles if their source changed, then commit and push the branch and prepare a pull request. Keep large assets and credentials out of Git. Do not deploy the original public website.

## Public media release
Windows: double-click DOWNLOAD_TEAM_ASSETS.cmd. macOS/Linux: python3 scripts/download_assets.py. Public downloads need no GitHub login. The approximately 10 GB pack needs about 21 GB total free space; completed parts are reused, every part and installed file is SHA-256 checked. No AI weight download is required for existing-model editing.

For an authorized private copy, GitHub CLI users can authenticate with gh auth login. Official instructions: https://cli.github.com/manual/gh_auth_login. The helper can use either gh or Git Credential Manager without storing tokens in this repository.

## Space-engine replacement

Before integrating a new space-building method, read [SPACE_ENGINE_HANDOFF.md](SPACE_ENGINE_HANDOFF.md). The latest exhibition UI has a single factory entry in `src/exhibition-space.js`; port the new engine rather than replacing the exhibition with an older branch snapshot.
