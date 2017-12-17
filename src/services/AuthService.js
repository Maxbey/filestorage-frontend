import { AbstractService } from './AbstractService';

export class AuthService extends AbstractService {
  async login(email, password){
    const response = await this.post('/auth/login/', {email, password})
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async register(email, password, firstName, lastName){
    const response = await this.post(
      '/auth/register/',
      {email, password, firstName, lastName}
    )
    const data = await response.json()

    return {ok: response.ok, data}
  }
}
