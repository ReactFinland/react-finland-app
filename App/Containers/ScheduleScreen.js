import React, { Component } from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import ScheduleNavigation from '../Navigation/ScheduleNavigation'
import { Metrics } from '../Themes'

const Screen = styled.View`
  flex: 1;
`

class ScheduleScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ tintColor }) =>
      <Icon name='calendar' size={Metrics.icons.tiny} color={tintColor} />
  }

  render () {
    return (
      <Screen>
        <ScheduleNavigation />
      </Screen>
    )
  }
}

export default ScheduleScreen
