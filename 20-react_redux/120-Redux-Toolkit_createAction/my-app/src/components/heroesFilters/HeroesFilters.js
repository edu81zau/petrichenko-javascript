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

import {fetchFilters, activeFilterChanged} from '../../actions';
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
     * Хук useEffect для выполнения побочных эффектов.
     * Запускается один раз при первом рендере компонента (поскольку массив зависимостей пуст).
     *
     * Назначение:
     * - Инициирует процесс загрузки списка фильтров.
     * - Диспатчит асинхронный экшен `fetchFilters`, который управляет запросом к API
     * для получения данных о фильтрах и соответствующим обновлением состояния Redux (загрузка, успех, ошибка).
     *
     * @param {Function} dispatch - Функция `dispatch` из Redux для отправки экшенов.
     * @param {Function} fetchFilters - Экшен-креатор, который инициирует процесс загрузки героев.
     * @param {Function} request - Функция для выполнения HTTP-запросов, передаваемая в `fetchHeroes`.     *
     * // eslint-disable-next-line
     * Этот комментарий подавляет предупреждение ESLint о пропущенных зависимостях (`dispatch`, `request`).
     * Предполагается, что `dispatch` является стабильной функцией, предоставляемой React Redux,
     * а `request` — мемоизированной функцией из `useHttp` (благодаря `useCallback`),
     * поэтому их включение в массив зависимостей не требуется для корректной работы и может быть опущено
     * для предотвращения ненужных перевыполнений эффекта.
     */
    useEffect(() => {
        // Диспатчим экшен `fetchFilters`.
        // Этот экшен, является асинхронным (Redux Thunk)
        // и содержит логику для:
        // 1. Изменения статуса загрузки героев на 'loading'.
        // 2. Выполнения HTTP-запроса через переданную функцию `request`.
        // 3. Диспатча `filtersFetched` в случае успеха или `filtersFetchingError` в случае ошибк
        dispatch(fetchFilters(request));

        // eslint-disable-next-line
    }, []);// Пустой массив зависимостей означает, что этот эффект будет выполнен только один раз при монтировании компонента

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