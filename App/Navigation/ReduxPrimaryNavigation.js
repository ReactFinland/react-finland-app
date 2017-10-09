import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import PrimaryNavigation from './PrimaryNavigation'

// here is our redux-aware our smart component
function ReduxPrimaryNavigation (props) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <PrimaryNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.primaryNav })
export default connect(mapStateToProps)(ReduxPrimaryNavigation)
