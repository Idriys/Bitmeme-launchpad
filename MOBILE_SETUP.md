# Bitmeme Mobile App Setup & Build Guide

## Overview
Bitmeme mobile app is a cross-platform application built with React Native, supporting both Android and iOS platforms with native builds for production deployment.

## Prerequisites

### For Android Development
- Node.js 16+ and npm/yarn
- Java Development Kit (JDK) 11+
- Android SDK (API level 21+)
- Android Studio (recommended)
- Android NDK (for native modules)

### For iOS Development (macOS only)
- Node.js 16+ and npm/yarn
- Xcode 12+ with Command Line Tools
- CocoaPods package manager
- Apple Developer Account (for distribution)

## Project Structure

```
mobile/
├── src/
│   ├── screens/          # App screens/pages
│   ├── components/       # Reusable UI components
│   ├── utils/           # Helper functions
│   ├── context/         # Context API state management
│   └── assets/          # Images, fonts, etc
├── android/             # Android native code (generated)
├── ios/                 # iOS native code (generated)
├── App.js               # Root app component
├── index.js             # App entry point
├── package.json         # Dependencies and scripts
├── babel.config.js      # Babel configuration
├── metro.config.js      # Metro bundler config
└── react-native.config.js # React Native CLI config
```

## Installation

### 1. Install Dependencies
```bash
cd mobile
npm install
```

### 2. Generate Native Folders

**For Android:**
```bash
npm run prebuild-android
```

**For iOS:**
```bash
npm run prebuild-ios
```

## Development

### Android Development
```bash
# Start Metro bundler (in one terminal)
npm start

# Run on emulator/device (in another terminal)
npm run android
```

**Note:** Make sure Android emulator is running or Android device is connected via USB with debugging enabled.

### iOS Development
```bash
# Start Metro bundler (in one terminal)
npm start

# Run on simulator (in another terminal)
npm run ios
```

**Note:** iOS development requires macOS. To open Xcode:
```bash
xed ios/
```

## Building for Production

### Android APK Build

#### Debug APK
```bash
./scripts/build-android.sh build
# or Windows:
scripts\build-android.bat build
```

**Output:** `mobile/android/app/build/outputs/apk/debug/app-debug.apk`

#### Release APK (Signed)
```bash
./scripts/build-android.sh release
# or Windows:
scripts\build-android.bat release
```

**Note:** For signed releases, you need a keystore file. Create one:
```bash
keytool -genkey -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```

Then configure in `android/app/build.gradle`:
```gradle
signingConfigs {
  release {
    keyAlias 'my-key-alias'
    keyPassword 'keystore_password'
    storeFile file('my-release-key.keystore')
    storePassword 'keystore_password'
  }
}

buildTypes {
  release {
    signingConfig signingConfigs.release
  }
}
```

### iOS Build

#### Development Build
```bash
./scripts/build-ios.sh build
```

#### Release Build (for App Store)
```bash
./scripts/build-ios.sh release
```

**Note:** iOS App Store distribution requires:
1. Apple Developer Account ($99/year)
2. App ID configuration in Apple Developer Portal
3. Certificates and Provisioning Profiles
4. Proper Code Signing setup in Xcode

## Distribution

### Android (Google Play Store)
1. Build signed APK using release configuration
2. Create Google Play Console account
3. Create new app in Google Play Console
4. Complete app information and rating questionnaire
5. Upload APK to internal testing → closed testing → production track
6. Get approval (usually 2-4 hours)

### iOS (Apple App Store)
1. Build signed app in Xcode
2. Create App Store Connect account
3. Create app record in App Store Connect
4. Complete app information, pricing, and ratings
5. Submit for review
6. Approval process takes 24-48 hours typically

## Troubleshooting

### Android Issues

**Issue: "android:exported" attribute error**
- Solution: Update Android SDK to latest version

**Issue: Build fails with gradle error**
- Solution: Clear gradle cache
```bash
cd android
./gradlew clean
cd ..
npm run build-android
```

**Issue: App crashes on startup**
- Check logcat: `adb logcat *:S ReactNative:V ReactNativeJS:V`

### iOS Issues

**Issue: Pod installation fails**
- Solution: Clear pods and reinstall
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

**Issue: Xcode build fails**
- Solution: Clean build folder (Cmd + Shift + K in Xcode)
- Or: `xcodebuild clean -workspace ios/bitmeme.xcworkspace -scheme bitmeme`

**Issue: Code signing issues**
- Solution: Go to Xcode > Preferences > Accounts and configure signing

## Environment Configuration

Create `.env` file in mobile directory:
```
REACT_APP_API_URL=https://api.bitmeme.com
REACT_APP_CHAIN_ID=1
REACT_APP_RPC_URL=https://opnet-mainnet.opnet.org
```

Load in your app:
```javascript
import { API_URL } from '@env';
```

## Performance Optimization

### Bundle Size Reduction
```bash
npm run bundle-android -- --dev false
npm run bundle-ios -- --dev false
```

### Proguard Configuration (Android)
Edit `android/app/proguard-rules.pro`:
```
-keep class com.facebook.react.** { *; }
-keep interface com.facebook.react.** { *; }
```

## Continuous Integration

### GitHub Actions Example
```yaml
name: Build Mobile App

on: [push, pull_request]

jobs:
  build-android:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: cd mobile && npm install
      - run: npm run prebuild-android
      - run: npm run build-android
```

## Quick Reference Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start Metro bundler |
| `npm run android` | Run on Android device/emulator |
| `npm run ios` | Run on iOS simulator |
| `npm run bundle-android` | Bundle JS for Android |
| `npm run bundle-ios` | Bundle JS for iOS |
| `npm run build-android` | Build Android APK |
| `npm run build-ios` | Build iOS app |
| `npm test` | Run tests |

## Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [Android Development Setup](https://reactnative.dev/docs/environment-setup)
- [iOS Development Setup](https://reactnative.dev/docs/environment-setup)
- [Publishing to Google Play Store](https://reactnative.dev/docs/signed-apk-android)
- [Publishing to Apple App Store](https://reactnative.dev/docs/publishing-to-app-store)
