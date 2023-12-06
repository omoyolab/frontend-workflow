const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postCSSPlugins = [
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("postcss-import"),
    require("postcss-mixins")
];

module.exports = {
    entry: "./app/scripts/App.js",
    output: {
        filename: "bundledScripts.js",
        path: path.resolve(__dirname, "app")
    },
    devServer:{
        watchFiles: ["app/**/*.html"],
        static:{
            directory: path.join(__dirname, "app"),
            watch: false
        },
        hot: true,
        port:3000,
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { url: false } }, { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "stylesOutput.css" 
        })
    ]
};
