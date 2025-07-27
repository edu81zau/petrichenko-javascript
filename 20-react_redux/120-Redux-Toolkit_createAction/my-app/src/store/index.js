
import {configureStore} from "@reduxjs/toolkit";

// Импортируем редюсер для управления состоянием героев
import heroes from '../reducers/heroes';
// Импортируем редюсер для управления состоянием фильтров
import filters from '../reducers/filters';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({type: action});
    }
    // В противном случае, диспатчим экшен как есть (если это уже объект)
    return next(action);
};

const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
