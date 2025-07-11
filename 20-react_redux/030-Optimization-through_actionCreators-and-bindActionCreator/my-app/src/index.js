import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {legacy_createStore as createStore, bindActionCreators} from 'redux';

import reducer from './reducer';
import * as actions from './actions';

//createStore — это основная функция в библиотеке Redux, которая создает хранилище (store).
// Хранилище — это центральный объект, который содержит все состояние вашего приложения.
//На сегодняшний день функция createStore считается устаревшей (deprecated).
// Она не будет удалена из библиотеки, но разработчики Redux настоятельно рекомендуют
// использовать Redux Toolkit и его функцию configureStore.
const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }
//
// const incDispatch = bindActionCreator(inc,dispatch);
// const decDispatch = bindActionCreator(dec,dispatch);
// const rndDispatch = bindActionCreator(rnd,dispatch);

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', (e) => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

    </React.StrictMode>
);