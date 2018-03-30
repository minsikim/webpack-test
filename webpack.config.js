const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        //must specify it absolute path(build,dist etc)
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    // mode: 'development',
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                // use: ['style-loader', 'css-loader'],
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;