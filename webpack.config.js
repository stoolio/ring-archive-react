var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js/index'
  ],
  output: {
    path: path.join(__dirname, './public/js'),
    filename: 'app.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&includePaths[]=' + (path.resolve(__dirname, './node_modules/zurb-foundation-5/scss'))
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'js')
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  }
};
