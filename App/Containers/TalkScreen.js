import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

import ScheduleActions from '../Redux/ScheduleRedux'
import TalkListing from '../Components/TalkListing'
import { Colors, Metrics } from '../Themes'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  padding-bottom: 0;
  flex: 1;
`

class TalkScreen extends Component {
  render () {
    let { schedule, navigation, selectSession } = this.props
    return (
      <Screen>
        <TalkListing
          data={schedule}
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
  schedule: schedule.schedule
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkScreen)
