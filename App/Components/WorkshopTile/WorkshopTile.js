import React from 'react'
import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import { Fonts, Colors, Metrics } from '../../Themes'

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
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: ${Fonts.size.h4};
  color: ${Colors.facebook};
`
const Desc = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  color: ${Colors.facebook};
`

const WorkshopTile = ({item, onPress}) => (
  <TouchableHighlight onPress={onPress}>
    <Row>
      <Headline numberOfLines={2}>{item && item.title}</Headline>
      <Desc numberOfLines={3}>{item && item.description}</Desc>
    </Row>
  </TouchableHighlight>
)

export default WorkshopTile
