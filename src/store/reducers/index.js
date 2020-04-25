import { combineReducers } from 'redux'

import user from './user'
import roomList from './roomList'

const rootReducer = combineReducers({
  user,
  roomList
})

export default rootReducer;