import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const mapSpeakersToSchedule = (schedule, speakers) => {
  return schedule.map(s => {
    return {...s, author: speakers[s.author]}
  })
}
export const INITIAL_STATE = Immutable({
  schedule: mapSpeakersToSchedule(
    require('../Fixtures/schedule.json').schedule,
    require('../Fixtures/schedule.json').speakers
  )}
)

export const reducer = createReducer(INITIAL_STATE, {})
