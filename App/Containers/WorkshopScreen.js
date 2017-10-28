import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Colors, Metrics } from '../Themes'
import Workshops from './Workshops'
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
    return (
      <Screen>
        <Workshops />
      </Screen>
    )
  }
}

export default WorkshopScreen
