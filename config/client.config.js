require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const CSSExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';

const API_URL = process.env.API_URL | 'http://localhost:3001';

module.exports = {
  entry: (() => {
    const entryPoints = [];

    if (!IS_PROD) {
      entryPoints.push('webpack-hot-middleware/client');
    }

    entryPoints.push(path.resolve(__dirname, '..', 'src', 'index.tsx'));

    return entryPoints;
  })(),
  mode: IS_PROD ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: [
          IS_PROD ? CSSExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  name: 'client',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, '..', 'build')
  },
  plugins: (() => {
    const plugins = [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ENV),
        'process.env.API_URL': JSON.stringify(API_URL)
      })
    ];

    if (IS_PROD) {
      plugins.push(
        new CSSExtractPlugin({
          filename: 'styles.css'
        })
      );
    }

    if (!IS_PROD) {
      plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
  })(),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
