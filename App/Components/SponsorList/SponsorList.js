import React from 'react'
import { View, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { Fonts } from '../../Themes'

export const GoldImage = styled.Image`
 height: 50px;
 width: 140;
`
export const AlmaImage = styled.Image`
 margin-left: 0px;
 height: 30px;
 width: 75;
`

export const SilverImage = styled.Image`
 height: 50px;
 width: 80;
`
export const BronzeImage = styled.Image`
 margin-left: 20px;
 height: 35px;
 width: 65;
`
export const VerkkokauppaImage = styled.Image`
 margin-top: 15px;
 height: 20px;
 width: 150;
`
export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`
export const SponsorContainer = styled.View`
  margin: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: rgba(255, 255, 255, 0.3);
`

export const Text = styled.Text`
  color: ${props => props.textcolor};
  padding-left: 20;
  padding-bottom: 15px;
  padding-right: 30;
  text-align: center;
  font-size: ${Fonts.size.h5};
  font-family: ${Fonts.type.base};
`

class AboutText extends React.Component {
  render () {
    return (
      <BackgroundImage rexizeMode='cover' source={require('../../Images/react-finland-background.png')} >
        <ScrollView>
          <SponsorContainer>
            <Text textcolor={'#ffd700'}>Gold</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <GoldImage resizeMode='contain' source={require('../../Images/gofore.png')} />
              <GoldImage resizeMode='contain' source={require('../../Images/solita.png')} />
            </View>
          </SponsorContainer>
          <SponsorContainer>
            <Text textcolor='#c0c0c0'>Silver</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <SilverImage resizeMode='contain' source={require('../../Images/elisa.png')} />
              <SilverImage resizeMode='contain' source={require('../../Images/nitor.png')} />
              <SilverImage resizeMode='contain' source={require('../../Images/motley.png')} />
            </View>
          </SponsorContainer>
          <SponsorContainer>

            <Text textcolor='#CD7F32' >Bronze</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <AlmaImage resizeMode='contain' source={require('../../Images/alma.png')} />
              <BronzeImage resizeMode='contain' source={require('../../Images/geniem.png')} />
              <BronzeImage resizeMode='contain' source={require('../../Images/rohea.png')} />
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <VerkkokauppaImage resizeMode='contain' source={require('../../Images/verkkokauppa.png')} />
            </View>
          </SponsorContainer>
        </ScrollView>
      </BackgroundImage>
    )
  }
}

export default AboutText
