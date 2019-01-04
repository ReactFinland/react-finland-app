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
          GraphQL<FinlandText>FINLAND</FinlandText>
        </Headline>
        <TextArea>
          GraphQL Finland is a community-organized GraphQL conference. The first of its kind in Finland, the event consists of a workshop day and a day of talks around the topic. GraphQL Finland is organized by the same team that brought you React Finland.
        </TextArea>
        <TextArea>
          There are still few GraphQL conferences in the world. However, GraphQL already has an amazing, vibrant community. We wanted to provide a new platform for people to share their GraphQL experience and a new place for people to learn about GraphQL.
        </TextArea>
        <TextArea>
          In this single track event you will learn more about GraphQL and surrounding topics while meeting some of the leading talents of the community. In addition to enjoying the event, this is your chance to explore Finland. It's still relatively warm in October, trust us.
        </TextArea>
      </View>
    )
  }
}

export default AboutText
