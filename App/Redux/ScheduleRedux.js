import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'
import { NavigationActions } from 'react-navigation'
import { isSameDay } from 'date-fns'

const workshopSchedule = []
const wednesdaySchedule = []
const thursdaySchedule = []

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  selectSession: ['session']
})

export const ScheduleTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: false,
  schedule: [],
  workshops: workshopSchedule,
  selectedSession: null
})

/* ------------- Reducers ------------- */

const updateSchedule = (state, { routeName }) => {
  if (routeName === 'WednesdayScreen') {
    return state.setIn(['schedule'], R.pathOr([], ['intervals'], state.data[1]))
  } else if (routeName === 'ThursdayScreen') {
    return state.setIn(['schedule'], R.pathOr([], ['intervals'], state.data[2]))
  } else {
    return state.setIn(['schedule'], R.pathOr([], ['intervals'], state.data[0]))
  }
}

const selectSession = (state, { session }) =>
  state.setIn(['selectedSession'], session)

export const success = (state, action) => {
  const { payload: data } = action
  return state.merge({ fetching: false, error: null, data })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [NavigationActions.NAVIGATE]: updateSchedule,
  ['SCHEDULES_SUCCESS']: success,
  [Types.SELECT_SESSION]: selectSession
})
