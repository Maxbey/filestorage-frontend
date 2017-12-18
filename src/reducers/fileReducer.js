import { fileConstants } from '../constants/fileConstants'

export function fileReducer(state = {files: []}, action) {
  switch (action.type) {
    case fileConstants.GET_FILE:
      return {...state, file: action.data}
    case fileConstants.GET_FILES:
      return {...state, files: action.data}
    default:
      return {...state}
  }
}
