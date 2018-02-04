var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    compress: true
}).listen(3000, 'localhost', function (err) {
  if (err) {
      console.log(err);
  }
  console.log(process.env.NODE_ENV, process.env.NODE_ENV === 'development')
  console.log('Listening at localhost:3000');
});