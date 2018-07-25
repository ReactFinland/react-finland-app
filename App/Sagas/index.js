import { takeLatest, all } from 'redux-saga/effects'
import ApolloClient from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ScheduleTypes } from '../Redux/ScheduleRedux'
import { OrganizersTypes } from '../Redux/OrganizersRedux'
import { SpeakersTypes } from '../Redux/SpeakersRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { updateSchedule } from './SchedulesSagas'
import { updateOrganizers } from './OrganizersSagas'
import { updateSpeakers } from './SpeakersSagas'

import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});
/* ------------- API ------------- */
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.react-finland.fi/graphql' }),
  cache: new InMemoryCache({fragmentMatcher})
})
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ScheduleTypes.SCHEDULE_UPDATE, updateSchedule, client),
    takeLatest(OrganizersTypes.ORGANIZERS_UPDATE, updateOrganizers, client),
    takeLatest(SpeakersTypes.SPEAKERS_UPDATE, updateSpeakers, client)
  ])
}
