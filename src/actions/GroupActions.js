import {groupConstants} from '../constants/groupConstants'
import {GroupService} from '../services/GroupService'
import { history } from '../middleware/history';

export class GroupActions {
  constructor() {
    this.groupService = new GroupService()
  }

  getGroups() {
    return async dispatch => {
      const response = await this.groupService.getGroups()

      dispatch({type: groupConstants.GET_GROUPS, 'data': response.data})
    }
  }

  getGroup(id) {
    return async dispatch => {
      const response = await this.groupService.getGroup(id)

      dispatch({type: groupConstants.GET_GROUP, 'data': response.data})
    }
  }

  createGroup(name, users, files) {
    return async dispatch => {
      const response = await this.groupService.create(name, users, files)

      if (!response.ok)
        dispatch({type: groupConstants.GROUP_FAILURE, 'data': response.data})
      else {
        history.push('/groups/')
      }
    }
  }

  updateGroup(name, users, files) {
    return async dispatch => {
      const response = await this.groupService.update(name, users, files)

      if (!response.ok)
        dispatch({type: groupConstants.GROUP_FAILURE, 'data': response.data})
      else {
        history.push('/groups/')
      }
    }
  }

  deleteGroup(id) {
    return async dispatch => {
      const response = await this.groupService.delete(id)
      history.push('/groups/')
    }
  }
}
