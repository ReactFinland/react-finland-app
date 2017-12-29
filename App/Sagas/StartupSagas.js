import { put, select } from 'redux-saga/effects'
import { is } from 'ramda'
import ApolloClient from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http';
import { ReduxCache, apolloReducer } from 'apollo-cache-redux';
import gql from 'graphql-tag';

// exported to make available for tests
export const selectAvatar = (state) => state.github.avatar

// process STARTUP actions
export function * startup (action) {
  try {
  const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://api.react-finland.fi/graphql-2018' }),
    cache
  })
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
          
          console.tron.log('data updated')
        }
      )
      .catch(error => console.tron.error(error))
    } catch (err) {
      console.tron.log(err)
    }


  if (__DEV__ && console.tron) {
    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectAvatar
      }
    })
  }
}
