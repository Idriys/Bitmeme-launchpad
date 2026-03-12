#!/bin/bash
# Build script for iOS app - Bitmeme Mobile App

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}  Bitmeme iOS Build System${NC}"
echo -e "${BLUE}============================================${NC}"
echo ""

if [ $# -eq 0 ]; then
    echo "Usage: ./build-ios.sh [command]"
    echo ""
    echo "Commands:"
    echo "  install    - Install dependencies and generate iOS files"
    echo "  dev        - Run on iOS simulator"
    echo "  build      - Build for simulator"
    echo "  release    - Build for release (requires signing)"
    echo ""
    exit 1
fi

cd mobile

case "$1" in
    install)
        echo -e "${BLUE}Installing dependencies...${NC}"
        npm install
        echo -e "${BLUE}Generating iOS native files...${NC}"
        npm run prebuild-ios
        echo -e "${GREEN}✓ Ready for iOS development!${NC}"
        ;;
    dev)
        echo -e "${BLUE}Starting iOS simulator...${NC}"
        npm run ios
        ;;
    build)
        echo -e "${BLUE}Building for iOS simulator...${NC}"
        npm run bundle-ios
        cd ios
        xcodebuild -workspace bitmeme.xcworkspace -scheme bitmeme -configuration Debug -derivedDataPath build
        echo -e "${GREEN}✓ Build created in ios/build/${NC}"
        cd ..
        ;;
    release)
        echo -e "${BLUE}Building for iOS release...${NC}"
        echo -e "${RED}Note: Ensure you have configured signing certificates${NC}"
        npm run bundle-ios
        cd ios
        xcodebuild -workspace bitmeme.xcworkspace -scheme bitmeme -configuration Release \
                   -derivedDataPath build \
                   CODE_SIGN_IDENTITY='iPhone Developer' \
                   PROVISIONING_PROFILE_SPECIFIER='Bitmeme Development'
        echo -e "${GREEN}✓ Release build created${NC}"
        cd ..
        ;;
    *)
        echo -e "${RED}Unknown command: $1${NC}"
        echo "Use: ./build-ios.sh [install|dev|build|release]"
        exit 1
        ;;
esac

cd ..
