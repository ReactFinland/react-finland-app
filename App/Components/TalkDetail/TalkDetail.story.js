import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import TalkDetail from './TalkDetail'

const data = {
  'speakers': [
    {
      'name': 'Sia Karamalegos',
      'about': 'Sia Karamalegos is the founder and lead developer for Clio + Calliope Web Development. She has over 15 years of experience in technology, strategy, project management, and operations from small startups to large corporations across multiple industries, especially high-tech and education. She leverages her depth of experience with software engineering to build high-value applications.',
      'photo': 'sia.jpg',
      'homepage': 'https://siakaramalegos.github.io/',
      'twitter': 'thegreengreek',
      'github': 'siakaramalegos'
    }
  ],
  'title': 'Universal React Apps Using Next.js',
  'description': 'Every user’s hardware is different, and processing speed can hinder user experience on client-side rendered React applications. Server-side rendering and code-splitting can drastically improve user experience by minimizing the work that the client has to do.\n\nIt’s easy to get lost in the lingo, so come learn what it all means and how to easily build universal React apps using the Next.js framework. We’ll walk through the concepts and use code examples to cement your understanding. You’ll get the most out of this session if you’re comfortable with React and ES6 syntax.'
}

class DefaultStory extends React.Component {
  render () {
    return (
      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
        <TalkDetail
          title={data.title}
          description={data.description}
          speakers={data.speakers}
        />
      </View>
    )
  }
}
storiesOf('TalkDetail')
  .add('Default', () => <DefaultStory />)
