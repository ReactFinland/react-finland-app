import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import * as Animatable from 'react-native-animatable'
import styled from 'styled-components/native'
import { Fonts, Colors, Metrics } from '../../Themes'
import R from 'ramda'

const Row = styled.View`
  border-radius: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  justifyContent: flex-start;
  alignItems: flex-start;
  margin: ${Metrics.smallMargin}px;
  backgroundColor: ${Colors.snow};
`
const Headline = styled.Text`
  text-align: left;
  margin-left: 10px;
  margin-top: 5px;
  padding-bottom: 15px;
  padding-right: 65px;
  font-size: ${Fonts.size.h4};
  font-family: ${Fonts.type.bold};
  color: ${Colors.facebook};
`
const Desc = styled.Text`
  font-family: ${Fonts.type.base};
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  color: ${Colors.charcoal};
  padding-bottom: 10px;
`
const ImageContainer = styled.View`
  position: absolute;
  right: 5px;
  top: 5px;
`
const RoundedImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${Colors.grey}
`
const getImage = (speakers) => (
  speakers && speakers.length > 0
  ? <RoundedImage source={{uri: `https://api.react-finland.fi/graphql-2018/images/${speakers[0].image}`}} />
  : null
)

const StyledRow = Animatable.createAnimatableComponent(Row)
class WorkshopTile extends React.Component {
  onPressIn = () => {
    this.container.transition({ scale: 1.0 }, { scale: 1.03 }, 300)
  }

  onPressOut = () => {
    this.container.transitionTo({ scale: 1.0 }, 300)
  }

  render () {
    const { item, onPress } = this.props
    return (
      <TouchableWithoutFeedback onPress={onPress} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
        <StyledRow ref={ref => { this.container = ref }}>
          <Headline numberOfLines={2}>{item && item.title}</Headline>
          <Desc numberOfLines={3}>{item && item.description}</Desc>
          <ImageContainer>
            {getImage(R.pathOr([], ['speakers'], item))}
          </ImageContainer>
        </StyledRow>
      </TouchableWithoutFeedback>
    )
  }
}

export default WorkshopTile
