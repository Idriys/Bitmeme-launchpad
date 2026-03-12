# Bitmeme Installation Package Guide

## Complete Installation Packages Available

This guide provides step-by-step instructions for downloading and installing Bitmeme on all supported platforms.

---

## Windows Installation

### Option 1: NSIS Installer (Recommended)
**File:** `Bitmeme Setup 1.0.0.exe`

**Steps:**
1. Download the installer
2. Double-click the .exe file
3. Click "Install" when prompted
4. Wait for installation to complete
5. Bitmeme will launch automatically
6. A shortcut will be added to your Start Menu and Desktop

**Uninstall:**
- Control Panel → Uninstall a Program → Bitmeme → Uninstall

### Option 2: Portable Version
**File:** `Bitmeme 1.0.0.exe`

**Steps:**
1. Download the .exe file
2. Place it anywhere on your computer or USB drive
3. Double-click to run
4. No installation needed
5. App closes when you close the window

**Advantages:**
- No installation required
- Can run from USB
- Leaves no registry entries
- Safe to delete when done

---

## Android Installation

### From APK File (Side-Loading)
**File:** `app-release.apk`

**Prerequisites:**
- Android device with Android 5.0+ (API 21+)
- USB cable

**Steps:**
1. Download the APK file to your computer
2. Connect Android device via USB
3. Enable USB Debugging:
   - Go to Settings → Developer Options → USB Debugging
   - If Developer Options not visible: Settings → About Phone → Tap Build Number 7 times
4. Install adb-tools on your computer
5. Run in terminal/command prompt:
   ```bash
   adb install app-release.apk
   ```
6. Wait for installation to complete
7. App will appear in your app drawer

**Or using Windows File Manager:**
1. Download APK to phone via USB File Transfer
2. Open file manager on phone
3. Navigate to Downloads
4. Tap the APK file
5. Select "Install"
6. Grant permissions if prompted

### From Google Play Store (Recommended)
**Steps:**
1. Open Google Play Store on Android device
2. Search for "Bitmeme"
3. Tap "Install"
4. Grant required permissions
5. Wait for installation
6. Tap "Open" or find app in app drawer

**Update:**
- App will auto-update in background

---

## macOS Installation

### DMG Installation
**File:** `Bitmeme-1.0.0.dmg`

**Steps:**
1. Download the DMG file
2. Double-click to mount the disk image
3. A Finder window opens showing the app
4. Drag "Bitmeme" to the "Applications" folder
5. Wait for copy to complete
6. Close the Finder window
7. Open Applications folder
8. Double-click "Bitmeme" to launch

**Uninstall:**
- Applications folder → Right-click Bitmeme → Move to Trash

### From Mac App Store (Future)
1. Open App Store
2. Search for "Bitmeme"
3. Click "Get"
4. Authenticate with Apple ID
5. Wait for installation
6. Launch from Applications or Launchpad

---

## iOS Installation

### From App Store (Recommended)
**Steps:**
1. Open App Store on iPhone/iPad
2. Search for "Bitmeme"
3. Tap "Get"
4. Face ID / Touch ID / Apple ID to confirm
5. Wait for installation
6. Tap "Open" or find in home screen

**Update:**
- App Store → Updates → Bitmeme → Update

### Using TestFlight (Beta Testing)
1. Download TestFlight app from App Store
2. Open beta invite link
3. Tap "Open in TestFlight"
4. Confirm installation
5. Launch beta version

---

## Linux Installation

### AppImage
**File:** `Bitmeme-1.0.0.AppImage`

**Steps:**
1. Download the AppImage file
2. Right-click → Properties → Permissions → Make executable
3. Or in terminal:
   ```bash
   chmod +x Bitmeme-1.0.0.AppImage
   ./Bitmeme-1.0.0.AppImage
   ```

### DEB Package (Ubuntu/Debian)
**File:** `bitmeme_1.0.0_amd64.deb`

**Steps:**
1. Download the .deb file
2. Double-click to open Software Center
3. Click "Install"
4. Enter password if prompted
5. Wait for installation
6. Launch from applications menu

**Or via terminal:**
```bash
sudo apt install ./bitmeme_1.0.0_amd64.deb
```

**Update:**
```bash
sudo apt update && sudo apt upgrade
```

**Uninstall:**
```bash
sudo apt remove bitmeme
```

---

## System Requirements

| Platform | Minimum | Recommended |
|----------|---------|-------------|
| **Windows** | 7, 100MB disk | 10/11, 500MB disk |
| **macOS** | 10.13, 100MB disk | 11+, 500MB disk |
| **Linux** | Ubuntu 18.04+, 100MB | Latest Ubuntu, 500MB |
| **Android** | Android 5.0+, 100MB | Android 10+, 500MB |
| **iOS** | iOS 12.0+, 100MB | iOS 15+, 500MB |

---

## First Launch

1. **App Opens**
   - Splash screen shows briefly
   - Main interface loads

2. **Login/Register**
   - New users: Tap "Sign Up"
   - Existing users: Enter email and password

3. **Grant Permissions (Mobile)**
   - Internet access: Required (Always)
   - Camera: Optional (for QR scanning)
   - Storage: Optional (for screenshots)
   - Location: Optional (for blockchain network)

4. **Dashboard Loads**
   - Shows your portfolio
   - Browse available launchpads
   - Submit transactions

---

## Troubleshooting Installation

### Windows
**Problem:** Administrator required
- Right-click installer → Run as Administrator

**Problem:** SmartScreen warning
- Click "More info" → "Run anyway"

**Problem:** Installation slow/frozen
- Restart computer
- Disable antivirus temporarily
- Retry installer

### Android
**Problem:** "Unknown sources" error
- Settings → Apps → Special app access → Install unknown apps
- Toggle "on" for file manager

**Problem:** Insufficient storage
- Delete unnecessary apps
- Enable cloud backup
- Free up at least 500MB

### macOS
**Problem:** "Cannot verify developer"
- System Preferences → Security & Privacy → Open Anyway

**Problem:** Damaged or can't be opened
- Force Quit: Cmd+Option+Esc → Force Quit
- Delete and re-download

### iOS
**Problem:** Cannot install from App Store
- Update iOS to latest version
- Sign out and back into Apple ID
- Restart device

### Linux
**Problem:** AppImage won't run
- Check file permissions: `ls -l Bitmeme-*.AppImage`
- Ensure FUSE library installed: `sudo apt install libfuse2`

---

## Downloading Installers

### Windows
- NSIS: [Download Bitmeme Setup](https://github.com/bitmeme/releases/download/v1.0.0/Bitmeme-Setup-1.0.0.exe)
- Portable: [Download Portable](https://github.com/bitmeme/releases/download/v1.0.0/Bitmeme-1.0.0.exe)

### macOS
- [Download DMG](https://github.com/bitmeme/releases/download/v1.0.0/Bitmeme-1.0.0.dmg)

### Linux
- AppImage: [Download AppImage](https://github.com/bitmeme/releases/download/v1.0.0/Bitmeme-1.0.0.AppImage)
- DEB: [Download DEB](https://github.com/bitmeme/releases/download/v1.0.0/bitmeme_1.0.0_amd64.deb)

### Android
- [Download from Google Play Store](https://play.google.com/store/apps/details?id=org.bitmeme.launchpad)
- [Download APK directly](https://github.com/bitmeme/releases/download/v1.0.0/app-release.apk)

### iOS
- [Download from App Store](https://apps.apple.com/app/bitmeme/id1234567890)

---

## After Installation

### Initial Configuration
1. Set up your wallet address
2. Configure notification preferences
3. Enable two-factor authentication (recommended)
4. Add payment methods (if using presales)

### Security Best Practices
- Never share your private keys
- Enable 2FA for account security
- Update app regularly
- Use official download sources only

### Getting Help
- In-app Help menu
- Visit [bitmeme.com/help](https://bitmeme.com/help)
- Email: support@bitmeme.com
- Discord: [Join Community](https://discord.gg/bitmeme)

---

## Version Information
- **Current Version:** 1.0.0
- **Release Date:** January 2024
- **Last Updated:** January 2024

**Available on:**
- ✅ Windows 7+
- ✅ macOS 10.13+
- ✅ Linux (Ubuntu/Debian)
- ✅ Android 5.0+
- ✅ iOS 12.0+
