import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

import TalkDetail from '../Components/TalkDetail'
import { Colors, Metrics } from '../Themes'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin }px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  flex: 1;
  flex-direction: row;
`

class TalkDetailsScreen extends Component {
  render () {
    if (!this.props.navigation.state.params || !this.props.navigation.state.params.session) {
      return null;
    }

    const { session } = this.props.navigation.state.params

    return (
      <Screen>
        <TalkDetail
          title={session.title}
          description={session.description}
          speakers={session.speakers}
        />
      </Screen>
    )
  }
}

// const mapStateToProps = ({schedule}) => ({
//   schedule: schedule.schedule
// })

// export default connect(mapStateToProps)(TalkDetailsScreen)
export default TalkDetailsScreen
