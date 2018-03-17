import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import WorkshopScreen from '../Containers/WorkshopScreen'
import AboutScreen from '../Containers/AboutScreen'
import { Colors, Fonts } from '../Themes'
import BuyTicketsLink from './BuyTicketsLink'
import MenuButton from './MenuButton'
import { headerTitleStyle } from './styles'

const routeConfig = {
  AboutScreenTODO: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'General info'
    }
  },
  LocationScreen: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'Location'
    }
  }
}

const tabNavigatorConfig = {
  // Default config for all screens
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    animationEnabled: true,
    swipeEnabled: false,
    activeTintColor: Colors.snow,
    inactiveTintColor: Colors.coal,
    style: {
      backgroundColor: Colors.reactFinlandBlue,
      paddingBottom: 15
    },
    labelStyle: {
      fontFamily: Fonts.type.base,
      fontSize: Fonts.size.medium
    }
  }
}

const AboutTabNav = TabNavigator(routeConfig, tabNavigatorConfig)

const AboutStack = StackNavigator({
  AboutScreen: {
    screen: AboutTabNav,
    navigationOptions: ({ navigation }) => {
      return {
        headerRight: <BuyTicketsLink />,
        headerLeft: <MenuButton onPress={() => navigation.navigate('DrawerOpen')} />,
        title: 'About',
        headerTitleStyle
      }
    }
  }
})

export default AboutStack
