import ScheduleNavigation from '../Navigation/ScheduleNavigation'

export const reducer = (state, action) => {
  const newState = ScheduleNavigation.router.getStateForAction(action, state)
  return newState || state
}
