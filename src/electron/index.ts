import { BrowserWindow, app, ipcMain } from "electron";

import { overlayWindow } from "electron-overlay-window";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: any;
/* eslint-enable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line global-require
if (require("electron-squirrel-startup")) {
  app.quit();
}

if (process.platform === "linux") {
  app.disableHardwareAcceleration();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    //...overlayWindow.WINDOW_OPTS,
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  //overlayWindow.attachTo(mainWindow, "Among Us");
  //mainWindow.show();

  //mainWindow.webContents.openDevTools();

  ipcMain.on("ignore", () => {
    mainWindow.setIgnoreMouseEvents(true, { forward: true });
  });
  ipcMain.on("listen", () => {
    mainWindow.setIgnoreMouseEvents(false);
  });
  ipcMain.on("quit", () => {
    app.quit();
  });
};

app.on("ready", () => {
  setTimeout(createWindow, process.platform === "linux" ? 1000 : 0);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
