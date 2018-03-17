import { Fonts, Colors } from '../Themes'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${Colors.snow};
  border-bottom-color: ${Colors.grey};
  border-bottom-width: 1px;
  padding-bottom: 5px;
`

export const Row = styled.View`
  flex-direction: row;
`

export const Author = styled.Text`
  color: black;
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
`

export const About = styled.Text`
  color: ${Colors.charcoal};
  font-size: ${Fonts.size.medium};
  font-family: ${Fonts.type.base};
  padding-top: 5px;
`

export const SpeakerInfo = styled.View`
  flex: 7;
  justify-content: center;
  padding: 15px;
`

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-right: 15;
  padding-bottom: 10;
  padding-top: 10;
`

export const RoundedImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${Colors.grey}
`

export const Social = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
