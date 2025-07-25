/**
 * `initialState` - Начальное состояние Redux-стора для данного редюсера.
 * Определяет структуру данных и их первоначальные значения при запуске приложения.
 *
 * @property {Array} heroes - Массив объектов всех героев, полученных с сервера (нефильтрованный). По умолчанию пустой.
 * @property {string} heroesLoadingStatus - Статус загрузки списка героев:
 * - 'idle': бездействие / ожидание (начальное состояние или после успешной загрузки).
 * - 'loading': герои в процессе загрузки.
 * - 'error': произошла ошибка при загрузке героев.
 * @property {Array} filters - Массив объектов доступных фильтров (например, по стихиям). По умолчанию пустой.
 * @property {string} filtersLoadingStatus - Статус загрузки списка фильтров:
 * - 'idle': бездействие / ожидание.
 * - 'loading': фильтры в процессе загрузки.
 * - 'error': произошла ошибка при загрузке фильтров.
 * @property {string} activeFilter - Название текущего активного фильтра (например, 'all', 'fire', 'water'). По умолчанию 'all'.
 */
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

/**
 * `reducer` - Функция-редюсер Redux для управления состоянием героев и фильтров.
 * Редьюсеры принимают текущее состояние и объект `action`, а затем возвращают
 * новое состояние приложения. Важно: редюсеры должны быть чистыми функциями –
 * они не должны изменять исходное состояние напрямую, а должны возвращать
 * новый объект состояния с применёнными изменениями.
 *
 * @param {object} state - Текущее состояние редюсера (по умолчанию `initialState`).
 * @param {object} action - Объект экшена, описывающий произошедшее событие.
 * @param {string} action.type - Тип экшена, используемый для определения логики обработки.
 * @param {any} [action.payload] - Необязательные данные, передаваемые с экшеном.
 * @returns {object} Новое состояние приложения.
 */
const reducer = (state = initialState, action) => {
    // Используем `switch-оператор` для обработки различных типов экшенов.
    switch (action.type) {
        /**
         * Кейс: 'HEROES_FETCHING'
         * Обрабатывается при начале загрузки списка героев.
         * Устанавливает статус `heroesLoadingStatus` в 'loading'.
         */
        case 'HEROES_FETCHING':
            return {
                ...state, // Создаем поверхностную копию текущего состояния для неизменяемости.
                heroesLoadingStatus: 'loading' // Обновляем только статус загрузки героев.
            }
        /**
         * Кейс: 'HEROES_FETCHED'
         * Обрабатывается после успешной загрузки списка героев с сервера.
         * Обновляет массив `heroes` полученными данными.
         * Также обновляет `filteredHeroes` в зависимости от `activeFilter` и полученных данных.
         * Сбрасывает статус загрузки `heroesLoadingStatus` в 'idle'.
         */
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle' // Сбрасываем статус загрузки после успешного получения.
            }
        /**
         * Кейс: 'HEROES_FETCHING_ERROR'
         * Обрабатывается при возникновении ошибки в процессе загрузки героев.
         * Устанавливает статус `heroesLoadingStatus` в 'error'.
         */
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state, // Создаем копию текущего состояния.
                heroesLoadingStatus: 'error' // Устанавливаем статус ошибки загрузки героев.
            }
        /**
         * Кейс: 'FILTERS_FETCHING'
         * Обрабатывается при начале загрузки списка фильтров.
         * Устанавливает статус `filtersLoadingStatus` в 'loading'.
         */
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading' // Обновляем статус загрузки фильтров.
            }
        /**
         * Кейс: 'FILTERS_FETCHED'
         * Обрабатывается после успешной загрузки списка фильтров с сервера.
         * Обновляет массив `filters` полученными данными.
         * Сбрасывает статус загрузки `filtersLoadingStatus` в 'idle'.
         */
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload, // Заполняем массив фильтров данными из payload.
                filtersLoadingStatus: 'idle' // Сбрасываем статус загрузки фильтров после успешного получения.
            }
        /**
         * Кейс: 'FILTERS_FETCHING_ERROR'
         * Обрабатывается при возникновении ошибки в процессе загрузки фильтров.
         * Устанавливает статус `filtersLoadingStatus` в 'error'.
         */
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error' // Устанавливаем статус ошибки загрузки фильтров.
            }
        /**
         * Кейс: 'ACTIVE_FILTER_CHANGED'
         * Обрабатывается при изменении активного фильтра пользователем.
         * Обновляет `activeFilter`
         */
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload
            }
        /**
         * Кейс: 'HERO_CREATED'
         * Обрабатывается при успешном добавлении нового героя.
         * Добавляет нового героя в массив `heroes` и соответствующим образом
         * обновляет `filteredHeroes`.
         */
        case 'HERO_CREATED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        /**
         * Кейс: 'HERO_DELETED'
         * Обрабатывается при успешном удалении героя.
         * Удаляет героя из массива `heroes` и соответствующим образом
         * обновляет `filteredHeroes`.
         */
        case 'HERO_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload)
            }
        /**
         * Кейс: `default`
         * Если тип экшена не соответствует ни одному из определенных кейсов,
         * редюсер возвращает текущее состояние без изменений. Это стандартное
         * и обязательное поведение для всех редюсеров Redux.
         */
        default:
            return state
    }
}

export default reducer;