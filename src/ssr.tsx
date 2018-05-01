import { Request, Response } from 'express';
import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import App from './App';
import View from './components/View';

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';
const API_URL = process.env.API_URL || 'http://localhost:3000';

export default function serverRenderer() {
  return async (req: Request, res: Response) => {
    const context = {};
    const client = initApolloClient({
      cookie: req.header('cookie')
    });

    const html = await renderToStringWithData(
      <ApolloProvider client={client}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </ApolloProvider>
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
      <div id="modal-root"></div>
      <script>
        window.__APOLLO_STATE__=${JSON.stringify(client.extract())}
      </script>      
      <script src="/build.js"></script>
    </body>
    </html>    
    `);
  };
}

const initApolloClient = (headers: { [key: string]: any }) => {
  const link = createHttpLink({
    uri: `${API_URL}/graphql`,
    credentials: 'same-origin',
    headers
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode: true,
    link
  });

  return client;
};
