import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              REACT
              <Text style={{color: 'rgb(0,168,184)'}}>
                {` FINLAND `}
              </Text>
            </Text>

          </View>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              One workshop day + two days of presentations
            </Text>
          </View>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Your chance to learn more about React up
               north
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
