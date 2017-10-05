import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import ContributorCard from './ContributorCard'

class DefaultStory extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
        <ContributorCard
          author={'Aleksi Pousar'}
          picture={'https://avatars0.githubusercontent.com/u/4244526?v=4&s=460'}
        />
      </View>
    )
  }
}
storiesOf('ContributorCard')
  .add('Default', () => <DefaultStory/>)