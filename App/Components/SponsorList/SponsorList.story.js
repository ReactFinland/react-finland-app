import React from 'react'
import { storiesOf } from '@storybook/react-native'

import SponsorList from './SponsorList'
class DefaultStory extends React.Component {
  render () {
    return (
      <SponsorList />
    )
  }
}
storiesOf('SponsorList')
  .add('Default', () => <DefaultStory />)
