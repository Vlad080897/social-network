import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'






ReactDOM.render(
    <Provider store={store}>
        <HashRouter >
            <App store={store.getState()} dispatch={store.dispatch.bind(store)}></App>
        </HashRouter>
    </Provider>,
    document.querySelector('#root'))

















