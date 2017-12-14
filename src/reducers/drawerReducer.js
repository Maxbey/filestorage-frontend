import { appConstants } from '../constants/appConstants'

const initialState = { open: false }

export function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case appConstants.OPEN_DRAWER:
      return {open: true}
    case appConstants.CLOSE_DRAWER:
      return {open: false}
    default:
      return state
  }
}
