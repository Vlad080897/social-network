// import { useReducer } from "react";
// import profilePageReducer from "./profilePageReducer";
// import newsPageReducer from "./newsPageReducer";

// const UP_DATE_NEWS_TEXT = 'UP_DATE_NEWS_TEXT';
// const ADD_NEWS_POST = 'ADD_NEWS_POST';


// const store = {
//     _state: {
//         massagesPage: {
//             dialogs: [
//                 { id: 1, name: 'Vlad' },
//                 { id: 2, name: 'Oleg' },
//                 { id: 3, name: 'Dima' },
//                 { id: 4, name: 'Viktor' }
//             ]
//             ,

//             massages: [
//                 { massages: 'Hi, how are you' },
//                 { massages: 'dfdfdfd' },
//                 { massages: 'Hi, how wfgwegare you' },
//                 { massages: 'Hi, hwefweow are you' },
//             ]
//         },
//         profilePage: {
//             newPostText: [
//                 { id: 1, text: 'Hi' },
//                 { id: 2, text: "I'm here!" },
//                 { id: 3, text: 'Miss me?' }
//             ],
//             postText: '',
//         },
//         friendsPage: {
//             friends1: [{
//                 name: 'Oleg',
//                 age: 21,
//                 city: 'Kyiv',
//                 sex: 'male',
//             }],
//             friends2: [{
//                 name: 'Alex',
//                 age: 32,
//                 city: 'ZP',
//                 sex: 'male',
//             }],
//             friends3: [{
//                 name: 'Dima',
//                 age: 29,
//                 city: 'Lviv',
//                 sex: 'male',
//             }],
//             friends4: [{
//                 name: 'Dima',
//                 age: 29,
//                 city: 'Lviv',
//                 sex: 'male',
//             }],
//             friends5: [{
//                 name: 'Dima',
//                 age: 29,
//                 city: 'Lviv',
//                 sex: 'male',
//             }],
//         },
//         newsPage: {
//             allNews: [],
//             newsPageText: '',

//         }
//     },
//     getState() {
//         return this._state
//     },
//     rerenderEntireTree() {
//         console.log('Error');
//     },
//     subscribe(observer) {
//         this.rerenderEntireTree = observer;
//     },

//     dispatch(action) {

//         this._state.profilePage = profilePageReducer(this._state.profilePage, action)
//         this._state.newsPage = newsPageReducer(this._state.newsPage, action)
//         this.rerenderEntireTree();


//     },

    


// }




// window.store = store;


// export default store
