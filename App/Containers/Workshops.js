import React from 'react'
import { View, SectionList, Text } from 'react-native'
import styles from './Styles/WorkshopsStyle'
import WorkshopTile from '../Components/WorkshopTile'

class Workshops extends React.PureComponent {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem ({section, item}) {
    return (
      <WorkshopTile
        section={section}
        item={item}
        onPress={() => {
          this.props.onSessionSelected(item)
        }}
      />
    )
  }

  renderSectionHeader ({section}) {
    const title = `${section.begin} - ${section.end}`
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.boldLabel}>{title}</Text>
      </View>
    )
  }

  renderEmpty = () => <Text style={styles.label}> - Nothing to See Here - </Text>

  keyExtractor = (item, index) => index

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
          numColumns={2}
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
