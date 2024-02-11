const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
    historyApiFallback: true,
    open: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|ico)\?inline$/,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCSSExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

}
