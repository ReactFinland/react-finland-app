import { TabNavigator } from 'react-navigation'
import AboutScreen from '../Containers/AboutScreen'
import ScheduleScreen from '../Containers/ScheduleScreen'
import SpeakersScreen from '../Containers/SpeakersScreen'
import { Colors } from '../Themes'

const routeConfig = {
  ScheduleScreen: { screen: ScheduleScreen },
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
