import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { stopSubmit } from "redux-form";
import { PhotosType } from "../types/types";
import { profileType, PostType } from "../types/types";
import { userAPI } from '../api/user-api';
import { profileAPI } from '../api/profile-api';

const initialState = {
    profile: null as profileType | null,
    posts: [] as Array<PostType>,
    status: '' as string | null,
    loader: false
}


const profilePageReducer2 = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SC/PROFILE/GET_CURRENT_USER_PROFILE':
            return {
                ...state,
                profile: action.profile,
            }
        case 'SC/PROFILE/ADD_NEW_POST':
            return {
                ...state,
                posts: [...state.posts, { id: 1, text: action.newPostText }]
            }

        case 'SC/PROFILE/SET_STATUS':
            return {
                ...state, status: action.status
            }

        case 'SC/PROFILE/SET_NEW_PROFILE_PHOTO':
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as profileType
            }
        case 'SC/PROFILE/TOGGLE_LOADER':
            return {
                ...state, loader: action.isLoading
            }

        default: return state

    }

}



const actions = {

    getCurrentUserProfileAC: (profile: profileType) => {

        return {
            type: 'SC/PROFILE/GET_CURRENT_USER_PROFILE',
            profile

        } as const
    },

    addPostAC: (newPostText: string) => {
        return {
            type: 'SC/PROFILE/ADD_NEW_POST',
            newPostText
        } as const
    },

    setNewPhotoAC: (photos: PhotosType) => {
        return {
            type: 'SC/PROFILE/SET_NEW_PROFILE_PHOTO',
            photos
        } as const
    },

    setStatusAC: (status: string | null) => {
        return {
            type: 'SC/PROFILE/SET_STATUS',
            status
        } as const
    },
    toggleLoader: (isLoading: boolean) => {
        return {
            type: 'SC/PROFILE/TOGGLE_LOADER',
            isLoading
        } as const

    }

}


export const getCurrentUserProfile = (currentUserID: number | null)
    : ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleLoader(true))
        let data = await userAPI.getCurrentUserProfile(currentUserID)
        dispatch(actions.getCurrentUserProfileAC(data))
        dispatch(actions.toggleLoader(false))
    }
}


export const addPost = (newPostText: string)
    : ThunkType => {
    return (dispatch) => {
        dispatch(actions.addPostAC(newPostText))
    }
}

export const getStatus = (id: number | null)
    : ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(id)
        dispatch(actions.setStatusAC(data))
    }
}


export const setStatus2 = (statusText: string)
    : ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.setStatus(statusText)
        if (data.resultCode === 0) {
            dispatch(actions.setStatusAC(statusText));
        }
    }
}

export const setNewPhoto = (photoFile: File)
    : ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.setProfilePhoto(photoFile)
        debugger
        if (data.resultCode === 0) {
            dispatch(actions.setNewPhotoAC(data.data.photos));
        }
    }
}

export const saveProfileInfo = (profile: profileType)
    : ThunkType => {
    return async (dispatch: any, getState: any) => {
        const userId = getState().authReducer.id
        debugger
        const data = await profileAPI.saveProfileInfo(profile)
        if (data.resultCode === 0) {
            dispatch(getCurrentUserProfile(userId));
        }
        if (data.resultCode === 1) {
            dispatch(stopSubmit('editProfile', { _error: data.messages[0] }))
        }
    }
}


export default profilePageReducer2

type InitialStateType = typeof initialState;

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>
type ActionTypes = ReturnType<PropsType<typeof actions>>;
type PropsType<T> = T extends { [key: string]: infer U } ? U : never;