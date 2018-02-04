const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: [
        'babel-polyfill', 
        'react-hot-loader/patch', 
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './App.jsx'],
    devtool: 'evel',//'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});