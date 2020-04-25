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

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SIGN_IN_SUCCESS: return signInSuccess(state, action);
      default: return state;
  }
}

export default reducer;