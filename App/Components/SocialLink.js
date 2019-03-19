import React from 'react'
import { Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'
import R from 'ramda'
import { Metrics, Colors } from '../Themes'

// Add margin between elements, this should probably be handled in the parent
// component
const TouchableWithMargin = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
`
const getIcon = R.cond([
    [R.contains('twitter'), R.always('twitter')],
    [R.contains('linkedin'), R.always('linkedin-square')],
    [R.contains('google.com/maps'), R.always('map-marker')],
    [R.contains('github.com'), R.always('github')],
    [R.T, R.always('home')]
  ])

class SocialLink extends React.Component {

  onPress = () => {
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
    const { icon, link, children } = this.props

    if (!link) return null

    return (
      <TouchableWithMargin style={{flexDirection: 'row'}} onPress={this.onPress}>
        <Icon name={getIcon(link)} color={Colors.reactFinlandBlue} size={Metrics.icons.medium} />
        { children }
      </TouchableWithMargin>
    )
  }
}

export default SocialLink
