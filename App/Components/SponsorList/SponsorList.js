import React from 'react'
import { View, WebView, ScrollView, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { Fonts } from '../../Themes'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'

export const GoldImage = styled.Image`
 height: 100px;
 width: 140;
`

export const BronzeWrapper = styled.View`
 padding-left: 10px;
 padding-right: 10px;
 background-color: black;
`

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`
export const SponsorContainer = styled.View`
  flex: 1; 
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`

export const Text = styled.Text`
  color: ${props => props.textcolor};
  padding-top: 20;
  padding-left: 20;
  padding-bottom: 15px;
  padding-right: 30;
  text-align: center;
  font-size: ${Fonts.size.h3};
  font-family: ${Fonts.type.base};
`
const firstHtml = '<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>html, body { margin:0; padding:0; overflow:hidden } svg { position:fixed; top:0; left:0; height:100%; width:100% }</style></head><body>'
const lastHtml = '</body></html>'

class SponsorList extends React.Component {
  render () {
    const {height, width} = Dimensions.get('window');
    return (
      <BackgroundImage rexizeMode='cover' source={require('../../Images/react-finland-background.png')} >
      <View style={{flex:1, backgroundColor: 'rgba(0,0,0, 0.1)'}}>
        <SponsorContainer>
          <ScrollView style={{ alignContent: 'center'}}>   
          <View style={{alignItems: 'center', flexDirection: 'column',margin: 10, padding: 10, borderRadius: 22, backgroundColor: 'rgba(255,255,255, 0.1)'}}>
            <Text textcolor={'gold'}>Gold</Text>
            { this.props.gold.map((i, index) => (
                i.image.url.endsWith('svg')
                ? <WebView
                  key={index}
                  style={[{  width: width/1.5, height: 100, backgroundColor: 'transparent' }]}
                  scrollEnabled={false}
                  source={{ html: `${firstHtml}<img height="100%" width="100%" src="${i.image.url}" />${lastHtml}` }} />
                : <GoldImage resizeMode='contain' key={index} source={{uri: i.image.url}} />
                )
              )}
            </View>
            
            <View style={{alignItems: 'center', flexDirection: 'column',margin: 10, padding: 10, borderRadius: 22, backgroundColor: 'rgba(255,255,255, 0.1)'}}>
            <Text textcolor='silver'>Silver</Text>
            { this.props.silver.map((i, index) => (
                i.image.url.endsWith('svg')
                ? <WebView
                  key={index}
                  style={[{  width: width/1.5, height: 100, backgroundColor: 'transparent' }]}
                  scrollEnabled={false}
                  source={{ html: `${firstHtml}<img height="100%" width="100%" src="${i.image.url}" />${lastHtml}` }} />
                : <GoldImage resizeMode='contain' key={index} source={{uri: i.image.url}} />
                )
              )}
            </View>
            
            <View style={{alignItems: 'center', flexDirection: 'column',margin: 10, padding: 10, borderRadius: 22, backgroundColor: 'rgba(255,255,255, 0.1)'}}>
              <Text textcolor='white' >Bronze</Text>
              { this.props.bronze.map((i, index) => (
                i.image.url.endsWith('svg')
                ? <WebView
                  key={index}
                  style={[{  width: width/1.5, height: 100, backgroundColor: 'transparent' }]}
                  scrollEnabled={false}
                  source={{ html: `${firstHtml}<img height="100%" width="100%" src="${i.image.url}" />${lastHtml}` }} />
                : <GoldImage resizeMode='contain' key={index} source={{uri: i.image.url}} />
                )
              )}
            </View>
          </ScrollView>
        </SponsorContainer>
        </View>
      </BackgroundImage>
    )
  }
}
const mapStateToProps = ({sponsors}) => ({
  gold:  pathOr([], ['data', 'goldSponsors'], sponsors),
  silver:  pathOr([], ['data', 'silverSponsors'], sponsors),
  bronze:  pathOr([], ['data', 'bronzeSponsors'], sponsors)
})
export default connect(mapStateToProps)(SponsorList)