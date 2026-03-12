#!/bin/bash
# Build scripts for cross-platform Bitmeme app

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}  Bitmeme Cross-Platform Build System${NC}"
echo -e "${BLUE}============================================${NC}"
echo ""

# Function to build Windows installer
build_windows() {
    echo -e "${BLUE}Building Windows Installer...${NC}"
    cd electron
    npm run build-win
    echo -e "${GREEN}✓ Windows installer created${NC}"
    cd ..
}

# Function to build macOS app
build_macos() {
    echo -e "${BLUE}Building macOS App...${NC}"
    cd electron
    npm run build-mac
    echo -e "${GREEN}✓ macOS app created${NC}"
    cd ..
}

# Function to build Linux app
build_linux() {
    echo -e "${BLUE}Building Linux App...${NC}"
    cd electron
    npm run build-linux
    echo -e "${GREEN}✓ Linux app created${NC}"
    cd ..
}

# Function to build Android APK
build_android() {
    echo -e "${BLUE}Building Android APK...${NC}"
    cd mobile
    if [ ! -d "android" ]; then
        echo "Android folder not found. Running prebuild..."
        npm run prebuild-android
    fi
    npm run build-android
    echo -e "${GREEN}✓ Android APK created${NC}"
    cd ..
}

# Function to build iOS app
build_ios() {
    echo -e "${BLUE}Building iOS App...${NC}"
    cd mobile
    if [ ! -d "ios" ]; then
        echo "iOS folder not found. Running prebuild..."
        npm run prebuild-ios
    fi
    npm run build-ios
    echo -e "${GREEN}✓ iOS app created${NC}"
    cd ..
}

# Function to build all platforms
build_all() {
    echo -e "${BLUE}Building for all platforms...${NC}"
    build_windows
    build_macos
    build_linux
    build_android
    build_ios
    echo -e "${GREEN}✓ All builds completed${NC}"
}

# Main menu
if [ $# -eq 0 ]; then
    echo "Usage: ./build.sh [platform]"
    echo ""
    echo "Platforms:"
    echo "  windows    - Build Windows installer"
    echo "  macos      - Build macOS app"
    echo "  linux      - Build Linux app"
    echo "  android    - Build Android APK"
    echo "  ios        - Build iOS app"
    echo "  all        - Build all platforms"
    echo ""
    exit 1
fi

case "$1" in
    windows)
        build_windows
        ;;
    macos)
        build_macos
        ;;
    linux)
        build_linux
        ;;
    android)
        build_android
        ;;
    ios)
        build_ios
        ;;
    all)
        build_all
        ;;
    *)
        echo "Unknown platform: $1"
        echo "Use: ./build.sh [windows|macos|linux|android|ios|all]"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}Build completed successfully!${NC}"
