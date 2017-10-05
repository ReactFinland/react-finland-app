import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import TalkCard from './TalkCard'

class DefaultStory extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
        <TalkCard
          author={'Toni Ristola'}
          picture={'https://avatars3.githubusercontent.com/u/538833?v=4&s=460'}
          title={'Talk test'}
          time={'to be revealed'}
        />
      </View>
    )
  }
}
storiesOf('TalkCard')
  .add('Default', () => <DefaultStory/>)
