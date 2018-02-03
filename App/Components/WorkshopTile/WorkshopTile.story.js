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
          'speakers': [
            {
              'name': 'Christian Alfoni',
              'about': 'Christian has been crunching JavaScript for about 8 years. In the recent years open source and writing articles has become a passion. Throwing bad and not so bad ideas out there to see what is valuable to people. Author of Cerebral, created Webpackbin and JSBlog... amongst other things.',
              'image': 'christian.jpg',
              'homepage': 'http://www.christianalfoni.com/',
              'twitter': 'christianalfoni',
              'github': 'christianalfoni'
            },
            {
              'name': 'Christian Alfoni',
              'about': 'Christian has been crunching JavaScript for about 8 years. In the recent years open source and writing articles has become a passion. Throwing bad and not so bad ideas out there to see what is valuable to people. Author of Cerebral, created Webpackbin and JSBlog... amongst other things.',
              'image': 'christian.jpg',
              'homepage': 'http://www.christianalfoni.com/',
              'twitter': 'christianalfoni',
              'github': 'christianalfoni'
            }
          ]
        }}
        />
      </View>
    )
  }
}
storiesOf('WorkshopTile')
  .add('Default', () => <DefaultStory />)
