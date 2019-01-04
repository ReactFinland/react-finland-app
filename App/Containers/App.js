import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'

import ApolloClient from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist';
import { AsyncStorage } from 'react-native';
import { ApolloProvider } from "react-apollo";

import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from '../Sagas/fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});
/* ------------- API ------------- */
// TODO: add client cache
const cache = new InMemoryCache({fragmentMatcher})
persistCache({
  cache,
  storage: AsyncStorage,
});
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.react-finland.fi/graphql' }),
  cache
})
// create our store
const store = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <RootContainer />
        </ApolloProvider>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
