// Импортируем createSlice из Redux Toolkit.
import {createSlice} from "@reduxjs/toolkit";

/**
 * `initialState` - Начальное состояние для этого среза (slice) Redux-стора.
 * Определяет структуру и начальные значения данных, которыми будет управлять `filtersSlice`.
 *
 * @property {Array} filters - Массив объектов доступных фильтров, полученных с сервера.
 * Изначально пустой.
 * @property {string} filtersLoadingStatus - Статус загрузки списка фильтров.
 * Возможные значения: 'idle', 'loading', 'error'.
 * @property {string} activeFilter - Название текущего активного фильтра. По умолчанию 'all'.
 */
const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

/**
 * `filtersSlice` - Это "срез" (slice) Redux-стора, созданный с помощью `createSlice`.
 * Он объединяет в себе редюсер, типы экшенов и экшен-криэйторы для управления
 * состоянием фильтров.
 *
 * @param {string} name - Уникальное имя этого среза. Используется как префикс для типов экшенов
 * (например, 'filters/filtersFetching').
 * @param {object} initialState - Объект начального состояния.
 * @param {object} reducers - Объект с функциями-редюсерами, которые обрабатывают экшены.
 * Благодаря встроенной библиотеке Immer, редюсеры написаны в "мутирующем" стиле,
 * что делает код более читаемым, при этом сохраняя иммутабельность состояния.
 */
const filtersSlice = createSlice({
    name: "filters", // Имя среза, используется для генерации типов экшенов.
    initialState, // Начальное состояние.
    reducers: {
        /**
         * `filtersFetching` - Редюсер для обработки начала загрузки списка фильтров.
         * Обновляет статус загрузки на "loading".
         */
        filtersFetching: state => {
            state.filtersLoadingStatus = "loading";
        },
        /**
         * `filtersFetched` - Редюсер для обработки успешной загрузки фильтров.
         * Обновляет статус на "idle" и заполняет массив `filters` данными из `action.payload`.
         * @param {object} state - Текущее состояние.
         * @param {object} action - Объект экшена, содержащий данные в `action.payload`.
         */
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = "idle";
            state.filters = action.payload; // Прямое присвоение, Immer гарантирует иммутабельность.
        },
        /**
         * `filtersFetchingError` - Редюсер для обработки ошибки загрузки фильтров.
         * Устанавливает статус на "error".
         */
        filtersFetchingError: state => {
            state.filtersLoadingStatus = "error";
        },
        /**
         * `filtersChanged` - Редюсер для обработки изменения активного фильтра.
         * Обновляет `activeFilter` значением, переданным в `action.payload`.
         * @param {object} state - Текущее состояние.
         * @param {object} action - Объект экшена, содержащий название нового фильтра в `action.payload`.
         */
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
});

// Деструктурируем объект, возвращаемый createSlice, чтобы получить сгенерированные экшены и редюсер.
const {actions, reducer} = filtersSlice;

export default reducer; // Экспортируем редюсер по умолчанию для использования в Redux-сторе.

// Экспортируем все экшен-криэйторы для использования в компонентах
// (например, при вызове `dispatch(filtersChanged('fire'))`).
export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filtersChanged
} = actions;
