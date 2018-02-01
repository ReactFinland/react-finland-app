import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

import TalkDetail from '../Components/TalkDetail'
import { Colors, Metrics } from '../Themes'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding-top: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  flex: 1;
  flex-direction: row;
`

class TalkDetailsScreen extends Component {
  render () {
    const { session, navigation } = this.props
    return (
      <Screen>
        <TalkDetail
          title={session.title}
          navigation={navigation}
          description={session.description}
          speakers={session.speakers}
        />
      </Screen>
    )
  }
}

const mapStateToProps = ({ schedule }) => ({
  session: schedule.selectedSession
})

export default connect(mapStateToProps)(TalkDetailsScreen)
