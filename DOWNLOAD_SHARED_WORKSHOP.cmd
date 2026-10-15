@echo off
cd /d "%~dp0"
py -3 scripts\workshop_handoff.py download
if errorlevel 1 pause
