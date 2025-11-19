// Импортируем кастомный хук для выполнения HTTP-запросов
import {useHttp} from '../../hooks/http.hook';
// Импортируем хуки React
import {useEffect, useCallback} from 'react';
// Импортируем хуки React Redux для взаимодействия со стором
import {useDispatch, useSelector} from 'react-redux';

// Импортируем экшен-криэйтор и асинхронный thunk для героев
import {heroDeleted, fetchHeroes, filteredHeroesSelector} from "./heroesSlice";
// Импортируем компонент для отображения отдельного героя
import HeroesListItem from "../heroesListItem/HeroesListItem";
// Импортируем компонент спиннера для индикации загрузки
import Spinner from '../spinner/Spinner';
// Импортируем стили для компонента
import './heroesList.scss';

/**
 * `HeroesList` - Компонент для отображения списка героев.
 * Отвечает за загрузку данных, их фильтрацию, отображение и удаление.
 *
 * @returns {JSX.Element} Фрагмент JSX с списком героев.
 */
const HeroesList = () => {

    const filteredHeroes = useSelector(filteredHeroesSelector);
    // Получаем статус загрузки героев из Redux-стора
    const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);
    // Получаем функцию dispatch для отправки экшенов
    const dispatch = useDispatch();
    // Получаем функцию request из кастомного хука для выполнения запросов
    const {request} = useHttp();

    /**
     * `useEffect` - хук для выполнения побочных эффектов.
     * Запускается один раз при первом рендере компонента (пустой массив зависимостей).
     * Отправляет асинхронный thunk-экшен `fetchHeroes` для загрузки данных с сервера.
     *
     * // eslint-disable-next-line
     * Игнорирует предупреждение ESLint, поскольку `dispatch` и `fetchHeroes` являются стабильными.
     */
    useEffect(() => {
        dispatch(fetchHeroes());

        // eslint-disable-next-line
    }, []);// Пустой массив зависимостей означает, что этот эффект будет выполнен только один раз при монтировании компонента

    /**
     * `onDelete` - мемоизированная функция-обработчик для удаления героя.
     * Используем `useCallback`, чтобы эта функция не пересоздавалась при каждом рендере.
     * Это важно, так как `onDelete` передается в дочерний компонент `HeroesListItem`.
     *
     * @param {string} id - Уникальный идентификатор героя.
     */
    const onDelete = useCallback((id) => {

        // Выполняем DELETE-запрос на сервер для удаления героя по ID
        request(`http://localhost:3001/heroes/${id}`, "DELETE")
            // Логируем успешное удаление
            .then(data => console.log(data, 'Deleted'))
            // Отправляем синхронный экшен `heroDeleted` в Redux-стор, чтобы обновить UI
            .then(dispatch(heroDeleted(id)))
            // Логируем ошибку, если запрос не удался
            .catch(err => console.log(err));

        // `request` является зависимостью, так как `useHttp` может мемоизировать ее
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
     * `renderHeroesList` - Вспомогательная функция для рендеринга списка героев.
     * @param {Array} arr - Массив героев, который нужно отобразить.
     * @returns {Array<JSX.Element> | JSX.Element} Массив компонентов `HeroesListItem` или сообщение.
     */
    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">Героев пока нет</h5>
            )
        }
        // Маппим массив героев в массив компонентов `HeroesListItem`
        return arr.map(({id, ...props}) => {
            return (
                // Используем `id` в качестве уникального `key` и передаем пропсы героя
                <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)}/>
            )
        })
    }

    // Получаем элементы списка из вспомогательной функции
   const elements = renderHeroesList(filteredHeroes);
    return (
        <ul className="heroes-list"> {/* Можно добавить свой класс для стилизации списка */}
            {elements} {/* Отображаем полученные элементы списка героев */}
        </ul>
    )
}

export default HeroesList;