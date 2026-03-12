@echo off
REM Build script for Android APK - Bitmeme Mobile App

setlocal enabledelayedexpansion

echo.
echo ============================================
echo   Bitmeme Android APK Build System
echo ============================================
echo.

if "%~1"=="" (
    echo Usage: build-android.bat [command]
    echo.
    echo Commands:
    echo   install    - Install dependencies
    echo   dev        - Run Android emulator/device
    echo   build      - Build APK (debug)
    echo   release    - Build APK (release)
    echo.
    exit /b 1
)

cd /d "%~dp0\..\mobile"

if "%~1"=="install" (
    echo Installing dependencies...
    npm install
    echo Generating Android native files...
    npm run prebuild-android
    echo Ready for Android development!
    goto end
)

if "%~1"=="dev" (
    echo Starting on Android device/emulator...
    npm run android
    goto end
)

if "%~1"=="build" (
    echo Building debug APK...
    npm run bundle-android
    call gradlew.bat assembleDebug
    echo Debug APK created in android\app\build\outputs\apk\debug\
    goto end
)

if "%~1"=="release" (
    echo Building release APK...
    npm run bundle-android
    call gradlew.bat assembleRelease
    echo Release APK created in android\app\build\outputs\apk\release\
    goto end
)

echo Unknown command: %~1
exit /b 1

:end
cd /d "%~dp0"
