import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { Colors } from '../Themes'
import Workshops from './Workshops'
import ScheduleActions from '../Redux/ScheduleRedux'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding-bottom: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
`

class WorkshopScreen extends Component {
  render () {
    const { workshops, selectSession, navigation } = this.props
    return (
      <Screen>
        <Workshops
          workshops={workshops}
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
  workshops: schedule.workshops
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopScreen)
