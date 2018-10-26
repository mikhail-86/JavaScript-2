const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Generated',
            filename: 'generated.html'
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
        ],
    devServer: {
        //contentBase: path.join(__dirname, 'dist')
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node-modules/',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                    loader:
                    MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: 'dist/'
                    }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'source-map'
}

module.exports = config;
        