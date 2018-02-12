import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Colors } from '../Themes'
import OrganizersListing from '../Components/OrganizersListing'
import styled from 'styled-components/native'

const Screen = styled.View`
  background-color: ${Colors.reactFinlandBlue};
  padding-bottom: 0;
  flex: 1;
`
class OrganizersScreen extends Component {
  render () {
    let { data } = this.props
    return (
      <Screen>
        <OrganizersListing data={data} />
      </Screen>
    )
  }
}

const mapStateToProps = ({ organizers: {data} }) => ({
  data
})

export default connect(mapStateToProps)(OrganizersScreen)
