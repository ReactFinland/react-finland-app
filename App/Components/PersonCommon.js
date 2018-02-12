import { Fonts, Colors } from '../Themes'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${Colors.snow};
  border-bottom-color: ${Colors.background};
  border-bottom-width: 1px;
`

export const Row = styled.View`
  flex-direction: row;
`

export const Author = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h6};
  font-family: ${Fonts.type.bold};
`

export const About = styled.Text`
  color: ${Colors.coal};
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
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
  background-color: ${Colors.grey};
  padding: 15px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
