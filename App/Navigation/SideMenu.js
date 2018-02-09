import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ScrollView} from 'react-native'
import { DrawerItems } from 'react-navigation'
import styled from 'styled-components/native'
import { Fonts, Colors } from '../Themes'

const BackgroundImage = styled.Image`
  flex: 1;
  width: ${props => props.width};
`
const Headline = styled.Text`
  color: ${Colors.snow};
  padding-left: 15;
  padding-right: 30;
  padding-top: 20;
  padding-bottom: 20;
  font-size: ${Fonts.size.h5};
  font-family: ${Fonts.type.bold};
  background-color: 'rgba(0,0,0,0)';
`

export default class SideMenu extends Component {
  render () {
    const {props} = this
    console.tron.log(props)
    return (
      <BackgroundImage width={250} source={require('../Images/react-finland-background.png')} >
        <ScrollView style={{backgroundColor: 'transparent'}}>
            <Headline>
              React<Text style={{color: Colors.reactFinlandBlue}}>Finland</Text>
            </Headline>
          <DrawerItems {...props} />
        </ScrollView>
      </BackgroundImage>
    )
  }
}
