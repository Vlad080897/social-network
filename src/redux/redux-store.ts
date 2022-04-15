import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import newsPageReducer from "./newsPageReducer";
import friendsPageReducer from './friendsPageReducer'
import massagesPageReducer from "./massagesPageReducer";
import authReducer from "./authReducer";
import thunkMiddleWear from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";
import userPageReducer2 from "./userPageReducer2";
import profilePageReducer2 from "./profilePageReducer2";
import { ThunkAction } from 'redux-thunk';

let redusers = combineReducers({
    profilePage2: profilePageReducer2,
    newsPage: newsPageReducer,
    friendsPage: friendsPageReducer,
    massagesPage: massagesPageReducer,
    authReducer: authReducer,
    appReducer: appReducer,
    usersPageReducer2: userPageReducer2,
    form: formReducer

})

let store = createStore(redusers, applyMiddleware(thunkMiddleWear));

type RootReducerType = typeof redusers
export type AppStateType = ReturnType<RootReducerType>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>




export default store