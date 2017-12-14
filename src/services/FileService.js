import { AbstractService } from './AbstractService';

export class FileService extends AbstractService {
  async getFiles(){
    const response = await this.get('/file/')
    const data = await response.json()

    return {ok: response.ok, data}
  }
};
