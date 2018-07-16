import React from 'react'
import styled from 'styled-components/native'

import OrganizerCard from './OrganizerCard'

const FlatList = styled.FlatList`
  background-color: transparent;
`

export default class OrganizersListing extends React.Component {
  renderOrganizerCard ({ item }) {
    const { name, image, about, social: { homepage, twitter, github, linkedin } } = item
    console.tron.log(image)
    return <OrganizerCard
      author={name}
      picture={`${image.url}`}
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
        renderItem={this.renderOrganizerCard}
      />
    )
  }
}
