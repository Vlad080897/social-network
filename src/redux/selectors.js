import { createSelector } from 'reselect'

const getUsersPage = (state) => {
    return state.usersPageReducer
}

export const getUsersPageSelector = createSelector(getUsersPage, (usersPage) => {
    return usersPage
})

export const getMassages = (state) => {
    return state.massagesPage.massagesPage.massages
}

export const getUsersMassages = (state) => {
    return state.massagesPage.massagesPage.dialogs
}

export const getAuthReducerState = (state) => {
    return state.authReducer
}

export const getInitializedData = (state) => {
    return state.appReducer.isInitialized
}

export const getProfilePageInfo = (state) => {
    return state.profilePage2.profile
}

export const getButtonCondition = (state) => {
    return state.profilePage2.btnDisable
}

export const getIdOfCurrentUser = (state) => {
    return state.authReducer.id
}




