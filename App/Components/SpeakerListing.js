import React from 'react'
import styled from 'styled-components/native'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import SpeakerCard from './SpeakerCard'
import { Colors } from '../Themes'

const FlatList = styled.FlatList`
  background-color: ${Colors.background}
`
const getSpeakers = gql`
{
  conference(id: "react-finland-2019") {
    speakers {
      name
      about
      image {
        url
      }
      social {
        twitter
        github
        homepage
        medium
      }
    }
  }
}`

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
      <Query query={getSpeakers}>
      {({ loading, error, data }) => {
        // TODO show loading and error component
        if (loading) return null;
        if (error) return null;
        const {conference: { speakers }} = data
        return (
        <FlatList
          keyExtractor={(item) => item.name}
          data={speakers}
          renderItem={this.renderSpeakerCard}
        />
        )}}
      </Query>
    )
  }
}
