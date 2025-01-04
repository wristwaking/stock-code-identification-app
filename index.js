const { app, BrowserWindow, ipcMain } = require('electron');
const { config } = require("dotenv");
const path = require('path');
config()
let dir = process.cwd();

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 390,
        height: 350,
        resizable: false,
        frame: false,
        transparent: true,
        titleBarStyle: 'hidden',
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            devTools: true,
            webSecurity: false
        }
    })
    mainWindow.setAlwaysOnTop({ flag: true })
    mainWindow.webContents.loadFile(path.join(__dirname, 'pages', 'main', 'main.html'));
    return mainWindow
}

app.disableHardwareAcceleration()

app.whenReady().then(() => {
    mainWindow = createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('close-app', (event, params) => {
    mainWindow.close()
})

const screenShot = require("./screenShot")
const Tesseract = require('tesseract.js');

ipcMain.on('start', (event, params) => {
    let lock = false
    setInterval(() => {
        if (lock) { return }
        lock = true
        screenShot(params.X1, params.Y1, params.X2, params.Y2, "screen.png").then(res => {
            Tesseract.recognize('screen.png', 'eng', {}).then(({ data: { text } }) => {
                event.sender.send("update", { text });
                lock = false
            }).catch(err => {
                console.error(err);
            });
        }).catch(err => {
            console.log(err)
        })
    }, 5000)
})




