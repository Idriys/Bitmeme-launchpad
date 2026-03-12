@echo off
REM Build script for Windows - Bitmeme Desktop App

setlocal enabledelayedexpansion

echo.
echo ============================================
echo   Bitmeme Windows Build System
echo ============================================
echo.

if "%~1"=="" (
    echo Usage: build.bat [command]
    echo.
    echo Commands:
    echo   install    - Install dependencies
    echo   dev        - Run development mode
    echo   build-nsis - Build NSIS installer
    echo   build-msi  - Build MSI installer
    echo   build-portable - Build portable executable
    echo   build-all  - Build all installers
    echo.
    exit /b 1
)

cd /d "%~dp0\..\electron"

if "%~1"=="install" (
    echo Installing dependencies...
    npm install
    echo Dependencies installed!
    goto end
)

if "%~1"=="dev" (
    echo Starting development mode...
    npm start
    goto end
)

if "%~1"=="build-nsis" (
    echo Building NSIS installer...
    npm run build-win
    echo NSIS installer created in dist/
    goto end
)

if "%~1"=="build-msi" (
    echo Building MSI installer...
    npm run build-msi
    echo MSI installer created in dist/
    goto end
)

if "%~1"=="build-portable" (
    echo Building portable executable...
    npm run build-portable
    echo Portable executable created in dist/
    goto end
)

if "%~1"=="build-all" (
    echo Building all Windows installers...
    echo.
    echo Building NSIS installer...
    npm run build-win
    echo.
    echo Building portable executable...
    npm run build-portable
    echo.
    echo All builds completed! Check dist/ folder.
    goto end
)

echo Unknown command: %~1
exit /b 1

:end
cd /d "%~dp0"
