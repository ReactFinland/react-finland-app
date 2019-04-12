import React, { Component } from 'react'
import { ImageBackground, ScrollView } from 'react-native'

import AboutText from '../Components/AboutText'

export default class AboutScreen extends Component {
  render () {
    let { navigation } = this.props
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../Images/react-finland-background.png')}
      >
        <ScrollView style={{ flex: 1 }}>
          <AboutText navigation={navigation} />
        </ScrollView>
      </ImageBackground>
    )
  }
}
