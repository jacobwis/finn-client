import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
});

const cache = new InMemoryCache().restore((window as any).__APOLLO_STATE__);

export const client = new ApolloClient({
  link,
  cache
});
