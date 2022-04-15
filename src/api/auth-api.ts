import { instance } from './api';

type ResponseType<D = {}> = {
    data: D
    resultCode: number
    messages: Array<string>
}

type authMeDataType = {
    id: number
    email: string
    login: string
}

type logInType = {
    data: { userId: number }
}

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<authMeDataType>>('auth/me').then(response => response.data)
    },

    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post<ResponseType<logInType>>('auth/login', { email, password, rememberMe, captcha }).then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login').then(response => response.data)
    },

}
