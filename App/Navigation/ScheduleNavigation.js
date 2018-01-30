import { TabNavigator } from 'react-navigation'
import { Platform } from 'react-native'
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
// not working property on android
const swipe = Platform.OS === 'ios' ? true : false

const tabNavigatorConfig = {
  // Default config for all screens
  tabBarPosition: 'top',
  animationEnabled: swipe,
  swipeEnabled: swipe,
  tabBarOptions: {
    animationEnabled: true,
    swipeEnabled: false,
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
