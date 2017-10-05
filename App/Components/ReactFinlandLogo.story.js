import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ReactFinlandLogo from './ReactFinlandLogo'

storiesOf('ReactFinlandLogo')
  .add('Default', () => (
    <ReactFinlandLogo width={50} height={50} />
  ))
