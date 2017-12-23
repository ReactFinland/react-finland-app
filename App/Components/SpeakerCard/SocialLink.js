import React from 'react'
import { TouchableHighlight, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Metrics, Colors } from '../../Themes'

class SocialLink extends React.Component {
  static Home = (props) => <SocialLink {...props} icon='home' />

  static LinkedIn = (props) => <SocialLink
    {...props}
    link={props.link && `https://www.linkedin.com/in/${props.link}`}
    icon='linkedin-square'
  />

  static GitHub = (props) => <SocialLink
    {...props}
    link={props.link && `https://github.com/${props.link}`}
    icon='github'
  />

  static Twitter = (props) => <SocialLink
    {...props}
    link={props.link && `https://twitter.com/${props.link}`}
    icon='twitter'
  />

  constructor(props) {
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
        })
      }
    })
  }

  render () {
    const { icon, link } = this.props
    return (
      <TouchableHighlight onPress={this.onPress}>
        <Icon name={icon} color={Colors.text} size={Metrics.icons.medium} />
      </TouchableHighlight>
    )
  }
}

export default SocialLink
