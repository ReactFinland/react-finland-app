import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import WorkshopTile from './WorkshopTile'

class DefaultStory extends React.Component {
  render () {
    return (
      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
        <WorkshopTile item={{
          title: 'Style guides in React',
          description: 'Learn to develop style guides',
          speakers: ''
        }}
        />
      </View>
    )
  }
}
storiesOf('WorkshopTile')
  .add('Default', () => <DefaultStory />)
