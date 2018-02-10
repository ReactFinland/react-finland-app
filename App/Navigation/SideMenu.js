import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, TouchableHighlight} from 'react-native'
import { DrawerItems } from 'react-navigation'
import styled from 'styled-components/native'
import { Fonts, Colors, Metrics } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'


const BackgroundImage = styled.ImageBackground`
  flex: 1;
  width: ${props => props.width};
`
const LogoImage = styled.ImageBackground`
  flex: 1;
  margin-bottom: 0px;
  margin-top: -10px;
  width: ${props => props.width};
  height: ${props => props.height};
`
const Headline = styled.Text`
  color: ${Colors.snow};
  padding-left: 15;
  padding-right: 30;
  font-size: ${Fonts.size.h5};
  font-family: ${Fonts.type.bold};
  background-color: 'rgba(0,0,0,0)';
`
const Wrapper =  styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  padding-top: 10px;
`
const TouchableWithMargin = styled.TouchableWithoutFeedback`
`

export default class SideMenu extends Component {
  render () {
    const { props } = this
    const { navigation } = props
    return (
      <BackgroundImage width={250} source={require('../Images/react-finland-background.png')} >
        <View>
        <ScrollView style={{backgroundColor: 'transparent'}}>
          <Wrapper>
            <View style={{width: 150, height: 100}}>
            <LogoImage resizeMode={'contain'} height={100} width={200} source={require('../Images/rf-logo-white-with-text.png')} />
            </View>
            <TouchableHighlight underlayColor="rgba(0, 0, 0,0.0)" activeOpacity={0.5} onPress={() => navigation.navigate('DrawerClose')}>
              <Icon style={{backgroundColor: 'transparent'}} name='times' color='rgba(255,255,255, 0.5)' size={Metrics.icons.small} />
            </TouchableHighlight>
          </Wrapper>
          <DrawerItems {...props} />
        </ScrollView>
        </View>
      </BackgroundImage>
    )
  }
}
