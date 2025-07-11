import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {legacy_createStore as createStore} from 'redux';
//import {createStore} from "redux";

const initialState = {value: 0};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "INC":
            return {
                ...state,
                value: state.value + 1,
            };
        case "DEC":
            return {
                ...state,
                value: state.value - 1,
            };
        case "RND":
            return {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value});

document.getElementById('inc').addEventListener('click', (e) => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', (e) => {
    store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', (e) => {
    const value = Math.floor(Math.random() * 10);
    store.dispatch(rnd(value));
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

    </React.StrictMode>
);