import { applyMiddleware, combineReducers, createStore } from "redux";
import newsPageReducer from "./newsPageReducer";
import profilePageReducer from "./profilePageReducer";
import friendsPageReducer from './friendsPageReducer'
import massagesPageReducer from "./massagesPageReducer";
import usersPageReducer from "./usersPageReducer"
import authReducer from "./authReducer";
import thunkMiddleWear from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";
import userPageReducer2 from "./userPageReducer2";
import profilePageReducer2 from "./profilePageReducer2";

let redusers = combineReducers({
    profilePage: profilePageReducer,
    profilePage2: profilePageReducer2,
    newsPage: newsPageReducer,
    friendsPage: friendsPageReducer,
    massagesPage: massagesPageReducer,
    // usersPageReducer: usersPageReducer,
    authReducer: authReducer,
    appReducer: appReducer,
    usersPageReducer2: userPageReducer2,
    form: formReducer

})


let store = createStore(redusers, applyMiddleware(thunkMiddleWear));




export default store