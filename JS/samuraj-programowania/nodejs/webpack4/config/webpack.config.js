const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/entry.js',  
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
        ]
    }
} 
// 2:54