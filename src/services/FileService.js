import { AbstractService } from './AbstractService';

export class FileService extends AbstractService {
  async getFiles(){
    const response = await this.get('/file/')
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async delete(id){
    const response = await this.delete(`/file/${id}`)

    return {ok: response.ok}
  }
};
