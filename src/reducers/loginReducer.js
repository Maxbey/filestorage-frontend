import { authConstants } from '../constants/authConstants'

let apiToken = localStorage.getItem('apiToken')
const initialState = apiToken ? { loggedIn: true, apiToken } : {}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_FAILURE:
      return {error: action.data.error};
    case authConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
