// Импортируем createStore для создания хранилища и combineReducers для объединения редюсеров из Redux
import {createStore, combineReducers} from 'redux';
// Импортируем редюсер для управления состоянием героев
import heroes from '../reducers/heroes';
// Импортируем редюсер для управления состоянием фильтров
import filters from '../reducers/filters';

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
 * @param {Function} [enhancer] - Опциональный усилитель стора. Здесь используется
 * для интеграции с расширением Redux DevTools Extension для браузера,
 * что значительно упрощает отладку состояния приложения.
 *
 * Примечание: `createStore` в Redux помечен как устаревший (`deprecated`).
 * Рекомендуется использовать `configureStore` из `@reduxjs/toolkit` для новой разработки,
 * так как он предоставляет более простой способ настройки стора с встроенными мидлварами
 * и инструментами для отладки.
 */
const store = createStore(
    rootReducer,
    // Настройка для интеграции с Redux DevTools Extension.
    // Если расширение доступно в окне браузера, оно будет активировано.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

//
// const store = createStore( combineReducers({heroes, filters}),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//
// export default store;