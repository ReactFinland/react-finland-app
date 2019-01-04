import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import WorkshopScreen from '../Containers/WorkshopScreen'
import TalkScreen from '../Containers/TalkScreen'
import TalkDetails from '../Containers/TalkDetailsScreen'
import { Colors, Fonts } from '../Themes'
import BuyTicketsLink from './BuyTicketsLink'
import MenuButton from './MenuButton'
import { headerTitleStyle } from './styles'

const routeConfig = {
  WorkshopScreen: {
    screen: WorkshopScreen,
    navigationOptions: {
      title: 'Workshops'
    }
  },
  ThursdayScreen: {
    screen: TalkScreen,
    navigationOptions: {
      title: 'Thursday'
    }
  },
  FridayScreen: {
    screen: TalkScreen,
    navigationOptions: {
      title: 'Friday' 
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

// Manifest of possible screens
const ScheduleNav = TabNavigator(routeConfig, tabNavigatorConfig)

const ScheduleStack = StackNavigator({
  Schedule: {
    screen: ScheduleNav,
    navigationOptions: ({ navigation }) => {
      return {
        headerRight: <BuyTicketsLink />,
        headerLeft: <MenuButton onPress={() => navigation.navigate('DrawerOpen')} />,
        title: 'Schedule',
        headerTitleStyle
      }
    }
  },
  TalkDetails: {
    screen: TalkDetails,
    navigationOptions: {
      headerRight: <BuyTicketsLink />,
      headerBackTitleStyle: {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.regular,
        color: Colors.reactFinlandBlue
      }
    }
  }
})

export default ScheduleStack
