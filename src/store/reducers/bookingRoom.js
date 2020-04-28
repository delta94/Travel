import * as actionTypes from '../actionTypes'

const initialState = []

const getBookingRoomSuccess = (state, action) => {
  // debugger;
  return action.rooms;
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.GET_BOOKING_ROOM_SUCCESS: return getBookingRoomSuccess(state, action);
      default: return state;
  }
}

export default reducer;