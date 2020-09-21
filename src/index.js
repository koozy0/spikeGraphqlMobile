import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NativeRouter } from 'react-router-native';
import config from './config';
import BottomNavigation from './components/BottomNavigation';
import Pages from './pages';

const client = new ApolloClient({
  uri: config.apiBaseUri,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NativeRouter>
        <Pages />
        <BottomNavigation />
      </NativeRouter>
    </ApolloProvider>
  );
};

export default App;
