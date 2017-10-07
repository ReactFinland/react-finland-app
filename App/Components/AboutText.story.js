import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AboutText from './AboutText'
class DefaultStory extends React.Component {
  render () {
    return (
      <AboutText />
    )
  }
}
storiesOf('AboutText')
  .add('Default', () => <DefaultStory />)
