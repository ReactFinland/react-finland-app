import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {Container, AlignRight, Speaker, Row, Title, TalkInfo, ImageContainer, RoundedImage} from '../CardCommon'

const makeSpeakersText = (speakers) =>
  speakers && speakers.length > 0 ? speakers.map(a => a.name).join('\n') : ''

const getImage = (speakers) => (
  speakers && speakers.length > 0
    ? speakers.map(speaker => <RoundedImage key={speaker.name} source={{uri: `https://api.react-finland.fi/graphql-2018/images/${speaker.image}`}} />)
    : null
)

const StyledRow = Animatable.createAnimatableComponent(Container)

class WorkshopTile extends React.Component {
  state = {
    opening: false
  }
  onPressIn = () => {
    this.container.transition({ scale: 1.0 }, { scale: 0.95 }, 300)
  }

  onPressOut = () => {
    this.container.transitionTo({ scale: 1.0 }, 300)
  }
  onPress = () => {
    const { opening } = this.state
    const { onPress } = this.props
    if (opening) return

    this.setState({opening: true})

    setTimeout(() => onPress(), 200)

    setTimeout(() => this.setState({opening: false}), 600)
  }

  render () {
    const { item } = this.props
    const { speakers, title } = item
    const image = getImage(speakers)
    return (
      <TouchableWithoutFeedback onPress={this.onPress} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
        <StyledRow ref={ref => { this.container = ref }}>
          <Row>
            <TalkInfo>
              <Title>{ title || 'To be announced' }</Title>
            </TalkInfo>
            { image ? <ImageContainer>{ image }</ImageContainer> : null }
          </Row>
          <AlignRight>
            <Speaker>{ makeSpeakersText(speakers) }</Speaker>
          </AlignRight>
        </StyledRow>
      </TouchableWithoutFeedback>
    )
  }
}

export default WorkshopTile
