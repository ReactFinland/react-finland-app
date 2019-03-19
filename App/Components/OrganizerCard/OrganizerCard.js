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
        <SocialLink link={homepage} />
        <SocialLink link={linkedin} />
        <SocialLink link={twitter} />
        <SocialLink link={github} />
      </Social>
    </Container>
  )
}

export default OrganizerCard
