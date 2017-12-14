import { fileConstants } from '../constants/fileConstants'

let files = []

export function fileReducer(state, action) {
  switch (action.type) {
    case fileConstants.GET_FILES:
      files = action.data
      return {files: action.data}
    default:
      return {files: files}
  }
}
