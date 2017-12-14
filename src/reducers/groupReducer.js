import { groupConstants } from '../constants/groupConstants'
import { ValidationErrorsHandler } from '../helpers/ValidationErrorsHandler'

let groups = []

export function groupReducer(state, action) {
  switch (action.type) {
    case groupConstants.GROUP_FAILURE:
      return {
        validationErrors: ValidationErrorsHandler.parseErrors(action.data.errors)
      }
    case groupConstants.GET_GROUPS:
      groups = action.data

      return {groups}
    case groupConstants.GET_GROUP:
      return {group: action.data}
    default:
      return {groups}
  }
}
