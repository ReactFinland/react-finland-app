import { TabNavigator } from 'react-navigation'
import WorkshopsScreen from '../Containers/WorkshopsScreen'
import WednesdayScreen from '../Containers/WednesdayScreen'
import ThursdayScreen from '../Containers/ThursdayScreen'
import { Colors } from '../Themes'

const routeConfig = {
  WorkshopsScreen: { screen: WorkshopsScreen },
  WednesdayScreen: { screen: WednesdayScreen },
  ThursdayScreen: { screen: ThursdayScreen }
}

const tabNavigatorConfig = {
  // Default config for all screens
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: Colors.textDark,
    inactiveTintColor: Colors.grey,
    style: {
      backgroundColor: Colors.background
    }
  }
}

// Manifest of possible screens
const ScheduleNav = TabNavigator(routeConfig, tabNavigatorConfig)

export default ScheduleNav
