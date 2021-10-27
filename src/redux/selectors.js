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
    debugger
    return state.massagesPage.massagesPage.dialogs
}



