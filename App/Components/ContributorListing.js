import React from 'react'
import styled from 'styled-components/native'

import ContributorCard from './ContributorCard'
import { Colors } from '../Themes'

const FlatList = styled.FlatList`
  background-color: ${Colors.background}
`

const Separator = styled.View`
  margin: 5px;
  background-color: ${Colors.background}
`

export default class ContributorListing extends React.Component {
  renderContributorCard ({ item: { name, picture, about } }) {
    return <ContributorCard author={name} picture={picture} about={about} />
  }

  render () {
    return (
      <FlatList
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Separator />}
        data={this.props.data}
        renderItem={this.renderContributorCard.bind(this)}
      />
    )
  }
}
