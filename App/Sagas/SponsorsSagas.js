import { put, call } from 'redux-saga/effects'
import gql from 'graphql-tag'

import SponsorsActions from '../Redux/SponsorsRedux'

const getSponsors = {
  query: gql`
{
  conference(id: "react-finland-2019") {
    goldSponsors {
      name
      image {
        url
      }
    }
    silverSponsors {
      name
      image {
        url
      }
    }
    bronzeSponsors {
      name
      image {
        url
      }
    }
  }
}
`
}

export function * updateSponsors (client, action) {
  yield put(SponsorsActions.sponsorsRequest())
  try {
    const {data: {conference: { goldSponsors, silverSponsors, bronzeSponsors }}} = yield call(client.query, getSponsors)
    yield put(SponsorsActions.sponsorsSuccess({ goldSponsors, silverSponsors, bronzeSponsors }))
  } catch (err) {
    yield put(SponsorsActions.sponsorsFailure())
  }
}
