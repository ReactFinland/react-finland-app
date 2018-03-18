import React from 'react'
import SocialLink from '../SocialLink'
import { Container, Row, SpeakerInfo, Author, About, ImageContainer, RoundedImage, Social } from '../PersonCommon'

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
