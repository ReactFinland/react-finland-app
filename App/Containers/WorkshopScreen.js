import React, { Component } from 'react'
import styled from 'styled-components/native'

import { Colors, Fonts, Metrics } from '../Themes'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  padding-bottom: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  font-size: ${Fonts.size.regular};
  color: ${Colors.text};
`

class WorkshopScreen extends Component {
  render () {
    return (
      <Screen>
        <Text>Placeholder for workshops</Text>
      </Screen>
    )
  }
}

export default WorkshopScreen
