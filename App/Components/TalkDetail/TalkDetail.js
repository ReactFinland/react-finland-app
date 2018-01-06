import React from 'react'
import styled from 'styled-components/native'
import SpeakerList from './SpeakerList'
import { Colors, Fonts, Metrics } from '../../Themes'
import { BackRow } from './BackRow'

const Container = styled.ScrollView`
  background-color: ${Colors.snow};
  padding: ${Metrics.doubleBaseMargin}px;
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
`

const Description = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.regular};
`

const TalkDetail = ({ title, description, speakers, navigation }) => (
  <Container>
    <BackRow onBack={navigation.goBack} />
    <Top>
      <Title>{title}</Title>
    </Top>
    {speakers && <SpeakerList speakers={speakers} />}
    <Bottom>
      <Description>{description}</Description>
    </Bottom>
  </Container>
)

export default TalkDetail
