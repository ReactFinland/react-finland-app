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
  onPressIn = () => {
    this.container.transition({ scale: 1.0 }, { scale: 0.95 }, 300)
  }

  onPressOut = () => {
    this.container.transitionTo({ scale: 1.0 }, 300)
  }

  render () {
    const { item, onPress } = this.props
    const { speakers, title } = item
    const image = getImage(speakers)
    return (
      <TouchableWithoutFeedback onPress={onPress} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
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
