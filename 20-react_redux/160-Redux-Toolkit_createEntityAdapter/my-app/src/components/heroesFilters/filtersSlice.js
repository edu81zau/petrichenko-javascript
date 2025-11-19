// Импортируем createSlice и createAsyncThunk для создания срезов состояния и асинхронных экшенов
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// Импортируем кастомный хук для выполнения HTTP-запросов
import {useHttp} from '../../hooks/http.hook';

/**
 * `initialState` - Начальное состояние для этого среза (slice) Redux-стора.
 * Определяет структуру и начальные значения данных, которыми будет управлять `filtersSlice`.
 *
 * @property {Array} filters - Массив объектов доступных фильтров. Изначально пустой.
 * @property {string} filtersLoadingStatus - Статус загрузки списка фильтров. Возможные значения: 'idle', 'loading', 'error'.
 * @property {string} activeFilter - Название текущего активного фильтра. По умолчанию 'all'.
 */
const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

/**
 * `fetchFilters` - это асинхронный thunk-экшен, созданный с помощью `createAsyncThunk`.
 * Эта функция автоматически генерирует три типа экшенов для разных этапов запроса:
 * - `filters/fetchFilters/pending` (начало запроса)
 * - `filters/fetchFilters/fulfilled` (успешное завершение)
 * - `filters/fetchFilters/rejected` (ошибка)
 *
 * Функция-полезной нагрузки (`payload creator`) внутри `createAsyncThunk` выполняет асинхронный
 * HTTP-запрос и возвращает промис с результатом.
 *
 * @returns {Promise<Array>} Промис, который разрешится массивом объектов фильтров.
 */
export const fetchFilters = createAsyncThunk(
    "filters/fetchFilters",// Тип-префикс для автоматически сгенерированных экшенов
    async () => {
        const {request} = useHttp();// Получаем функцию запроса из хука
        return await request("http://localhost:3001/filters");// Выполняем GET-запрос и возвращаем промис
    }
);

/**
 * `filtersSlice` - Это "срез" (slice) Redux-стора, созданный с помощью `createSlice`.
 * Он объединяет в себе редюсер, типы экшенов и экшен-криэйторы для управления состоянием фильтров.
 *
 * @param {string} name - Уникальное имя среза.
 * @param {object} initialState - Начальное состояние.
 * @param {object} reducers - Объект с "обычными" редюсерами, которые обрабатывают синхронные экшены.
 * Благодаря встроенной библиотеке Immer, эти редюсеры написаны в "мутирующем" стиле.
 * @param {object} extraReducers - Объект с функциями для обработки экшенов,
 * сгенерированных извне этого среза, в данном случае - экшенов от `createAsyncThunk`.
 */
const filtersSlice = createSlice({
    name: "filters", // Имя среза, используется для генерации типов экшенов.
    initialState, // Начальное состояние.
    reducers: {

        /**
         * `filtersChanged` - Редюсер для обработки изменения активного фильтра.
         * Обновляет `activeFilter` значением, переданным в `action.payload`.
         */
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // `addCase` - обработчик для конкретного типа экшена
            // Срабатывает, когда `fetchFilters` переходит в состояние 'pending
            .addCase(fetchFilters.pending, state => {
                state.filtersLoadingStatus = "loading";
            })
            // Обработчик для успешного завершения `fetchFilters`.
            // Обновляет статус на 'idle' и заполняет массив `filters` данными из `action.payload`
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = "idle";
                state.filters = action.payload; // Прямое присвоение, Immer гарантирует иммутабельность.
            })
            // Обработчик для ошибки `fetchFilters`
            // Устанавливает статус на 'error'
            .addCase(fetchFilters.rejected, state => {
                state.filtersLoadingStatus = "error";
            })
            // `addDefaultCase` - обработчик по умолчанию для любых других экшенов
            .addDefaultCase(() => {
            })
    }
});

// Деструктурируем объект, возвращаемый createSlice, чтобы получить сгенерированные экшены и редюсер.
const {actions, reducer} = filtersSlice;

export default reducer; // Экспортируем редюсер по умолчанию для использования в Redux-сторе.

export const {
    filtersChanged
} = actions;
