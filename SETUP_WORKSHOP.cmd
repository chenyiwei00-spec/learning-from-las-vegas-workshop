@echo off
cd /d "%~dp0"
py -3 --version >nul 2>&1
if errorlevel 1 (
 echo Install Python 3.10 or newer from https://www.python.org/downloads/ then run this file again.
 pause
 exit /b 1
)
py -3 scripts\download_assets.py
if errorlevel 1 (
 pause
 exit /b 1
)
py -3 scripts\workshop_handoff.py download
if errorlevel 1 (
 pause
 exit /b 1
)
py -3 serve_local.py --open --shared-workshop
if errorlevel 1 pause
