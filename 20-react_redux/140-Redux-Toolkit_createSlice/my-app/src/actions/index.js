
import {heroesFetching, heroesFetched, heroesFetchingError} from "../components/heroesList/heroesSlice";
import {filtersFetching, filtersFetched, filtersFetchingError} from "../components/heroesFilters/filtersSlice";

/**
 * `fetchHeroes` - это thunk-экшен, созданный для выполнения асинхронной операции по загрузке героев.
 * Thunk - это функция, которая возвращает другую функцию, принимающую в качестве аргумента `dispatch`.
 * Это позволяет нам отправлять несколько экшенов в зависимости от этапов асинхронной операции (запрос,
 * успех, ошибка).
 *
 * @param {Function} request - Функция для выполнения HTTP-запросов (например, из кастомного хука
 * `useHttp`).
 * @returns {Function} Thunk-функция, которая при вызове получит `dispatch` от Redux.
 */
export const fetchHeroes = (request) => (dispatch) => {
    // Диспатчим экшен начала загрузки.
    // Это изменяет состояние `heroesLoadingStatus` на 'loading', что может быть использовано
    // для отображения спиннера или индикатора загрузки в UI.
    dispatch(heroesFetching());

    // Выполняем GET-запрос к API для получения списка героев.
    request("http://localhost:3001/heroes")
        .then(data => {
            // Если запрос успешен, диспатчим экшен успешной загрузки.
            // В `payload` экшена передаются полученные данные (`data`).
            // Это обновит массив героев в состоянии и сбросит статус загрузки на 'idle'.
            dispatch(heroesFetched(data));
        })
        .catch(() => {
            // Если в процессе запроса произошла ошибка (например, сбой сети или 404),
            // диспатчим экшен ошибки. Это изменит статус загрузки на 'error',
            // что позволяет отобразить сообщение об ошибке пользователю.
            dispatch(heroesFetchingError());
        });
};

/**
 * `fetchFilters` - это ещё один thunk-экшен, аналогичный `fetchHeroes`,
 * но предназначенный для загрузки списка фильтров.
 *
 * @param {Function} request - Функция для выполнения HTTP-запросов.
 * @returns {Function} Thunk-функция, которая при вызове получит `dispatch` от Redux.
 */
export const fetchFilters = (request) => (dispatch) => {
    // Диспатчим экшен начала загрузки фильтров.
    // Обновляет `filtersLoadingStatus` на 'loading'.
    dispatch(filtersFetching());

    // Выполняем GET-запрос к API для получения списка доступных фильтров.
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data))) // Если запрос успешен, диспатчим экшен с данными.
        .catch(() => dispatch(filtersFetchingError())); // В случае ошибки, диспатчим экшен ошибки.
};


// import {heroesFetching, heroesFetched, heroesFetchingError} from "../components/heroesList/heroesSlice";
// import {filtersFetching, filtersFetched, filtersFetchingError} from "../components/heroesFilters/filtersSlice";
//
// /**
//  * `fetchHeroes` - это thunk-экшен (функция-экшен, которая возвращает другую функцию вместо обычного объекта экшена).
//  * Этот thunk предназначен для асинхронной загрузки списка героев с сервера.
//  * Он демонстрирует паттерн "триплет экшенов": начало загрузки, успешное завершение и ошибка.
//  *
//  * @param {function} request - Функция для выполнения HTTP-запросов (например, из вашего `useHttp` хука).
//  * Она передается как аргумент, делая этот thunk более гибким и тестируемым.
//  * @returns {function} Возвращает функцию, которая принимает `dispatch` как аргумент.
//  * Эта вложенная функция будет выполнена Redux Thunk мидлваром.
//  */
// export const fetchHeroes = (request) => (dispatch) => {
//     // Шаг 1: Диспатчим экшен начала загрузки.
//     // Это сигнализирует Redux-стору, что процесс загрузки героев начался,
//     // и UI может отобразить индикатор загрузки (например, спиннер).
//     dispatch(heroesFetching());
//     // Шаг 2: Выполняем HTTP-запрос для получения данных о героях.
//     // Используем переданную функцию `request`
//     request("http://localhost:3001/heroes")
//         // Шаг 3 (успех): Если запрос успешно завершен...
//         .then(data => {
//             // Диспатчим экшен успешного получения данных, передавая полученные данные (payload).
//             // Это обновит состояние Redux-стора массивом героев.
//             dispatch(heroesFetched(data));
//         })
//         // Шаг 4 (ошибка): Если в процессе запроса или обработки промиса произошла ошибка...
//         .catch(() => {
//             // Диспатчим экшен ошибки загрузки.
//             // Это обновит состояние Redux-стора, сигнализируя об ошибке,
//             // и UI может отобразить соответствующее сообщение.
//             dispatch(heroesFetchingError());
//         })
// }
//
// export const fetchFilters = (request) => (dispatch) => {
//     dispatch(filtersFetching());
//     request("http://localhost:3001/filters")
//         .then(data => dispatch(filtersFetched(data)))
//         .catch(() => dispatch(filtersFetchingError()))
// }