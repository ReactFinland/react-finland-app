import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import SpeakerCard from './SpeakerCard'

class DefaultStory extends React.Component {
  render () {
    return (
      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
        <SpeakerCard
          author={'Aleksi Pousar'}
          picture={'https://avatars0.githubusercontent.com/u/4244526?v=4&s=460'}
          about={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet ipsum sit amet diam dictum sagittis sed at quam.'}
        />
      </View>
    )
  }
}
storiesOf('SpeakerCard')
  .add('Default', () => <DefaultStory />)
