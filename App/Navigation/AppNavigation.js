import { TabNavigator } from 'react-navigation'
import AboutScreen from '../Containers/AboutScreen'
import ScheduleScreen from '../Containers/ScheduleScreen'
import ContributorScreen from '../Containers/ContributorScreen'
import { Colors } from '../Themes'

const routeConfig = {
  ScheduleScreen: { screen: ScheduleScreen },
  ContributorScreen: { screen: ContributorScreen },
  AboutScreen: { screen: AboutScreen }
}

const tabNavigatorConfig = {
  // Default config for all screens
  tabBarPosition: 'bottom',
  animationEnabled: true,
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
