import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import ScheduleScreen from '../Containers/ScheduleScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ScheduleScreen: { screen: ScheduleScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ScheduleScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
