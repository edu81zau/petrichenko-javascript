// Импортируем configureStore для создания Redux-стора
import {configureStore} from "@reduxjs/toolkit";

// Импортируем редюсер для управления состоянием героев
import heroes from '../components/heroesList/heroesSlice';
import filters from '../components/heroesFilters/filtersSlice';


/**
 * `stringMiddleware` - это кастомный мидлвар (middleware).
 * Middleware в Redux — это функция, которая перехватывает экшены до того, как они достигнут редюсера,
 * позволяя вам выполнять асинхронную логику, логировать экшены или модифицировать их.
 *
 * В данном случае, этот мидлвар:
 * 1. Проверяет, является ли диспатченый `action` строкой.
 * 2. Если да, он оборачивает эту строку в полноценный объект экшена `{ type: action }`.
 * 3. Затем передает этот объект следующему мидлвару (`next`) в цепочке.
 * 4. Если `action` не строка (т.е. уже является объектом), он просто передает его дальше без изменений.
 *
 * Это позволяет вам диспатчить экшены в виде строк (`dispatch('HERO_CREATED')`), что упрощает синтаксис
 * для экшенов без полезной нагрузки (`payload`).
 */
const stringMiddleware = () => (next) => (action) => {
    // Проверяем, является ли экшен строкой
    if (typeof action === 'string') {
        // Если да, создаем объект экшена с этим типом и передаем его дальше
        return next({type: action});
    }
    // В противном случае, диспатчим экшен как есть (если это уже объект)
    return next(action);
};

/**
 * `store` - Главное хранилище (стор) Redux-приложения.
 * Создается с помощью `configureStore` из Redux Toolkit, который:
 * - Автоматически объединяет редюсеры.
 * - Включает Redux Thunk и Redux DevTools Extension по умолчанию.
 * - Предоставляет удобные настройки для мидлваров и других параметров.
 */
const store = configureStore({
    // Объединяем редюсеры в корневой объект.
    // Ключи (`heroes`, `filters`) определяют, как эти части состояния будут
    // называться в глобальном сторе
    reducer: {heroes, filters},

    // Настройка мидлваров.
    // `getDefaultMiddleware()` возвращает массив стандартных мидлваров
    // Redux Toolkit (включая Redux Thunk).
    // Затем мы используем `.concat()` для добавления нашего кастомного
    // `stringMiddleware` к этому массиву.
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),

    // Настройка Redux DevTools.
    // DevTools будут включены только в режиме разработки (`NODE_ENV !== 'production'`).
    // В продакшене они будут отключены для оптимизации и безопасности.
    devTools: process.env.NODE_ENV !== 'production',
});

export default store; // Экспортируем настроенный стор для использования в корневом компоненте React.
