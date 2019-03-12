import React from 'react'
import { View, SectionList, Text, Dimensions,ImageBackground } from 'react-native'

import styles from './Styles/WorkshopsStyle'
import TalkCard from '../Components/TalkCard'
import OtherCard from '../Components/OtherCard'

class Workshops extends React.PureComponent {
  renderItem = ({section, item: session}) => {
    const { width, height } = Dimensions.get('window');
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
    return (
    <TalkCard openable
      onPress={() => { this.props.onSessionSelected(session) }}
      session={session}
    />
    )
  }

  renderSectionHeader ({section}) {
    const title = `${section.begin} - ${section.end} ${section.title ? section.title : ''} `
    const { width } = Dimensions.get('window')
    return (
      <View style={[{width}, styles.sectionHeader]}>
        <Text style={styles.boldLabel}>{title}</Text>
      </View>
    )
  }

  renderEmpty = () => <Text style={styles.label} />

  keyExtractor = (item, index) => `${index}`

  oneScreensWorth = 20

  render () {
    const data = this.props.workshops.map(item => ({
      ...item,
      data: item.sessions
    }))

    return (
      <View style={styles.container}>
        <SectionList
          renderSectionHeader={this.renderSectionHeader}
          sections={data}
          contentContainerStyle={styles.listContent}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
          />
      </View>
    )
  }
}

export default Workshops
