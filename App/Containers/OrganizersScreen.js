import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Colors, Metrics } from '../Themes'
import OrganizersListing from '../Components/OrganizersListing'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  padding-top: ${Metrics.doubleBaseMargin}px;
  padding-bottom: 0;
  flex: 1;
`

class OrganizersScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Organizers',
    tabBarIcon: ({ tintColor }) =>
      <Icon name='users' size={Metrics.icons.tiny} color={tintColor} />
  }

  render () {
    let { data } = this.props
    return (
      <Screen>
        <OrganizersListing data={data} />
      </Screen>
    )
  }
}

const mapStateToProps = ({ organizers: {data} }) => ({
  data
})

export default connect(mapStateToProps)(OrganizersScreen)
