import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';

import { signInSaga, signUpSaga, getInfoUserSaga, updatePassword } from './user'
import { getAllRoom } from './roomList'
import { getRoom, bookRoom, getBookingRoom, cancelRoom } from './room'

export function* watchRoomList() {
  yield takeEvery(actionTypes.GET_ALL_ROOM, getAllRoom)
} 

export function* watchRoom() {
  yield takeEvery(actionTypes.GET_ROOM, getRoom)
  yield takeEvery(actionTypes.BOOK_ROOM, bookRoom)
  yield takeEvery(actionTypes.CANCEL_ROOM, cancelRoom)
  yield takeEvery(actionTypes.GET_BOOKING_ROOM, getBookingRoom)
}

export function* watchUser() {
  yield takeEvery(actionTypes.SIGN_IN_LOCAL, signInSaga);
  yield takeEvery("SIGN_UP_LOCAL", signUpSaga)
  yield takeEvery(actionTypes.GET_USER_INFO, getInfoUserSaga);
  yield takeEvery(actionTypes.UPDATE_PASSWORD, updatePassword);
}

  

