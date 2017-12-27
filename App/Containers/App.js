import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'

import ApolloClient from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http';
import { ReduxCache, apolloReducer } from 'apollo-cache-redux';
import gql from 'graphql-tag';

// create our store

const store = createStore(apolloReducer)
const cache = new ReduxCache({ store });
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.react-finland.fi/graphql-2018' }),
  cache
})
class App extends Component {
  componentDidMount() {
    console.tron.log('do query')
    client.query({
      query: gql`
      {

        organizers {
          name
          location {
            country {
              name
              code
            }
          }
        }
        speakers {
          name
          keywords
        },
        schedules {
          day,
          intervals {
            begin
            end
            sessions {
              description
            }
          }
        },
        tickets {
          name
          link
        }
      }
      `,
    })
      .then(data => 
        {
          console.tron.log(data)
        }
      )
      .catch(error => console.tron.error(error))

  }

  render () {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </ApolloProvider>

    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
