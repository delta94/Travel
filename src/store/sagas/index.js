import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';

import { signInSaga, signUpSaga } from './user'
import { getAllRoom } from './roomList'

export function* watchRoomList() {
  yield takeEvery(actionTypes.GET_ALL_ROOM, getAllRoom)
} 

export function* watchUser() {
  yield takeEvery(actionTypes.SIGN_IN_LOCAL, signInSaga);
  yield takeEvery("SIGN_UP_LOCAL", signUpSaga)
}

  

