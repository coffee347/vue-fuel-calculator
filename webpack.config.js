const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        page: "./app.js",
    },
    output: {
        path: path.resolve(__dirname, 'rtw'),
        filename: '[name].js',
        publicPath: './',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[chunkhash].css",
        }),
        new HtmlWebpackPlugin(),
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm-bundler.js",
        },
        extensions: ["*", ".js", ".vue", ".json", ".scss"],
    },
}