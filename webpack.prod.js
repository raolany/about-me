const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true }  },
                        { loader: 'sass-loader', options: { minimize: true } }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.min.css',
            allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/,
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
            compress: {
                warnings: false,
                drop_console: false,
            }
        })
    ]
});