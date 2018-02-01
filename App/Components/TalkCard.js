import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'

import { Fonts, Colors, Metrics } from '../Themes'

const Container = styled.View`
  background-color: ${Colors.snow};
  border-radius: 10;
`

const Speaker = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
`

const Row = styled.View`
  flex-direction: row;
`

const Title = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h6};
  font-family: ${Fonts.type.bold}
`

const TalkInfo = styled.View`
  flex: 7;
  padding: 15px;
`

const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 15px;
  padding-top: 5px;
`

const TimeInfo = styled.View`
  background-color: ${Colors.grey};
  padding: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
  align-items: center;
`

const RoundedImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${Colors.grey}
`

const Time = styled.Text`
  font-size: ${Fonts.size.medium};
  font-family: ${Fonts.type.base};
  margin-left: 5px;
`

const makeSpeakersText = (speakers) =>
  speakers && speakers.length > 0 ? speakers.map(a => a.name).join(' & ') : ''

const getImage = (speakers) => (
  speakers && speakers.length > 0
  ? <RoundedImage source={{uri: `https://api.react-finland.fi/graphql-2018/images/${speakers[0].image}`}} />
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
    const { speakers = [], title='' } = session
    if(title.toLowerCase().indexOf('breakfast') > -1) {
      return <View />
    }
    if(title.toLowerCase().indexOf('lunch') > -1) {
      return <View />
    }
    if(title.toLowerCase().indexOf('coffee break') > -1) {
      return <View />
    }
    return (
      <TouchableWithoutFeedback onPress={onPress} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
        <StyledContainer ref={ref => { this.container = ref }}>
          <Row>
            <TalkInfo>
              <Speaker>{ makeSpeakersText(speakers) }</Speaker>
              <Title>{ title }</Title>
            </TalkInfo>
            <ImageContainer>
              { getImage(speakers) }
            </ImageContainer>
          </Row>
          <TimeInfo>
            <Icon name='clock-o' size={Metrics.icons.small} />
            <Time>{ begin } - { end }</Time>
          </TimeInfo>
        </StyledContainer>
      </TouchableWithoutFeedback>
    )
  }
}

export default TalkCard
