import { put, call } from 'redux-saga/effects'
import gql from 'graphql-tag'

import ScheduleActions from '../Redux/ScheduleRedux'

const getSchedules = {
  query: gql`
  {
    schedules {
    day,
       intervals {
         begin
         end
         sessions {
           title
           description
           type
           location {
             name,
             city,
             address
           }
           speakers {
             name
             about
             image
           }
         }
       }
     }
   }`
}

// process STARTUP actions
export function * updateSchedule (client, action) {
  yield put(ScheduleActions.scheduleRequest())
  try {
    const { data: { schedules } } = yield call(client.query, getSchedules)
    yield put(ScheduleActions.scheduleSuccess(schedules))
  } catch (err) {
    yield put(ScheduleActions.scheduleFailure())
  }
}
