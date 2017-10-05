import React from 'react'
import { Text, View } from 'react-native'

import { Colors } from '../Themes'

const AboutText = (props) => {
  return <View>
    <Text style={{color: Colors.text}}>
      React Finland combines the Finnish React community with international flavor. First of its kind in Finland, the event consists of a workshop day and two days of presentations around the topic.
    </Text>
    <Text style={{color: Colors.text, paddingTop: 10}}>
      In this single track event you will learn more about React and surrounding topics while meeting some of the leading talents of the community.
    </Text>
    <Text style={{color: Colors.text, paddingTop: 10}}>
      The event will be held between 24th and 26th of April (2018) in Helsinki. In addition to enjoying the event, this is your chance to explore Finland.
    </Text>
  </View>
}

AboutText.propTypes = {
}

export default AboutText
