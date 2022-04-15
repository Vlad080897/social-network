import { createSelector } from 'reselect'
import { AppStateType } from './redux-store'

const getUsersPage = (state: AppStateType) => {
    return state.usersPageReducer2
}

export const getUsersPageSelector = createSelector(getUsersPage, (usersPage) => {
    return usersPage
})

export const getMassages = (state: AppStateType) => {
    return state.massagesPage.massagesPage.massages
}

export const getUsersMassages = (state: AppStateType) => {
    return state.massagesPage.massagesPage.dialogs
}

export const getAuthReducerState = (state: AppStateType) => {
    return state.authReducer.login
}

export const getInitializedData = (state: AppStateType) => {
    return state.appReducer.isInitialized
}

export const getProfilePageInfo = (state: AppStateType) => {
    return state.profilePage2.profile
}

export const getIdOfCurrentUser = (state: AppStateType) => {
    return state.authReducer.id
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPageReducer2.currentPage
}

export const getTotalItemsCount = (state: AppStateType) => {
    return state.usersPageReducer2.totalUserCount
}

export const getPortion = (state: AppStateType) => {
    return state.usersPageReducer2.portion
}

export const getFilter = (state: AppStateType) => {
    return state.usersPageReducer2.filter
}

export const getUsersForComponent = (state: AppStateType) => {
    return state.usersPageReducer2.users
}

export const getFollowing = (state: AppStateType) => {
    return state.usersPageReducer2.following
}

export const getUsersFilter = (state: AppStateType) => {
    return state.usersPageReducer2.filter
}

export const getLoader = (state: AppStateType) => {
    return state.usersPageReducer2.loader
}

export const getIsOwner = (state: AppStateType) => {
    return state.profilePage2
}

export const getProfileLoader = (state: AppStateType) => {
    return state.profilePage2.loader
}


export const getIsLogged = (state: AppStateType) => {
    return state.authReducer.isLogged
}









