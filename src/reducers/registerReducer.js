import { authConstants } from '../constants/authConstants'

export function registerReducer(state = {}, action) {
  switch (action.type) {
    case authConstants.REGISTER_SUCCESS:
      return {};
    case authConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}
