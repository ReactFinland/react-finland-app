import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import TalkCard from './TalkCard'

const data = {
  'begin': '13:00',
  'end': '14:00',
  'speakers': [
    {
      'name': 'Christian Alfoni',
      'about': 'Christian has been crunching JavaScript for about 8 years. In the recent years open source and writing articles has become a passion. Throwing bad and not so bad ideas out there to see what is valuable to people. Author of Cerebral, created Webpackbin and JSBlog... amongst other things.',
      'photo': 'christian.jpg',
      'homepage': 'http://www.christianalfoni.com/',
      'twitter': 'christianalfoni',
      'github': 'christianalfoni'
    },
    {
      'name': 'Christian Alfoni',
      'about': 'Christian has been crunching JavaScript for about 8 years. In the recent years open source and writing articles has become a passion. Throwing bad and not so bad ideas out there to see what is valuable to people. Author of Cerebral, created Webpackbin and JSBlog... amongst other things.',
      'photo': 'christian.jpg',
      'homepage': 'http://www.christianalfoni.com/',
      'twitter': 'christianalfoni',
      'github': 'christianalfoni'
    }
  ],
  'title': 'Declarative state and side effects',
  'description': 'Writing declarative code for our UIs is so common that we do not even think about it. But when it comes to writing logic for managing state and side effects it requires a lot of discipline to get the same benefits. We are going to talk about how we can get help writing our business logic in a declarative manner and see what benefits it gives us.'
}

class DefaultStory extends React.Component {
  render () {
    return (
      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
        <TalkCard
          speakers={data.speakers}
          picture={'https://avatars3.githubusercontent.com/u/538833?v=4&s=460'}
          title={data.title}
          begin={data.begin}
          end={data.end}
        />
      </View>
    )
  }
}
storiesOf('TalkCard')
  .add('Default', () => <DefaultStory />)
