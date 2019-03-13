import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Fonts, Colors } from '../../Themes'

const TextArea = styled.Text`
  color: ${Colors.ricePaper};
  padding-left: 30;
  padding-right: 30;
  padding-top: 20;
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
  background-color: 'rgba(0,0,0,0)';
`

const Headline = styled.Text`
  color: ${Colors.snow};
  padding-left: 30;
  padding-right: 30;
  padding-top: 20;
  font-size: ${Fonts.size.h1};
  font-family: ${Fonts.type.base};
  background-color: 'rgba(0,0,0,0)';
`

const FinlandText = styled.Text`
  color: ${Colors.reactFinlandBlue}
`

class AboutText extends React.Component {
  render () {
    return (
      <View>
        <Headline>
          REACT<FinlandText>FINLAND</FinlandText>
        </Headline>
        <TextArea>
          React Finland combines the Finnish React community with international flavor. First of its kind in Finland, the event consists of a workshop day and two days of presentations around the topic.
        </TextArea>
        <TextArea>
          In this single track event you will learn more about React and surrounding topics while meeting some of the leading talents of the community.
        </TextArea>
        <TextArea>
          The event will be held between 24th and 26th of April (2019) in Helsinki. In addition to enjoying the event, this is your chance to explore Finland.
        </TextArea>
      </View>
    )
  }
}

export default AboutText
