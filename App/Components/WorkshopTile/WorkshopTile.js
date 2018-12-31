import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components'
import * as Animatable from 'react-native-animatable'
import {Container, AlignRight, Description, Speaker, Row, Title, TalkInfo, ImageContainer, RoundedImage} from '../CardCommon'
import {scaleOnPress} from '../ScaleOnPress'

const WorkshopContainer = styled(Container)`
  height: 150px;
`

const makeSpeakersText = (speakers) =>
  speakers && speakers.length > 0 ? speakers.map(a => a.name).join('\n') : ''

const getImage = (speakers) => (
  speakers && speakers.length > 0
    ? speakers.map(speaker => <RoundedImage key={speaker.name} source={{uri: `${speaker.image.url}`}} />)
    : null
)

const StyledRow = Animatable.createAnimatableComponent(WorkshopContainer)

class WorkshopTile extends React.Component {
  render () {
    const { item, onPress, onPressIn, onPressOut } = this.props
    const { speakers, title, description } = item
    const image = getImage(speakers)
    return (
      <TouchableWithoutFeedback onPress={onPress} onPressIn={() => onPressIn(this.container)} onPressOut={() => onPressOut(this.container)}>
        <StyledRow ref={ref => { this.container = ref }}>
          <Row>
            <TalkInfo>
              <Title>{ title || 'To be announced' }</Title>
              <Description numberOfLines={5}>{ description || 'To be announced' }</Description>
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

export default scaleOnPress()(WorkshopTile)
