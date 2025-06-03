const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'frontend', 'src'),
    },
    port: 8080,
    open: true,
  },
  mode: 'development',
};
