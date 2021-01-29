const electron = require("electron")
const path = require("path")
const isDev = require("electron-is-dev")
const { initMenu } = require("./client/menu")

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
	const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
	mainWindow = new BrowserWindow({
		width,
		height,
		webPreferences: {
			nodeIntegration: true
		}
	})
	mainWindow.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../build/index.html")}`
	)
	if (isDev) {
		// Open the DevTools.
		//BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
		mainWindow.webContents.openDevTools()
	}
  initMenu()
	mainWindow.on("closed", () => (mainWindow = null))
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
	// if (process.platform !== "darwin") {
	app.quit()
	// }
})

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow()
	}
})
