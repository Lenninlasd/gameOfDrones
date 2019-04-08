const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { modules: true, camelCase: true } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_HOST': JSON.stringify(process.env.BASE_HOST),
      'process.env.PORT': JSON.stringify(process.env.PORT)
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[chunkhash:8].css',
      chunkFilename: 'styles/[name].[chunkhash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html'
    })
  ]
};
