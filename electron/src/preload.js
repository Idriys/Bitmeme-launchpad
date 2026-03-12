const { contextBridge, ipcRenderer } = require('electron');

// Expose safe APIs to React
contextBridge.exposeInMainWorld('electronAPI', {
  invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
  send: (channel, ...args) => ipcRenderer.send(channel, ...args),
  on: (channel, listener) => ipcRenderer.on(channel, listener),
  once: (channel, listener) => ipcRenderer.once(channel, listener),
  removeListener: (channel, listener) => ipcRenderer.removeListener(channel, listener)
});

// Expose API call handler
contextBridge.exposeInMainWorld('api', {
  call: async (method, endpoint, data) => {
    return ipcRenderer.invoke('api-call', { method, endpoint, data });
  }
});

// Expose app version
contextBridge.exposeInMainWorld('appVersion', {
  version: require('../package.json').version
});
