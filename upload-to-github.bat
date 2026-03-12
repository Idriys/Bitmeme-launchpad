@echo off
REM Git Commands for Bitmeme Repository Upload
REM This script should be run AFTER Git is installed

echo.
echo ========================================
echo   Bitmeme GitHub Upload Script
echo ========================================
echo.

REM Change to project directory
cd /d "C:\Bob-MCP-Workspace"

REM Configure Git
echo [1/5] Configuring Git...
git config --global user.name "Idriys"
git config --global user.email "your.email@example.com"

REM Initialize repository
echo [2/5] Initializing Git repository...
git init

REM Add all files
echo [3/5] Adding all files...
git add .

REM Create commit
echo [4/5] Creating commit...
git commit -m "Initial commit: Bitmeme Bitcoin Meme Coin Launchpad - Full-stack web, desktop (Electron), and mobile (React Native) application with 72 files and 5000+ lines of code"

REM Set main branch
git branch -M main

REM Add remote origin
echo [5/5] Pushing to GitHub...
git remote add origin https://github.com/Idriys/Bitmeme-launchpad.git

REM Push to GitHub
git push -u origin main

echo.
echo ========================================
echo   Upload Complete!
echo ========================================
echo.
echo Your repository is now at:
echo https://github.com/Idriys/Bitmeme-launchpad
echo.
pause
