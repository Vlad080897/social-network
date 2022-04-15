import { usersType } from './../types/types';
import { userAPI } from './../api/user-api';
import { getUsers, startFollowUser } from '../redux/userPageReducer2';
jest.mock('./../api/user-api')



test('follow-thunk-test', async () => {

    let result: ResponseType = {
        resultCode: 0,
        messages: [],
        data: {},
        fieldsErrors: [],
    };

    // @ts-ignore
    userAPI.follow.mockReturnValue(result)

    const thunk = startFollowUser(1);
    const dispatch = jest.fn();

    // @ts-ignore
    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(3);
})

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
    fieldsErrors: Array<string>
}


test('get-users-thunk-test', async () => {

    let response: getUsersType = {
        error: '',
        totalCount: 10,
        items: [{ name: 'Vlad', id: 1, photos: { large: null, small: null }, 
        status: 'test', followed: false }]
    }

    // @ts-ignore
    userAPI.getUsers.mockReturnValue(response)

    const getUsersThunk = getUsers(1, 'test', true);
    const dispatch = jest.fn()

    // @ts-ignore
    await getUsersThunk(dispatch)

    expect(dispatch).toBeCalledTimes(3)

    type getUsersType = {
        error: string
        totalCount: number
        items: Array<usersType>
    }

})

