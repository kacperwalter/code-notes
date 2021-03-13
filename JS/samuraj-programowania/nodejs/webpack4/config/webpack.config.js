const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const webpackConfig = {
    mode: 'development',
    entry: {
        main: './src/app.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build'),
    },
    module: {
        rules: [
            {
                 test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
               use: ['style-loader', 'css-loader']
           },
           {
                 test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                // do tego musi być zainstalowany dodatkowo node-sass
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: 'file-loader',
            },
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/, // nie transpilujemy node-modules
            },   
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/templates/template.html"
        }),
    ],
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '..', 'public'),
        port: 8080,
    }
};

module.exports = webpackConfig;