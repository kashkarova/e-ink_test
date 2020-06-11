const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

module.exports = {
    context: ROOT,

    entry: {
        'index': './index.html'
    },

    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
                exclude: [ /node_modules/ ]
            }
        ]
    }
}