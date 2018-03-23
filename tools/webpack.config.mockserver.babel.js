import path from 'path';

module.exports = {
  resolve: {
    alias: {
      test: path.resolve('test'),
    },
  },
  name: 'SERVER',
  target: 'node',
  entry: {
    mockServer: ['babel-polyfill', './mockServer/index.js'],
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'mockServer/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
