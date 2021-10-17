import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';
import { updateText } from './redux/state';


export let rerenderEntireTree = (state, addPost) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateText={updateText}></App>, document.querySelector('#root'));
}