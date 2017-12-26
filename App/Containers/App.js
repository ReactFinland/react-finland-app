import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'

import ApolloClient from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag';

// create our store
const store = createStore()
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.react-finland.fi/graphql-2018' }),
  cache: new InMemoryCache()
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
