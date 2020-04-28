import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function* getRoom(action) {
  try {    
    // debugger;
      let result = yield axios.get(`http://localhost:8888/rooms/${action.roomID}`)
      console.log(result);
      // debugger;
      if(result.data){
          yield put(actions.getRoomSuccess(result.data.data.room));
      }
  } catch (error) {
      alert(error.response.data);
  }
}

const tokenConfig = () => {
  //* Get token from localStorage
  const token = localStorage.getItem('x-auth-token')
  if(!token) alert('You are not sign in');
  // debugger;
  //* set up headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  //* If token existed, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};

export function* bookRoom(action) {
  try {
      let token = localStorage.getItem('x-auth-token');
      console.log(token);
      if (token == null) {
          
      }
      else{
        // debugger;
          let result = yield axios.post(`/bookRoom`, action.roomData, tokenConfig())
        // debugger;
          alert(result.data.message)
      }
  } catch (error) {
      alert(error.response.message)
  }
}

export function* cancelRoom(action) {
  try {
      let token = localStorage.getItem('x-auth-token');
      console.log(token);
      if (token == null) {
          
      }
      else{
        // debugger;
          let result = yield axios.post(`/cancelRoom`, {roomID: action.roomID}, tokenConfig())
        // debugger;
          alert(result.data.message)
          yield getBookingRoom(action);
      }
  } catch (error) {
      alert(error.response.message)
  }
}

export function* getBookingRoom(action) {
  try {
     
        // debugger;
          let result = yield axios.get(`/bookingRoom`, tokenConfig())
          yield put(actions.getBookingRoomSuccess(result.data.data));
        // debugger;
   
  } catch (error) {
      alert(error.response.message)
  }
} 

