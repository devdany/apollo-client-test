import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(gql`
      fragment PostTableItem on Post {
        id
        title
        content
      }
    `)
  })
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);