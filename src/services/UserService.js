import { appConfig } from '../config';
import { AbstractService } from './AbstractService';

export class UserService extends AbstractService {
  async login(email, password){
    const response = await this.post('/auth/login/', {email, password});
    const data = await response.json();

    localStorage.setItem('apiToken', data.token);

    return response;
  }

  async register(email, password, firstName, lastName){
    const response = await this.post(
      '/auth/register/',
      {email, password, firstName, lastName}
    );
    const data = await response.json();

    return response;
  }

  logout(){
    localStorage.removeItem('apiToken');
  }
};
