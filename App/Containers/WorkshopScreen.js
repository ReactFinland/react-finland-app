import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { Colors } from '../Themes'
import Workshops from './Workshops'
import ScheduleActions from '../Redux/ScheduleRedux'
import { pathOr } from 'ramda'
import MenuBar from '../Components/MenuBar'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding-bottom: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
`
const onMenuOpen = navigation => {
  navigation.navigate('OpenDrawer')
}
class WorkshopScreen extends Component {
  render () {
    const { workshops, selectSession, navigation } = this.props
    return (
      <Screen>
        <MenuBar navigateDrawer={navigation => {this.props.navigation.navigate('DrawerOpen')}} />
        <Workshops
          workshops={workshops}
          onMenuOpen={() => {
            selectSession(session)
            navigation.navigate('OpenDrawer')
          }}
          onSessionSelected={(session) => {
            selectSession(session)
            navigation.navigate('TalkDetails')
          }}
        />
      </Screen>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectSession: (session) => dispatch(ScheduleActions.selectSession(session))
})

const mapStateToProps = ({schedule: {data}}) => ({
  workshops: pathOr([], ['0', 'intervals'], data)
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopScreen)
