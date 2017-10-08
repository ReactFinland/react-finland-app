import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    primaryNav: require('./PrimaryNavigationRedux').reducer,
    github: require('./GithubRedux').reducer,
    search: require('./SearchRedux').reducer,
    schedule: require('./ScheduleRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
