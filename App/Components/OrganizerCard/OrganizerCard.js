import React from 'react'
import styled from 'styled-components/native'

import SocialLink from './SocialLink'
import { Fonts, Colors } from '../../Themes'

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

const SpeakerInfo = styled.View`
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

const OrganizerCard = (props) => {
  const { author, picture, about, homepage, twitter, github, linkedin } = props
  return (
    <Container>
      <Row>
        <SpeakerInfo>
          <Author>{ author }</Author>
          <About>{ about }</About>
        </SpeakerInfo>
        <ImageContainer>
          <RoundedImage source={{uri: picture}} />
        </ImageContainer>
      </Row>
      <Social>
        <SocialLink.Home link={homepage} />
        <SocialLink.LinkedIn link={linkedin} />
        <SocialLink.Twitter link={twitter} />
        <SocialLink.GitHub link={github} />
      </Social>
    </Container>
  )
}

export default OrganizerCard
