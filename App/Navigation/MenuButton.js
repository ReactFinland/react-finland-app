import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'

import { Colors, Metrics, Fonts } from '../Themes'

const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 10;
`

const Link = styled.Text`
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
  color: ${Colors.reactFinlandBlue}
`

const MenuButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon
      style={{
        paddingRight: 5
      }}
      size={Metrics.icons.small}
      color={Colors.reactFinlandBlue}
      name='bars'
    />
    <Link>Menu</Link>
  </TouchableOpacity>
)

export default MenuButton
