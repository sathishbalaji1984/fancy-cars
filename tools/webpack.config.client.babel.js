import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

module.exports = {
  resolve: {
    alias: {
      common: path.resolve('client/common'),
      assets: path.resolve('client/assets'),
      test: path.resolve('test'),
      home: path.resolve('client/home'),
      navigation: path.resolve('client/navigation'),
      config: path.resolve('config'),
    },
  },
  name: 'CLIENT',
  target: 'web',
  entry: {
    client: ['./client/polyfill.js', './client/index.js'],
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'client/[name].bundle.js',
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
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'client/[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([
      { from: 'client/assets/images', to: 'client/images' },
    ]),
    new UglifyJsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
};
