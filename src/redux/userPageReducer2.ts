import { AppStateType } from './redux-store'
import { usersType } from "../types/types"
import { ThunkAction } from 'redux-thunk'
import { userAPI } from '../api/user-api'


export const initialState = {
    totalUserCount: 0,
    currentPage: 1,
    users: [] as Array<usersType>,
    portion: 10,
    following: [] as Array<number>,
    filter: {
        term: '',
        choosenFriends: null as null | boolean
    },
    loader: false
}

const userPageReducer2 = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, users: [...action.users], totalUserCount: action.totalUserCount
            }

        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.page

            }
        case 'START_FOLLOW_USER':
            return {
                ...state,
                users: [...state.users].map((el) => {
                    if (el.id === action.id) {
                        return { ...el, followed: true }
                    }
                    return el
                })
            }
        case 'STOP_FOLLOW_USER':
            return {
                ...state,
                users: [...state.users].map((el) => {
                    if (el.id === action.id) {
                        return { ...el, followed: false }
                    }
                    return el
                })
            }
        case 'SC/USER/SET_CURRENT_FILTER': {
            return {
                ...state,
                filter: action.filter
            }
        }
        case 'TOGGLE_FOLLOWING':
            return {
                ...state, following: action.isFollowing ? [...state.following, action.id] : state.following.filter(id => id !== action.id)
            }

        case 'SC/USER/TOGGLE_LOADER':
            return {
                ...state, loader: action.isLoading
            }

        default: return state
    }

}

export const actions = {
    getUsersAC: (users: Array<usersType>, totalUserCount: number) => {
        return {
            type: 'GET_USERS',
            users,
            totalUserCount
        } as const
    },
    setCurrentPageNumberAC: (page: number) => {
        return {
            type: 'SET_CURRENT_PAGE',
            page
        } as const
    },
    setCurrentFilter: (term: string, choosenFriends: boolean | null) => {
        return {
            type: 'SC/USER/SET_CURRENT_FILTER',
            filter: { term, choosenFriends }
        } as const
    },
    startFollowUserAC: (id: number) => {
        return {
            type: 'START_FOLLOW_USER',
            id
        } as const
    },

    stopFollowUserAC: (id: number) => {
        return {
            type: 'STOP_FOLLOW_USER',
            id
        } as const
    },
    toggleFollowingAC: (isFollowing: boolean, id: number) => {
        return {
            type: 'TOGGLE_FOLLOWING',
            isFollowing,
            id
        } as const
    },
    toggleLoader: (isLoading: boolean) => {
        return {
            type: 'SC/USER/TOGGLE_LOADER',
            isLoading
        } as const

    }
}

export const getUsers = (pageNumber: number, term: string, choosenFriends: boolean | null)
    : ThunkType => {
    return async (dispatch) => {
        
        dispatch(actions.toggleLoader(true))
        let data = await userAPI.getUsers(pageNumber, term, choosenFriends)
        dispatch(actions.setCurrentPageNumberAC(pageNumber))
        dispatch(actions.setCurrentFilter(term, choosenFriends))
        dispatch(actions.getUsersAC(data.items, data.totalCount))

        dispatch(actions.toggleLoader(false))

    }
}

export const startFollowUser = (id: number)
    : ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFollowingAC(true, id))
        let data = await userAPI.follow(id)
        if (data.resultCode === 0) {
            dispatch(actions.startFollowUserAC(id))
        }
        dispatch(actions.toggleFollowingAC(false, id))
    }
}

export const stopFollowUser = (id: number)
    : ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFollowingAC(true, id))
        let data = await userAPI.unFollow(id)
        if (data.resultCode === 0) {
            dispatch(actions.stopFollowUserAC(id))
        }
        dispatch(actions.toggleFollowingAC(false, id))
    }
}




export default userPageReducer2

export type initialStateType = typeof initialState

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>
type ActionTypes = ReturnType<PropsTypes<typeof actions>>
type PropsTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type UsersFilterType = typeof initialState.filter