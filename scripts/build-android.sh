#!/bin/bash
# Build script for Android APK - Bitmeme Mobile App

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}  Bitmeme Android APK Build System${NC}"
echo -e "${BLUE}============================================${NC}"
echo ""

if [ $# -eq 0 ]; then
    echo "Usage: ./build-android.sh [command]"
    echo ""
    echo "Commands:"
    echo "  install    - Install dependencies"
    echo "  dev        - Run on Android device/emulator"
    echo "  build      - Build APK (debug)"
    echo "  release    - Build APK (release)"
    echo ""
    exit 1
fi

cd mobile

case "$1" in
    install)
        echo -e "${BLUE}Installing dependencies...${NC}"
        npm install
        echo -e "${BLUE}Generating Android native files...${NC}"
        npm run prebuild-android
        echo -e "${GREEN}✓ Ready for Android development!${NC}"
        ;;
    dev)
        echo -e "${BLUE}Starting on Android device/emulator...${NC}"
        npm run android
        ;;
    build)
        echo -e "${BLUE}Building debug APK...${NC}"
        npm run bundle-android
        cd android
        ./gradlew assembleDebug
        echo -e "${GREEN}✓ Debug APK created in app/build/outputs/apk/debug/${NC}"
        cd ..
        ;;
    release)
        echo -e "${BLUE}Building release APK...${NC}"
        npm run bundle-android
        cd android
        ./gradlew assembleRelease
        echo -e "${GREEN}✓ Release APK created in app/build/outputs/apk/release/${NC}"
        cd ..
        ;;
    *)
        echo -e "${RED}Unknown command: $1${NC}"
        echo "Use: ./build-android.sh [install|dev|build|release]"
        exit 1
        ;;
esac

cd ..
