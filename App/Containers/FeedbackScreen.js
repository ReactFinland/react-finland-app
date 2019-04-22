import React, { useState } from 'react'
import gql from 'graphql-tag'
import Toast from 'react-native-simple-toast'

import { ScrollView, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Card, Button, Rating, ButtonGroup } from 'react-native-elements'

import styles from './Styles/FeedbackScreenStyle'

const sendMessage = message => {
  return fetch('https://rf2019-mern.herokuapp.com/feedback', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(message),
  }).then((response) => {
    return response.json()
  }).catch((error) => {
      console.tron.error(error);
  });
}

const FeedbackScreen = ({ selectedSession, navigation }) => {
  const [ sending, setSending ] = useState(false)
  const [selectedIndex, setSelectedIndex ] = useState(0)
  const [feedback, setFeedback ] = useState('')
  const [rating, setRating ] = useState(5)
  return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        <Card>
        <ButtonGroup
          onPress={v => setSelectedIndex(v)}
          selectedIndex={selectedIndex}
          buttons={['Feedback', 'Question']}
          containerStyle={{height: 40}}
        />
        <Text style={{marginTop: 20}} >Your {selectedIndex == 0 ? 'feedback' : 'question' } to:</Text>
          <Text>{ selectedSession.title } </Text>
          { selectedIndex === 0 &&
          <Rating
            type='heart'
            ratingCount={5}
            startingValue={5}
            onFinishRating={rating => setRating(rating)}
            imageSize={60}
            />
          }
             <TextInput
               multiline 
               onChangeText={feedback => setFeedback(feedback)}
               umberOfLines={8}
               style={{ marginBottom: 40, height: 200, backgroundColor: '#eee' }}
               />
             <Button disabled={sending} onPress={() => {
               setSending(true)
               sendMessage({session_name: selectedSession.title, rating: selectedIndex === 0 ? rating : null , feedback, type: selectedIndex === 0 ? 'feedback' : 'question'})
               .then(r => {
                 Toast.show('Feedback sent.');
                 navigation.goBack()
                 setSending(false)
               }).catch(e => {
                 Toast.show('Sending feedback failed.');
                 setSending(false)
               })
               }} title={sending ? 'Sending...' : 'Send'}></Button>
             <Button style={{paddingTop: 20}} onPress={() => navigation.goBack()} title='Go Back'></Button>
          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    )
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
