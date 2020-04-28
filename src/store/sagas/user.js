import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

const tokenConfig = () => {
  //* Get token from localStorage
  const token = localStorage.getItem('x-auth-token')
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

export function* signInSaga(action) {
  try {    
      let result = yield axios.post(process.env.REACT_APP_URL_LOG_IN, action.signinData)
      // debugger;
      if(result.data){
        localStorage.setItem(
            'x-auth-token', result.data.data.token
        )
        yield put(actions.signInLocalSuccess())
      }
  } catch (error) {
      alert(error.response.data.message);
  }
}

export function* signUpSaga(action) {
  // debugger;
  try {    
    // debugger;
      let result = yield axios.post("http://localhost:8888/signup", action.signupData)
      // debugger;
      if(result.data){
        localStorage.setItem(
          'x-auth-token', result.data.data.token
      )
      yield put(actions.signUpLocalSuccess())
    }
  } catch (error) {   
      alert(error.response.data.message);
  }
}



export function* getInfoUserSaga(action) {
  try {
      let token = localStorage.getItem('x-auth-token');
      console.log(token);
      if (token == null) {
          
      }
      else{
          let result = yield axios.get(`/me`, tokenConfig())
        // debugger;
          if(result.data){
              yield put(actions.getUserInfoSuccess(result.data.data.user));
          }
      }
  } catch (error) {
      
  }
}

export function* updatePassword(action) {
  try {
      let token = localStorage.getItem('x-auth-token');
      console.log(token);
      if (token == null) {
          
      }
      else{
          let result = yield axios.post(`/updatePassword`, action.passwordData, tokenConfig());
          // debugger;
          alert(result.data.message)
      }
  } catch (error) {
      alert(error.response.data.message);
  }
}