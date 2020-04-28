import * as actionTypes from '../actionTypes'

const initialState = {}

const getRoomSuccess = (state, action) => {
  console.log(action.room );
  return action.room;
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.GET_ROOM_SUCCESS: return getRoomSuccess(state, action);
      default: return state;
  }
}

export default reducer;