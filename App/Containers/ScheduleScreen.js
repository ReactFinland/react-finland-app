import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import TalkListing from '../Components/TalkListing'
import { Colors, Metrics } from '../Themes'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  padding-bottom: 0;
`

class ScheduleScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ tintColor }) =>
      <Icon name='calendar' size={Metrics.icons.tiny} color={tintColor} />
  }

  render () {
    let {schedule} = this.props
    return (
      <Screen>
        <TalkListing data={schedule} />
      </Screen>
    )
  }
}

const mapStateToProps = ({schedule}) => ({
  schedule: schedule.schedule
})

export default connect(mapStateToProps)(ScheduleScreen)
