const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var BrotliPlugin = require('brotli-webpack-plugin');

const SRC_DIR = path.join(__dirname, './client/index.js');
const PUBLIC_DIR = path.join(__dirname, './docs');

module.exports = {
  entry: SRC_DIR,
  output: {
    path: PUBLIC_DIR,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader']
      },
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sethora',
      favicon: false,
      showErrors: true,
      cache: true,
      template: path.join(__dirname, './client/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
    new BrotliPlugin({
      asset: 'main.js.br',
      test: /\.(js)$/
    })
  ]
};
