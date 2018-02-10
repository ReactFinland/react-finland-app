import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Colors } from '../Themes'
import OrganizersListing from '../Components/OrganizersListing'
import styled from 'styled-components/native'
import MenuBar from '../Components/MenuBar'

const Screen = styled.View`
  background-color: ${Colors.reactFinlandBlue};
  padding-bottom: 0;
  flex: 1;
`
class OrganizersScreen extends Component {
  render () {
    let { data, navigation } = this.props
    return (
      <Screen>
        <MenuBar navigateDrawer={() => { navigation.navigate('DrawerOpen') }} />
        <OrganizersListing data={data} />
      </Screen>
    )
  }
}

const mapStateToProps = ({ organizers: {data} }) => ({
  data
})

export default connect(mapStateToProps)(OrganizersScreen)
