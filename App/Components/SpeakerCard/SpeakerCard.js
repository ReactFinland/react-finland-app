import React from 'react'
import SocialLink from '../SocialLink'
import * as Animatable from 'react-native-animatable'
import { TouchableWithoutFeedback } from 'react-native'

import { Container, Row, SpeakerInfo, Author, About, ImageContainer, RoundedImage, Social } from '../PersonCommon'

const StyledContainer = Animatable.createAnimatableComponent(Container)

class SpeakerCard extends React.Component {
  state = {
    expanded: false
  }
  onPressIn = () => {
    this.container.transition({ scale: 1.0 }, { scale: 0.95 }, 300)
  }

  onPressOut = () => {
    this.container.transitionTo({ scale: 1.0 }, 300)
  }
  render () {
    const { author, picture, about, homepage, twitter, github, linkedin } = this.props
    const { expanded } = this.state
    return (
      <TouchableWithoutFeedback onPress={() => this.setState({expanded: !this.state.expanded})} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
        <StyledContainer ref={ref => { this.container = ref }}>
          <Row>
            <SpeakerInfo>
              <Author>{ author }</Author>
              { expanded
              ? <About>{ about }</About>
              : <About ellipsizeMode='tail' numberOfLines={2}>{ about }</About>

            }

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
        </StyledContainer>
      </TouchableWithoutFeedback>
    )
  }
}

export default SpeakerCard
