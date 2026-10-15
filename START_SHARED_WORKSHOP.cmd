@echo off
cd /d "%~dp0"
py -3 serve_local.py --open --shared-workshop
if errorlevel 1 pause
