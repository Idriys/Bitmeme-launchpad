# Bitmeme Desktop App (Electron) Setup & Build Guide

## Overview
Bitmeme desktop application is built with Electron and electron-builder, providing native installers for Windows, macOS, and Linux platforms.

## Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.x (for Windows build tools)
- Visual Studio Build Tools 2019+ (Windows only)
- Apple Developer Account (macOS distribution only)

## Project Structure

```
electron/
├── src/
│   ├── main.js          # Electron main process
│   ├── preload.js       # Preload script for security
│   └── utils/           # Helper utilities
├── dist/                # Built distributable files
├── package.json         # Build configuration
└── resources/           # App icons and assets
```

## Installation

### 1. Install Electron Dependencies
```bash
cd electron
npm install
```

### 2. Build React Frontend (if not built)
```bash
cd client
npm run build
cd ..
```

## Development

### Start Development Mode
```bash
npm start
```

This will:
1. Start the Electron main process
2. Connect to the React development server
3. Open the app window

DevTools are enabled in development mode for debugging.

## Building for Production

### Windows

#### NSIS Installer (Recommended)
```bash
npm run build-win
```
**Output:** `dist/Bitmeme Setup 1.0.0.exe`
- One-click installer with uninstaller
- Auto-update support

#### Portable Executable
```bash
npm run build-portable
```
**Output:** `dist/Bitmeme 1.0.0.exe`
- No installation required
- Runs directly from USB

#### MSI Installer
```bash
npm run build-msi
```
**Output:** `dist/Bitmeme-1.0.0.msi`
- Windows Installer format
- Good for enterprise deployment

#### Build All Windows Installers
```bash
npm run build-all-windows
```

### macOS

#### DMG Image (for distribution)
```bash
npm run build-mac
```
**Output:** `dist/Bitmeme-1.0.0.dmg`

#### Prerequisites:
- Must run on macOS
- Valid signing certificate (optional but recommended)
- Notarization for Gatekeeper (macOS 10.15+)

#### Code Signing Setup
```bash
# Set environment variable for signing identity
export CSC_NAME="Developer ID Application: Your Name"
npm run build-mac
```

#### Notarization (macOS only)
```bash
export APPLE_ID="your-apple-id@icloud.com"
export APPLE_ID_PASSWORD="your-app-password"
npm run build-mac
```

### Linux

#### AppImage (Universal Linux)
```bash
npm run build-linux
```
**Output:** `dist/Bitmeme-1.0.0.AppImage`

#### DEB Package (Debian/Ubuntu)
Automatically created with AppImage build

#### Snap Package
```bash
npm run build-snap
```

## Platform-Specific Build Commands

| Platform | Command | Output |
|----------|---------|--------|
| Windows NSIS | `npm run build-win` | .exe installer |
| Windows Portable | `npm run build-portable` | Standalone .exe |
| Windows MSI | `npm run build-msi` | .msi installer |
| macOS DMG | `npm run build-mac` | .dmg image |
| Linux AppImage | `npm run build-linux` | .AppImage executable |
| Linux DEB | `npm run build-deb` | .deb package |
| All Platforms | `npm run build-all` | All of above |

## Configuration

### Icon and Logo Setup
Place your app icons in `resources/`:
```
resources/
├── icon.png          # 512x512 for all platforms
├── icon.icns         # macOS icon (optional)
└── icon.ico          # Windows icon (optional)
```

### Electron-Builder Config
Main configuration is in `package.json` under `build` key:
```json
{
  "build": {
    "appId": "org.bitmeme.launchpad",
    "productName": "Bitmeme",
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true
    },
    "mac": {
      "category": "public.app-category.finance"
    }
  }
}
```

## Auto-Update Configuration

### Setup Auto-Update Server
The app supports electron-updater for automatic updates:

1. Create release on GitHub with assets
2. Set GitHub token in environment:
```bash
export GH_TOKEN=your-github-token
npm run build-win
```

3. App will check for updates on startup

### Disable Auto-Update
```javascript
// In main.js
if (process.env.NODE_ENV === 'development') {
  autoUpdater.checkForUpdatesAndNotify();
}
```

## Signing and Notarization

### Windows Code Signing
```bash
# Install signtool or use third-party service
npm run build-win -- --win nsis
```

### macOS Notarization
```bash
export APPLE_ID="your-email@icloud.com"
export APPLE_ID_PASSWORD="your-app-specific-password"
npm run build-mac
```

## Distribution

### Windows
- Direct download: Upload .exe files to your website
- Windows Update: Integrate with MSIX packaging
- Store: Submit MSI to Microsoft Store

### macOS
- Direct download: Upload .dmg file
- Mac App Store: Upload signed .pkg
- Homebrew: Create tap repository

### Linux
- Direct download: Upload .AppImage
- Snap Store: `snap push Bitmeme-1.0.0.snap`
- Linux package managers: Create .deb/.rpm repositories

## Troubleshooting

### Build Issues

**Issue: "Cannot find module" errors**
- Solution: Delete node_modules and reinstall
```bash
rm -rf node_modules
npm install
```

**Issue: Icon not found**
- Solution: Ensure icon files are in `resources/` directory

**Issue: Build fails on Windows**
- Solution: Install Visual Studio Build Tools
```bash
npm install -g windows-build-tools
```

### Runtime Issues

**Issue: App fails to start**
- Check logs: `~/.config/Bitmeme/logs/main.log`
- Or: `~/Library/Logs/Bitmeme/main.log` (macOS)

**Issue: White blank window**
- Ensure React build exists in `../client/build`
- Check: `npm run build` in client directory first

**Issue: DevTools not opening**
- Toggle with: `Ctrl+Shift+I` (Windows), `Cmd+Option+I` (macOS)

## Development Workflow

### During Development
1. Start dev server: `npm start`
2. Make changes to React code in `../client/src/`
3. Hot reload works automatically
4. Make Electron changes in `src/main.js` or `src/preload.js`
5. Restart app to apply changes

### Before Release
1. Test all features
2. Run: `npm run build-win` (or appropriate platform)
3. Install the generated installer
4. Test all functionality
5. Update version in `package.json`
6. Commit and tag release in Git
7. Build for all platforms
8. Upload to distribution channels

## Environment Variables

Create `.env` file in electron directory:
```
NODE_ENV=production
API_URL=https://api.bitmeme.com
BACKEND_PORT=5000
```

Access in Electron:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Performance Optimization

### Code Splitting
React lazy loading is configured in client.

### Bundle Analysis
```bash
npm run analyze
```

### Reducing App Size
- Use `asar` archive (default in electron-builder)
- Tree-shake unused dependencies
- Compress assets

## CI/CD Integration

### GitHub Actions
```yaml
name: Build and Release

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build-all
      - uses: actions/upload-artifact@v3
        with:
          name: releases
          path: dist/
```

## Quick Reference Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build-win` | Build Windows NSIS installer |
| `npm run build-portable` | Build portable Windows .exe |
| `npm run build-mac` | Build macOS DMG |
| `npm run build-linux` | Build Linux AppImage |
| `npm run build-all` | Build for all platforms |
| `npm run pack` | Create build without installer |
| `npm run dist` | Create distributable in dist/ |

## Additional Resources

- [Electron Documentation](https://www.electronjs.org/docs)
- [Electron-Builder Docs](https://www.electron.build/)
- [Code Signing & Notarization](https://www.electron.build/code-signing)
- [Auto-Update Documentation](https://www.electron.build/auto-update)
- [Publishing Releases](https://www.electron.build/configuration/publish)

## Support

For issues or questions:
1. Check Electron logs in user config directory
2. Review electron-builder documentation
3. Check GitHub Issues in electron/electron-builder repos
