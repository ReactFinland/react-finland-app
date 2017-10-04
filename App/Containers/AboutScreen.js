import React, { Component } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Metrics } from '../Themes'

const Container = styled.View`
  flex: 1;
  justify-content: center;
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
        <Text>About...</Text>
      </Container>
    )
  }
}
