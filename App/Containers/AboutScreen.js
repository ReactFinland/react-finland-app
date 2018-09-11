import React, { Component } from 'react'
import { ImageBackground, ScrollView } from 'react-native'

import AboutText from '../Components/AboutText'

export default class AboutScreen extends Component {
  render () {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../Images/graphql-background.png')}
      >
        <ScrollView style={{ flex: 1 }}>
          <AboutText />
        </ScrollView>
      </ImageBackground>
    )
  }
}
