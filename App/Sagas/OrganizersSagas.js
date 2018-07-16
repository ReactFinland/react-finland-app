import { put, call } from 'redux-saga/effects'
import gql from 'graphql-tag'

import OrganizersActions from '../Redux/OrganizersRedux'

const getOrganizers = {
  query: gql`
{
  conference(id: "graphql-finland-2018") {
    organizers {
      name
      about
      image {
        url
      }
      social {
        twitter
        homepage
        github
        linkedin
      }
    }
  }
}
`
}

export function * updateOrganizers (client, action) {
  yield put(OrganizersActions.organizersRequest())
  try {
    const {data: {conference: { organizers }}} = yield call(client.query, getOrganizers)
    yield put(OrganizersActions.organizersSuccess(organizers))
  } catch (err) {
    yield put(OrganizersActions.organizersFailure())
  }
}
