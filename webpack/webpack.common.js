const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loader = require('./loader/index.js');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js']
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  module: {
    rules: loader
  },
  resolve: {
    alias: {
      'component': path.resolve(__dirname, '../src/component/'),
      'page': path.resolve(__dirname, '../src/page/'),
      'util': path.resolve(__dirname, '../src/util/'),
      'service': path.resolve(__dirname, '../src/service/'),
    }
  },
};
