const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './App.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },  
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins: [
                      'react-hot-loader/babel'
                    ]
                  },
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            core: path.resolve(__dirname, 'src/core/'),
            images: path.resolve(__dirname, 'src/images/'),
            constants: path.resolve(__dirname, 'src/constants/'),
        },
        extensions: [ '.js', '.jsx', '.scss', '.css' ],
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': process.env.NODE_ENV,
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html',
            favicon: 'src/images/favicon.png'
        }),
    ]
}