const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.min.css',
            allChunks: true
        }),
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