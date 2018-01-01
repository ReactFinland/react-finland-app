import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import AboutScreen from '../Containers/AboutScreen'
import SpeakersScreen from '../Containers/SpeakersScreen'
import TalkDetailsScreen from '../Containers/TalkDetailsScreen'
import ScheduleNavigation from './ScheduleNavigation'
import OrganizersScreen from '../Containers/OrganizersScreen'
import { Colors, Metrics } from '../Themes'

const routeConfig = {
  ScheduleScreen: {
    screen: ScheduleNavigation,
    navigationOptions: {
      title: 'Schedule',
      tabBarIcon: ({ tintColor }) =>
        <Icon name='calendar' size={Metrics.icons.tiny} color={tintColor} />
    }
  },
  SpeakersScreen: { screen: SpeakersScreen },
  // OrganizersScreen: { screen: OrganizersScreen },
  AboutScreen: { screen: AboutScreen }
}

const tabNavigatorConfig = {
  // Default config for all screens
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: Colors.textDark,
    inactiveTintColor: Colors.grey,
    style: {
      backgroundColor: Colors.coal
    }
  }
}

// Manifest of possible screens
const PrimaryNav = TabNavigator(routeConfig, tabNavigatorConfig)

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
  headerMode: 'none',
  mode: 'modal'
})

export default RootNav
