const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/entry.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../', 'build'),
    }
}