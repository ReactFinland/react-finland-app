import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Fonts, Colors, Metrics } from '../Themes'

const Container = styled.View`
  background-color: ${Colors.snow};
  border-radius: 10;
`

const Row = styled.View`
  flex-direction: row;
`

const Author = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h6};
  font-family: ${Fonts.type.bold};
`

const About = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.regular};
`

const TalkInfo = styled.View`
  flex: 7;
  justify-content: center;
  padding: 15px;
`

const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-right: 15;
  padding-bottom: 10;
  padding-top: 10;
`

const RoundedImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${Colors.grey}
`

const Social = styled.View`
  background-color: ${Colors.grey};
  padding: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Spacing = styled.View`
  margin-left: 20;
`

const ContributorCard = (props) => {
  const { author, picture, about } = props
  return (
    <Container>
      <Row>
        <TalkInfo>
          <Author>{ author }</Author>
          <About>{ about }</About>
        </TalkInfo>
        <ImageContainer>
          <RoundedImage source={{uri: picture}} />
        </ImageContainer>
      </Row>
      <Social>
        <Icon name='twitter' size={Metrics.icons.medium} />
        <Spacing />
        <Icon name='github' size={Metrics.icons.medium} />
      </Social>
  </Container>
  )
}

export default ContributorCard
