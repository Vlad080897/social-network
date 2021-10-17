import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, { addPost, subscribe, updateText } from './redux/store'
import App from './components/app/app';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom'






ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <App store={store.getState()} dispatch={store.dispatch.bind(store)}></App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'))





window.store = store;











