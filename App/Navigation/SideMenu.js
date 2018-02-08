import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ScrollView} from 'react-native'
import { DrawerItems } from 'react-navigation'
import styled from 'styled-components/native'

const BackgroundImage = styled.Image`
  flex: 1;
  width: ${props => props.width};
`

export default class SideMenu extends Component {
  render () {
    const {props} = this
    console.tron.log(props)
    return (
      <BackgroundImage width={250} source={require('../Images/react-finland-background.png')} >
        <ScrollView style={{backgroundColor: 'transparent'}}>
          <DrawerItems style={{color: 'white'}} {...props} />
        </ScrollView>
      </BackgroundImage>
    )
  }
}
