import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import TalkListing from './TalkListing'

const intervals = [
  {
    "begin": "08:00",
    "end": "09:00",
    "sessions": [
      {
        "title": "Registration, Finnish breakfast.",
        "description": "Trust me, it's the best.",
        "speakers": null
      }
    ]
  },
  {
    "begin": "09:00",
    "end": "10:00",
    "sessions": [
      {
        "title": "",
        "description": "",
        "speakers": [
          {
            "name": "Ken Wheeler",
            "about": "Ken is the Director of Open Source at Formidable, the author of several popular open source libraries, and a frequent conference speaker often focusing on alternative uses of React.\n\nHe is the creator of libraries such as Spectacle, react-music, react-game-kit and Webpack Dashboard. He also maintains a healthy Twitter presence, and enjoys red meat, whiskey and recreational archery.",
            "image": "ken.jpg"
          }
        ]
      }
    ]
  },
  {
    "begin": "10:00",
    "end": "11:00",
    "sessions": [
      {
        "title": "Declarative state and side effects",
        "description": "Writing declarative code for our UIs is so common that we do not even think about it. But when it comes to writing logic for managing state and side effects it requires a lot of discipline to get the same benefits. We are going to talk about how we can get help writing our business logic in a declarative manner and see what benefits it gives us.",
        "speakers": [
          {
            "name": "Christian Alfoni",
            "about": "Christian has been crunching JavaScript for about 8 years. In the recent years open source and writing articles has become a passion. Throwing bad and not so bad ideas out there to see what is valuable to people. Author of Cerebral, created Webpackbin and JSBlog... amongst other things.",
            "image": "christian.jpg"
          }
        ]
      }
    ]
  },
  {
    "begin": "11:00",
    "end": "11:30",
    "sessions": [
      {
        "title": "Lightning talks",
        "description": null,
        "speakers": null
      },
      {
        "title": "Immer: Immutability made easy",
        "description": "Immer is a tiny package that allows you to work with immutable data structures with unprecedented ease. It doesn't require learning new data structures or update APIs, but instead creates a temporarily shadow tree which can be modified using the standard JavaScript APIs. The shadow tree will be used to generate your next immutable state tree. Join this talk to see how to write your reducers in a much more readable way, with half the code and without requiring additional large libraries.",
        "speakers": [
          {
            "name": "Michel Weststrate",
            "about": "Full-stack tech lead and open source evangelist at Mendix. Author of MobX, MobX-State-Tree and Immer. On a quest to make programming as natural as possible.",
            "image": "michel.jpg"
          }
        ]
      },
      {
        "title": "Breaking Down Your Web App",
        "description": "\nLet’s face it – the question is not *if* your codebase will become a horrible, unmaintainable mess, it’s only a question of *when*…\n\nWhat architecture patterns and strategies are there to break down your web application’s code into cleanly separated components? How can you compose your software of “Lego bricks” that you can simply replace with shiny new ones when they have become rotten?\n\nPatrick will show you how to be proud of writing code that’s easy to throw away instead of being proud of writing code that haunts your colleagues and your future self forever!\n\nHe will show some hands-on examples from his current work on the relaunch of eBay’s automotive online community MOTOR-TALK.de. While these are based on JavaScript, React and Redux, the underlying patterns will be useful for users of other languages and frameworks.\n  ",
        "speakers": [
          {
            "name": "Patrick Hund",
            "about": "Patrick helps React and Node.js conquer the tech stack at eBay in Berlin. He has been a professional software developer since 2000 and joined eBay in 2010. Notable projects are the relaunch of the homepage of eBay's car trading platform mobile.de in 2015 and the rewrite of eBay’s automotive online community MOTOR-TALK.de (ongoing, since 2017).",
            "image": "patrick-hund.jpg"
          }
        ]
      },
      {
        "title": "How to use React, webpack and other buzzwords if there is no need",
        "description": "The best way to study a new development approach is to do it in practice. But good projects built with modern technologies most often require developers with experience in these technologies. One of the options to get this is a side project. What can it be in React?\n\nVarya will show how to generate a multilingual static website using Metalsmith, React and other modern technologies and tools. For over a year, she has been using this stack to build her personal blog and it turned out to be expressive, fast and convenient. After all, it’s our beloved React.",
        "speakers": [
          {
            "name": "Varya Stepanova",
            "about": "Varya Stepanova is a developer enthusiast for modular web and pattern libraries. She loves automation, also in the development processes, strongly believes in open-source community and likes social media. Originally from Russia, she now lives in Helsinki with her family and two cats.",
            "image": "varya.jpg"
          }
        ]
      }
    ]
  },
  {
    "begin": "11:30",
    "end": "12:30",
    "sessions": [
      {
        "title": "Lunch",
        "description": "It's functional. You are **not** supposed to like it.",
        "speakers": null
      }
    ]
  },
  {
    "begin": "12:30",
    "end": "13:00",
    "sessions": [
      {
        "title": "Panel",
        "description": "Panel discussion.",
        "speakers": null
      }
    ]
  },
  {
    "begin": "13:00",
    "end": "14:00",
    "sessions": [
      {
        "title": "Styled Components, SSR, and Theming",
        "description": "All you need to know to become hero of CSS-in-JS with `styled-components`. We will go through the new API, performance improvements, server side rendering with Next.js and the theming manager available with v2 of `styled-components`.",
        "speakers": [
          {
            "name": "Kasia Jastrzębska",
            "about": "Frontend developer with over 6 years of experience around various frameworks and libs knowledge in my basket (such as React+Redux, Polymer, Ember, Backbone). Always eager to go deeper ;D",
            "image": "kasia.jpg"
          }
        ]
      }
    ]
  },
  {
    "begin": "14:00",
    "end": "15:00",
    "sessions": [
      {
        "title": "Universal React Apps Using Next.js",
        "description": "Every user’s hardware is different, and processing speed can hinder user experience on client-side rendered React applications. Server-side rendering and code-splitting can drastically improve user experience by minimizing the work that the client has to do.\n\nIt’s easy to get lost in the lingo, so come learn what it all means and how to easily build universal React apps using the Next.js framework. We’ll walk through the concepts and use code examples to cement your understanding. You’ll get the most out of this session if you’re comfortable with React and ES6 syntax.",
        "speakers": [
          {
            "name": "Sia Karamalegos",
            "about": "Sia Karamalegos is the founder and lead developer for Clio + Calliope Web Development. She has over 15 years of experience in technology, strategy, project management, and operations from small startups to large corporations across multiple industries, especially high-tech and education. She leverages her depth of experience with software engineering to build high-value applications.",
            "image": "sia.jpg"
          }
        ]
      }
    ]
  },
  {
    "begin": "15:00",
    "end": "15:45",
    "sessions": [
      {
        "title": "React Testing",
        "description": "",
        "speakers": [
          {
            "name": "Sara Vieira",
            "about": "Front-End Developer at @YLDio, open sorcerer, maker of useless modules, Blogger, Drummer and horror movie fan girl.",
            "image": "sara.jpg"
          }
        ]
      }
    ]
  },
  {
    "begin": "15:45",
    "end": "16:30",
    "sessions": [
      {
        "title": "Detox: A year in. Building it, Testing with it",
        "description": "\nA year in, developing and using Detox in production taught us a lot. From designing its API to consuming it, testing real user scenarios to advanced mocking, we learned what makes sense when E2E testing an app and what doesn’t.\n\nIn this talk, we’ll discuss how Detox works and what makes it deterministic, cover some advanced use cases and methodologies, go over new features and tease the ones that are upcoming.\n",
        "speakers": [
          {
            "name": "Rotem Mizrachi-Meidan",
            "about": "Rotem is a Software Engineer, open source advocate, passionate about Android, React Native, mobile performance, writing developer tools and Lego! In his current position at Wix, Rotem is working with React Native, writing infrastructure and testing tools.",
            "image": "rotem.jpg"
          }
        ]
      }
    ]
  },
  {
    "begin": "16:30",
    "end": "17:00",
    "sessions": [
      {
        "title": "Coffee break",
        "description": "We don't mind if you drink tea, though. Water is available as well.",
        "speakers": null
      }
    ]
  },
  {
    "begin": "17:00",
    "end": "17:30",
    "sessions": [
      {
        "title": "Lightning talks",
        "description": null,
        "speakers": null
      },
      {
        "title": "To be announced",
        "description": "To be announced",
        "speakers": [
          {
            "name": "Sven Sauleau",
            "about": "Sven is a software engineer living in France and mostly working with Golang and JavaScript. OSS enthusiast and one of the persons behind Babel.",
            "image": "sven.jpg"
          }
        ]
      }
    ]
  },
  {
    "begin": "17:30",
    "end": "18:00",
    "sessions": [
      {
        "title": "Panel",
        "description": "Panel discussion to end the day.",
        "speakers": null
      }
    ]
  }
]

class DefaultStory extends React.Component {
  render () {
    return (
      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
        <TalkListing data={intervals} onSessionSelected={() => {}} />
      </View>
    )
  }
}
storiesOf('TalkListing')
  .add('Default', () => <DefaultStory />)
