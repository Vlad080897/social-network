import userPageReducer2, { actions, initialStateType } from "../redux/userPageReducer2";
import { usersType } from "../types/types";

let state: initialStateType;

beforeEach(() => {
    state = {
        totalUserCount: 0,
        currentPage: 1,
        users: [{ name: 'Vlad', id: 1, photos: { large: null, small: null }, status: null, followed: false }],
        portion: 10,
        following: [] as Array<number>
    }
})

test('how follow/unfollow buttons work', () => {

    let newState = userPageReducer2(state, actions.startFollowUserAC(1))
    expect(newState.users[0].followed).toBeTruthy();
    
})