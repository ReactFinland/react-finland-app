import { put, call } from 'redux-saga/effects'
import gql from 'graphql-tag'

import SpeakersActions from '../Redux/SpeakersRedux'

const getSpeakers = {
  query: gql`
{
  conference(id: "graphql-finland-2018") {
    speakers {
      name
      image {
        url
      }
      social {
        twitter
        github
        homepage
        medium
      }
      
    }
  }
}`
}

// process STARTUP actions
export function * updateSpeakers (client, action) {
  yield put(SpeakersActions.speakersRequest())
  try {
    const { data: { conference: { speakers } } } = yield call(client.query, getSpeakers)
    yield put(SpeakersActions.speakersSuccess(speakers))
  } catch (err) {
    yield put(SpeakersActions.speakersFailure())
  }
}
