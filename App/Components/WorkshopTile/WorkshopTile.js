import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import * as Animatable from 'react-native-animatable'
import styled from 'styled-components/native'
import { Fonts, Colors } from '../../Themes'

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
  text-align: right;
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

const RoundedImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 25px;
  margin-left: -15px;
`

const makeSpeakersText = (speakers) =>
  speakers && speakers.length > 0 ? speakers.map(a => a.name).join('\n') : ''

const getImage = (speakers) => (
  speakers && speakers.length > 0
    ? speakers.map(speaker => <RoundedImage key={speaker.name} source={{uri: `https://api.react-finland.fi/graphql-2018/images/${speaker.image}`}} />)
    : null
)

const StyledRow = Animatable.createAnimatableComponent(Container)

class WorkshopTile extends React.Component {
  onPressIn = () => {
    this.container.transition({ scale: 1.0 }, { scale: 0.95 }, 300)
  }

  onPressOut = () => {
    this.container.transitionTo({ scale: 1.0 }, 300)
  }

  render () {
    const { item, onPress } = this.props
    const { speakers, title } = item
    return (
      <TouchableWithoutFeedback onPress={onPress} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
        <StyledRow ref={ref => { this.container = ref }}>
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
        </StyledRow>
      </TouchableWithoutFeedback>
    )
  }
}

export default WorkshopTile
