const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        compress: true,
        port: 3000,
        hot: true,
        publicPath: '/build/'
    }
});