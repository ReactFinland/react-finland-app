import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'

import { Fonts, Colors, Metrics } from '../Themes'

const Container = styled.View`
  background-color: ${Colors.snow};
`

const AlignRight = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 5px;
  padding-bottom: 5px;
`

const Speaker = styled.Text`
  color: ${Colors.charcoal};
  font-size: ${Fonts.size.small};
  font-family: ${Fonts.type.base};
`

const Row = styled.View`
  flex-direction: row;
`

const Title = styled.Text`
  color: black;
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base}
`

const TalkInfo = styled.View`
  flex: 1;
  padding: 15px;
`

const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px 5px;
`

const TimeInfo = styled.View`
  background-color: ${Colors.snow};
  padding: 5px;
  padding-left: 10px;
  position: absolute;
  bottom: 0px;
  left: 5px;
  flex-direction: row;
  align-items: center;
`

const RoundedImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 25px;
  margin-left: -15px;
`

const Time = styled.Text`
  color: ${Colors.charcoal};
  font-size: ${Fonts.size.tiny};
  font-family: ${Fonts.type.base};
  margin-left: 5px;
`

const makeSpeakersText = (speakers) =>
  speakers && speakers.length > 0 ? speakers.map(a => a.name).join('\n') : ''

const getImage = (speakers) => (
  speakers && speakers.length > 0
    ? speakers.map(speaker => <RoundedImage key={speaker.name} source={{uri: `https://api.react-finland.fi/graphql-2018/images/${speaker.image}`}} />)
    : null
)

const StyledContainer = Animatable.createAnimatableComponent(Container)

class TalkCard extends React.Component {
  onPressIn = () => {
    this.container.transition({ scale: 1.0 }, { scale: 0.95 }, 300)
  }

  onPressOut = () => {
    this.container.transitionTo({ scale: 1.0 }, 300)
  }

  render () {
    const { session, begin, end, onPress } = this.props
    const { speakers = [], title = '' } = session
    if (title.toLowerCase().indexOf('breakfast') > -1) {
      return <View />
    }
    if (title.toLowerCase().indexOf('lunch') > -1) {
      return <View />
    }
    if (title.toLowerCase().indexOf('coffee break') > -1) {
      return <View />
    }
    return (
      <TouchableWithoutFeedback onPress={onPress} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
        <StyledContainer ref={ref => { this.container = ref }}>
          <Row>
            <TalkInfo>
              <Title>{ title || 'To be announced' }</Title>
            </TalkInfo>
            <ImageContainer>
              { getImage(speakers) }
            </ImageContainer>
          </Row>
          <AlignRight>
            <Speaker>{ makeSpeakersText(speakers) }</Speaker>
          </AlignRight>
          <TimeInfo>
            <Icon name='clock-o' size={Metrics.icons.tiny} color={Colors.charcoal} />
            <Time>{ begin } - { end }</Time>
          </TimeInfo>
        </StyledContainer>
      </TouchableWithoutFeedback>
    )
  }
}

export default TalkCard
