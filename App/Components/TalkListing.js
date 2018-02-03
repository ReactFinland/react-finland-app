import React from 'react'
import styled from 'styled-components/native'

import TalkCard from './TalkCard'
import { Colors } from '../Themes'

const FlatList = styled.FlatList`
  background-color: ${Colors.background}
`

const Separator = styled.View`
  height: 1px;
  background-color: ${Colors.grey};
  border-left-width: 5px;
  border-left-color: ${Colors.charcoal};
`

export default class TalkListing extends React.Component {
  constructor (props) {
    super(props)

    this.renderInterval = this.renderInterval.bind(this)
  }

  renderInterval ({item: { begin, end, sessions }}) {
    const session = sessions[0]
    return <TalkCard
      onPress={() => { this.props.onSessionSelected(session) }}
      session={session}
      begin={begin}
      end={end}
    />
  }

  render () {
    const hasSessions = ({ sessions }) => sessions && sessions.length > 0
    return (
      <FlatList
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={() => <Separator />}
        data={this.props.data.filter(hasSessions)}
        renderItem={this.renderInterval}
      />
    )
  }
}
