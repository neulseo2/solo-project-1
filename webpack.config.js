const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // {
      //   test: /\.s?css/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
    ],
  },

  mode: 'process.env.NODE_ENV',

  entry: {
    src: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  // devServer: {
  //   static: {
  //     publicPath: '/build',
  //     directory: path.resolve(__dirname, 'build'),
  //   },
  //   proxy: {
  //     '/api': 'http://localhost:3000',
  //   },
  // },
};
