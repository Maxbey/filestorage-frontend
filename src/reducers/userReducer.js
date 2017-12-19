import { userConstants } from '../constants/userConstants'

export function userReducer(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_USERS:
      return {users: action.data}
    case userConstants.GET_CURRENT:
      return {user: action.data}
    default:
      return {...state}
  }
}
