@echo off
cd /d "%~dp0"
py -3 scripts\team_sync.py --watch
if errorlevel 1 pause
