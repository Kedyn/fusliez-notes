// https://github.com/aegooby/electron-forge-react/blob/master/app/preload.ts

import * as Electron from "electron";

const ElectronAPI: Record<string, unknown> = {
  ipcRenderer: {
    send: function (channel: string, ...args: unknown[]): void {
      Electron.ipcRenderer.send(channel, ...args);
    },
    on: function (
      channel: string,
      callback: (event: Electron.IpcRendererEvent, ...args: unknown[]) => void
    ): Electron.IpcRenderer {
      return Electron.ipcRenderer.on(channel, callback);
    },
    removeAllListeners: function (channel: string): Electron.IpcRenderer {
      return Electron.ipcRenderer.removeAllListeners(channel);
    },
  },
};
Electron.contextBridge.exposeInMainWorld("Electron", ElectronAPI);
