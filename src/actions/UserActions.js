import { userConstants } from '../constants/userConstants'
import { UserService } from '../services/UserService'

export class UserActions {
  constructor() {
    this.userService = new UserService()
  }

  getUsers(email) {
    return async dispatch => {
      const response = await this.userService.getUsers(email)
      dispatch({
        type: userConstants.GET_USERS,
        data: response.data
      })
    }
  }
}
