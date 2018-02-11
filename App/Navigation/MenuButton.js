import React from 'react'
import { TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const MenuButton = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <Icon
      style={{
        paddingRight: 10, paddingTop: 2, color: 'black', paddingBottom: 10, backgroundColor: 'rgba(0,0,0,0)'
      }}
      size={20}
      name='bars'
    />
  </TouchableHighlight>
)

export default MenuButton
