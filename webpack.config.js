const path = require('path');

module.exports = {
    entry: "./src/server.js",
    target: 'node',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}