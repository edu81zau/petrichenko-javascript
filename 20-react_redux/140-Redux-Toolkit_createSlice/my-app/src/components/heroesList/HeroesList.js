import {useHttp} from '../../hooks/http.hook';
import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Импортируем createSelector из Reselect для создания мемоизированных селекторов
import {createSelector} from 'reselect';

// Предполагаются экшены для работы с героями: загрузка, успешная загрузка, ошибка, удаление
import {fetchHeroes} from '../../actions';
import {heroDeleted} from "./heroesSlice";
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
 * Использует Redux для управления состоянием и Reselect для оптимизации селекторов.
 *
 * @returns {JSX.Element} Фрагмент JSX для отображения списка героев.
 */
const HeroesList = () => {

    /**
     * `filteredHeroesSelector` - Мемоизированный селектор, созданный с помощью `createSelector` из Reselect.
     * Этот селектор будет пересчитываться только тогда, когда изменятся его входные зависимости:
     * `state.filters.activeFilter` или `state.heroes.heroes`.
     * Это предотвращает ненужные перерендеринги компонента, если эти данные не изменились,
     * даже если изменилось другое состояние в Redux-сторе.
     *
     * @param {function} (state) => state.filters.activeFilter - Входной селектор для получения активного фильтра.
     * @param {function} (state) => state.heroes.heroes - Входной селектор для получения полного списка героев.
     * @param {function} (filter, heroes) => { ... } - Выходная функция-селектор.
     * Принимает результаты входных селекторов (`filter` и `heroes`) и возвращает отфильтрованный список.
     * Если `filter` равен 'all', возвращает весь список `heroes`.
     * Иначе фильтрует `heroes` по элементу, соответствующему `filter`.
     */

    const filteredHeroesSelector = createSelector(
        // Первый входной селектор: получает активный фильтр из состояния filters
        (state) => state.filters.activeFilter,
        // Второй входной селектор: получает массив всех героев из состояния heroes
        (state) => state.heroes.heroes,
        // Выходная функция-селектор: принимает результаты входных селекторов
        (filter, heroes) => {
            // Условная логика фильтрации:
            // Если активный фильтр 'all', возвращаем весь список героев
            if (filter === 'all') {
                return heroes;
            } else {
                // Иначе фильтруем героев по их стихии
                return heroes.filter(item => item.element === filter);
            }
        }
    );

    // Используем `useSelector` с мемоизированным селектором `filteredHeroesSelector`
    // для получения отфильтрованного списка героев. Компонент будет перерендерен,
    // только если `filteredHeroesSelector` вернет новый результат.
    const filteredHeroes = useSelector(filteredHeroesSelector);
    // Получаем отфильтрованный список героев и статус их загрузки из Redux-стора
    const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);
    // Получаем функцию dispatch для отправки экшенов в Redux
    const dispatch = useDispatch();
    // Используем кастомный хук для выполнения HTTP-запросов
    const {request} = useHttp();

    /**
     * Хук `useEffect` для загрузки списка героев при первом рендере компонента.
     *
     * Пустой массив зависимостей `[]` гарантирует, что эффект выполнится только один раз,
     * сразу после первого монтирования компонента, аналогично `componentDidMount` в классовых компонентах.
     *
     * @param {Function} dispatch - Функция `dispatch` из Redux для отправки экшенов.
     * @param {Function} fetchHeroes - Экшен-креатор, который инициирует процесс загрузки героев.
     * @param {Function} request - Функция для выполнения HTTP-запросов, передаваемая в `fetchHeroes`.
     */
    useEffect(() => {
        // Диспатчим экшен `fetchHeroes`.
        // Этот экшен, является асинхронным (Redux Thunk)
        // и содержит логику для:
        // 1. Изменения статуса загрузки героев на 'loading'.
        // 2. Выполнения HTTP-запроса через переданную функцию `request`.
        // 3. Диспатча `heroesFetched` в случае успеха или `heroesFetchingError` в случае ошибки
        dispatch(fetchHeroes(request));

        // eslint-disable-next-line
    }, []);// Пустой массив зависимостей означает, что этот эффект будет выполнен только один раз при монтировании компонента

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