import React from 'react'
import styled from 'styled-components/native'
import SocialLink from './SocialLink'
import { Fonts, Colors } from '../../Themes'
import * as Animatable from 'react-native-animatable'
import { TouchableWithoutFeedback } from 'react-native'

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
  color: ${Colors.coal};
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
