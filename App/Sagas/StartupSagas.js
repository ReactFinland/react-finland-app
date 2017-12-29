import { put, select } from 'redux-saga/effects'
import { is } from 'ramda'

// exported to make available for tests
export const selectAvatar = (state) => state.github.avatar

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectAvatar
      }
    })
  }
}
