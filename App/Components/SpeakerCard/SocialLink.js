import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Metrics, Colors } from '../../Themes'

class SocialLink extends React.Component {
  render () {
    const { icon } = this.props
    return (
      <Icon name={icon} color={Colors.text} size={Metrics.icons.medium} />
    )
  }
}

export default SocialLink
