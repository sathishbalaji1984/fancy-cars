import path from 'path';

module.exports = {
  resolve: {
    alias: {
      config: path.resolve('config'),
    },
  },
  name: 'SERVER',
  target: 'node',
  entry: {
    server: ['babel-polyfill', './server/index.js'],
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'server/[name].bundle.js',
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
