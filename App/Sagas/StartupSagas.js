import { put } from 'redux-saga/effects'

import ScheduleActions from '../Redux/ScheduleRedux'
import OrganizersActions from '../Redux/OrganizersRedux'
import SpeakersActions from '../Redux/SpeakersRedux'
import SponsorsActions from '../Redux/SponsorsRedux'

// process STARTUP actions
export function * startup (action) {
  yield put(ScheduleActions.scheduleUpdate())
  yield put(OrganizersActions.organizersUpdate())
  yield put(SpeakersActions.speakersUpdate())
  yield put(SponsorsActions.sponsorsUpdate())

}
