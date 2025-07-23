import {useHttp} from '../../hooks/http.hook';
import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Предполагаются экшены для работы с героями: загрузка, успешная загрузка, ошибка, удаление
import {heroesFetching, heroesFetched, heroesFetchingError, heroDeleted} from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

import './heroesList.scss';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

/**
 * HeroesList компонент.
 * Отвечает за отображение отфильтрованного списка героев.
 * Загружает героев с сервера при первом монтировании, управляет их удалением
 * и отображает различные состояния (загрузка, ошибка, пустой список).
 * Использует Redux для управления состоянием и React Transition Group для анимаций.
 *
 * @returns {JSX.Element} Список героев или индикатор состояния.
 */
const HeroesList = () => {
    // Получаем отфильтрованный список героев и статус их загрузки из Redux-стора
    const {filteredHeroes, heroesLoadingStatus} = useSelector(state => state);
    // Получаем функцию dispatch для отправки экшенов в Redux
    const dispatch = useDispatch();
    // Используем кастомный хук для выполнения HTTP-запросов
    const {request} = useHttp();

    /**
     * Хук useEffect для выполнения побочных эффектов:
     * - Инициирует процесс загрузки всех героев при первом рендере компонента.
     * - Отправляет HTTP-запрос на получение списка героев с JSON-сервера.
     * - Диспатчит соответствующий экшен Redux в зависимости от результата запроса (успех/ошибка).
     *
     * Пустой массив зависимостей `[]` означает, что эффект будет выполнен только один раз
     * после первого рендера, подобно `componentDidMount`.
     * `eslint-disable-next-line` используется для подавления предупреждения ESLint о пропущенных зависимостях,
     * так как `request` и `dispatch` являются стабильными и не требуют перевыполнения эффекта.
     */
    useEffect(() => {
        // Диспатчим экшен начала загрузки героев
        dispatch(heroesFetching());
        // Выполняем HTTP-запрос
        request("http://localhost:3001/heroes")
            // В случае успеха диспатчим полученные данные
            .then(data => dispatch(heroesFetched(data)))
            // В случае ошибки диспатчим экшен ошибки загрузки
            .catch(() => dispatch(heroesFetchingError()))

        // eslint-disable-next-line
    }, []);

    /**
     * `onDelete` - функция-колбэк для удаления героя.
     * Обернута в `useCallback` для мемоизации, чтобы предотвратить ее повторное создание
     * при каждом рендере компонента. Это важно, если `onDelete` передается в дочерние компоненты,
     * обернутые в `React.memo`, для оптимизации производительности.
     *
     * @param {string} id - Уникальный ID героя, которого нужно удалить.
     */
    const onDelete = useCallback((id) => {
        // Отправляем HTTP-запрос на удаление героя с сервера
        request(`http://localhost:3001/heroes/${id}`, "DELETE")
            // Логируем успешное удаление
            .then(data => console.log(data, 'Deleted'))
            // Диспатчим экшен `heroDeleted` для обновления Redux-стора
            .then(dispatch(heroDeleted(id)))
            // Логируем ошибку, если запрос не удался
            .catch(err => console.log(err));

        // eslint-disable-next-line
    }, [request]);

    // Условный рендеринг в зависимости от статуса загрузки героев
    if (heroesLoadingStatus === "loading") {
        // Показываем спиннер, если герои загружаются
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        // Показываем сообщение об ошибке
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    /**
     * Вспомогательная функция для рендеринга списка героев.
     * Обрабатывает случай пустого списка и оборачивает каждый элемент в `CSSTransition`
     * для анимации добавления/удаления.
     *
     * @param {Array<object>} arr - Массив объектов героев (отфильтрованных).
     * @returns {Array<JSX.Element> | JSX.Element} Массив JSX-элементов HeroesListItem с анимацией или сообщение о пустом списке.
     */
    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">Героев пока нет</h5>
            )
        }
// Преобразуем массив героев в компоненты HeroesListItem, обернутые в CSSTransition
        return arr.map(({id, ...props}) => {
            return (
                <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)}/>
            )
        })
    }

    // Рендерим отфильтрованный список героев
    const elements = renderHeroesList(filteredHeroes);
    return (
        <ul className="heroes-list"> {/* Можно добавить свой класс для стилизации списка */}
            {elements} {/* Отображаем полученные элементы списка героев */}
        </ul>
    )
}

export default HeroesList;