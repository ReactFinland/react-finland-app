import React from 'react'
import { Platform } from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import AboutScreen from '../Containers/AboutScreen'
import SpeakersScreen from '../Containers/SpeakersScreen'
import ScheduleNavigation from './ScheduleNavigation'
import OrganizersScreen from '../Containers/OrganizersScreen'
import { Colors, Fonts } from '../Themes'
import SideMenu from './SideMenu'
import BuyTicketsLink from './BuyTicketsLink'
import MenuButton from './MenuButton'
import { headerTitleStyle } from './styles'
import SponsorListScreen from '../Containers/SponsorListScreen'

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
const SponsorListStack = StackNavigator({
  SponsorListScreen: {
    screen: SponsorListScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerRight: <BuyTicketsLink />,
        headerLeft: <MenuButton onPress={() => navigation.navigate('DrawerOpen')} />,
        title: 'Sponsors',
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
      title: 'Schedule'
    }
  },
  Speakers: {
    screen: SpeakersStack
  },
  Organizers: {
    screen: OrganizersStack
  },
  About: {
    screen: AboutStack
  },
  Sponsors: {
    screen: SponsorListStack
  }
}, {
  drawerWidth: 250,
  contentOptions: {
    inactiveTintColor: 'rgba(255, 255, 255, 0.8)',
    activeTintColor: Colors.reactFinlandBlue,
    activeBackgroundColor: null,
    labelStyle: {
      fontSize: Fonts.size.h5,
      fontFamily: Fonts.type.bold,

      // For some reason, Android needs fontWeight: 'normal' here to display
      // Finlandica font. fontFamily: 'Finlandica-Bold' makes it bold.
      // With those settings, iOS does not display the font bolded but requires
      // fontWeight: 'bold'.
      fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal'
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
