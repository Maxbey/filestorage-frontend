import { AbstractService } from './AbstractService';

export class GroupService extends AbstractService {
  async getGroups(){
    const response = await this.get('/group/')
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async getGroup(id){
    const response = await this.get(`/group/${id}/`)
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async create(name, users, files){

    const response = await this.post(
      '/group/', {name, users, files}
    )

    return {ok: response.ok}
  }

  async update(id, name, users, files){

    const response = await this.put(
      `/group/${id}/`, {name, users, files}
    )

    return {ok: response.ok}
  }

  async delete(id){
    const response = await this.delete(`/group/${id}/`)

    return {ok: response.ok}
  }

}
