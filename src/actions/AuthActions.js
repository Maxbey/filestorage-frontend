import {authConstants} from '../constants/authConstants'
import {AuthService} from '../services/AuthService'

export class AuthActions {
  constructor() {
    this.authService = new AuthService()
  }
  login(email, password) {
    return dispatch => {
      this.authService.login(email, password).then(response => {
        if (!response.ok)
          dispatch(failure(response.data))
        else {
          localStorage.setItem('apiToken', response.data.token);
          dispatch(success())
        }
      })
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
    return dispatch => {
      this.authService.register(email, password, firstName, lastName).then(user => {
        dispatch(success(user))
      }, error => {
        dispatch(failure(error))
      })
    }

    function success(user){
      return { type: authConstants.REGISTER_SUCCESS, user }
    }

    function failure(error){
      return { type: authConstants.REGISTER_FAILURE, error }
    }
  }
}
