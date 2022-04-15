import { BaseThunkType } from './redux-store';
import { authThunk } from "./authReducer";

const initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/SET_INITIALIZED_DATA':
            return {
                ...state,
                isInitialized: true
            }
        default: return state
    }

}

const actions = {
    setInitializedData: () => ({ type: 'SN/APP/SET_INITIALIZED_DATA' } as const)
}

export const initializedThunk = ()
    : ThunkType => async (dispatch) => {
        const initializedUserData = dispatch(authThunk())
        await Promise.all([initializedUserData])
        dispatch(actions.setInitializedData());
    }




export default appReducer

type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionTypes>
type ActionTypes = PropsType<typeof actions>
type PropsType<T> = T extends { [key: string]: (...arg: any) => infer U } ? U : never;
