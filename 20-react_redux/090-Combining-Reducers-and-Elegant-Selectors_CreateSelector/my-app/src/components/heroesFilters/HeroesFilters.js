// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import {useHttp} from '../../hooks/http.hook';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';

import {filtersFetching, filtersFetched, filtersFetchingError, activeFilterChanged} from '../../actions';
import Spinner from '../spinner/Spinner';

/**
 * HeroesFilters компонент.
 * Отвечает за отображение и управление фильтрами героев.
 * Получает доступные фильтры из Redux-стора, загружает их с сервера
 * и позволяет пользователю выбирать активный фильтр, обновляя состояние приложения.
 *
 * @returns {JSX.Element} Карточка с группой кнопок для фильтрации героев.
 */
const HeroesFilters = () => {
    // Получаем состояние фильтров, статус их загрузки и активный фильтр из Redux-стора
    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);
    // Получаем функцию dispatch для отправки экшенов в Redux
    const dispatch = useDispatch();
    // Используем кастомный хук для выполнения HTTP-запросов
    const {request} = useHttp();

    /**
     * Хук useEffect для выполнения побочных эффектов:
     * - Инициирует процесс загрузки доступных фильтров при первом рендере компонента.
     * - Отправляет запрос на получение списка фильтров с JSON-сервера.
     * - Диспатчит соответствующий экшен Redux в зависимости от результата запроса (успех/ошибка).
     *
     * Пустой массив зависимостей `[]` означает, что эффект будет выполнен только один раз
     * после первого рендера, подобно `componentDidMount`.
     * `eslint-disable-next-line` используется для подавления предупреждения ESLint о пропущенных зависимостях,
     * так как `request` и `dispatch` являются стабильными и не требуют перевыполнения эффекта.
     */
    useEffect(() => {
        // Диспатчим экшен начала загрузки фильтров
        dispatch(filtersFetching());
        // Выполняем HTTP-запрос для получения фильтров
        request("http://localhost:3001/filters")
            .then(data => {
                console.log("HeroesFilters.useEffect", data);
                return data; // Важно: возвращаем 'data', чтобы следующий .then() её получил
            })
            // В случае успеха диспатчим полученные данные
            .then(data => dispatch(filtersFetched(data)))
            // В случае ошибки диспатчим экшен ошибки загрузки
            .catch(() => dispatch(filtersFetchingError()))

        // eslint-disable-next-line
    }, []);

    // Условный рендеринг в зависимости от статуса загрузки фильтров
    if (filtersLoadingStatus === "loading") {
        // Показываем спиннер, если фильтры загружаются
        return <Spinner/>;
    } else if (filtersLoadingStatus === "error") {
        // Показываем сообщение об ошибке
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    /**
     * Вспомогательная функция для динамического рендеринга кнопок фильтров.
     * Принимает массив фильтров и преобразует его в массив JSX-элементов кнопок.
     * Динамически применяет класс 'active' к кнопке, соответствующей текущему активному фильтру.
     *
     * @param {Array<object>} arr - Массив объектов фильтров, каждый из которых содержит `name`, `className` и `label`.
     * @returns {Array<JSX.Element> | JSX.Element} Массив JSX-элементов кнопок фильтров или сообщение, если фильтры не найдены.
     */
    const renderFilters = (arr) => {
        console.log("HeroesFilters.renderFilters",arr);
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Фильтры не найдены</h5>
        }

        // Преобразуем массив фильтров в кнопки
        return arr.map(({name, className, label}) => {
            // Используем библиотеку classNames для условного добавления класса 'active'
            // Кнопка будет "активной", если ее 'name' совпадает с 'activeFilter' из Redux-стора
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });

            return <button
                key={name} // Уникальный ключ для элемента списка
                id={name} // Используем name как id, если необходимо
                className={btnClass} // Применяем динамически сформированный класс
                // При клике диспатчим экшен, меняющий активный фильтр на текущий
                onClick={() => dispatch(activeFilterChanged(name))}
            >{label} {/* Текстовое содержимое кнопки (например, "Все", "Огонь" и т.д.) */}
            </button>
        })
    }

    // Рендерим кнопки фильтров, вызывая вспомогательную функцию
    const elements = renderFilters(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                {/* Заголовок или инструкция для пользователя */}
                <p className="card-text">Отфильтруйте героев по элементам</p>
                {/* Группа кнопок, в которую встраиваются динамически созданные элементы */}
                <div className="btn-group">
                    {elements} {/* Отображаем кнопки фильтров */}
                </div>
            </div>
        </div>
    )
}


export default HeroesFilters;