const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

module.exports = {
    context: ROOT,

    entry: {
        'index': './index.ts'
    },

    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                exclude: [ /node_modules/ ]
            }
        ]
    },
    devServer: {
        contentBase: __dirname + "/src/",
        inline: true,
    },
    devtool: 'inline-source-map'
}