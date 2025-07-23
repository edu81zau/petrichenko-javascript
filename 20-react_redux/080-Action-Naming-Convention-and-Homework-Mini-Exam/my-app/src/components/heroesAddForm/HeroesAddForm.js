// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import {useHttp} from '../../hooks/http.hook';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {heroCreated} from '../../actions';

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
    const {filters, filtersLoadingStatus} = useSelector(state => {
        console.log("HeroesAddForm.Текущее состояние Redux:", state);
        return state;
        }
    );
    console.log("HeroesAddForm.useSelector", filters);
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
        // Создаем новый объект героя с уникальным ID
        const newHero = {
            id: uuidv4(), // Генерируем уникальный ID для нового героя
            name: heroName,
            description: heroDescr,
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
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
            {/* Поле для ввода имени нового героя */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?"
                    value={heroName}// Привязываем значение поля к состоянию компонента
                    onChange={(e) => setHeroName(e.target.value)}/>
            </div>

            {/* Поле для ввода описания способностей героя */}
            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={heroDescr}// Привязываем значение поля к состоянию компонента
                    /* Обновляем состояние при изменении */
                    onChange={(e) => setHeroDescr(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={heroElement} // Привязываем выбранное значение к состоянию компонента
                    /* Обновляем состояние при изменении */
                    onChange={(e) => setHeroElement(e.target.value)}>
                    {/* Первая опция по умолчанию, не имеет значения (value="") */}
                    <option value="">Я владею элементом...</option>
                    {/* Рендерим динамические опции фильтров */}
                    {renderFilters(filters, filtersLoadingStatus)}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;