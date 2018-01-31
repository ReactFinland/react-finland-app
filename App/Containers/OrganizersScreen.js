import React, { Component } from 'react'
import { connect } from 'react-redux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { Colors, Fonts, Metrics } from '../Themes'
import OrganizersListing from '../Components/OrganizersListing'

import { Platform, TouchableOpacity, Linking, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

const backIcon = Platform.OS === 'ios' ? 'ios-arrow-back' : 'ios-arrow-round-back'

const Back = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h5};
`
const Headline = styled.Text`
  margin-left: 25px;
  color: ${Colors.coal};
  font-weight: 600;
  font-size: ${Fonts.size.h5};
`
const TopRow = styled.View`
  padding-top: 10px;
  padding-left: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  padding-right: 10px;
  justify-content: flex-start;
`
const openUrl = link => Linking.openURL(link).catch(err => {
  console.tron.log(`Failed to open link ${link}`)
  console.tron.log(err)
})
export const BackRow = ({onBack}) => (
  <TopRow>
    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff'}} onPress={() => onBack()}>
      <Icon style={{paddingRight: 10, paddingBottom: 10}} size={28} name={backIcon} />
      <Back>Back</Back>
      <Headline>Organizers</Headline>
    </TouchableOpacity>
  </TopRow>
)
const Screen = styled.View`
  background-color: ${Colors.background};
  padding: ${Metrics.baseMargin}px;
  margin-top: 20px;
  padding-bottom: 0;
  flex: 1;
`

class OrganizersScreen extends Component {
  render () {
    let { data, navigation } = this.props
    return (
      <Screen>
        <BackRow onBack={navigation.goBack} />
        <OrganizersListing data={data} />
      </Screen>
    )
  }
}

const mapStateToProps = ({ organizers: {data} }) => ({
  data
})

export default connect(mapStateToProps)(OrganizersScreen)
