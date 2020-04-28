import * as actions from '../actionTypes'

export const getRoom = (roomID) => {
    // debugger;
    return ({
  type: actions.GET_ROOM,
  roomID
})}

export const getRoomSuccess = (room) => ({
  type: actions.GET_ROOM_SUCCESS,
  room
})

export const getBookingRoom = () => {
  return ({
type: actions.GET_BOOKING_ROOM,
})}

export const getBookingRoomSuccess = (rooms) => ({
type: actions.GET_BOOKING_ROOM_SUCCESS,
rooms
})


export const bookRoom = (roomData) => {
  // debugger;
  return ({
  type: actions.BOOK_ROOM,
  roomData
})}

export const cancelRoom = (roomID) => {
  // debugger;
  return ({
  type: actions.CANCEL_ROOM,
  roomID
})}
