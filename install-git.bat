@echo off
REM Install Git for Windows
echo Installing Git for Windows...
echo.
echo This script requires administrator privileges to complete.
echo If UAC prompt appears, click "Yes" to continue.
echo.

REM Download Git installer
echo Downloading Git installer...
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe', 'GitInstaller.exe')"

REM Run installer silently
echo Running Git installer...
start /wait GitInstaller.exe /VERYSILENT /NORESTART

REM Clean up
del GitInstaller.exe

REM Verify installation
echo.
echo Verifying Git installation...
git --version

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✓ Git installed successfully!
    echo You can now run git commands in PowerShell
) else (
    echo.
    echo ✗ Git installation failed
    echo Please try again or install manually from: https://git-scm.com/download/win
)

pause
