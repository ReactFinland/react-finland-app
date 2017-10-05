import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

const ReactFinlandLogo = (props) => {
  return <Image style={{width: props.width, height: props.height}} source={require('../Images/reactfinland.png')} />
}

ReactFinlandLogo.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default ReactFinlandLogo
