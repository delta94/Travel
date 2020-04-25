import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function* signInSaga(action) {
  try {    
      let result = yield axios.post(process.env.REACT_APP_URL_LOG_IN, action.signinData)
      debugger;
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
  debugger;
  try {    
    debugger;
      let result = yield axios.post("http://localhost:8888/signup", action.signupData)
      debugger;
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