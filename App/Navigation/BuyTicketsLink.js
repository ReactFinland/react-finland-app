import React from 'react'
import { TouchableHighlight, Text, Linking } from 'react-native'

const openUrl = link => Linking.openURL(link).catch(err => {
  console.tron.log(`Failed to open link ${link}`)
  console.tron.log(err)
})

const BuyTicketsLink = () => (
  <TouchableHighlight onPress={() => openUrl('https://ti.to/react-finland/2018')}>
    <Text>Buy Tickets</Text>
  </TouchableHighlight>
)

export default BuyTicketsLink
