import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    primaryNav: require('./PrimaryNavigationRedux').reducer,
    scheduleNav: require('./ScheduleNavigationRedux').reducer,
    schedule: require('./ScheduleRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
