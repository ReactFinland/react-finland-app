import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { NavigationActions } from 'react-navigation'

const mapSpeakersToSchedule = (schedule, speakers) => {
  return schedule.map(s => {
    return {...s, author: speakers[s.author]}
  })
}

const fullSchedule = mapSpeakersToSchedule(
  require('../Fixtures/schedule.json').schedule,
  require('../Fixtures/schedule.json').speakers
)

const wednesdaySchedule = fullSchedule.filter((s) => true)
const thursdaySchedule = fullSchedule.filter((s) => false)

export const INITIAL_STATE = Immutable({
  schedule: wednesdaySchedule
})

/* ------------- Reducers ------------- */

const updateSchedule = (state, { routeName }) => {
  if (routeName === 'WednesdayScreen') {
    return state.setIn(['schedule'], wednesdaySchedule)
  } else if (routeName === 'ThursdayScreen') {
    return state.setIn(['schedule'], thursdaySchedule)
  } else {
    return state
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [NavigationActions.NAVIGATE]: updateSchedule
})
