import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { format as formatTime } from 'date-fns'

import { Fonts, Colors, Metrics } from '../Themes'

const Container = styled.View`
  background-color: ${Colors.snow};
  border-radius: 10;
`

const Author = styled.Text`
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

const TalkCard = (props) => {
  const { author, title, picture, time } = props
  return (
    <Container>
      <Row>
        <TalkInfo>
          <Author>{ author }</Author>
          <Title>{ title }</Title>
        </TalkInfo>
        <ImageContainer>
          <RoundedImage source={{uri: picture}} />
        </ImageContainer>
      </Row>
      <TimeInfo>
        <Icon name='clock-o' size={Metrics.icons.small} />
        <Time>{ formatTime(time, 'HH:mm') }</Time>
      </TimeInfo>
    </Container>
  )
}

export default TalkCard
