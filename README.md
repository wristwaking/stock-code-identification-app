# stock-code-identification-app
基于electron实现电脑屏幕区域股票编号识别桌面插件应用。

![image](https://github.com/user-attachments/assets/6044eb1f-7580-4b26-9781-81f8ffc81334)

# 基于屏幕坐标位置定位区域识别

![image](https://github.com/user-attachments/assets/e9558faf-ac10-465e-ab66-f3d93a6f9943)

# 运行程序
```bash
npm run start
```
# 打包程序 installer.exe

打包可安装执行文件 package.json 配置信息

```
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
