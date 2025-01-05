# stock-code-identification-app
stock-code-identification-app 是一款基于electron实现电脑屏幕区域股票编号识别桌面插件应用。

![image](https://github.com/user-attachments/assets/6044eb1f-7580-4b26-9781-81f8ffc81334)

# 基于屏幕坐标位置定位区域识别

![image](https://github.com/user-attachments/assets/e9558faf-ac10-465e-ab66-f3d93a6f9943)

# 运行程序
```bash
npm run start
```
# 打包程序 installer.exe

打包可安装执行文件 package.json 配置信息

```json
{
    "version": "1.0.0",
    "description": "股票代码识别电脑应用软件",
    "author": "边缘骇客编程实验室",
    "name": "stock-code-identification-app",
    "scripts": {
        "start": "chcp 65001 && electron .",
        "pack": "electron-builder --win --x64"
    },
    "build": {
        "appId": "EdgeHaker-IDing-WeChat",
        "productName": "股票代码识别电脑应用软件",
        "extraFiles": [
            {
                "from": "./assets",
                "to": "./assets"
            },
            {
                "from": "./eng.traineddata",
                "to": "./eng.traineddata"
            },
            {
                "from": "./screen.png",
                "to": "./screen.png"
            },
            {
                "from": "./EdgeHackerScreenshot.exe",
                "to": "./EdgeHackerScreenshot.exe"
            },
            {
                "from": "./icon.ico",
                "to": "./icon.ico"
            }
        ],
        "directories": {
            "output": "build"
        },
        "win": {
            "target": "nsis",
            "icon": "./icon.ico"
        },
        "nsis": {
            "oneClick": false,
            "allowToChangeInstallationDirectory": true,
            "createDesktopShortcut": "always",
            "createStartMenuShortcut": true,
            "shortcutName": "股票代码识别电脑应用软件",
            "license": "LICENSE.txt",
            "uninstallDisplayName": "股票代码识别电脑应用软件"
        }
    },
    "nsis": {
        "oneClick": false,
        "createDesktopShortcut": true,
        "createStartMenuShortcut": true
    },
    "dependencies": {
        "axios": "^1.6.2",
        "clipboardy": "^4.0.0",
        "dotenv": "^16.3.1",
        "moment": "^2.29.4",
        "node-notifier": "^10.0.1",
        "node-schedule": "^2.1.1",
        "tesseract.js": "^5.0.3",
        "uuid": "^9.0.1",
        "validator": "^13.11.0"
    },
    "devDependencies": {
        "electron": "^27.0.4"
    }
}
```
打包命令 cmd 脚本
```
npm run pack
```

许可证模板
```
上海预醒网络科技有限公司
机器猫主题桌面宠物 用户许可协议

重要提示：在使用 机器猫主题桌面宠物 软件之前，请仔细阅读并确保您理解以下条款和条件。如果您不同意这些条款，请勿使用该软件。

1. 授权范围
上海预醒网络科技有限公司（以下简称“我司”）授予您有限的、非排他性的、非转让的许可，以使用 机器猫主题桌面宠物 软件（以下简称“软件”）。

2. 软件用途
请务必在法律允许的范围内使用软件，并遵守相关法律法规，使用者任何违规违法行为将于我司无关，请自行承担责任。

3. 用户责任
在使用软件的过程中，您不得恶意倒卖或者违规出售软件，我司将追究您侵权赔偿。若其他任何因此产生的法律后果由用户自行承担，与我司无关。

4. 免责声明
软件按“现状”提供，我司不提供任何明示或暗示的保证，包括但不限于适销性、特定用途适用性和非侵权性。

5. 其他条款
本协议并非详尽无遗，我司保留根据实际情况随时修改协议的权利。修改后的协议将在软件更新后生效。

6. 协议终止
如果您违反本协议的任何条款，我司有权立即终止您的软件许可，而无需提前通知。

请注意，通过使用本软件，即表示您同意遵守以上条款和条件。如果您有任何疑问或疑虑，请联系我司获取进一步的解释。

上海预醒网络科技有限公司
日期：2025 年 01 月 01 日
```
