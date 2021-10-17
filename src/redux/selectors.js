import { createSelector } from 'reselect'

const getUsersPage = (state) => {
    return state.usersPageReducer
}

export const getUsersPageSelector = createSelector(getUsersPage, (usersPage) => {
    return usersPage
})



