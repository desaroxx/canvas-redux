const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    path: __dirname,
    filename:'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
