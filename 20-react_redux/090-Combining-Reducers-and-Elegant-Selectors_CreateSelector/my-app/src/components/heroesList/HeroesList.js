import {useHttp} from '../../hooks/http.hook';
import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createSelector} from 'reselect'; // Импортируем createSelector из Reselect для создания мемоизированных селекторов

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

    // const filteredHeroes = useSelector(state => {
    //     if (state.filters.activeFilter === 'all') {
    //         return state.heroes.heroes;
    //     } else {
    //         return state.heroes.heroes.filter(item => item.element === state.filters.activeFilter);
    //     }
    // });

    // Используем `useSelector` с мемоизированным селектором `filteredHeroesSelector`
    // для получения отфильтрованного списка героев. Компонент будет перерендерен,
    // только если `filteredHeroesSelector` вернет новый результат.
    const filteredHeroes = useSelector(filteredHeroesSelector);
    // Получаем отфильтрованный список героев и статус их загрузки из Redux-стора
    const heroesLoadingStatus = useSelector(state => state.heroesLoadingStatus);
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