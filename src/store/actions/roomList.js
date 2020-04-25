import * as actions from '../actionTypes'

export const getAllRoom = () => {
    debugger;
    return ({
  type: actions.GET_ALL_ROOM,
})}

export const getAllRoomSuccess = (rooms) => ({
  type: actions.GET_ALL_ROOM_SUCCESS,
  rooms
})