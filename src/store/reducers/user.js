import * as actionTypes from '../actionTypes'

const initialState = {
  isAuth: false,
  userInfo: {
    email: '',
    name: ''
  }
}

const signInSuccess = (state, action) => {
  return {
    isAuth: true
  }
}
const signUpSuccess = (state, action) => {
  return {
    isAuth: true
  }
}
const getUserInfoSuccess  = (state, action) => {
  return {
    isAuth: true,
    user: action.userData
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SIGN_IN_LOCAL_SUCCESS: return signInSuccess(state, action);
      case actionTypes.SIGN_UP_LOCAL_SUCCESS: return signUpSuccess(state, action);
      case actionTypes.GET_USER_INFO_SUCCESS: return getUserInfoSuccess(state, action);
      default: return state;
  }
}

export default reducer;