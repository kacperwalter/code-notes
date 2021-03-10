const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const webpackConfig = {
    mode: 'development',
    entry: {
        main: './src/app.js',
    },
    output: {
        filename: '[contenthash:6].main.js',
        path: path.resolve(__dirname, '../', 'build'),
    },
    module: {
        rules: [
            {
                 test: /\.txt$/,
                use: 'raw-loader'
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/template.html"
        }),  
    ],
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '..', 'public'),
        port: 8080,
    }
};

module.exports = webpackConfig;