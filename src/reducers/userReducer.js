import { userConstants } from '../constants/userConstants'

let users = []

export function userReducer(state, action) {
  switch (action.type) {
    case userConstants.GET_USERS:
      users = action.data
      return {users: action.data}
    default:
      return {users: users}
  }
}
