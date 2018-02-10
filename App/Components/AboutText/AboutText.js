import React from 'react'
import { Text, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { Fonts, Colors } from '../../Themes'

const Container = styled.ScrollView`
  background-color: ${Colors.background};
`
const DimmenBackground = styled.View`
  flex: 1;
  background-color: 'rgba(0,0,0, 0.2)';
`
const BackgroundImage = styled.Image`
  flex: 1;
  width: ${props => props.width};
`

const TextArea = styled.Text`
  color: ${Colors.ricePaper};
  padding-left: 30;
  padding-right: 30;
  padding-top: 20;
  font-size: ${Fonts.size.h5};
  font-family: ${Fonts.type.base};
  background-color: 'rgba(0,0,0,0)';
`

const Headline = styled.Text`
  color: ${Colors.snow};
  padding-left: 30;
  padding-right: 30;
  padding-top: 20;
  font-size: ${Fonts.size.h1};
  font-family: ${Fonts.type.base};
  background-color: 'rgba(0,0,0,0)';
`

class AboutText extends React.Component {
  constructor (props) {
    super(props)
    const { width } = Dimensions.get('window')
    this.state = { width }
    this.onLayout = this.onLayout.bind(this)
  }
  onLayout (e) {
    const { width } = Dimensions.get('window')
    this.setState({ width })
  }
  render () {
    const { width } = this.state
    return (
      <Container onLayout={this.onLayout}>
        <BackgroundImage width={width} source={require('../../Images/react-finland-background.png')} >
          <DimmenBackground>
            <Headline>
              REACT<Text style={{color: Colors.reactFinlandBlue}}>FINLAND</Text>
            </Headline>
            <TextArea>
              React Finland combines the Finnish React community with international flavor. First of its kind in Finland, the event consists of a workshop day and two days of presentations around the topic.
            </TextArea>
            <TextArea>
              In this single track event you will learn more about React and surrounding topics while meeting some of the leading talents of the community.
            </TextArea>
            <TextArea>
              The event will be held between 24th and 26th of April (2018) in Helsinki. In addition to enjoying the event, this is your chance to explore Finland.
            </TextArea>
          </DimmenBackground>
        </BackgroundImage>
      </Container>
    )
  }
}

AboutText.propTypes = {
}

export default AboutText
