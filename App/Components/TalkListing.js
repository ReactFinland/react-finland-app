import React from 'react'
import styled from 'styled-components/native'

import TalkCard from './TalkCard'
import { Colors } from '../Themes'

const FlatList = styled.FlatList`
  background-color: ${Colors.background}
`

const Separator = styled.View`
  margin: 5px;
  background-color: ${Colors.background}
`

export default class TalkListing extends React.Component {
  renderTalkCard ({ item: { author, title, picture, time }}) {
    return <TalkCard
      author={author}
      picture={picture}
      title={title}
      time={time}
    />
  }

  render () {
    return (
      <FlatList
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <Separator />}
        data={this.props.data}
        renderItem={this.renderTalkCard}
      />
    )
  }
}
