import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Colors, Fonts, Metrics } from '../../Themes'
import Icon from 'react-native-vector-icons/Ionicons'

const Back = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h5};
`
const TopRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`
export const BackRow = ({onBack}) => (
    <TouchableOpacity onPress={() => onBack()}>
      <TopRow>
        <Icon style={{paddingRight: 10, paddingBottom: 10}} size={28} name='ios-arrow-round-back' />
        <Back>Back</Back>
      </TopRow>
    </TouchableOpacity>
  )