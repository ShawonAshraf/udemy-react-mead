const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.(jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      resolve: {
        extensions: ['.jsx ']
      }
    }]
  }
};
