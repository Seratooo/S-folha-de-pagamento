const {app, BrowserWindow} = require("electron")
function createWindow(){
  const win = new BrowserWindow({
    minWidth:1100,
    width: 1100, 
    height: 600,
    webPreferences: {devTools: false},
  })
  win.loadURL("http://localhost:3000"),
  win.removeMenu()
}

app.on("ready",createWindow)


//app.whenReady().then(createWindow)