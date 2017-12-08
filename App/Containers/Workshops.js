import React from 'react'
import { View, SectionList, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/WorkshopsStyle'
import WorkshopTile from '../Components/WorkshopTile'

class Workshops extends React.PureComponent {
  state = {
    data: [
      {
        key: '1',
        name: '',
        data: [
          {
            title: 'Style guides in React',
            description: 'Learn to develop style guides',
            speakers: ''
          },
          {
            title: 'ReactVR',
            description: 'Get most out of ReactVR',
            speakers: ''
          },
          {
            title: 'ReasonML',
            description: 'See the reason in ReasonML',
            speakers: ''
          }

        ]
      }, {
        key: '2',
        name: '',
        data: [
          {
            title: 'Universal React',
            description: 'How to develop React in Universal way.',
            speakers: 'Sia Karamalegos.'
          },
          {
            title: 'Webpack the good parts',
            description: 'Learn webpack from one of its core developers',
            speakers: 'Juho Vepsäläinen.'
          }
        ]
      }
    ]
  }

  renderItem ({section, item}) {
    return (
      <WorkshopTile section={section} item={item} />
    )
  }

  // Conditional branching for section headers, also see step 3
  renderSectionHeader ({section}) {
    switch (section.key) {
      default:
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>{section.name}</Text></View>
    }
  }

  renderEmpty = () => <Text style={styles.label}> - Nothing to See Here - </Text>

  keyExtractor = (item, index) => index

  oneScreensWorth = 20
  render () {
    return (
      <View style={styles.container}>
        <SectionList
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.data}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          SectionSeparatorComponent={this.renderSectionSeparator}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workshops)
