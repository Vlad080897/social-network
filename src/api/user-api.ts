import { AxiosResponse } from 'axios';
import { usersType, profileType } from './../types/types';
import { instance } from './api';


type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
    fieldsErrors: Array<string>
}

type getUsersType = {
    error: string
    totalCount: number
    items: Array<usersType>
}


export const userAPI = {
    getUsers(pageNumber: number, term: string, choosenFriends: boolean | null) {
        debugger
        return instance.get(`users?page=${pageNumber}&term=${term}&friend=${choosenFriends}`).then((response: AxiosResponse<getUsersType>) => response.data);
    },
    getCurrentUserProfile(userID: number | null) {
        return instance.get<profileType>(`profile/${userID}`).then((response) => response.data);
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then((response) => response.data);
    },
    unFollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then((response) => response.data);
    },
}