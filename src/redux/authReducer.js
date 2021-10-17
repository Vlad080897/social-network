import { authAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isLogged: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
                rememberMe: action.rememberMe,
                isLogged: (!action.data.id) ? false : true,
                captchaUrl: action.captcha
            }
        default: return state
    }

}

export const setUserData = (data, rememberMe, captcha) => {
    return {
        type: SET_USER_DATA,
        data,
        rememberMe,
        captcha
    }
}

export const authThunk = () => {
    return (dispatch) => 
        usersAPI.auth().then(response => {
            dispatch(setUserData(response.data.data));
        })
}



export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                authAPI.authMe().then(response => {
                    dispatch(setUserData(response.data.data, rememberMe))
                })
            } else if (response.resultCode === 1) {
                let massagesError = response.messages.length > 0 ? response.messages : 'Some error';
                dispatch(stopSubmit('login', { _error: massagesError }));
            }
            else if (response.resultCode === 10) {
                authAPI.getCaptcha().then(response => {
                    dispatch(setUserData({
                        id: undefined,
                        email: null,
                        login: null,
                    }, false, response.data.url))
                })
            }
        })
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout().then((response) => {
            if (response.resultCode === 0) {
                authAPI.authMe().then(response => {
                    dispatch(setUserData({
                        id: null,
                        email: null,
                        login: null,
                    }, false))
                })
            }
        })
    }
}
export default authReducer