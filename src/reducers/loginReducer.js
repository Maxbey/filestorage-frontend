import { authConstants } from '../constants/authConstants'
import { ValidationErrorsHandler } from '../helpers/ValidationErrorsHandler'

let apiToken = localStorage.getItem('apiToken')
const initialState = apiToken ? { loggedIn: true, apiToken } : {}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_FAILURE:
      return {
        validationErrors: ValidationErrorsHandler.parseErrors(action.data.errors)
      }
    case authConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
