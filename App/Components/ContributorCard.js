import React from 'react'
import styled from 'styled-components/native'

import { Fonts, Colors } from '../Themes'

const Container = styled.View`
  background-color: ${Colors.snow};
`

const Row = styled.View`
  flex-direction: row;
`

const Author = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h6};
  font-family: ${Fonts.type.bold};
`

const TalkInfo = styled.View`
  flex: 7;
  justify-content: center;
  padding-left: 15;
`

const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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

const ContributorCard = (props) => {
  const { author, picture } = props
  return (
    <Container>
      <Row>
        <TalkInfo>
          <Author>{ author }</Author>
        </TalkInfo>
        <ImageContainer>
          <RoundedImage source={{uri: picture}} />
        </ImageContainer>
      </Row>
    </Container>
  )
}

export default ContributorCard
