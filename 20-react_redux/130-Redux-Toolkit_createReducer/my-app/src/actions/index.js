
import {createAction} from "@reduxjs/toolkit";

/**
 * `fetchHeroes` - это thunk-экшен (функция-экшен, которая возвращает другую функцию вместо обычного объекта экшена).
 * Этот thunk предназначен для асинхронной загрузки списка героев с сервера.
 * Он демонстрирует паттерн "триплет экшенов": начало загрузки, успешное завершение и ошибка.
 *
 * @param {function} request - Функция для выполнения HTTP-запросов (например, из вашего `useHttp` хука).
 * Она передается как аргумент, делая этот thunk более гибким и тестируемым.
 * @returns {function} Возвращает функцию, которая принимает `dispatch` как аргумент.
 * Эта вложенная функция будет выполнена Redux Thunk мидлваром.
 */
export const fetchHeroes = (request) => (dispatch) => {
    // Шаг 1: Диспатчим экшен начала загрузки.
    // Это сигнализирует Redux-стору, что процесс загрузки героев начался,
    // и UI может отобразить индикатор загрузки (например, спиннер).
    dispatch(heroesFetching());
    // Шаг 2: Выполняем HTTP-запрос для получения данных о героях.
    // Используем переданную функцию `request`
    request("http://localhost:3001/heroes")
        // Шаг 3 (успех): Если запрос успешно завершен...
        .then(data => {
            // Диспатчим экшен успешного получения данных, передавая полученные данные (payload).
            // Это обновит состояние Redux-стора массивом героев.
            dispatch(heroesFetched(data));
        })
        // Шаг 4 (ошибка): Если в процессе запроса или обработки промиса произошла ошибка...
        .catch(() => {
            // Диспатчим экшен ошибки загрузки.
            // Это обновит состояние Redux-стора, сигнализируя об ошибке,
            // и UI может отобразить соответствующее сообщение.
            dispatch(heroesFetchingError());
        })
}

/**
 * @function heroesFetching
 * @description Экшн-креатор, сигнализирующий о начале загрузки списка героев.
 * Используется для установки состояния загрузки в Redux-сторе.
 * @returns {Object} Объект экшена типа 'HEROES_FETCHING'.
 */
// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

export const heroesFetching = createAction('HEROES_FETCHING');

/**
 * @function heroesFetched
 * @description Экшн-креатор, сигнализирующий об успешном завершении загрузки списка героев.
 * Передает полученные данные героев в Redux-стор.
 * @param {Array<Object>} heroes - Массив объектов героев, полученных с сервера.
 * @returns {Object} Объект экшена типа 'HEROES_FETCHED' с полезной нагрузкой (payload).
 */
// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

export const heroesFetched = createAction('HEROES_FETCHED');

/**
 * @function heroesFetchingError
 * @description Экшн-креатор, сигнализирующий о возникновении ошибки при загрузке списка героев.
 * Используется для обновления состояния ошибки в Redux-сторе.
 * @returns {Object} Объект экшена типа 'HEROES_FETCHING_ERROR'.
 */
// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }
export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
/**
 * `fetchFilters` - это Thunk-экшен (асинхронный экшен) для загрузки списка фильтров с сервера.
 *
 * Thunk-экшены — это функции, которые возвращают другую функцию,
 * которая, в свою очередь, получает `dispatch` и `getState` (если нужно) в качестве аргументов.
 * Это позволяет выполнять асинхронные операции и диспатчить несколько экшенов
 * в зависимости от хода асинхронной операции (начало, успех, ошибка).
 *
 * @param {Function} request - Функция для выполнения HTTP-запросов (например, из вашего `useHttp` хука).
 * Она должна возвращать Promise.
 * @returns {Function} Функция-thunk, которая принимает `dispatch` и выполняет логику загрузки.
 */
export const fetchFilters = (request) => (dispatch) => {
    // 1. Диспатчим экшен, сообщающий Redux-стору о начале загрузки фильтров.
    // Это может быть использовано для отображения индикатора загрузки (например, спиннера)
    dispatch(filtersFetching());
    // 2. Выполняем HTTP-запрос на сервер для получения списка фильтров.
    // URL: "http://localhost:3001/filters"
    request("http://localhost:3001/filters")
        // 3. Обрабатываем успешный ответ от сервера (первый `.then()`).
        .then(data => {
            console.log("HeroesFilters.useEffect", data);
            return data; // Важно: возвращаем 'data', чтобы следующий .then() её получил
        })
        // 4. Обрабатываем успешное получение данных (второй `.then()`).
        // Диспатчим экшен `filtersFetched`, передавая полученные данные в качестве payload.
        // Это обновит состояние Redux-стора списком фильтров
        .then(data => dispatch(filtersFetched(data)))
        // 5. Обрабатываем любые ошибки, возникшие в процессе запроса или обработки.
        // Диспатчим экшен `filtersFetchingError`, сообщая стору об ошибке загрузки.
        // Это может быть использовано для отображения сообщения об ошибке пользователю
        .catch(() => dispatch(filtersFetchingError()))
}

/**
 * @function filtersFetching
 * @description Экшн-креатор, сигнализирующий о начале загрузки списка фильтров.
 * Используется для установки состояния загрузки фильтров в Redux-сторе.
 * @returns {Object} Объект экшена типа 'FILTERS_FETCHING'.
 */
export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

/**
 * @function filtersFetched
 * @description Экшн-креатор, сигнализирующий об успешном завершении загрузки списка фильтров.
 * Передает полученные данные фильтров в Redux-стор.
 * @param {Array<Object>} filters - Массив объектов фильтров, полученных с сервера.
 * @returns {Object} Объект экшена типа 'FILTERS_FETCHED' с полезной нагрузкой (payload).
 */
export const filtersFetched = (filters) => {
    console.log('filtersFetched.FILTERS_FETCHED', filters);
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

/**
 * @function filtersFetchingError
 * @description Экшн-креатор, сигнализирующий о возникновении ошибки при загрузке списка фильтров.
 * Используется для обновления состояния ошибки фильтров в Redux-сторе.
 * @returns {Object} Объект экшена типа 'FILTERS_FETCHING_ERROR'.
 */
export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

/**
 * @function activeFilterChanged
 * @description Экшн-креатор, сигнализирующий об изменении активного фильтра.
 * Обновляет текущий активный фильтр в Redux-сторе.
 * @param {string} filter - Строковое значение нового активного фильтра (например, 'all', 'fire', 'water').
 * @returns {Object} Объект экшена типа 'ACTIVE_FILTER_CHANGED' с полезной нагрузкой (payload).
 */
export const activeFilterChanged = (filter) => {
    return {
        type: 'ACTIVE_FILTER_CHANGED',
        payload: filter
    }
}

// export const activeFilterChanged = (filter) => (dispatch) => {
//     setTimeout(() => {
//         dispatch({
//             type: 'ACTIVE_FILTER_CHANGED',
//             payload: filter
//         })
//     }, 1000)
// }

/**
 * @function heroCreated
 * @description Экшн-креатор, сигнализирующий о создании нового героя.
 * Добавляет нового героя в список в Redux-сторе.
 * @param {Object} hero - Объект нового героя, который был успешно создан.
 * @returns {Object} Объект экшена типа 'HERO_CREATED' с полезной нагрузкой (payload).
 */
// export const heroCreated = (hero) => {
//     return {
//         type: 'HERO_CREATED',
//         payload: hero
//     }
// }
export const heroCreated  = createAction('HERO_CREATED');
/**
 * @function heroDeleted
 * @description Экшн-креатор, сигнализирующий об удалении героя.
 * Удаляет героя из списка в Redux-сторе по его ID.
 * @param {string | number} id - Уникальный идентификатор героя, который был удален.
 * @returns {Object} Объект экшена типа 'HERO_DELETED' с полезной нагрузкой (payload).
 */
// export const heroDeleted = (id) => {
//     return {
//         type: 'HERO_DELETED',
//         payload: id
//     }
// }
export const heroDeleted = createAction('HERO_DELETED');