import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import MapView, { Marker } from 'react-native-maps'

import { Colors } from '../Themes'

const Screen = styled.View`
  background-color: ${Colors.reactFinlandBlue};
  flex: 1;
`

class MapScreen extends Component {
  render () {
    return (
      <Screen>
        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: 60.1689293,
            longitude: 24.9517662,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
        >
          <Marker
            coordinate={{ latitude: 60.1689293, longitude: 24.9517662 }}
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
