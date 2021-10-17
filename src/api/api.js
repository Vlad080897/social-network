import * as axios from 'axios'
import { setStatus } from '../redux/profilePageReducer'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '811d0565-1079-4452-98ce-2115a9a82b40',
    }
})

export const usersAPI = {
    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}`).then(response => response.data)
    },

    profileOfMainPage(userID) {
        return instance.get(`profile/${userID}`).then(response => response.data)
    },
    unFollowUser(Id) {
        return instance.delete(`follow/${Id}`).then(response => response.data)
    },
    followUser(Id) {
        return instance.post(`follow/${Id}`).then(response => response.data)
    },
    auth() {

        return instance.get('auth/me')
    }

}

export const authAPI = {
    authMe() {
        return usersAPI.auth()
    },

    login(email, password, rememberMe) {
        return instance.post('auth/login', { email: email, password: password, rememberMe: rememberMe }).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    },
    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response)
    }
}

export const profileAPI = {
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`).then(response => response.data)
    },

    setStatus(status) {
        return instance.put(`/profile/status`, { status: status })
    }
}

export const userAPI2 = {
    getUsers(pageNumber) {
        return instance.get(`users?page=${pageNumber}`).then((response) => response.data);
    },
    getCurrentUserProfile(userID) {

        return instance.get(`profile/${userID}`).then((response) => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then((response) => response.data);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`).then((response) => response.data);
    },
}

export const profileAPI2 = {
    getStatus(userId) {
        debugger
        return instance.get(`/profile/status/${userId}`).then((response) => response.data);
    },
    setStatus(statusText) {
        return instance.put(`/profile/status`, { status: statusText }).then((response) => response.data)
    }
}




