import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'
import styled from 'styled-components/native'
import R from 'ramda'

import {Container, AlignRight, Speaker, Row, Title, TalkInfo, ImageContainer, TimeInfo, RoundedImage, Time} from './CardCommon'

import { Metrics, Colors } from '../Themes'
import { scaleOnPress } from './ScaleOnPress'

const makeSpeakersText = (speakers) =>
  speakers && speakers.length > 0 ? speakers.map(a => a.name).join('\n') : ''

const getImage = (speakers) => (
  speakers && speakers.length > 0
    ? speakers.map(speaker => <RoundedImage key={speaker.name} source={{uri: `${speaker.image.url}`}} />)
    : null
)

const StyledContainer = Animatable.createAnimatableComponent(Container)

class TalkCard extends React.Component {
  get icon () {
    const { session } = this.props
    const { type } = session

    const iconForType = R.cond([
      [R.equals('lightningTalk'), R.always('star-o')],
      [R.equals('keynote'), R.always('lightbulb-o')],
      [R.T, R.always(null)]
    ])

    const icon = iconForType(type)
    return icon
      ? <Icon style={{ marginRight: 5 }} name={icon} color={Colors.background} size={Metrics.icons.small} />
      : null
  }

  render () {
    const { onPress, onPressIn, onPressOut } = this.props
    const { session, begin, end } = this.props
    const { speakers = [], title = '', type } = session

    const image = getImage(speakers)
    return (
      <TouchableWithoutFeedback onPress={() => onPress()} onPressIn={() => onPressIn(this.container)} onPressOut={() => onPressOut(this.container)}>
        <StyledContainer ref={ref => { this.container = ref }}>
          <Row>
            <TalkInfo>
              <Title>{ title || 'To be announced' }</Title>
              <Speaker>{ makeSpeakersText(speakers) }</Speaker>
            </TalkInfo>
            { image ? <ImageContainer>{ image }</ImageContainer> : null }
          </Row>
          <TimeInfo>
          </TimeInfo>
        </StyledContainer>
      </TouchableWithoutFeedback>
    )
  }
}

export default scaleOnPress()(TalkCard)
