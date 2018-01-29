import { takeLatest, all } from 'redux-saga/effects'
import ApolloClient from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { AsyncStorage } from 'react-native';

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
import { navigationChanges } from './NavchangeSagas'
import { persistCache } from 'apollo-cache-persist';


/* ------------- PERSISTING APOLLO CACHE ------------- */
// Overdoing for now, for demonstration purpose

const cache = new InMemoryCache();
persistCache({
  cache,
  storage: AsyncStorage,
});
/* ------------- API ------------- */
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.react-finland.fi/graphql-2018' }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'ignore',
    },
    mutate: {
      errorPolicy: 'ignore'
    }
  }
})

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ScheduleTypes.SCHEDULE_UPDATE, updateSchedule, client),
    takeLatest(OrganizersTypes.ORGANIZERS_UPDATE, updateOrganizers, client),
    takeLatest(SpeakersTypes.SPEAKERS_UPDATE, updateSpeakers, client),
    takeLatest('Navigation/NAVIGATE', navigationChanges)
  ])
}
