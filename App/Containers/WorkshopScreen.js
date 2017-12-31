import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { Colors, Metrics } from '../Themes'
import Workshops from './Workshops'
import ScheduleActions from '../Redux/ScheduleRedux'
import ScheduleRedux from '../Redux/ScheduleRedux';
import { pathOr } from 'ramda'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  padding-bottom: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
`

class WorkshopScreen extends Component {
  render () {
    const { data, schedule, selectSession, navigation } = this.props
    return (
      <Screen>
        <Workshops
          workshops={pathOr([],['0', 'intervals'], data)}
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
  data: schedule.data,
  schedule: schedule.schedule
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopScreen)
