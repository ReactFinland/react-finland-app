import React from 'react'
import { Platform, TouchableOpacity, Linking, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { Colors, Fonts } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'

const backIcon = Platform.OS === 'ios' ? 'bars' : 'bars'
const { width } = Dimensions.get('window')

const Back = styled.Text`
  color: ${Colors.snow};
  font-size: ${Fonts.size.h5};
  font-family: ${Fonts.type.base};
  background-color: 'rgba(0,0,0,0)';
`
const TopRow = styled.View`
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: ${props => props.width};
  background-color: ${Colors.reactFinlandBlue};
  flex-direction: row;
  justify-content: space-between;
`

const openUrl = link => Linking.openURL(link).catch(err => {
  console.tron.log(`Failed to open link ${link}`)
  console.tron.log(err)
})
const navigateDrawer = navigate => {
  console.tron.log('open drawer')
}
const MenuBar = ({navigateDrawer}) => (
  <TopRow width={width}>
    <TouchableOpacity style={{height: 30, flexDirection: 'row', justifyContent: 'flex-start'}} onPress={() => navigateDrawer()}>
      <Icon style={{paddingRight: 10,paddingTop: 2, color: Colors.snow, paddingBottom: 10, backgroundColor: 'rgba(0,0,0,0)'}} size={20} name={backIcon} />
      <Back>Menu</Back>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => openUrl('https://ti.to/react-finland/2018')}>
      <Back>Buy Tickets</Back>
    </TouchableOpacity>
  </TopRow>
)
export default MenuBar

