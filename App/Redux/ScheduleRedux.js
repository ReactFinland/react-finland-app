import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'
import { NavigationActions } from 'react-navigation'
import { isSameDay } from 'date-fns'
import { speakers, schedules } from '@react-finland/content-2018'

const mapSpeakersToSchedule = (schedule, speakers) => {
  return schedule.map(s => {
    return {...s, author: speakers[s.author]}
  })
}

const wednesdaySchedule = R.pathOr([], ['25-04-2018', 'intervals'], schedules)
const thursdaySchedule = R.pathOr([], ['26-04-2018', 'intervals'], schedules)

export const INITIAL_STATE = Immutable({
  schedule: wednesdaySchedule,
  speakers: Object.values(speakers)
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
