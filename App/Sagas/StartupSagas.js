import { put, select, call } from 'redux-saga/effects'
import { is } from 'ramda'
import ApolloClient from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

import SchedulesActions from '../Redux/SchedulesRedux'
import OrganizersActions from '../Redux/OrganizersRedux'
import SpeakersActions from '../Redux/SpeakersRedux'
// exported to make available for tests
export const selectAvatar = (state) => state.github.avatar

// move to App.js
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.react-finland.fi/graphql-2018' }),
  cache: new InMemoryCache()
})
const getAllData = {
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
        about
        image
        keywords
        social {
          twitter
          homepage
          github
          linkedin
        }
      },
      schedules {
        day,
        intervals {
          begin
          end
          sessions {
            title
            description
            speakers {
              name
              about
              image
            }
          }
        }
      },
      tickets {
        name
        link
      }
    }
    `
}

// process STARTUP actions
export function * startup (action) {
  yield put(SchedulesActions.schedulesRequest())
  yield put(OrganizersActions.organizersRequest())
  yield put(SpeakersActions.speakersRequest())
  try {
    const {data: {schedules, organizers, speakers }} = yield call(client.query, getAllData)
    yield put(SchedulesActions.schedulesSuccess(schedules))
    yield put(OrganizersActions.organizersSuccess(organizers))
    yield put(SpeakersActions.speakersSuccess(speakers))
  } catch (err) {
    yield put(SchedulesActions.schedulesFailure())
    yield put(OrganizersActions.organizersFailure())
    yield put(SpeakersActions.speakersFailure())
  }
}
