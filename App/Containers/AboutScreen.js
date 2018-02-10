import React, { Component } from 'react'
import AboutText from '../Components/AboutText'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuBar from '../Components/MenuBar'

import { Metrics, Colors } from '../Themes'

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  align-items: center;
`

export default class AboutScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: ({ tintColor }) =>
      <Icon name='info-circle' size={Metrics.icons.tiny} color={tintColor} />
  }

  render () {
    return (
      <Container>
        <MenuBar navigateDrawer={() => { this.props.navigation.navigate('DrawerOpen') }} />
        <AboutText navigation={this.props.navigation} />
      </Container>
    )
  }
}
