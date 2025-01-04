const { exec } = require('child_process');


let screenShot = (X1, Y1, X2, Y2, filePath) => {
    const exePath = 'EdgeHackerScreenshot.exe';
    const command = `${exePath} ${X1} ${Y1} ${X2} ${Y2} ${filePath}`;
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error.message)
                return;
            }
            if (stderr) {
                reject(stderr)
                return;
            }
            resolve(stdout)
        });
    })
}

module.exports = screenShot

screenShot(1784, 1049, 1870, 1069, "screen.png").then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})