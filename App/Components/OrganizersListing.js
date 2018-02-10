import React from 'react'
import styled from 'styled-components/native'

import OrganizerCard from './OrganizerCard'

const FlatList = styled.FlatList`
  margin-top: 10px;
  background-color: transparent;
`

const Separator = styled.View`
  margin: 1px;
  background-color: transparent
`

export default class OrganizersListing extends React.Component {
  renderOrganizerCard ({ item }) {
    const { name, image, about, social: { homepage, twitter, github, linkedin } } = item
    return <OrganizerCard
      author={name}
      picture={`https://api.react-finland.fi/graphql-2018/images/${image}`}
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
        ItemSeparatorComponent={() => <Separator />}
        data={this.props.data}
        renderItem={this.renderOrganizerCard}
      />
    )
  }
}
