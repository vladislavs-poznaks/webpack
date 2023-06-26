module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    output: {
        assetModuleFilename: 'images/[name].[contenthash].[ext]' // Starting from Webpack 5
    },
    module: {
        rules: [
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