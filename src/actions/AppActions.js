import {appConstants} from '../constants/appConstants'

export const AppActions = {
  openDrawer: openDrawer,
  closeDrawer: closeDrawer
}

function openDrawer(){
  return dispatch => {
    dispatch({type: appConstants.OPEN_DRAWER})
  }
}

function closeDrawer(){
  return dispatch => {
    dispatch({type: appConstants.CLOSE_DRAWER})
  }
}
