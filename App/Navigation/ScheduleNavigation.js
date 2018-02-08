import React from 'react'
import {View} from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TabNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import WorkshopScreen from '../Containers/WorkshopScreen'
import TalkScreen from '../Containers/TalkScreen'
import { Colors, Fonts } from '../Themes'

const routeConfig = {
  WorkshopScreen: {
    screen: WorkshopScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Tuesday',
    })
  },
  WednesdayScreen: {
    screen: TalkScreen,
    navigationOptions: {
      title: 'Wednesday'
    }
  },
  ThursdayScreen: {
    screen: TalkScreen,
    navigationOptions: {
      title: 'Thursday'
    }
  }
}
// not working property on android
const swipe = Platform.OS === 'ios'

const tabNavigatorConfig = {
  // Default config for all screens
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    animationEnabled: true,
    swipeEnabled: false,
    activeTintColor: Colors.textDark,
    inactiveTintColor: Colors.grey,
    style: {
      backgroundColor: Colors.background,
      paddingBottom: 15
    },
    labelStyle: {
      fontFamily: Fonts.type.base,
      fontSize: Fonts.size.small
    }
  }
}

// Manifest of possible screens
const ScheduleNav = TabNavigator(routeConfig, tabNavigatorConfig)

export default ScheduleNav
