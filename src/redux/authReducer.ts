import { securityApi } from './../api/security-api';
import { BaseThunkType } from './redux-store';
import { FormAction, stopSubmit } from "redux-form";
import { authAPI } from '../api/auth-api';

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isLogged: false,
    captchaUrl: null as string | null,
}

type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/AUTH/SET_USER_DATA':
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isLogged: (!action.id) ? false : true,
            }
        case 'SN/AUTH/GET_CAPTCHA_SUCCESS':
            return {
                ...state,
                captchaUrl: action.url
            }
        default: return state
    }

}

const actions = {
    setUserDataAC: (email: string | null, id: number | null, login: string | null) => {
        return {
            type: 'SN/AUTH/SET_USER_DATA',
            email,
            id,
            login,
        } as const
    },
    getCaptchaAC: (url: string) => {
        return {
            type: 'SN/AUTH/GET_CAPTCHA_SUCCESS',
            url
        } as const
    }
}

export const authThunk = ()
    : ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.authMe()
        dispatch(actions.setUserDataAC(response.data.email, response.data.id, response.data.login))
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string)
    : ThunkType => async (dispatch) => {

        const response = await authAPI.login(email, password, rememberMe, captcha).then((response) => response);

        Promise.all([response]).then((response) => {
            if (response[0].resultCode === 0) {
                authAPI.authMe().then((response) => {
                    dispatch(actions.setUserDataAC(response.data.email, response.data.id, response.data.login))
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

export const logoutThunk = ()
    : ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.resultCode === 0) {
            debugger
            await authAPI.authMe()
            dispatch(actions.setUserDataAC(null, null, null))
        }
    }
}


export const getCaptchaUrl = ()
    : ThunkType => {
    return async (dispatch) => {
        let data = await securityApi.getCaptcha()
        dispatch(actions.getCaptchaAC(data.data.url))
    }
}

export default authReducer


type ActionTypes = ReturnType<PropsType<typeof actions>>;
type PropsType<T> = T extends { [key: string]: infer U } ? U : never;
type ThunkType = BaseThunkType<ActionTypes | FormAction>