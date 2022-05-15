// CommonJS
const path = require('path')
module.exports = {
    mode: "development",
    entry: path.join(__dirname, 'public', 'hello.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'hello.js'
    }
}