import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function* getAllRoom(action) {
  try {    
      let result = yield axios.get(process.env.REACT_APP_URL_ROOMS)
    //   debugger;
      if(result.data){
          yield put(actions.getAllRoomSuccess(result.data.data.rooms));
      }
  } catch (error) {
      alert(error.response.data);
  }
}