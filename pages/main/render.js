const ipcRenderer = require("electron").ipcRenderer;
const { execSync } = require('child_process');
let dir = process.cwd();
const path = require('path')

new Vue({
    el: '#app',
    data: {
        X1: "",
        Y1: "",
        X2: "",
        Y2: "",
        content: "",
        state: false,
        image: path.join(dir, 'assets', 'blank.png'),
        copyTip: "复制股票编号置于剪贴板",
        copyState: true
    },
    methods: {
        TestDir() {
            execSync('start chrome https://space.bilibili.com/3537110885730658')
        },
        CloseApp() {
            ipcRenderer.send("close-app")
        },
        MiniApp() {
            ipcRenderer.send("resize-app")
        },
        Restart() {
            if (this.X1 && this.X2 && this.Y1 && this.Y2 && this.X1 < this.X2 && this.Y1 < this.Y2) {
                this.state = true
                this.content = "检测股票编号中······"
                ipcRenderer.send("start", { X1: this.X1, Y1: this.Y1, X2: this.X2, Y2: this.Y2 })
            }
        },
        CopyBoard() {
            if (this.copyState && this.content != "检测股票编号中······") {
                this.copyState = false
                navigator.clipboard.writeText(this.content)
                    .then(() => {
                        this.copyTip = "复制成功"
                        setTimeout(() => {
                            this.copyTip = "复制股票编号置于剪贴板"
                            this.copyState = true
                        }, 1000)
                    })
                    .catch(err => {
                        this.copyTip = "复制错误"
                    });
            }

        }
    },
    mounted() {
        ipcRenderer.on('update', (event, param) => {
            this.content = "股票解析结果：" + param.text
            this.image = path.join(dir, 'screen.png') + '?' + new Date().getTime()
        })
    }
})