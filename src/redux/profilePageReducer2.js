import { profileAPI2, userAPI2 } from "../api/api"
import { stopSubmit } from "redux-form";

const GET_CURRENT_USER_PROFILE = 'GET_CURRENT_USER_PROFILE'
const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_STATUS = 'SET_STATUS';
const SET_NEW_PROFILE_PHOTO = 'SET_NEW_PROFILE_PHOTO';
const SET_CURRENT_ERROR = 'SET_CURRENT_ERROR'

const initialState = {
    profile: null,
    posts: [],
    status: '',
}

const profilePageReducer2 = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, { id: '', text: action.newPostText }]
            }

        case SET_STATUS:
            return {
                ...state, status: action.status
            }

        case SET_NEW_PROFILE_PHOTO:
            const copyState = { ...state }
            copyState.profile = { ...state.profile }
            copyState.profile.photos = action.photos
            return copyState


        default: return state
    }

}

const getCurrentUserProfileAC = (profile) => {

    return {
        type: GET_CURRENT_USER_PROFILE,
        profile

    }
}

const addPostAC = (newPostText) => {
    return {
        type: ADD_NEW_POST,
        newPostText
    }
}

export const getCurrentUserProfile = (currentUserID) => {
    return (dispatch) => {
        userAPI2.getCurrentUserProfile(currentUserID).then((data) => {
            dispatch(getCurrentUserProfileAC(data))
        })
    }
}

export const addPost = (newPostText) => {
    return (dispatch) => {
        dispatch(addPostAC(newPostText))
    }
}

const setStatusAC = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        profileAPI2.getStatus(id).then((data) => {
            dispatch(setStatusAC(data))
        })
    }
}

export const setStatus2 = (statusText) => {
    return (dispatch) => {
        profileAPI2.setStatus(statusText).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatusAC(statusText));
            }
        })
    }
}

const setNewPhotoAC = (photos) => {
    return {
        type: SET_NEW_PROFILE_PHOTO,
        photos
    }
}

export const setNewPhoto = (photoFile) => {
    return (dispatch) => {
        profileAPI2.setProfilePhoto(photoFile).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setNewPhotoAC(data.data.photos));
            }
        })
    }
}


export const saveProfileInfo = (profile) => {
    return (dispatch, getState) => {
        const userId = getState().authReducer.id
        profileAPI2.saveProfileInfo(profile).then((data) => {
            if (data.resultCode === 0) {
                dispatch(getCurrentUserProfile(userId));
            }
            if (data.resultCode === 1) {
                debugger
                dispatch(stopSubmit('editProfile', { _error: data.messages[0] }))
            }
        })
    }
}



export default profilePageReducer2