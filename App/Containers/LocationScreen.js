import React, { Component } from 'react'
import { TouchableOpacity, Linking, Platform, ImageBackground, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import MapView, { Marker } from 'react-native-maps'

import { Colors, Fonts } from '../Themes'

const Section = styled.View`
  margin-bottom: 5px;
`

const Text = styled.Text`
  color: ${Colors.ricePaper};
  padding-left: 30;
  padding-right: 30;
  padding-top: 20;
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
  background-color: 'rgba(0,0,0,0)';
`

const Title = styled(Text)`
  color: ${Colors.snow};
  font-size: ${Fonts.size.h4};
  margin-bottom: 10;
`

const Link = styled.Text`
  align-self: flex-end;
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
  color: ${Colors.coal};
  padding: 10px;
`

const WHITE_HALL_LOCATION = {
  latitude: 60.1689293,
  longitude: 24.9517662
}

class MapScreen extends Component {
  openNativeMap = () => {
    const { latitude, longitude } = WHITE_HALL_LOCATION
    const url = Platform.OS === 'ios'
      ? `http://maps.apple.com/?ll=${latitude},${longitude}`
      : `geo:${latitude},${longitude}`

    Linking.canOpenURL(url)
      .then((canOpen) => {
        if (canOpen) {
          Linking.openURL(url)
        }
      })
      .catch(() => {})
  }

  render () {
    return (
      <ScrollView>
        <ImageBackground style={{ flex: 1 }} source={require('../Images/react-finland-background.png')}>
          <Section>
            <Title>The venue</Title>
            <Text>The conference will be held at Valkoinen Sali (White Hall). The venue is right in the center of historical area of Helsinki and it is one of the few ballrooms kept in its original form in Finland. The space fits up to 450 people and there's a separate bar in addition to the main space.</Text>
          </Section>
          <Section>
            <Title>Location</Title>
            <MapView
              style={{ width: '100%', height: 300 }}
              onRegionChangeComplete={() => {this.marker && this.marker.showCallout && this.marker.showCallout()}}
              scrollEnabled={false}
              rotateEnabled={false}
              zoomEnabled={false}
              initialRegion={{
                ...WHITE_HALL_LOCATION,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0221,
              }}
            >
              <TouchableOpacity onPress={this.openNativeMap}>
                <Link>Directions</Link>
              </TouchableOpacity>
              <Marker
                coordinate={WHITE_HALL_LOCATION}
                title='White Hall'
                description='Aleksanterinkatu 16-18, 00170 Helsinki'
                ref={ref => this.marker = ref}
              />
            </MapView>
          </Section>
          <Section>
            <Title>How to get there</Title>
            <Text>There's a direct train from the airport to Helsinki center. HSL operates the local public transport system. You can find a city bike system as well.</Text>
          </Section>
        </ImageBackground>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectSession: (session) => dispatch(ScheduleActions.selectSession(session))
})

const mapStateToProps = ({schedule}) => ({
  data: schedule.data
})

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
