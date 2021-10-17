import { usersAPI, profileAPI } from "../api/api";
const ADD_POST = 'ADD_POST';
const UP_DATE_TEXT = 'UP-DATE-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'


const initialState = {
    newPostText: [
        { id: 1, text: 'Hi' },
        { id: 2, text: "I'm here!" },
        { id: 3, text: 'Miss me?' }
    ],
    postText: '',
    profile: null,
    status: '',


}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: [...state.newPostText, { id: '', text: action.text }],
            }
        case UP_DATE_TEXT:
            return {
                ...state,
                postText: action.text,

            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:

            return {

                ...state,
                status: action.status
            }


        default: return state;
    }
}

export const addPostActionCreator = (userText) => {
    debugger
    return {
        type: 'ADD_POST',
        text: userText,
    }
}

export const addPostThunkCreator = (newPostNext) => {
    debugger
    return (dispatch) => {
        return dispatch(addPostActionCreator(newPostNext))
    }
}

export const updatePostActionCreator = (userText) => {
    return ({
        type: 'UP-DATE-TEXT',
        text: userText,
    })
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }

}

export const setStatus = (status) => {

    return {

        type: SET_STATUS,
        status
    }
}


export const currentUserProfileThunk = (id) => {
    return (dispatch) => {
        usersAPI.profileOfMainPage(id).then((data) => {
            dispatch(setUserProfile(data));
        })
    }
}

export const getStatus = (userId) => {

    return (dispatch) => {
        profileAPI.getStatus(userId).then((data) => {

            dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status) => {
    debugger
    return (dispatch) => {
        profileAPI.setStatus(status).then((data) => {
            if (data.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
    }
}





export default profilePageReducer