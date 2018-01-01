import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

import ScheduleActions from '../Redux/ScheduleRedux'
import TalkListing from '../Components/TalkListing'
import { Colors, Metrics } from '../Themes'
import { pathOr } from 'ramda'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  padding-bottom: 0;
  flex: 1;
`

class TalkScreenOld extends Component {
  render () {
    let { data, navigation, selectSession } = this.props
    const {state: {routeName}} = navigation
    const mapping = {
      'WednesdayScreen': pathOr([], ['1', 'intervals'], data),
      'ThursdayScreen': pathOr([], ['2', 'intervals'], data)
    }
    return (
      <Screen>
        <TalkListing
          data={pathOr([], [routeName], mapping)}
          onSessionSelected={(session) => {
            selectSession(session)
            navigation.navigate('TalkDetails')
          }}
        />
      </Screen>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectSession: (session) => dispatch(ScheduleActions.selectSession(session))
})

const mapStateToProps = ({schedule}) => ({
  data: schedule.data
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkScreenOld)
