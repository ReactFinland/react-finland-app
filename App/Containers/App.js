import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'

import ApolloClient from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http';

// create our store
const store = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
          <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
