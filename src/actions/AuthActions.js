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
        dispatch(failure(response.data))
      else {
        localStorage.setItem('apiToken', response.data.token);
        dispatch(success())

        history.push('/')
      }
    }

    function success(){
      return {type: authConstants.LOGIN_SUCCESS}
    }

    function failure(data){
      return {type: authConstants.LOGIN_FAILURE, data}
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
        dispatch(failure(response.data))
      else {
        dispatch(success())
        history.push('/login/')
      }

    }

    function success(user){
      return { type: authConstants.REGISTER_SUCCESS, user }
    }

    function failure(data){
      return { type: authConstants.REGISTER_FAILURE, data }
    }
  }
}
