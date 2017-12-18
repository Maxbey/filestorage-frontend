import { authConstants } from '../constants/authConstants'
import { ValidationErrorsHandler } from '../helpers/ValidationErrorsHandler'

export function loginReducer(state = {}, action) {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS:
      return {...state, currentUser: parseInt(action.data.user_id)}
    case authConstants.LOGIN_FAILURE:
      return {
        validationErrors: ValidationErrorsHandler.parseErrors(action.data.errors)
      }
    case authConstants.LOGOUT:
      return {}
    default:
      return {...state}
  }
}
