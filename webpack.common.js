let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        assetModuleFilename: 'images/[name].[hash].[ext]' // Starting from Webpack 5
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. Injects js with styles into DOM
                    "css-loader", // 2. Turns css into js
                    "sass-loader" // 1. Turns scss into css
                ]
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource", // Starting from Webpack 5
            }
        ]
    }
}