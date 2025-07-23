/**
 * @function heroesFetching
 * @description Экшн-креатор, сигнализирующий о начале загрузки списка героев.
 * Используется для установки состояния загрузки в Redux-сторе.
 * @returns {Object} Объект экшена типа 'HEROES_FETCHING'.
 */
export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

/**
 * @function heroesFetched
 * @description Экшн-креатор, сигнализирующий об успешном завершении загрузки списка героев.
 * Передает полученные данные героев в Redux-стор.
 * @param {Array<Object>} heroes - Массив объектов героев, полученных с сервера.
 * @returns {Object} Объект экшена типа 'HEROES_FETCHED' с полезной нагрузкой (payload).
 */
export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

/**
 * @function heroesFetchingError
 * @description Экшн-креатор, сигнализирующий о возникновении ошибки при загрузке списка героев.
 * Используется для обновления состояния ошибки в Redux-сторе.
 * @returns {Object} Объект экшена типа 'HEROES_FETCHING_ERROR'.
 */
export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
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

/**
 * @function heroCreated
 * @description Экшн-креатор, сигнализирующий о создании нового героя.
 * Добавляет нового героя в список в Redux-сторе.
 * @param {Object} hero - Объект нового героя, который был успешно создан.
 * @returns {Object} Объект экшена типа 'HERO_CREATED' с полезной нагрузкой (payload).
 */
export const heroCreated = (hero) => {
    return {
        type: 'HERO_CREATED',
        payload: hero
    }
}

/**
 * @function heroDeleted
 * @description Экшн-креатор, сигнализирующий об удалении героя.
 * Удаляет героя из списка в Redux-сторе по его ID.
 * @param {string | number} id - Уникальный идентификатор героя, который был удален.
 * @returns {Object} Объект экшена типа 'HERO_DELETED' с полезной нагрузкой (payload).
 */
export const heroDeleted = (id) => {
    return {
        type: 'HERO_DELETED',
        payload: id
    }
}