import { put, call } from 'redux-saga/effects'
import gql from 'graphql-tag'

import OrganizersActions from '../Redux/OrganizersRedux'

const getOrganizers = {
  query: gql`
    {
       organizers {
       name
       about
       image
       location {
         country {
           name
           code
         }
        }
        social {
          twitter
          homepage
          github
          linkedin
        }
      }
    }`
}

// process STARTUP actions
export function * updateOrganizers (client, action) {
  yield put(OrganizersActions.organizersRequest())
  try {
    const {data: { organizers }} = yield call(client.query, getOrganizers)
    yield put(OrganizersActions.organizersSuccess(organizers))
  } catch (err) {
    yield put(OrganizersActions.organizersFailure())
  }
}
