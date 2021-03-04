const path = require('path');

module.exports = {
    // ustalamy w jakim mode ma się bundlować development/production
    // mode: 'production',
    mode: 'development',
    entry: './src/entry.js',
    output: {
        filename: 'index.js',
        // path: __dirname + '/dist1', // classic way
        path: path.resolve(__dirname, 'build'); // using path 
    }
};