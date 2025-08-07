
import {useHttp} from '../../hooks/http.hook';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {heroCreated} from '../heroesList/heroesSlice';

/**
 * HeroesAddForm компонент.
 * Представляет собой интерактивную форму для добавления нового героя.
 * Управляет состоянием полей формы с помощью хука useState.
 * Отправляет данные нового героя на сервер и обновляет Redux-стор.
 * Динамически рендерит опции фильтров для выбора стихии героя.
 *
 * @returns {JSX.Element} Форма добавления героя.
 */
const HeroesAddForm = () => {

    // Состояния для хранения значений полей формы: имя, описание и выбранная стихия
    const [heroName, setHeroName] = useState('');
    const [heroDescr, setHeroDescr] = useState('');
    const [heroElement, setHeroElement] = useState('');

    // Получаем состояние фильтров и статус их загрузки из Redux-стора
    const {filters, filtersLoadingStatus} = useSelector(state => state.filters);
    // Получаем функцию dispatch для отправки экшенов в Redux
    const dispatch = useDispatch();
    // Используем кастомный хук для выполнения HTTP-запросов
    const {request} = useHttp();

    /**
     * Обработчик отправки формы.
     * Предотвращает стандартное поведение формы, создает нового героя,
     * отправляет его на сервер и диспатчит экшен Redux, затем очищает форму.
     *
     * @param {Event} e - Объект события отправки формы.
     */
    const onSubmitHandler = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
        /**
         * `newHero` - Объект, представляющий нового героя
         * с уникальным ID
         * Собирает данные, введенные пользователем в форму.
         */
        const newHero = {
            // `id`: Уникальный идентификатор, сгенерированный с помощью `uuidv4()`
            // для каждого нового героя
            id: uuidv4(),
            // `name`: Имя героя, берется из состояния `heroName`
            name: heroName,
            // `description`: Описание способностей, берется из состояния `heroDescr`
            description: heroDescr,
            // `element`: Стихия героя, берется из состояния `heroElement`,
            // выбранная из выпадающего списка
            element: heroElement
        }

        // Отправляем нового героя на сервер методом POST
        request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
            // Логируем успешную отправку
            .then(res => console.log(res, 'Отправка успешна'))
            // Диспатчим экшен heroCreated, чтобы добавить нового героя в Redux-стор
            // Используем колбэк для then, чтобы dispatch выполнился после предыдущего промиса
            .then(dispatch(heroCreated(newHero)))
            // Логируем ошибку, если запрос не удался
            .catch(err => console.log(err));

        // Сбрасываем состояния полей формы после отправки
        setHeroName('');
        setHeroDescr('');
        setHeroElement('');
    }

    /**
     * Вспомогательная функция для динамического рендеринга опций выбора стихий (фильтров).
     * Обрабатывает состояния загрузки и ошибки для фильтров.
     *
     * @param {Array} filters - Массив объектов фильтров.
     * @param {string} status - Статус загрузки фильтров ('loading', 'error', 'idle').
     * @returns {Array<JSX.Element> | JSX.Element} Массив элементов `<option>` или сообщение о состоянии загрузки/ошибки.
     */
    const renderFilters = (filters, status) => {
        if (status === "loading") {
            // Отображаем сообщение о загрузке
            return <option>Загрузка элементов</option>
        } else if (status === "error") {
            // Отображаем сообщение об ошибке
            return <option>Ошибка загрузки</option>
        }

        // Если фильтры загружены и массив не пуст
        if (filters && filters.length > 0) {
            return filters.map(({name, label}) => {
                // Исключаем фильтр "все" из выпадающего списка стихий,
                // так как он не является конкретной стихией
                if (name === 'all') return;// Возвращаем null, чтобы этот элемент не рендерился

                // Рендерим опцию для каждой стихии
                return <option key={name} value={name}>{label}</option>
            })
        }
    }

    return (
        // Обертка для всей формы: задает стили (рамка, отступы, тень, скругленные углы)
        // и обработчик события отправки
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
            {/* --- Секция для поля ввода имени --- */}
            {/* Контейнер с нижним отступом для поля ввода (класс Bootstrap) */}
            <div className="mb-3">
                {/* Метка для поля ввода имени, связывается с инпутом через htmlFor="name" */}
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                {/* Поле ввода текста */}
                <input
                    required // Делает поле обязательным для заполнения
                    type="text" // Задает тип поля - текст
                    name="name" // Имя поля, используется для отправки данных формы
                    className="form-control" // Класс Bootstrap для стилизации инпута
                    id="name" // Идентификатор, к которому привязана метка
                    placeholder="Как меня зовут?" // Подсказка для пользователя
                    value={heroName}// Привязываем значение поля к состоянию компонента
                    // Обновляет состояние heroName при каждом изменении поля
                    onChange={(e) => setHeroName(e.target.value)}/>
            </div>

            {/* --- Секция для поля ввода описания --- */}
            {/* Контейнер с нижним отступом для поля описания */}
            <div className="mb-3">
                {/* Метка для поля ввода описания */}
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                {/* Поле ввода многострочного текста */}
                <textarea
                    required // Делает поле обязательным для заполнения
                    name="text" // Имя поля
                    className="form-control" // Класс Bootstrap для стилизации
                    id="text" // Идентификатор
                    placeholder="Что я умею?" // Подсказка для пользователя
                    style={{"height": '130px'}} // Внутренний стиль для установки высоты
                    value={heroDescr}// Привязываем значение поля к состоянию компонента
                    /* Обновляем состояние при изменении */
                    onChange={(e) => setHeroDescr(e.target.value)}/>
            </div>

            {/* --- Секция для выпадающего списка стихий --- */}
            {/* Контейнер с нижним отступом для селекта */}
            <div className="mb-3">
                {/* Метка для выпадающего списка */}
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                {/* Выпадающий список */}
                <select
                    required// Делает выбор обязательным
                    className="form-select" // Класс Bootstrap для стилизации селекта
                    id="element"// Идентификатор
                    name="element" // Имя поля
                    value={heroElement} // Привязываем выбранное значение к состоянию компонента
                    /* Обновляем состояние при изменении */
                    onChange={(e) => setHeroElement(e.target.value)}>
                    {/* Первая опция по умолчанию, не имеет значения (value="") */}
                    <option value="">Я владею элементом...</option>
                    {/* Рендерим динамические опции фильтров */}
                    {renderFilters(filters, filtersLoadingStatus)}
                </select>
            </div>

            {/* --- Кнопка отправки формы --- */}
            {/* Кнопка с типом "submit" для отправки формы */}
            {/* Не видно onSubmit у кнопки, потому что его там и нет. */}
            {/* У <button> есть атрибут type="submit", который и запускает этот процесс. */}
            {/* Шаги: */}
            {/* 1. У элемента <form> есть пропс onSubmit, которому присвоен обработчик onSubmitHandler */}
            {/* 2. Кнопка с атрибутом type="submit" находится внутри этого <form> */}
            {/* 3. Когда нажимается на эту кнопку, браузер автоматически распознаёт, */}
            {/* что это кнопка для отправки формы, и инициирует событие submit на элементе <form> */}
            {/* 4. В результате этого события вызывается функция, */}
            {/* привязанная к onSubmit формы, — onSubmitHandler */}
            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;