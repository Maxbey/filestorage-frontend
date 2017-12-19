import { fileConstants } from '../constants/fileConstants'
import { FileService } from '../services/FileService'

import { history } from '../middleware/history'

export class FileActions {
  constructor() {
    this.fileService = new FileService()
  }

  getFile(id) {
    return async dispatch => {
      const response = await this.fileService.getFile(id)
      dispatch({
        type: fileConstants.GET_FILE,
        data: response.data
      })
    }
  }

  likeFile(id) {
    return async dispatch => {
      const response = await this.fileService.likeFile(id)
      dispatch({
        type: fileConstants.GET_FILE,
        data: response.data
      })
    }
  }

  unlikeFile(id) {
    return async dispatch => {
      const response = await this.fileService.unlikeFile(id)
      dispatch({
        type: fileConstants.GET_FILE,
        data: response.data
      })
    }
  }

  getFiles() {
    return async dispatch => {
      const response = await this.fileService.getFiles()
      dispatch({
        type: fileConstants.GET_FILES,
        data: response.data
      })
    }
  }

  deleteFile(id) {
    return async dispatch => {
      await this.fileService.deleteFile(id)
      dispatch({
        type: fileConstants.DELETE_FILE,
        id: id
      })
      history.push('/')
    }
  }

  createComment(content, fileId) {
    return async dispatch => {
      const response = await this.fileService.createComment(content, fileId)
      dispatch({
        type: fileConstants.GET_FILE,
        data: response.data
      })
    }
  }

  deleteComment(commentId, fileId) {
    return async dispatch => {
      const response = await this.fileService.deleteComment(
        commentId, fileId
      )
      dispatch({
        type: fileConstants.GET_FILE,
        data: response.data
      })
    }
  }
}
