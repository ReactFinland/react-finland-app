import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import SpeakerList from './SpeakerList'
import { Colors, Fonts, Metrics } from '../../Themes'

const BackgroundImage = styled.ImageBackground`
  flex: 1;
`
const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.snow};
  padding: ${Metrics.baseMargin}px;
  background-color: rgba(0,0,0,0);
  border-radius: 10;
`

const Top = styled.View`
  padding: ${Metrics.doubleBaseMargin}px;
`
const Bottom = styled.View`
  padding: ${Metrics.doubleBaseMargin}px;
`

const Title = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h3};
  font-family: ${Fonts.type.bold};
  text-align: center;
  background-color: rgba(0,0,0,0);
`

const Description = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
  color: ${Colors.snow};
  padding-bottom: ${2 * Metrics.doubleBaseMargin}px;
  background-color: rgba(0,0,0,0);
`

class TalkDetail extends React.Component {
  render () {
    const { title, description, speakers } = this.props
    return (
      <BackgroundImage resizeMode='cover' source={require('../../Images/react-finland-background.png')} >
        <Container>
          <Top>
            <Title>{title}</Title>
          </Top>
          {speakers && <SpeakerList speakers={speakers} />}
          <Bottom>
            <Description>{description}</Description>
          </Bottom>
        </Container>
      </BackgroundImage>
    )
  }
}

export default TalkDetail
