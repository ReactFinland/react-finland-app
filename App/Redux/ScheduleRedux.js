import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'
import { NavigationActions } from 'react-navigation'
import { isSameDay } from 'date-fns'
import { speakers, schedules, workshops } from '@react-finland/content-2018'

const workshopSchedule = R.pathOr([], ['24-04-2018', 'intervals'], schedules)
const wednesdaySchedule = R.pathOr([], ['25-04-2018', 'intervals'], schedules)
const thursdaySchedule = R.pathOr([], ['26-04-2018', 'intervals'], schedules)

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  selectSession: ['session']
})

export const ScheduleTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  schedule: wednesdaySchedule,
  workshops: workshopSchedule,
  speakers: Object.values(speakers),
  selectedSession: null
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

const selectSession = (state, { session }) =>
  state.setIn(['selectedSession'], session)

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [NavigationActions.NAVIGATE]: updateSchedule,
  [Types.SELECT_SESSION]: selectSession
})
