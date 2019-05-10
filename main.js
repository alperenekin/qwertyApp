// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let child

function createMainWindow () {

    // Create the browser window.
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }, 
    })
  
    mainWindow.maximize()

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })

}


function createLoginWindow () {
	
  login = new BrowserWindow({
    width: 800,
    height: 600,
	parent:mainWindow
  })
  
  // and load the index.html of the app.
  login.loadFile('login.html')

  // Emitted when the window is closed.
  login.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    login = null
  })
  
    login.webContents.openDevTools()
  
  
  
}



//--- ON MESSAGE --//
ipcMain.on('entry-accepted', (event, arg) => {
	global.accountType = arg;
	login.hide()
    createMainWindow()
})


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createLoginWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
<<<<<<< Updated upstream
  if (mainWindow === null) createWindow()
=======
  if (mainWindow === null) {
    createMainWindow()
  }
>>>>>>> Stashed changes
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
