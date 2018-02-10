import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import SpeakerListing from '../Components/SpeakerListing'
import { Colors, Metrics } from '../Themes'
import MenuBar from '../Components/MenuBar'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding-bottom: 0;
  flex: 1;
`

class SpeakersScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Speakers',
    tabBarIcon: ({ tintColor }) =>
      <Icon name='users' size={Metrics.icons.tiny} color={tintColor} />
  }

  render () {
    let { data, navigation } = this.props
    return (
      <Screen>
        <MenuBar navigateDrawer={() => { navigation.navigate('DrawerOpen') }} />
        <SpeakerListing data={data} />
      </Screen>
    )
  }
}

const mapStateToProps = ({ speakers: {data} }) => ({
  data
})

export default connect(mapStateToProps)(SpeakersScreen)
