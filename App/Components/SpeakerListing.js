import React from 'react'
import styled from 'styled-components/native'

import SpeakerCard from './SpeakerCard'
import { Colors } from '../Themes'

const FlatList = styled.FlatList`
  background-color: ${Colors.background}
`

export default class SpeakerListing extends React.Component {
  renderSpeakerCard ({ item }) {
    const { name, image, about, social: { homepage, twitter, github, linkedin } } = item
    return <SpeakerCard
      author={name}
      picture={image.url}
      about={about}
      homepage={homepage}
      twitter={twitter}
      github={github}
      linkedin={linkedin}
    />
  }

  render () {
    return (
      <FlatList
        keyExtractor={(item) => item.name}
        data={this.props.data}
        renderItem={this.renderSpeakerCard}
      />
    )
  }
}
