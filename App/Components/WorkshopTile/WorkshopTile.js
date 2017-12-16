import React from 'react'
import styled from 'styled-components/native'
import { Fonts, Colors, Metrics } from '../../Themes'

const Row = styled.View`
  border-radius: 10px;
  width: 160;
  height: 160;
  justifyContent: flex-start;
  alignItems: flex-start;
  margin: ${Metrics.smallMargin}px;
  backgroundColor: ${Colors.facebook};
`
const Headline = styled.Text`
  text-align: left;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: ${Fonts.size.h4};
  color: ${Colors.snow};
`
const Desc = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  color: ${Colors.snow};
`

const WorkshopTile = ({section, item}) => (
  <Row>
    <Headline numberOfLines={2}>{item.title}</Headline>
    <Desc numberOfLines={3}>{item.description}</Desc>
  </Row>
)

export default WorkshopTile
