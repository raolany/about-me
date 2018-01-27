const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
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