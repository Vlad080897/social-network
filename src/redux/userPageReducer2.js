import { userAPI2 } from "../api/api"

const GET_USERS = 'GET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const START_FOLLOW_USER = 'START_FOLLOW_USER'
const STOP_FOLLOW_USER = 'STOP_FOLLOW_USER'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'




const initialState = {
    totalUserCount: 0,
    currentPage: 1,
    users: [],
    portion: 10,
    following: []
}

const userPageReducer2 = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS:

            return {
                ...state, users: [...action.users], totalUserCount: action.totalUserCount
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page

            }
        case START_FOLLOW_USER:
            debugger
            return {
                ...state,
                users: [...state.users].map((el) => {
                    if (el.id === action.id) {
                        return { ...el, followed: true }
                    }
                    return el
                })
            }

        case STOP_FOLLOW_USER:
            return {
                ...state,
                users: [...state.users].map((el) => {
                    if (el.id === action.id) {
                        return { ...el, followed: false }
                    }
                    return el
                })
            }

        case TOGGLE_FOLLOWING:
            debugger
            return {
                ...state, following: action.isFollowing ? [...state.following, action.id] : state.following.filter(id => id !== action.id)
            }

        default: return state
    }

}

const getUsersAC = (users, totalUserCount) => {
    return {
        type: GET_USERS,
        users,
        totalUserCount
    }
}

const setCurrentPageNumberAC = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}
export const getUsers = (pageNumber) => {
    return (dispatch) => {
        userAPI2.getUsers(pageNumber).then((data) => {
            dispatch(getUsersAC(data.items, data.totalCount))
        })

    }
}

export const setCurrentPageNumber = (page) => {
    return (dispatch) => {
        dispatch(setCurrentPageNumberAC(page))
    }
}

const startFollowUserAC = (id) => {
    return {
        type: START_FOLLOW_USER,
        id
    }
}

const stopFollowUserAC = (id) => {
    return {
        type: STOP_FOLLOW_USER,
        id
    }
}

const toggleFollowingAC = (isFollowing, id) => {
    return {
        type: TOGGLE_FOLLOWING,
        isFollowing,
        id
    }
}

export const startFollowUser = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingAC(true, id))
        userAPI2.follow(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(startFollowUserAC(id))
                dispatch(toggleFollowingAC(false, id))
            }

        })
    }
}

export const stopFollowUser = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingAC(true, id))
        userAPI2.unFollow(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(stopFollowUserAC(id))
                dispatch(toggleFollowingAC(false, id))
            }
        })
    }
}



export default userPageReducer2