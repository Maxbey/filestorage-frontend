import {authConstants} from '../constants/authConstants'
import {AuthService} from '../services/AuthService'
import { history } from '../middleware/history';

export class AuthActions {
  constructor() {
    this.authService = new AuthService()
  }
  login(email, password) {
    return async dispatch => {
      const response = await this.authService.login(email, password)

      if (!response.ok)
        dispatch({type: authConstants.LOGIN_FAILURE, 'data': response.data})
      else {
        localStorage.setItem('apiToken', response.data.token)
        dispatch({type: authConstants.LOGIN_SUCCESS})

        history.push('/')
      }
    }
  }

  logout() {
    localStorage.removeItem('apiToken');

    return {type: authConstants.LOGOUT};
  }

  register(email, password, firstName, lastName) {
    return async dispatch => {
      const response = await this.authService.register(
        email, password, firstName, lastName
      )

      if (!response.ok)
        dispatch({type: authConstants.REGISTER_FAILURE, 'data': response.data})
      else {
        dispatch({type: authConstants.REGISTER_SUCCESS})
        history.push('/login/')
      }
    }
  }
}
