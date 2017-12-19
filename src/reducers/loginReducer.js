import { authConstants } from '../constants/authConstants'
import { ValidationErrorsHandler } from '../helpers/ValidationErrorsHandler'

export function loginReducer(state = {}, action) {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS:
      console.log('HERE');
      return {...state, user_id: parseInt(action.data.user_id)}
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
