import PrimaryNavigation from '../Navigation/PrimaryNavigation'
import * as R from 'ramda'

export const reducer = (state, action) => {
  const drawerOpen = R.cond([
    [R.equals('DrawerOpen'), R.always(true)],
    [R.equals('DrawerClose'), R.always(false)],
    [R.T, R.always(false)]
  ])(action.routeName)

  const newState = PrimaryNavigation.router.getStateForAction(action, state)
  return newState ? {...newState, drawerOpen} : state
}
