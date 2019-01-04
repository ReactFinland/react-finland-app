import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import styled from 'styled-components/native'

import { Colors, Fonts } from '../Themes'

const Link = styled.Text`
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
  color: ${Colors.reactFinlandBlue}
`

const openUrl = link => Linking.openURL(link).catch(err => {
  console.tron.log(`Failed to open link ${link}`)
  console.tron.log(err)
})

const BuyTicketsLink = () => (
  <TouchableOpacity style={{ marginRight: 10 }} onPress={() => openUrl('https://react-finland.fi/#tickets')}>
    <Link>Buy Tickets</Link>
  </TouchableOpacity>
)

export default BuyTicketsLink
