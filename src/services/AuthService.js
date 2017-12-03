import { appConfig } from '../config';
import { AbstractService } from './AbstractService';

export class AuthService extends AbstractService {
  async login(email, password){
    const response = await this.post('/auth/login/', {email, password})
    const data = await response.json()

    return {ok: response.ok, data}
  }

  async register(email, password, firstName, lastName){
    return await this.post(
      '/auth/register/',
      {email, password, firstName, lastName}
    );
  }
};
