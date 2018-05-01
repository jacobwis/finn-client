import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { buildClientSchema } from 'graphql';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { ApolloClient } from 'apollo-client';
import { addMockFunctionsToSchema } from 'graphql-tools';

interface Props {
  mockResolvers?: any;
}

const mockApollo: React.StatelessComponent<Props> = ({ children, mockResolvers }) => {
  const introspectionResult = require('../../schema.json');

  const schema = buildClientSchema(introspectionResult);
  addMockFunctionsToSchema({
    schema,
    mocks: {
      ...mockResolvers
    }
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema })
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

mockApollo.defaultProps = {
  mockResolvers: {}
};

export default mockApollo;
