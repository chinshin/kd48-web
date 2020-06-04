const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'kd48-web-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配.js文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // 将 JS 字符串生成为 style 节点
        }, {
          loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: 'sass-loader', // 将 Sass 编译成 CSS
        }],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  devServer: {
    hot: true, // 热替换
    contentBase: path.join(__dirname, 'dist'), // server文件的根目录
    compress: true, // 开启gzip
    port: 3001, // 端口
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: path.resolve(__dirname, 'dist/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR允许在运行时更新各种模块，而无需进行完全刷新
  ],
  eslint: { // eslint配置文件
    configFile: './.eslintrc.js',
  },
};
