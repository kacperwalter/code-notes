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
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name][contenthash:6].[ext]',
                        outputPath: 'images',
                        // publicPath - gdzie mają być szukane zdjęcia
                        // publicPath: '../images',
                }
                }, {
                    // optymalizacja grafik
                    // https://www.npmjs.com/package/image-webpack-loader
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: { 
                            quality: 70,
                            progressive: true,
                        }
                    }
                }],
                
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/templates/template.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
        }),
    ],
};

module.exports = webpackConfig;