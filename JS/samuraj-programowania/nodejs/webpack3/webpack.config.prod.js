const path = require('path');
// import path from 'path';

const buildDirName = 'build-prod';
const filename = 'index.js';

module.exports = {
    mode: 'production', 
    entry: './src/entry.js',
    output: {
        filename: filename,
        // path: `${__dirname}/${buildDirName}`,
        path: path.resolve(__dirname, buildDirName), // proper way
    }

}