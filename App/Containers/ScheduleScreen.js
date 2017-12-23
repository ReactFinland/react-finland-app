import React, { Component } from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import ReduxScheduleNavigation from '../Navigation/ReduxScheduleNavigation'
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
        <ReduxScheduleNavigation navigation={this.props.navigation} />
      </Screen>
    )
  }
}

export default ScheduleScreen
