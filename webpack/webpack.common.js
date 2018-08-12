const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'client/', 'index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: '/build',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    // alias: {
    //   Utilities: path.resolve(__dirname, 'client/utils'),
    // }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '..', 'client')
        ],
        use: [
          'babel-loader',
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(
      path.resolve(__dirname, '..', 'build/*.*'),
      { exclude: ['data.json'] }
    ),
  ],
};