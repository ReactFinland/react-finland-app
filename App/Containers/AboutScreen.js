import React, { Component } from 'react'
import { Dimensions, ImageBackground } from 'react-native'

import AboutText from '../Components/AboutText'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Metrics, Colors } from '../Themes'

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.background};
`

export default class AboutScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: ({ tintColor }) =>
      <Icon name='info-circle' size={Metrics.icons.tiny} color={tintColor} />
  }

  constructor (props) {
    super(props)
    const { width, height } = Dimensions.get('window')
    this.state = { width, height }
  }

  onLayout = (e) => {
    const { width, height } = Dimensions.get('window')
    this.setState({ width, height })
  }

  render () {
    const { width, height } = this.state
    return (
      <Container onLayout={this.onLayout}>
        <ImageBackground
          style={{ width, minHeight: height - Metrics.navBarHeight }}
          source={require('../Images/react-finland-background.png')}
        >
          <AboutText />
        </ImageBackground>
      </Container>
    )
  }
}
