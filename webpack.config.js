const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app:['babel-polyfill',path.join(__dirname, './src/main.js'),]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename : 'bundle.js'
  },
  devServer: {
    open: true,
    port: 3000,
    contentBase: 'src',
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename:'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'scss-loader'] },
      { test: /\.(ttf|eot|woff|woff2|svg)/, use: 'url-loader' },
      { test: /\.(jpg|jpeg|png|gif)$/, use: 'url-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test:/\.vue$/, use:'vue-loader' }
    ]
  },
  resolve: {
    alias: {
      // 'vue$':'vue/dist/vue.esm.js'
    }
  }
}
