# Bitmeme APK & Cross-Platform Build Guide

## Quick Start: Build APK for Android

### Prerequisites
- Node.js 16+
- Android SDK (API 21+)
- Java Development Kit 11+
- 5GB+ disk space

### One-Command APK Build

#### Windows:
```cmd
cd mobile
npm install
npm run prebuild-android
scripts\build-android.bat release
```

#### macOS/Linux:
```bash
cd mobile
npm install
npm run prebuild-android
./scripts/build-android.sh release
```

**Output:** `mobile/android/app/build/outputs/apk/release/app-release.apk`

---

## Detailed Platform Build Guide

### WINDOWS INSTALLER

#### Method 1: NSIS (One-Click Installer)
```bash
cd electron
npm run build-win
```
**Output:** `dist/Bitmeme Setup 1.0.0.exe`
- Includes uninstaller
- Quick installation
- Creates Start Menu shortcuts

#### Method 2: Portable EXE
```bash
cd electron
npm run build-portable
```
**Output:** `dist/Bitmeme 1.0.0.exe`
- No installation needed
- Run from USB or any location
- No registry modifications

#### Installation Instructions for Users:
1. Download installer
2. Double-click to run
3. Follow installation wizard
4. Launch from Start Menu or Desktop shortcut

---

### ANDROID APK BUILD

#### Step 1: Generate Android Project
```bash
cd mobile
npm install
npm run prebuild-android
```

#### Step 2: Build APK
**Debug APK (for testing):**
```bash
./scripts/build-android.sh build
```
**Output:** `android/app/build/outputs/apk/debug/app-debug.apk`

**Release APK (for Google Play Store):**
```bash
./scripts/build-android.sh release
```
**Output:** `android/app/build/outputs/apk/release/app-release.apk`

#### Step 3: Installation
**On Android Device:**
```bash
adb install app-release.apk
```

**Via Google Play Store:**
1. Create Google Play Developer account ($25)
2. Upload signed APK
3. Complete app information
4. Submit for review (2-4 hours)

#### Signing for Release
Place keystore file in `mobile/android/app/`:
```bash
# Generate keystore if needed
keytool -genkey -v -keystore bitmeme-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias bitmeme
```

Configure in `android/app/build.gradle`:
```gradle
signingConfigs {
    release {
        keyAlias 'bitmeme'
        keyPassword 'YOUR_KEY_PASSWORD'
        storeFile file('bitmeme-key.keystore')
        storePassword 'YOUR_STORE_PASSWORD'
    }
}
```

### Continuous Integration with GitHub Actions
A workflow is included at `.github/workflows/release.yml`. It runs whenever you push a tag matching `v*`:

1. Builds desktop installers on Windows, macOS and Linux runners.
2. Builds the Android release APK and (on macOS) the iOS app.
3. Collects the resulting binaries and uploads them to a GitHub Release matching the tag.

To publish a new release, simply tag and push from your local repo:
```bash
git tag v1.0.0
git push origin v1.0.0
```

The generated installers and APK/IPA files will appear under the "Releases" page of your repository.
---

### macOS APP BUILD

#### Build DMG for Distribution
```bash
cd electron
npm run build-mac
```
**Output:** `dist/Bitmeme-1.0.0.dmg`

#### Installation Instructions for Users:
1. Download .dmg file
2. Double-click to open
3. Drag Bitmeme to Applications folder
4. Launch from Applications

#### With Code Signing (Recommended)
```bash
export CSC_NAME="Developer ID Application: Your Name"
npm run build-mac
```

#### App Store Distribution
1. Create App Store Connect account
2. Submit signed .pkg file
3. Complete metadata and ratings
4. Submit for review (24-48 hours)

---

### iOS APP BUILD

#### Prerequisites
- macOS machine
- Xcode 12+
- Apple Developer Account

#### Development Build
```bash
cd mobile
npm install
npm run prebuild-ios
npm run ios
```

#### Build for App Store
```bash
npm run bundle-ios
cd ios
xcodebuild -workspace bitmeme.xcworkspace -scheme bitmeme -configuration Release \
           -derivedDataPath build
cd ..
```

#### Distribution via App Store
1. Create App Store Connect account ($99/year)
2. Create app in App Store Connect
3. Generate provisioning profiles and certificates
4. Archive app in Xcode
5. Submit to App Store
6. Wait for review (24-48 hours)

---

### LINUX BUILD

#### AppImage (Universal)
```bash
cd electron
npm run build-linux
```
**Output:** `dist/Bitmeme-1.0.0.AppImage`

**Make executable and run:**
```bash
chmod +x Bitmeme-1.0.0.AppImage
./Bitmeme-1.0.0.AppImage
```

#### DEB Package (Debian/Ubuntu)
Same AppImage build creates .deb:
**Output:** `dist/bitmeme_1.0.0_amd64.deb`

**Install:**
```bash
sudo apt install ./bitmeme_1.0.0_amd64.deb
```

---

## Build Configuration Matrix

| Platform | Installer Type | Size | Setup | Distribution |
|----------|---|------|-------|---|
| Windows | NSIS .exe | 150-200MB | 1-click | Direct download |
| Windows | Portable .exe | 150-200MB | No setup | USB/Download |
| Android | .apk | 80-120MB | adb or Download | Google Play Store |
| macOS | .dmg | 200-250MB | Drag-drop | Direct/App Store |
| iOS | .ipa | 90-150MB | iTunes/TestFlight | App Store Only |
| Linux | AppImage | 200-250MB | Make executable | Direct/Package repos |

---

## Build Scripts Quick Reference

### Windows
```bash
scripts\build.bat install       # Install deps
scripts\build.bat dev           # Run dev
scripts\build.bat build-nsis    # NSIS installer
scripts\build.bat build-portable# Portable EXE
scripts\build.bat build-all     # All Windows formats
```

### Android
```bash
./scripts/build-android.sh install   # Install deps
./scripts/build-android.sh dev       # Run on device
./scripts/build-android.sh build     # Debug APK
./scripts/build-android.sh release   # Release APK
```

### iOS
```bash
./scripts/build-ios.sh install  # Install deps
./scripts/build-ios.sh dev      # Run simulator
./scripts/build-ios.sh build    # Build for simulator
./scripts/build-ios.sh release  # Build for App Store
```

### Linux/macOS
```bash
./scripts/build.sh windows  # Build Windows
./scripts/build.sh macos    # Build macOS
./scripts/build.sh linux    # Build Linux
./scripts/build.sh android  # Build Android
./scripts/build.sh ios      # Build iOS
./scripts/build.sh all      # Build everything
```

---

## Troubleshooting Build Issues

### Android APK Build Fails
```bash
# Clear gradle cache
cd mobile/android && ./gradlew clean && cd ../..

# Rebuild
npm run prebuild-android
./scripts/build-android.sh release
```

### Windows Installer Build Fails
```bash
# Ensure Python 3 and VC++ tools installed
npm install -g windows-build-tools

# Clear node_modules
rm -r electron/node_modules
cd electron && npm install && npm run build-win
```

### React Build Error
```bash
# Ensure React frontend is built
cd client
npm run build
cd ../electron
npm run build-win
```

### Out of Memory
```bash
# For large APK builds
export NODE_OPTIONS=--max-old-space-size=4096
npm run build-android
```

---

## Distribution Checklist

- [ ] Test on actual device/platform
- [ ] Update version numbers in all package.json files
- [ ] Create release notes
- [ ] Build signed versions
- [ ] Test installers work correctly
- [ ] Create GitHub Release with all assets
- [ ] Upload to respective App Stores
- [ ] Test auto-update (Electron)
- [ ] Announce release to users
- [ ] Monitor crash reports

---

## Performance Metrics

**Expected Build Times:**
- Windows NSIS: 2-3 minutes
- Android APK: 3-5 minutes
- macOS DMG: 2-3 minutes
- iOS build: 5-8 minutes
- Linux AppImage: 2-3 minutes

**Expected Install Sizes:**
- Windows: 150-200 MB
- Android: 80-120 MB
- macOS: 200-250 MB
- iOS: 90-150 MB
- Linux: 200-250 MB

---

## Additional Resources

- [Electron-Builder Docs](https://www.electron.build/)
- [React Native Android Build](https://reactnative.dev/docs/signed-apk-android)
- [React Native iOS Build](https://reactnative.dev/docs/publishing-to-app-store)
- [Google Play Console](https://play.google.com/console)
- [App Store Connect](https://appstoreconnect.apple.com/)

---

**Last Updated:** January 2024
**Version:** 1.0.0
