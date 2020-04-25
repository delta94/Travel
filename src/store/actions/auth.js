import * as actions from '../actionTypes';
export const signInLocal = (signinData) => ({
    type: actions.SIGN_IN_LOCAL,
    signinData
})

export const signInLocalSuccess = () => ({
    type: actions.SIGN_IN_LOCAL_SUCCESS,
})

export const signUpLocal = (signupData) =>{ 
    debugger;
    return ({
    type: actions.SIGN_UP_LOCAL,
    signupData
})}

export const signUpLocalSuccess = () => ({
    type: actions.SIGN_UP_LOCAL_SUCCESS,
})

export const getUserInfo = () => ({
    type: actions.GET_USER_INFO
})

export const getUserInfoSuccess = (userData) => ({
    type: actions.GET_USER_INFO_SUCCESS,
    userData
})

export const signOut = () => ({
    type: actions.SIGN_OUT
})