import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

import TalkListing from '../Components/TalkListing'
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
    let {schedule} = this.props
    return (
      <Screen>
        <Text>Placeholder for workshops</Text>
      </Screen>
    )
  }
}

const mapStateToProps = ({schedule}) => ({
  schedule: schedule.schedule
})

export default connect(mapStateToProps)(WorkshopScreen)
