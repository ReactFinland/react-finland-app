import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ReactFinlandLogo from './ReactFinlandLogo'

class DefaultStory extends React.Component {
  render () {
    return (
      <ReactFinlandLogo width={50} height={50} />
    )
  }
}
storiesOf('ReactFinlandLogo')
  .add('Default', () => <DefaultStory />)
storiesOf('ReactFinlandLogo')
  .add('Default', () => (
    <ReactFinlandLogo width={50} height={50} />
  ))
