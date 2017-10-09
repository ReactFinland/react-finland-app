import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import ScheduleNavigation from './ScheduleNavigation'

// here is our redux-aware our smart component
function ReduxScheduleNavigation (props) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <ScheduleNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.scheduleNav })
export default connect(mapStateToProps)(ReduxScheduleNavigation)
