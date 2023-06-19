const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. Injects js with styles into DOM
                    "css-loader", // 2. Turns css into js
                    "sass-loader" // 1. Turns scss into css
                ]
            }
        ]
    }
}