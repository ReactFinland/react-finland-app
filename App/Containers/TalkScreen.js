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
  flex: 1;
`

class TalkScreen extends Component {
  render () {
    let { schedule, navigation } = this.props
    return (
      <Screen>
        <TalkListing
          data={schedule}
          onSessionSelected={(session) => {
            navigation.navigate('TalkDetails', {session: session})
          }}
        />
      </Screen>
    )
  }
}

const mapStateToProps = ({schedule}) => ({
  schedule: schedule.schedule
})

export default connect(mapStateToProps)(TalkScreen)
