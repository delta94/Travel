import { combineReducers } from 'redux'

import user from './user'
import roomList from './roomList'
import room from './room'
import bookingRoom from './bookingRoom'
//import cac reducer de combine
const rootReducer = combineReducers({
  user,
  roomList,
  room,
  bookingRoom
})

export default rootReducer;