import { call, put } from 'redux-saga/effects'

import ScheduleActions from '../Redux/ScheduleRedux'
import OrganizersActions from '../Redux/OrganizersRedux'
import SpeakersActions from '../Redux/SpeakersRedux'

export function * navigationChanges (action) {
  const { routeName } = action
  console.tron.log(routeName)
  const schedules = ['WorkshopScreen', 'WednesdayScreen', 'ThursdayScreen']
  if(schedules.indexOf(routeName) > -1) {
    yield put(ScheduleActions.scheduleUpdate())
  }
  if(routeName === 'OrganizersScreen') {
    yield put(OrganizersActions.organizersUpdate())
  }
  if(routeName === 'SpeakersScreen') {
    yield put(SpeakersActions.speakersUpdate())
  } 
}
