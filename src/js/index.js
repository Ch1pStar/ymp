const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({width: 1080, height: 1920})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, '../templates/index.html'),
    protocol: 'file:',
    slashes: true,
    x:0,
    y:0,
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  // Dereference the window object
  win.on('closed', () => win = null);

  return win;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => mainWindow = createWindow());

// Quit when all windows are closed.
app.on('window-all-closed', () => app.quit());
