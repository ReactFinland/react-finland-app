import React, { Component } from 'react'
import { View, StatusBar, BackHandler, Platform } from 'react-native'
import ReduxPrimaryNavigation from '../Navigation/ReduxPrimaryNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import { NavigationActions } from 'react-navigation'
import { Colors } from '../Themes'
import styles from './Styles/RootContainerStyles'

// https://github.com/react-navigation/react-navigation/issues/1349#issuecomment-304692012
const isRootScreen = (navigator) => {
  if (navigator.index == null) {
    return true
  }

  if (navigator.index > 0) {
    return false
  }

  return !navigator.routes || !navigator.routes.find(route => !isRootScreen(route))
}

class RootContainer extends Component {
  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed)
  }

  onBackButtonPressed = () => {
    if (isRootScreen(this.props.navigation)) {
      // let react-navigation pop the screen
      return false
    }

    this.props.goBack()
    return true
  }

  componentDidMount () {
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    const { navigation } = this.props
    return (
      <View style={styles.applicationView}>
        <StatusBar
          hidden={navigation.drawerOpen}
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          backgroundColor={Colors.reactFinlandBlue}
        />
        <ReduxPrimaryNavigation />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  navigation: state.primaryNav
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  goBack: () => dispatch(NavigationActions.back())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
