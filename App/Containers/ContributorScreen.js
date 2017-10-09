import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import ContributorListing from '../Components/ContributorListing'
import { Colors, Metrics } from '../Themes'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  padding-bottom: 0;
  flex: 1;
`

class ContributorScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Contributors',
    tabBarIcon: ({ tintColor }) =>
      <Icon name='users' size={Metrics.icons.tiny} color={tintColor} />
  }

  render () {
    let { contributors } = this.props
    return (
      <Screen>
        <ContributorListing data={contributors} />
      </Screen>
    )
  }
}

const mapStateToProps = ({ schedule }) => ({
  contributors: schedule.contributors
})

export default connect(mapStateToProps)(ContributorScreen)
