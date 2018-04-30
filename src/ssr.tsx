import { Request, Response } from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './config/store';
import App from './App';
import View from './components/View';

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';

export default function serverRenderer() {
  return (req: Request, res: Response) => {
    const context = {};
    const store = configureStore();

    const html = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${View.getTitle()}</title>
      ${IS_PROD ? `<link rel="stylesheet" href="/styles.css">` : ''}
      <script defer src="/fontawesome-all.min.js"></script>
    </head>
    <body>
      <div id="root">${html}</div>
      <div id="modal-root"><h1>Hey</h1></div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
      </script>
      <script src="/build.js"></script>
    </body>
    </html>    
    `);
  };
}
