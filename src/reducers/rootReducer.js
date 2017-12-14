import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { registerReducer } from './registerReducer'
import { drawerReducer } from './drawerReducer'

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  drawerReducer
});

export default rootReducer;
