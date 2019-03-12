import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { Colors } from '../Themes'
import Workshops from './Workshops'
import ScheduleActions from '../Redux/ScheduleRedux'
import { pathOr } from 'ramda'

const Screen = styled.View`
  background-color: ${Colors.background};
  padding-bottom: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
`
class WorkshopScreen extends Component {

}

const mapDispatchToProps = (dispatch) => ({
  selectSession: (session) => dispatch(ScheduleActions.selectSession(session))
})

const mapStateToProps = ({schedule: {data}}) => ({
  workshops: pathOr([], ['0', 'intervals'], data)
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopScreen)
