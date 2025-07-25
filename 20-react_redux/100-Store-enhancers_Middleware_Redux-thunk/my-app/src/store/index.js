// Импортируем createStore для создания хранилища, combineReducers
// для объединения редюсеров, и compose для композиции enhancers
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

import { thunk as ReduxThunk } from "redux-thunk";

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

/**
 * `enhancer` - Это кастомный усилитель (enhancer) для Redux-стора.
 * Enhancers расширяют возможности `createStore` и могут изменять его поведение.
 * В данном случае, этот enhancer перехватывает вызовы `dispatch` и модифицирует их.
 *
 * @param {Function} createStore - Оригинальная функция `createStore` из Redux.
 * @returns {Function} Функция, которая принимает аргументы `createStore` и возвращает изменённый стор.
 */
const enhancer = (createStore) => (...args) => {
    // Вызываем оригинальный createStore, чтобы получить базовый стор
    const store = createStore(...args);

    // Сохраняем ссылку на оригинальную функцию `dispatch` стора
    const oldDispatch = store.dispatch;

    /**
     * Переопределяем метод `dispatch` стора.
     * Теперь `dispatch` может принимать не только объекты экшенов,
     * но и строки (типы экшенов). Если передана строка, она автоматически
     * преобразуется в объект экшена с этим типом.
     *
     * Это позволяет писать `dispatch('HERO_CREATED')` вместо `dispatch({type: 'HERO_CREATED'})`.
     * Однако, обычно рекомендуется всегда диспатчить полные объекты экшенов для ясности и типизации.
     *
     * @param {string|object} action - Экшен, который нужно отправить.
     * Может быть строкой (типом) или объектом.
     * @returns {any} Результат вызова оригинального `dispatch`.
     */
    store.dispatch = (action) => {
        // Если экшен является строкой, оборачиваем его в объект { type: action }
        if (typeof action === 'string') {
            return oldDispatch({type: action});
        }
        // В противном случае, диспатчим экшен как есть (если это уже объект)
        return oldDispatch(action);
    }
    // Возвращаем модифицированный стор
    return store;
}

/**
 * `rootReducer` - Это корневой редюсер приложения, созданный с помощью `combineReducers`.
 * Он объединяет несколько независимых редюсеров в один большой редюсер.
 * Каждому редюсеру присваивается ключ, который определяет название соответствующего
 * фрагмента состояния в глобальном Redux-сторе.
 *
 * Например:
 * - Состояние, управляемое `heroes` редюсером, будет доступно по `state.heroes`.
 * - Состояние, управляемое `filters` редюсером, будет доступно по `state.filters`.
 */
const rootReducer = combineReducers({
    heroes,  // Ключ 'heroes' в глобальном состоянии будет соответствовать состоянию из heroes-редюсера
    filters  // Ключ 'filters' в глобальном состоянии будет соответствовать состоянию из filters-редюсера
});

/**
 * `store` - Главное хранилище (стор) Redux-приложения.
 * Создается с помощью функции `createStore`.
 *
 * @param {Function} rootReducer - Корневой редюсер, который будет обрабатывать все экшены
 * и возвращать новое состояние приложения.
 * @param {Function} [enhancer] - Композиция усилителей стора. Используется `compose`
 * для объединения нескольких enhancers в одну функцию.
 * - Первым применяется ваш `enhancer`, который модифицирует `dispatch`.
 * - Затем применяется Redux DevTools Extension, если он доступен.
 *
 * Примечание: `createStore` в Redux помечен как устаревший (`deprecated`).
 * Рекомендуется использовать `configureStore` из `@reduxjs/toolkit` для новой разработки,
 * так как он предоставляет более простой способ настройки стора с встроенными мидлварами
 * и инструментами для отладки. Функции, подобные `enhancer` (для модификации `dispatch`),
 * часто могут быть реализованы как мидлвары в Redux Toolkit.
 */
const store = createStore(
    rootReducer,
    compose(applyMiddleware(ReduxThunk,stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    // `compose` объединяет несколько функций enhancers в одну,
    // выполняя их справа налево.
    // compose(
    //     enhancer, // Ваш кастомный enhancer, который модифицирует `dispatch`.
    // Интеграция с Redux DevTools Extension.
    // Если расширение доступно в окне браузера, оно будет активировано.
    // `compose` корректно обрабатывает `undefined`, если расширение не установлено
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);

export default store;
