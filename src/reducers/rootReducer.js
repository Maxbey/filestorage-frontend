import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { registerReducer } from './registerReducer'
import { drawerReducer } from './drawerReducer'
import { fileReducer } from './fileReducer'
import { groupReducer } from './groupReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  drawerReducer,
  fileReducer,
  groupReducer,
  userReducer
});

export default rootReducer;
