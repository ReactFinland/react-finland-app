import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import SpeakerList from './SpeakerList'
import { Colors, Fonts, Metrics } from '../../Themes'
import Icon from 'react-native-vector-icons/EvilIcons'

const Container = styled.ScrollView`
  background-color: ${Colors.snow};
  padding: ${Metrics.doubleBaseMargin}px;
`

const Top = styled.View`
  padding: ${Metrics.doubleBaseMargin}px;
`

const Bottom = styled.View`
  padding: ${Metrics.doubleBaseMargin}px;
`
const TopRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`
const Title = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h3};
  font-family: ${Fonts.type.bold};
  text-align: center;
`

const Description = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.regular};
`

const TalkDetail = ({ title, description, speakers, navigation }) => (
  <Container>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <TopRow>
        <Icon size={24} name='arrow-left' />
        <Description>Back</Description>
      </TopRow>
    </TouchableOpacity>
    <Top>
      <Title>{title}</Title>
    </Top>
    {speakers && <SpeakerList speakers={speakers} />}
    <Bottom>
      <Description>{description}</Description>
    </Bottom>
  </Container>
)

export default TalkDetail
