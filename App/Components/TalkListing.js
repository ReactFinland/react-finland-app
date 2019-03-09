import React from 'react'
import { SectionList, Dimensions,ImageBackground } from 'react-native'
import styled from 'styled-components/native'

import TalkCard from './TalkCard'
import OtherCard from './OtherCard'


import { Colors, Fonts, Metrics } from '../Themes'

const SectionHeaderText = styled.Text`
  color: ${Colors.snow};
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
`

const SectionHeader = styled.View`
  padding: 10px;
  width: ${props => props.width}
  backgroundColor: ${Colors.reactFinlandBlue}
`

export default class TalkListing extends React.Component {
  state = {
    orientation: ''
  }
    _onLayout = () => { // I haven't tried this but I think this or something similar will work
    const { width, height } = Dimensions.get('window');
    if(width > height) {
      this.setState(state => ({ ...state, orientation: 'landscape' }));
    } else {
      this.setState(state => ({ ...state, orientation: 'portrait' }));
    }
  }
  renderSingleSession = ({ item: session }) => {
    const { width, height } = Dimensions.get('window')
    if(session.__typename == 'Break'){
      return <OtherCard
      onPress={() => { this.props.onSessionSelected(session) }}
      session={session}
      begin={session.begin}
      end={session.end}
    />
    }
    if(session.type == 'LUNCH'){
      return       <ImageBackground
      style={{ height: 100, width }}
      source={require('../Images/hermes-rivera-258743-unsplash.jpg')}
    ><OtherCard
      session={session}
      begin={session.begin}
      end={session.end}
    /></ImageBackground>
    }
    if(session.type == 'COFFEE_BREAK'){
      return       <ImageBackground
      style={{ height: 100, width }}
      source={require('../Images/brigitte-tohm-64489-unsplash.jpg')}
    ><OtherCard
      session={session}
      begin={session.begin}
      end={session.end}
    /></ImageBackground>
    }
    return <TalkCard openable
      onPress={() => { this.props.onSessionSelected(session) }}
      session={session}
      begin={session.begin}
      end={session.end}
    />
  }

  render () {
    const dataWithSections = this.props.data.map((interval, index) => {
      const title = interval.sessions.length > 1
        ? interval.sessions[0].title
        : null
      const sessions = interval.sessions.length > 1
        ? interval.sessions.slice(1)
        : interval.sessions

      return {
        data: sessions.map(session => ({
          ...session,
          begin: interval.begin,
          end: interval.end
        })),
        title
      }
    })

    return (
      <SectionList
        onLayout={this._onLayout}
        sections={dataWithSections}
        renderItem={this.renderSingleSession}
        keyExtractor={(item, index) => `list-${index}`}
      />
    )
  }
}
