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

class ThursdayScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Thursday'
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

export default connect(mapStateToProps)(ThursdayScreen)
