const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  // be careful when using other loaders that they might pick up the template
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    compress: false,
    port: 8000,
    host: "0.0.0.0",
  },
};
