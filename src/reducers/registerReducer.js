import { authConstants } from '../constants/authConstants'
import { ValidationErrorsHandler } from '../helpers/ValidationErrorsHandler'

export function registerReducer(state = {}, action) {
  switch (action.type) {
    case authConstants.REGISTER_SUCCESS:
      return {}
    case authConstants.REGISTER_FAILURE:
      return {
        validationErrors: ValidationErrorsHandler.parseErrors(action.data.errors)
      }
    default:
      return state
  }
}
