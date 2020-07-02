import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { BorrowerService } from './APIService';
import { SET_USER_DETAILS } from './constants';

const token = localStorage.getItem('token')

if(token) {
    BorrowerService.checkLogin().then(res => {
        if (res.success === 1) {
            store.dispatch({
                type: SET_USER_DETAILS,
                payload: res.data
            })
        }
    })
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
