const {app, BrowserWindow} = require("electron")
function createWindow(){
  const win = new BrowserWindow({
    minWidth:1100,
    width: 1200, 
    height: 650,
    webPreferences: {devTools: false},
  })
  win.loadURL("http://localhost:3000"),
  win.removeMenu()
}

app.on("ready",createWindow)


//app.whenReady().then(createWindow)