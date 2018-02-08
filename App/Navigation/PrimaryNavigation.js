import React from 'react'
import { View , Text } from 'react-native'
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import AboutScreen from '../Containers/AboutScreen'
import SpeakersScreen from '../Containers/SpeakersScreen'
import TalkDetailsScreen from '../Containers/TalkDetailsScreen'
import ScheduleNavigation from './ScheduleNavigation'
import OrganizersScreen from '../Containers/OrganizersScreen'
import { Colors, Fonts, Metrics } from '../Themes'
import SideMenu from './SideMenu'
const routeConfig = {
  ScheduleScreen: {
   navigationOptions: {
    title: 'Schedule',
   },
   screen: ScheduleNavigation,
  },
  OrganizersScreen: {
    headerMode: 'none',
    screen: OrganizersScreen,
  },
  SpeakersScreen: {    
    screen: SpeakersScreen,
  },
  AboutScreen: {
   screen: AboutScreen,
   navigationOptions: ({ navigation }) => ({
     title: 'About',
     headerStyle: {
       display: 'none',
     }
   })
  }
}

const drawerNavigatorConfig = {
  drawerWidth: 250,
  headerStyle: {
    display: 'none',
  },
  contentOptions: {
    activeTintColor: Colors.snow,
    labelStyle: Fonts.style.h5
  },
  contentComponent: props => (
      <SideMenu {...props} />
  ),
}

// Manifest of possible screens
const PrimaryNav = DrawerNavigator(routeConfig, drawerNavigatorConfig)

// To get the modals work, wrap the main navigator in StackNavigator and
// add the modals in the root navigator as well
const RootNav = StackNavigator({
  Main: {
    screen: PrimaryNav
  },
  TalkDetails: {
    screen: TalkDetailsScreen
  },
  OrganizersScreen: {
    screen: OrganizersScreen
  }
}, {
  headerMode: 'none'
})

export default RootNav
