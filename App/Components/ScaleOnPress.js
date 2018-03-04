import React from 'react'

export const scaleOnPress = () => {
  return WrappedComponent => {
    class ScaleOnPress extends React.Component {
      state = {
        opening: false
      }
      onPressIn = container => {
        container.transition({ scale: 1.0 }, { scale: 0.95 }, 300)
      }

      onPressOut = container => {
        container.transitionTo({ scale: 1.0 }, 300)
      }
      onPress = () => {
        const { opening } = this.state
        const { onPress } = this.props
        if (opening) {
          return
        }

        this.setState({opening: true})
        setTimeout(() => onPress(), 200)
        setTimeout(() => this.setState({opening: false}), 600)
      }
      render () {
        return (
          <WrappedComponent
            onPress={this.onPress}
            onPressIn={this.onPressIn}
            onPressOut={this.onPressOut}

            {...this.props} />
        )
      }
    }

    return ScaleOnPress
  }
}
