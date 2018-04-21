import React from 'react'
import { Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'

import { Metrics, Colors } from '../Themes'

// Add margin between elements, this should probably be handled in the parent
// component
const TouchableWithMargin = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
`

class SocialLink extends React.Component {
  static Map = (props) => <SocialLink {...props} icon='map-marker' />
  static Home = (props) => <SocialLink {...props} icon='home' />
  static LinkedIn = (props) => <SocialLink {...props} icon='linkedin-square' />
  static GitHub = (props) => <SocialLink {...props} icon='github' />
  static Twitter = (props) => <SocialLink {...props} icon='twitter' />

  constructor (props) {
    super(props)

    this.onPress = this.onPress.bind(this)
  }

  onPress () {
    const { link } = this.props

    if (!link) return

    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link).catch(err => {
          console.error(`Failed to open link ${link}`)
          console.error(err)
        })
      }
    })
  }

  render () {
    const { icon, link } = this.props

    if (!link) return null

    return (
      <TouchableWithMargin onPress={this.onPress}>
        <Icon name={icon} color={Colors.text} size={Metrics.icons.medium} />
      </TouchableWithMargin>
    )
  }
}

export default SocialLink
