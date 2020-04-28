import * as actionTypes from '../actionTypes'

const initialState = {
  isAuth: false,
  userInfo: {
    email: '',
    name: '',
  }
}

const signInSuccess = (state, action) => {
  return {
    isAuth: true,
    userInfo: {
      email: '',
      name: '',
    }
  }
}
const signUpSuccess = (state, action) => {
  return {
    isAuth: true,
    userInfo: {
      email: '',
      name: '',
    }
  }
}
const getUserInfoSuccess  = (state, action) => {
  return {
    isAuth: true,
    userInfo: action.userData
  }
}
const signOut = (state, action) => {
  localStorage.removeItem('x-auth-token')
  return {
    isAuth: false,
    userInfo: {}
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SIGN_IN_LOCAL_SUCCESS: return signInSuccess(state, action);
      case actionTypes.SIGN_UP_LOCAL_SUCCESS: return signUpSuccess(state, action);
      case actionTypes.GET_USER_INFO_SUCCESS: return getUserInfoSuccess(state, action);
      case actionTypes.SIGN_OUT: return signOut(state, action);
      default: return state;
  }
}

export default reducer;