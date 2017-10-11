import React from 'react'
import styled from 'styled-components/native'

import SpeakerCard from './SpeakerCard'
import { Colors } from '../Themes'

const FlatList = styled.FlatList`
  background-color: ${Colors.background}
`

const Separator = styled.View`
  margin: 5px;
  background-color: ${Colors.background}
`

export default class SpeakerListing extends React.Component {
  renderSpeakerCard ({ item: { name, picture, about } }) {
    return <SpeakerCard author={name} picture={picture} about={about} />
  }

  render () {
    return (
      <FlatList
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Separator />}
        data={this.props.data}
        renderItem={this.renderSpeakerCard.bind(this)}
      />
    )
  }
}
