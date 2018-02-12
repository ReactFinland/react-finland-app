import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import AboutScreen from '../Containers/AboutScreen'
import SpeakersScreen from '../Containers/SpeakersScreen'
import TalkDetailsScreen from '../Containers/TalkDetailsScreen'
import ScheduleNavigation from './ScheduleNavigation'
import OrganizersScreen from '../Containers/OrganizersScreen'
import { Colors, Fonts } from '../Themes'
import SideMenu from './SideMenu'
import BuyTicketsLink from './BuyTicketsLink'
import MenuButton from './MenuButton'
import { headerTitleStyle } from './styles'

const OrganizersStack = StackNavigator({
  OrganizerScreen: {
    screen: OrganizersScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerRight: <BuyTicketsLink />,
        headerLeft: <MenuButton onPress={() => navigation.navigate('DrawerOpen')} />,
        title: 'Organizers',
        headerTitleStyle
      }
    }
  }
})

const SpeakersStack = StackNavigator({
  SpeakersScreen: {
    screen: SpeakersScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerRight: <BuyTicketsLink />,
        headerLeft: <MenuButton onPress={() => navigation.navigate('DrawerOpen')} />,
        title: 'Speakers',
        headerTitleStyle
      }
    }
  }
})

const AboutStack = StackNavigator({
  AboutScreen: {
    screen: AboutScreen,
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

const DrawerNav = DrawerNavigator({
  Schedule: {
    screen: ScheduleNavigation,
    navigationOptions: {
      title: 'Schedule',
    }
  },
  Organizers: {
    screen: OrganizersStack
  },
  Speakers: {
    screen: SpeakersStack
  },
  About: {
    screen: AboutStack
  }
}, {
  drawerWidth: 250,
  contentOptions: {
    inactiveTintColor: 'rgba(255, 255, 255, 0.8)',
    activeTintColor: Colors.reactFinlandBlue,
    labelStyle: {
      fontSize: Fonts.size.h5,
      fontFamily: Fonts.type.base
    }
  },
  contentComponent: props => (
    <SideMenu {...props} />
  ),
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

export default DrawerNav
