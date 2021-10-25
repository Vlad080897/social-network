import { authAPI, securityApi, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS';


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
                captchaUrl: action.data.captchaUrl,
                rememberMe: action.rememberMe,
                isLogged: (!action.data.id) ? false : true,
            }
        case GET_CAPTCHA_SUCCESS:
            return {
                ...state,
                captchaUrl: action.url
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

export const getCaptchaAC = (url) => {
    return {
        type: GET_CAPTCHA_SUCCESS,
        url
    }
}

export const authThunk = () => {
    return (dispatch) =>
        usersAPI.auth().then(response => {
            dispatch(setUserData(response.data.data));
        })
}



export const loginThunk = (email, password, rememberMe, captcha) => (dispatch) => {
    const response = authAPI.login(email, password, rememberMe, captcha).then(response => response);
    Promise.all([response]).then((response) => {
        debugger
        if (response[0].resultCode === 0) {
            authAPI.authMe().then(response => {
                dispatch(setUserData(response.data.data, rememberMe))
            })
        } else if (response[0].resultCode === 1) {
            let massagesError = response[0].messages.length > 0 ? response[0].messages : 'Some error';
            dispatch(stopSubmit('login', { _error: massagesError }));
        }
        else if (response[0].resultCode === 10) {
            dispatch(getCaptchaUrl());
            let massagesError = response[0].messages.length > 0 ? response[0].messages : 'Some error';
            dispatch(stopSubmit('login', { _error: massagesError }));

        }
    })

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
                        isLogged: false,
                        captchaUrl: null
                    }))
                })
            }
        })
    }
}

export const getCaptchaUrl = () => {
    return (dispatch) => {
        securityApi.getCaptcha().then((data) => {
            dispatch(getCaptchaAC(data.data.url))
        })
    }
}




export default authReducer