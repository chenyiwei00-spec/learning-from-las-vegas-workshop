@echo off
cd /d "%~dp0"
py -3 serve_local.py --open
if errorlevel 1 pause
