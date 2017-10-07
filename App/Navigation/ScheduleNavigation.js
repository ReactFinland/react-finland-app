import { TabNavigator } from 'react-navigation'
import WorkshopScreen from '../Containers/WorkshopScreen'
import TalkScreen from '../Containers/TalkScreen'
import { Colors } from '../Themes'

const routeConfig = {
  WorkshopScreen: {
    screen: WorkshopScreen,
    navigationOptions: {
      title: 'Workshops'
    }
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

const tabNavigatorConfig = {
  // Default config for all screens
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
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
