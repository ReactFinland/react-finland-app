import React from 'react'
import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Fonts, Colors, Metrics, Images } from '../Themes'

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

const getImage = (speakers) =>
  speakers && speakers.length > 0 ? Images.speakers[speakers[0].photo] : null

const TalkCard = (props) => {
  const { session, begin, end, onPress } = props
  const { speakers, title } = session
  return (
    <TouchableHighlight onPress={onPress}>
      <Container>
        <Row>
          <TalkInfo>
            <Speaker>{ makeSpeakersText(speakers) }</Speaker>
            <Title>{ title }</Title>
          </TalkInfo>
          <ImageContainer>
            <RoundedImage source={ getImage(speakers) } />
          </ImageContainer>
        </Row>
        <TimeInfo>
          <Icon name='clock-o' size={Metrics.icons.small} />
          <Time>{ begin } - { end }</Time>
        </TimeInfo>
      </Container>
    </TouchableHighlight>
  )
}

export default TalkCard
