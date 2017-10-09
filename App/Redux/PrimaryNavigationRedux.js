import PrimaryNavigation from '../Navigation/PrimaryNavigation'

export const reducer = (state, action) => {
  const newState = PrimaryNavigation.router.getStateForAction(action, state)
  return newState || state
}
