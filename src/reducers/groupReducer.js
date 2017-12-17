import { groupConstants } from '../constants/groupConstants'
import { ValidationErrorsHandler } from '../helpers/ValidationErrorsHandler'

let groups = []

export function groupReducer(state = {groups: []}, action) {
  switch (action.type) {
    case groupConstants.GROUP_FAILURE:
      return {
        validationErrors: ValidationErrorsHandler.parseErrors(action.data.errors)
      }
    case groupConstants.GET_GROUPS:
      groups = action.data

      return {groups: action.data}
    case groupConstants.GET_GROUP:
      return {
        ...state,
        group: action.data
      }
    default:
      return {
        ...state
      }
  }
}
