// Импортируем createSlice из Redux Toolkit.
import { createSlice } from "@reduxjs/toolkit";

/**
 * `initialState` - Начальное состояние для этого среза (slice) Redux-стора.
 * Определяет структуру и начальные значения данных, которыми будет управлять `heroesSlice`.
 *
 * @property {Array} heroes - Массив объектов всех героев. Изначально пустой.
 * @property {string} heroesLoadingStatus - Статус загрузки списка героев, может быть 'idle',
 * 'loading' или 'error'.
 */
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

/**
 * `heroesSlice` - Это "срез" (slice) Redux-стора, созданный с помощью `createSlice`.
 * Он объединяет в себе редюсер, типы экшенов и экшен-криэйторы для управления
 * состоянием героев. Это устраняет большую часть шаблонного кода,
 * характерного для классического Redux.
 *
 * @param {string} name - Уникальное имя этого среза. Используется как префикс для типов экшенов
 * (например, 'heroes/heroesFetching').
 * @param {object} initialState - Начальное состояние для этого среза.
 * @param {object} reducers - Объект, где ключи - это имена экшенов, а значения - функции-редюсеры.
 *
 * Важно: Благодаря встроенной библиотеке Immer, эти редюсеры написаны в "мутирующем" стиле,
 * хотя на самом деле Immer создает новую, иммутабельную копию состояния под капотом.
 * Это делает код более читаемым и простым для понимания.
 */
const heroesSlice = createSlice({
    name: "heroes", // Имя среза, используется для генерации типов экшенов.
    initialState, // Начальное состояние.
    reducers: {
        /**
         * `heroesFetching` - Редюсер для обработки начала загрузки героев.
         * Обновляет статус загрузки на "loading".
         */
        heroesFetching: state => {
            state.heroesLoadingStatus = "loading"
        },
        /**
         * `heroesFetched` - Редюсер для обработки успешной загрузки героев.
         * Обновляет статус на "idle" и заполняет массив `heroes` данными из `action.payload`.
         * @param {object} state - Текущее состояние.
         * @param {object} action - Объект экшена, содержит данные в `action.payload`.
         */
        heroesFetched: (state, action) => {
            state.heroesLoadingStatus = "idle";
            state.heroes = action.payload; // Прямое присвоение, Immer гарантирует иммутабельность.
        },
        /**
         * `heroesFetchingError` - Редюсер для обработки ошибки загрузки героев.
         * Устанавливает статус на "error".
         */
        heroesFetchingError: state => {
            state.heroesLoadingStatus = "error";
        },
        /**
         * `heroCreated` - Редюсер для обработки создания нового героя.
         * Добавляет нового героя (из `action.payload`) в конец массива `heroes`.
         * Используем метод `push`, который кажется мутацией, но Immer обрабатывает это безопасно.
         * @param {object} state - Текущее состояние.
         * @param {object} action - Объект экшена, содержит данные нового героя в `action.payload`.
         */
        heroCreated: (state, action) => {
            state.heroes.push(action.payload);
        },
        /**
         * `heroDeleted` - Редюсер для обработки удаления героя.
         * Создает новый массив `heroes`, исключая героя с ID, соответствующим `action.payload`.
         * @param {object} state - Текущее состояние.
         * @param {object} action - Объект экшена, содержит ID удаляемого героя в `action.payload`.
         */
        heroDeleted: (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        },
    }
});

// Деструктурируем объект, возвращаемый createSlice, чтобы получить сгенерированные экшены и редюсер.
const { actions, reducer } = heroesSlice;

// Экспортируем редюсер по умолчанию для использования в Redux-сторе.
export default reducer;

// Экспортируем все экшен-криэйторы для использования в компонентах
// (например, при вызове `dispatch(heroesFetching())`).
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} = actions;
