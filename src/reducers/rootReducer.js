import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { registerReducer } from './registerReducer'
import { drawerReducer } from './drawerReducer'
import { fileReducer } from './fileReducer'

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  drawerReducer,
  fileReducer
});

export default rootReducer;
