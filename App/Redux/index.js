import { combineReducers } from 'redux'

import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { SponsorContainer } from '../Components/SponsorList/SponsorList';

export default apollo => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    primaryNav: require('./PrimaryNavigationRedux').reducer,
    schedule: require('./ScheduleRedux').reducer,
    speakers: require('./SpeakersRedux').reducer,
    sponsors: require('./SponsorsRedux').reducer,
    organizers: require('./OrganizersRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
