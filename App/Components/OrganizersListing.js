import React from 'react'
import styled from 'styled-components/native'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import OrganizerCard from './OrganizerCard'
import { View } from 'react-native'

const FlatList = styled.FlatList`
  background-color: transparent;
`
const getOrganizers = gql`
{
  conference(id: "react-finland-2019") {
    organizers {
      name
      about
      image {
        url
      }
      social {
        twitter
        homepage
        github
        linkedin
      }
    }
  }
}
`
export default class OrganizersListing extends React.Component {
  renderOrganizerCard ({ item }) {
    const { name, image, about, social: { homepage, twitter, github, linkedin } } = item
    console.tron.log(image)
    return <OrganizerCard
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
      <Query query={getOrganizers}>
      {({ loading, error, data }) => {
        // TODO show loading and error component
        if (loading) return <View />;
        if (error) return <View />;
        const {conference: { organizers }} = data
        return (
        <FlatList
          keyExtractor={(item) => item.name}
          data={organizers}
          renderItem={this.renderOrganizerCard}
        />
        )}}
      </Query>
    )
  }
}

