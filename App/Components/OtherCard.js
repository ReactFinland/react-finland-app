import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'
import styled from 'styled-components/native'
import R from 'ramda'

import {Container, AlignRight, Speaker, Row, Title, TalkInfo, ImageContainer, TimeInfo, RoundedImage, Time} from './CardCommon'

import { Metrics, Colors } from '../Themes'
import { scaleOnPress } from './ScaleOnPress'

class OtherCard extends React.Component {

  render () {
    const { onPress, onPressIn, onPressOut } = this.props
    const { session, begin, end } = this.props

    return (
        <Container nonopenable >
          <Row>
            <TalkInfo>
              <Title>{ session.title || 'To be announced' }</Title>
            </TalkInfo>
          </Row>
          <AlignRight>
            <Speaker> </Speaker>
          </AlignRight>
          <TimeInfo nonopenable>
          </TimeInfo>
        </Container>
    )
  }
}

export default OtherCard
