import React from 'react'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import AboutScreen from '../Containers/AboutScreen'
import SpeakersScreen from '../Containers/SpeakersScreen'
import ScheduleNavigation from './ScheduleNavigation'
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

export default PrimaryNav
