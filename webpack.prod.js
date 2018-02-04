const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
        
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: false,
            }
        })
    ]
});