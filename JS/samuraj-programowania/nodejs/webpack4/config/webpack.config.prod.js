const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const webpackConfig = {
    mode: 'production',
    entry: {
        main: './src/app.js',
    },
    output: {
        filename: 'js/[contenthash:6].main.js',
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
               use: [MiniCssExtractPlugin.loader, 'css-loader'], // uzywajac MiniCssExtractPlugin nie potrzebujemy style-loadera
           },
           {
                 test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                // do tego musi być zainstalowany dodatkowo node-sass
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/templates/template.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css',
        }),
    ],
};

module.exports = webpackConfig;