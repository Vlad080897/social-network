import { FriendsType } from "../types/types"



const initialState = {
    friendsPage: [
        {
            name: 'Oleg',
            age: 21,
            city: 'Kyiv',
            sex: 'male',
        },
        {
            name: 'Alex',
            age: 32,
            city: 'ZP',
            sex: 'male',
        },
        {
            name: 'Dima',
            age: 29,
            city: 'Lviv',
            sex: 'male',
        },
        {
            name: 'Dima',
            age: 29,
            city: 'Lviv',
            sex: 'male',
        },
        {
            name: 'Dima',
            age: 29,
            city: 'Lviv',
            sex: 'male',
        },
        {
            name: 'Dima',
            age: 29,
            city: 'Lviv',
            sex: 'male',
        }
    ] as Array<FriendsType>,
}

type initialStateType = typeof initialState


const friendPageReducer = (state = initialState, action: any) => {
    return state
}

export default friendPageReducer