import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

import TalkListing from '../Components/TalkListing'
import { Colors, Metrics } from '../Themes'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  padding-bottom: 0;
`

class ScheduleScreen extends Component {
  render () {
    return (
      <Screen>
        <TalkListing data={this.props.schedule} />
      </Screen>
    )
  }
}

const mapStateToProps = (state) => ({
  schedule: state.schedule.schedule
})

export default connect(mapStateToProps)(ScheduleScreen)
