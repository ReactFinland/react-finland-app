import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  schedule: require('../Fixtures/schedule.json').schedule
})

export const reducer = createReducer(INITIAL_STATE, {})
