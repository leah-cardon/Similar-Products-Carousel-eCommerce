const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  watch: true,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: path.join(__dirname, '/client'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};
