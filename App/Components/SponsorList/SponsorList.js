import React from 'react'
import { View, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { Fonts } from '../../Themes'

export const GoldImage = styled.Image`
 margin-left: 10px;
 height: 50px;
 width: 150;
`
export const SilverImage = styled.Image`
 margin-left: 20px;
 height: 50px;
 width: 75;
`
export const BronzeImage = styled.Image`
 margin-left: 20px;
 height: 25px;
 width: 50;
`
export const VerkkisImage = styled.Image`
 margin-top: 5px;
 height: 20px;
 width: 150;
`
const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`

const Text = styled.Text`
  color: ${props => props.textcolor};
  padding-left: 20;
  padding-bottom: 15px;
  padding-right: 30;
  padding-top: 50;
  text-align: center;
  font-size: ${Fonts.size.h5};
  font-family: ${Fonts.type.base};
`

class AboutText extends React.Component {
  render () {
    return (
      <BackgroundImage rexizeMode='cover' source={require('../../Images/react-finland-background.png')} >
        <ScrollView>
          <Text textcolor={'#ffd700'}>Gold Sponsors</Text>
          <View style={{flexDirection: 'row'}}>
            <GoldImage resizeMode='contain' source={require('../../Images/gofore.png')} />
            <GoldImage resizeMode='contain' source={require('../../Images/solita.png')} />
          </View>
          <Text textcolor='#c0c0c0'>Silver</Text>
          <View style={{flexDirection: 'row'}}>
            <SilverImage resizeMode='contain' source={require('../../Images/elisa.png')} />
            <SilverImage resizeMode='contain' source={require('../../Images/nitor.png')} />
            <SilverImage resizeMode='contain' source={require('../../Images/motley.png')} />
          </View>
          <Text textcolor='#CD7F32' >Bronze</Text>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <BronzeImage resizeMode='contain' source={require('../../Images/alma.png')} />
            <BronzeImage resizeMode='contain' source={require('../../Images/geniem.png')} />
            <BronzeImage resizeMode='contain' source={require('../../Images/rohea.png')} />
          </View>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <VerkkisImage resizeMode='contain' source={require('../../Images/verkkokauppa.png')} />
          </View>
        </ScrollView>
      </BackgroundImage>
    )
  }
}

export default AboutText
