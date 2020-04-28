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

export const filterRoomList = (roomData) => ({
  type: actions.FILTER_ROOM_LIST,
  roomData
})

export const featuredRoomList = () =>{
  debugger;
  return ({
  type: actions.FEATURED_ROOM_LIST,
})}