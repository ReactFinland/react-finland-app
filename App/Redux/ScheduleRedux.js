import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { NavigationActions } from 'react-navigation'
import { isSameDay } from 'date-fns'

const mapSpeakersToSchedule = (schedule, speakers) => {
  return schedule.map(s => {
    return {...s, author: speakers[s.author]}
  })
}
const speakers = require('../Fixtures/schedule.json').speakers

const fullSchedule = mapSpeakersToSchedule(
  require('../Fixtures/schedule.json').schedule,
  require('../Fixtures/schedule.json').speakers
)

const wednesday = new Date('2017-04-25')
const thursday = new Date('2017-04-26')
const wednesdaySchedule = fullSchedule.filter((s) => isSameDay(wednesday, s.time))
const thursdaySchedule = fullSchedule.filter((s) => isSameDay(thursday, s.time))

export const INITIAL_STATE = Immutable({
  schedule: wednesdaySchedule,
  contributors: Object.values(speakers)
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
