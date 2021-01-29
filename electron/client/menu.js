const { Menu } = require("electron")

function initMenu() {
	const template = [
		...(process.platform === "darwin"
			? [
					{
						label: "Ego",
						submenu: [
							{
								label: "偏好设置",
								role: "services"
							},
							{
								type: "separator"
							},
							{
								label: "隐藏",
								role: "hide"
							},
							{
								label: "显示",
								role: "unhide"
							},
							{
								type: "separator"
							},
							{
								label: "退出",
								role: "quit"
							}
						]
					}
			  ]
			: [])
	]

	const menu = Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu)
}

module.exports = { initMenu }
