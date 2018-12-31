import React from 'react'
import styled from 'styled-components/native'

import { Colors, Fonts, Metrics } from '../../Themes'

const Row = styled.View`
  flex: 1;
  flex-direction: row;
`

const Name = styled.Text`
  padding-top: ${Metrics.smallMargin}px;
  color: ${Colors.snow};
  font-family: ${Fonts.type.base};
  font-size: ${Fonts.size.regular};
  text-align: center;
`

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: rgba(0,0,0,0);
`

const RoundedImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${Colors.grey}
`

const SpeakerItem = ({ speaker }) => (
  <Container>
    <RoundedImage source={{uri: speaker.image.url}} />
    <Name>{speaker.name}</Name>
  </Container>
)

const SpeakerList = ({ speakers }) => (
  <Row>
    {speakers.map(speaker => <SpeakerItem key={speaker.name} speaker={speaker} />)}
  </Row>
)

export default SpeakerList
