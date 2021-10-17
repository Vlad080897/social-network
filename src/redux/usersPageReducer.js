import { profileAPI, usersAPI } from "../api/api"

const USER_FOLLOW = 'USER_FOLLOWED'
const USER_UN_FOLLOW = 'USER_UN_FOLLOW'
const SET_USER = 'SET_USER'
const SET_TOTAL_USERS_PAGES = 'SET_TOTAL_USERS_PAGES'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'
const TOGGLE_LOADING = 'TOGGLE_LOADING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'


const initialState = {
    users: [],
    portionUsers: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    following: [],
    status: ''


}


const UsersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_FOLLOW:
            return {
                ...state,
                users: [...state.users.map(el => {
                    if (action.id === el.id) {
                        return { ...el, followed: false }
                    }
                    return el
                })]
            }
        case USER_UN_FOLLOW:
            return {
                ...state,
                users: [...state.users.map(el => {
                    if (action.id === el.id) {
                        return { ...el, followed: true }
                    }
                    return el
                }
                )]
            }
        case SET_USER:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,

            }
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersNumber
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                following: action.isFetching ? [...state.following, action.id] : state.following.filter(id => id != action.id),
            }





        default: return state
    }



}

export const follow = (userID) => {
    return {
        type: USER_FOLLOW,
        id: userID
    }

}

export const unFollow = (userID) => {

    return {
        type: USER_UN_FOLLOW,
        id: userID
    }
}

export const setUser = (users) => {
    return {
        type: SET_USER,
        users: users
    }
}

export const setPages = (allUsers) => {
    return {
        type: SET_TOTAL_USERS_PAGES,
        allUsers
    }
}

export const setCurrentPage = (currentPage) => {

    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export const totalUserCount = (usersNumber) => {
    return {
        type: TOTAL_USERS_COUNT,
        usersNumber
    }
}

export const isLoading = (isLoading) => {
    return {
        type: TOGGLE_LOADING,
        isLoading
    }
}

export const toggleFollowing = (isFetching, id) => {

    return {
        type: TOGGLE_FOLLOWING,
        isFetching,
        id
    }
}


export const getUserThunkCreator = (currentPage) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        usersAPI.getUsers(currentPage).then((data) => {
            dispatch(setUser(data.items));
            dispatch(totalUserCount(data.totalCount));
            dispatch(isLoading(false));
        })

    }
}

export const onPageChangedThunkCreator = (p, currentPage) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        dispatch(setCurrentPage(p));
        usersAPI.getUsers(p).then((data) => {
            dispatch(setUser(data.items));
            dispatch(isLoading(false));
        })
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, id))
        usersAPI.unFollowUser(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(follow(id));
                dispatch(toggleFollowing(false, id))
            }
        })

    }
}

export const unFollowThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, id));
        usersAPI.followUser(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollow(id));
                dispatch(toggleFollowing(false, id));
            }
        })
    }
}



export default UsersPageReducer

