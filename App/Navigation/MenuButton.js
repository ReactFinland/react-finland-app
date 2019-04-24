import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'

import { Colors, Metrics, Fonts } from '../Themes'

const TouchableOpacity = styled.TouchableOpacity`
  padding-left: 10px
  height: 30px;
  width: 50px;
  flex-direction: row;
  align-items: center;
  margin-left: 10;
`

const MenuButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon
      size={Metrics.icons.small}
      color={Colors.reactFinlandBlue}
      name='bars'
    />
  </TouchableOpacity>
)

export default MenuButton
