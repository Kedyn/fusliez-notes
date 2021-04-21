import { BrowserWindow, app } from "electron";

// eslint-disable-next-line
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// eslint-disable-next-line global-require
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 460,
    minHeight: 600,
    minWidth: 320,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      // devTools: false,
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  //mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

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
