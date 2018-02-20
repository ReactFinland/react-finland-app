import React, { Component } from 'react'
import SponsorList from '../Components/SponsorList'

class SponsorListScreen extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  }
  render () {
    return (
      <SponsorList />
    )
  }
}

export default SponsorListScreen
