import { authThunk } from "./authReducer";

const SET_INITIALIZED_DATA = 'SET_INITIALIZED_DATA';

const initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_DATA:
            return {
                ...state,
                isInitialized: true
            }
        default: return state
    }

}

export const setInitializedData = () => {
    
    return {
        type: SET_INITIALIZED_DATA,
    }
}

export const initializedThunk = () => (dispatch) => {
    const initializedUserData = dispatch(authThunk())
    Promise.all([initializedUserData])
        .then(() => {
            dispatch(setInitializedData());
        })
}



export default appReducer