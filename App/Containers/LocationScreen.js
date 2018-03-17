import React, { Component } from 'react'
import { TouchableOpacity, Linking, Platform } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import MapView, { Marker } from 'react-native-maps'

import { Colors, Fonts } from '../Themes'

const Screen = styled.View`
  background-color: ${Colors.reactFinlandBlue};
  flex: 1;
`

const Link = styled.Text`
  font-size: ${Fonts.size.regular};
  font-family: ${Fonts.type.base};
  color: ${Colors.snow};
  margin: 10px;
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
      <Screen>
        <TouchableOpacity onPress={this.openNativeMap}>
          <Link>Directions</Link>
        </TouchableOpacity>
        <MapView
          style={{ width: '100%', height: '100%' }}
          scrollEnabled={false}
          rotateEnabled={false}
          zoomEnabled
          initialRegion={{
            ...WHITE_HALL_LOCATION,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
        >
          <Marker
            coordinate={WHITE_HALL_LOCATION}
            title='White Hall'
          />
        </MapView>
      </Screen>
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
