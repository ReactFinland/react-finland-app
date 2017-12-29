import { applyMiddleware, createStore, combineReducers, compose } from 'redux'

import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default apollo => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    apollo,
    primaryNav: require('./PrimaryNavigationRedux').reducer,
    scheduleNav: require('./ScheduleNavigationRedux').reducer,
    schedule: require('./ScheduleRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
