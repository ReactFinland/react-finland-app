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
  workshops: workshopSchedule,
  selectedSession: null
})

/* ------------- Reducers ------------- */

const selectSession = (state, { session }) =>
  state.setIn(['selectedSession'], session)

export const success = (state, action) => {
  const { payload: data } = action
  return state.merge({ fetching: false, error: null, data })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  ['SCHEDULES_SUCCESS']: success,
  [Types.SELECT_SESSION]: selectSession
})
