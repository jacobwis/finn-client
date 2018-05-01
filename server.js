const express = require('express');
const proxy = require('http-proxy-middleware');

const PORT = 3000;
const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';

const app = express();

app.use(express.static('public'));
app.use(
  '/auth',
  proxy({
    target: 'http://localhost:3001',
    changeOrigin: true
  })
);

if (IS_PROD) {
  const serverRenderer = require('./build/ssr').default;

  app.use(express.static('build'));
  app.use(serverRenderer());
} else {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const config = require('./webpack.config');

  const compiler = webpack(config);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: '/',
      serverSideRender: true
    })
  );
  app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on port ${PORT}`);
});
