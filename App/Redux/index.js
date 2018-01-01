import { combineReducers } from 'redux'

import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default apollo => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    primaryNav: require('./PrimaryNavigationRedux').reducer,
    schedule: require('./ScheduleRedux').reducer,
    speakers: require('./SpeakersRedux').reducer,
    organizers: require('./OrganizersRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
