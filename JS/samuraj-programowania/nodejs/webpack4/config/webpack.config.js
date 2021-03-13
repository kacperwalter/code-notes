const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const webpackConfig = {
    mode: 'development',
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
            //    use: ['style-loader', 'css-loader']
               use: [MiniCssExtractPlugin.loader, 'css-loader'], // uzywajac MiniCssExtractPlugin nie potrzebujemy style-loadera
           },
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
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '..', 'public'),
        port: 8080,
    }
};

module.exports = webpackConfig;