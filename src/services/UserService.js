import { AbstractService } from './AbstractService'

export class UserService extends AbstractService {
  async getUsers(email){
    const response = await this.get(`/user/?email=${email}`)
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async getCurrent(){
    const response = await this.get('/user/current/')
    const data = await response.json()

    return {ok: response.ok, data}
  }
};
