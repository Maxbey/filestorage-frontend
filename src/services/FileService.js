import { AbstractService } from './AbstractService';

export class FileService extends AbstractService {
  async getFile(id){
    const response = await this.get(`/file/${id}`)
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async likeFile(id){
    const response = await this.post(`/file/${id}/like/`)
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async unlikeFile(id){
    const response = await this.post(`/file/${id}/unlike/`)
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async getFiles(){
    const response = await this.get('/file/')
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async getFavoriteFiles(){
    const response = await this.get('/file/favorite/')
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async deleteFile(id){
    const response = await this.delete(`/file/${id}`)

    return {ok: response.ok}
  }

  async createComment(content, fileId){
    const response = await this.post(
      `/file/${fileId}/comment/`, {content}
    )
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async deleteComment(commentId, fileId){
    const response = await this.delete(
      `/file/${fileId}/comment/${commentId}`
    )

    const data = await response.json()

    return {ok: response.ok, data}
  }
};
