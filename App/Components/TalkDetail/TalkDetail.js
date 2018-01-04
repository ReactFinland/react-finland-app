import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import SpeakerList from './SpeakerList'
import { Colors, Fonts, Metrics } from '../../Themes'
import Icon from 'react-native-vector-icons/Ionicons'

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

const Title = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h3};
  font-family: ${Fonts.type.bold};
  text-align: center;
`
const Back = styled.Text`
color: ${Colors.text};
font-size: ${Fonts.size.h5};
`
const Description = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.regular};
`
const TopRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`

const BackRow = () => (
  <TopRow>
    <Icon style={{paddingRight: 10, paddingBottom: 10}} size={28} name='ios-arrow-round-back' />
    <Back>Back</Back>
  </TopRow>
)

const TalkDetail = ({ title, description, speakers, navigation }) => (
  <Container>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <BackRow />
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
