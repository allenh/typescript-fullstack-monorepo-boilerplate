const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development'

const webpackConfig = {
  entry: './src/index.tsx',
  mode: env,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [new HtmlWebPackPlugin({
    template: path.join(__dirname, 'src', 'index.html'),
  })]
};

if (env === 'development') {
  webpackConfig.devServer = {
    compress: false,
    port: 8000,
    host: '0.0.0.0',
  }
}

module.exports = webpackConfig;
