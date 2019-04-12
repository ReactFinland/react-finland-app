import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Input, Card, Button, Rating, ButtonGroup } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles/FeedbackScreenStyle'

const sendMessage = message => {
  console.tron.log(message)
}

class FeedbackScreen extends Component {
  state = {
    rating: 5,
    feedback: '',
    selectedIndex: 0
  }
  setRating = rating => this.setState({rating})
  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex})
  }
  render () {
    const buttons = ['Feedback', 'Question']
  
    const { rating, selectedIndex, feedback } = this.state
    const { selectedSession, navigation } = this.props
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        <Card>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 40}}
        />
        <Text style={{marginTop: 20}} >Your {selectedIndex == 0 ? 'feedback' : 'question' } to:</Text>
          <Text>{ selectedSession.title } </Text>
          { selectedIndex === 0 &&
          <Rating
            type='heart'
            ratingCount={5}
            startingValue={5}
            onFinishRating={rating => this.setRating(rating)}
            imageSize={60}
            />
          }

             <TextInput
               multiline 
               onChangeText={feedback => this.setState({feedback})}
               umberOfLines={8}
               style={{ marginBottom: 40, height: 200, backgroundColor: '#eee' }}
               />
             <Button onPress={() => sendMessage({ rating: selectedIndex === 0 ? rating : null , feedback, type: selectedIndex === 0 ? 'feedback' : 'question'})} title='Send'></Button>
             <Button style={{paddingTop: 20}} onPress={() => navigation.goBack()} title='Go Back'></Button>

          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ schedule: { selectedSession } }) => {
  return {
    selectedSession
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackScreen)
