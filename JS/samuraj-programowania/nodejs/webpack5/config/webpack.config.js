const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    plugins : [
        new CleanWebpackPlugin(),
    ]
}

module.exports = webpackConfig;