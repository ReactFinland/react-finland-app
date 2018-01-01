import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  scheduleRequest: ['data'],
  scheduleSuccess: ['payload'],
  selectSession: ['session'],
  scheduleFailure: null
})

export const ScheduleTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: false,
  selectedSession: null
})

/* ------------- Reducers ------------- */

const selectSession = (state, { session }) =>
  state.setIn(['selectedSession'], session)

export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

export const success = (state, action) => {
  const { payload: data } = action
  return state.merge({ fetching: false, error: null, data })
}

export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SCHEDULE_REQUEST]: request,
  [Types.SCHEDULE_SUCCESS]: success,
  [Types.SCHEDULE_FAILURE]: failure,
  [Types.SELECT_SESSION]: selectSession
})
