import { fileConstants } from '../constants/fileConstants'
import { FileService } from '../services/FileService'

export class FileActions {
  constructor() {
    this.fileService = new FileService()
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
    }
  }
}
