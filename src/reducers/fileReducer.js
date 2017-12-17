import { fileConstants } from '../constants/fileConstants'

let files = []

export function fileReducer(state, action) {
  switch (action.type) {
    case fileConstants.GET_FILES:
      files = action.data
      return {files: action.data}
    case fileConstants.DELETE_FILE:
      files = files.filter(file => file.id !== action.id)
      return {files: files}
    default:
      return {files: files}
  }
}
