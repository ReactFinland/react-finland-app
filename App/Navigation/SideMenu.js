import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, ScrollView, TouchableHighlight } from 'react-native'
import { DrawerItems } from 'react-navigation'
import styled from 'styled-components/native'
import { Metrics, Fonts } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`

const LogoImage = styled.ImageBackground`
  flex: 1;
  margin-bottom: 0px;
  margin-top: -10px;
  width: ${props => props.width};
  height: ${props => props.height};
`
export const GoldImage = styled.Image`
 margin-left: 20px;
 height: 50px;
 width: 100;
`
export const SilverImage = styled.Image`
 margin-left: 15px;
 height: 50px;
 width: 65;
`
export const BronzeImage = styled.Image`
 margin-left: 20px;
 height: 25px;
 width: 50;
`
export const VerkkisImage = styled.Image`
 margin-left: 60px;
 margin-top: 5px;
 height: 20px;
 width: 150;
`
const Text = styled.Text`
  color: ${props => props.textcolor};
  text-align: center;
  padding-left: 20;
  padding-bottom: 5px;
  padding-right: 30;
  font-size: ${Fonts.size.small};
  font-family: ${Fonts.type.base};
`
const AllSponsorsLink = styled.Text`
  color: ${props => props.textcolor};
  text-align: center;
  padding-left: 20;
  padding-bottom: 5px;
  padding-top: 10;
  padding-right: 30;
  font-size: ${Fonts.size.medium};
  font-family: ${Fonts.type.base};
`
const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  
  padding-right: 10px;
  padding-top: 10px;
`

export default class SideMenu extends Component {
  render () {
    const { props } = this
    const { navigation } = props
    return (
      <BackgroundImage resizeMode='cover' source={require('../Images/graphql-background.png')} >
        <ScrollView>
          <Wrapper>
            <View style={{width: 150, height: 100}}>
              <LogoImage resizeMode={'contain'} height={100} width={200} source={require('../Images/graphql_logo.png')} />
            </View>
            <TouchableHighlight underlayColor='rgba(0, 0, 0,0.0)' activeOpacity={0.5} onPress={() => navigation.navigate('DrawerClose')}>
              <Icon style={{backgroundColor: 'transparent'}} name='times' color='rgba(255,255,255, 0.5)' size={Metrics.icons.small} />
            </TouchableHighlight>
          </Wrapper>
          <DrawerItems {...props} />
        </ScrollView>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text textcolor={'#ffd700'}>Gold Sponsors</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        </View>
        <TouchableHighlight underlayColor='rgba(0, 0, 0,0.0)' onPress={() => navigation.navigate('Sponsors')}>
          <AllSponsorsLink textcolor={'white'}>All Sponsors</AllSponsorsLink>
        </TouchableHighlight>
      </BackgroundImage>
    )
  }
}
