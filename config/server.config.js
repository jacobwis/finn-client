require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';
const API_URL = process.env.API_URL | 'http://localhost:3001';

module.exports = {
  entry: path.resolve(__dirname, '../src', 'ssr.tsx'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  name: 'server',
  output: {
    filename: 'ssr.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
      'process.env.API_URL': JSON.stringify(API_URL)
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  target: 'node'
};
