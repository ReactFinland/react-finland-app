import { TabNavigator } from 'react-navigation'
import WorkshopScreen from '../Containers/WorkshopScreen'
import TalkScreen from '../Containers/TalkScreen'
import { Colors, Fonts } from '../Themes'

const routeConfig = {
  WorkshopScreen: {
    screen: WorkshopScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Tuesday'
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

export default ScheduleNav
