const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        //must specify it absolute path(build,dist etc)
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development'

};

module.exports = config;