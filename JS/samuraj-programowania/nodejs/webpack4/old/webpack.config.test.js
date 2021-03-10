const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.export = {
    mode: 'development',
    entry: {
        main: './src/app.js',
    },
    output: {
        filename: 'main.js',
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
    ],
}

// module.export = webpackConfig;
