// Импортируем createSlice и createAsyncThunk для создания срезов состояния и асинхронных экшенов.
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// Импортируем кастомный хук для выполнения HTTP-запросов.
import {useHttp} from '../../hooks/http.hook';

/**
 * `initialState` - Начальное состояние для этого среза (slice) Redux-стора.
 * Определяет структуру и начальные значения данных, которыми будет управлять `heroesSlice`.
 *
 * @property {Array} heroes - Массив объектов всех героев. Изначально пустой.
 * @property {string} heroesLoadingStatus - Статус загрузки списка героев. Возможные значения: 'idle', 'loading', 'error'.
 */
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

/**
 * `fetchHeroes` - это thunk-экшен, созданный с помощью `createAsyncThunk`.
 * Эта функция автоматически генерирует три типа экшенов:
 * - `heroes/fetchHeroes/pending` (когда запрос начат)
 * - `heroes/fetchHeroes/fulfilled` (когда запрос успешен)
 * - `heroes/fetchHeroes/rejected` (когда запрос завершился с ошибкой)
 *
 * Функция-полезной нагрузки (`payload creator`) внутри `createAsyncThunk` выполняет асинхронный
 * HTTP-запрос и возвращает промис с результатом.
 *
 * @param {Function} request - Функция для выполнения HTTP-запросов.
 * @returns {Promise<Array>} Промис, который разрешится массивом героев.
 */
export const fetchHeroes = createAsyncThunk(
    "heroes/fetchHeroes", // Тип-префикс для автоматически сгенерированных экшенов.
    async () => {
        const {request} = useHttp();// Получаем функцию запроса из хука.
        return await request("http://localhost:3001/heroes");// Выполняем GET-запрос и возвращаем промис
    }
);

/**
 * `heroesSlice` - Это "срез" (slice) Redux-стора, созданный с помощью `createSlice`.
 * Он объединяет в себе редюсеры, типы экшенов и экшен-криэйторы для управления состоянием героев.
 *
 * @param {string} name - Уникальное имя среза.
 * @param {object} initialState - Начальное состояние.
 * @param {object} reducers - Объект с "обычными" редюсерами, которые обрабатывают синхронные экшены.
 * Благодаря встроенной библиотеке Immer, эти редюсеры написаны в "мутирующем" стиле,
 * хотя под капотом создается новая, иммутабельная копия состояния.
 * @param {object} extraReducers - Объект с функциями для обработки экшенов,
 * сгенерированных извне этого среза, в данном случае - экшенов от `createAsyncThunk`.
 */
const heroesSlice = createSlice({
    name: "heroes", // Имя среза, используется для генерации типов экшенов.
    initialState, // Начальное состояние.
    reducers: {
        /**
         * `heroCreated` - Редюсер для обработки создания нового героя.
         * Добавляет героя из `action.payload` в массив `heroes`.
         */
        heroCreated: (state, action) => {
            state.heroes.push(action.payload);
        },
        /**
         * `heroDeleted` - Редюсер для обработки удаления героя.
         * Создает новый массив `heroes`, исключая героя с ID, соответствующим `action.payload`.
         */
        heroDeleted: (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            // `addCase` - обработчик для конкретного типа экшена.
            // Этот обработчик срабатывает, когда `fetchHeroes` переходит в состояние 'pending'
            .addCase(fetchHeroes.pending, state => {
                state.heroesLoadingStatus = "loading";
            })
            // Обработчик для успешного завершения `fetchHeroes`.
            // Обновляет статус на 'idle' и заполняет массив `heroes` данными из `action.payload`
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = "idle";
                state.heroes = action.payload;
            })
            // Обработчик для ошибки `fetchHeroes`.
            // Устанавливает статус на 'error'
            .addCase(fetchHeroes.rejected, state => {
                state.heroesLoadingStatus = "error";
            })
            // `addDefaultCase` - обработчик по умолчанию для любых других экшенов, не указанных выше
            .addDefaultCase(() => {
            })
    }
});

// Деструктурируем объект, возвращаемый createSlice, чтобы получить сгенерированные экшены и редюсер.
const {actions, reducer} = heroesSlice;

// Экспортируем редюсер по умолчанию для использования в Redux-сторе.
export default reducer;

// Экспортируем все экшен-криэйторы для использования в компонентах
// (например, при вызове `dispatch(heroCreated(newHero))`).
export const {
    heroCreated,
    heroDeleted
} = actions;
