import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import styled from 'styled-components/native'

import { Images } from '../Themes'
import TalkListing from '../Components/TalkListing'
import { Fonts, Colors, Metrics } from '../Themes'

// TODO: move to redux
const schedule = require('../Fixtures/schedule.json').schedule

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  padding-bottom: 0;
`

export default class ScheduleScreen extends Component {
  render () {
    return (
      <Screen>
        <TalkListing data={schedule} />
      </Screen>
    )
  }
}
