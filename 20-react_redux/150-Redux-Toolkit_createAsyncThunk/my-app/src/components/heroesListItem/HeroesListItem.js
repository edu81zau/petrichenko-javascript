/**
 * HeroesListItem компонент.
 * Отображает отдельного героя в списке.
 *
 * Принимает следующие пропсы:
 * @param {object} props - Объект с пропсами компонента.
 * @param {string} props.name - Имя героя.
 * @param {string} props.description - Описание способностей героя.
 * @param {string} props.element - Стихия героя (например, "fire", "water", "wind", "earth").
 * @param {function} props.onDelete - Функция-колбэк, вызываемая при нажатии кнопки удаления.
 *
 * Динамически применяет стили фона карточки в зависимости от стихии героя.
 *
 * @returns {JSX.Element} Элемент списка (карточка) с информацией о герое.
 */
const HeroesListItem = ({name, description, element, onDelete}) => {
    // Переменная для хранения CSS-классов, определяющих цвет фона карточки героя
    let elementClassName;

    // Определяем класс стихии в зависимости от переданного элемента
    // Используем switch для обработки различных типов стихий
    switch (element) {
        case "fire":
            elementClassName = "bg-danger bg-gradient";// Красный фон для стихии "Огонь"
            break;
        case "water":
            elementClassName = "bg-primary bg-gradient";// Синий фон для стихии "Вода"
            break;
        case "wind":
            elementClassName = "bg-success bg-gradient";// Зеленый фон для стихии "Ветер"
            break;
        case "earth":
            elementClassName = "bg-secondary bg-gradient";// Серый фон для стихии "Земля"
            break;
        default:
            elementClassName = "bg-warning bg-gradient";// Желтый фон по умолчанию для неизвестных стихий
    }

    return (
        // Главный элемент списка: <li>.
        // Используем шаблонные строки для динамического добавления CSS-класса
        // в зависимости от стихии героя
        <li
            // Динамически применяем класс стихии к карточке героя
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
        >
            {/* Изображение героя (пока заглушка) */}
            <img
                // src: Источник изображения, здесь используется заглушка для неизвестного персонажа
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
                // className: Классы Bootstrap для стилизации (гибкий размер, ширина 25%, inline-элемент)
                className="img-fluid w-25 d-inline"
                // alt: Альтернативный текст для доступности
                alt="unknown hero"
                // style: Inline-стиль для масштабирования изображения,
                // чтобы оно полностью заполняло контейнер без искажений
                style={{objectFit: "cover"}}
            />
            {/* Основное содержимое карточки: имя и описание */}
            <div className="card-body">
                {/* Заголовок (имя героя) */}
                <h3 className="card-title">{name}</h3>
                {/* Параграф (описание способностей) */}
                <p className="card-text">{description}</p>
            </div>
            {/* Кнопка удаления героя (расположена в углу карточки) */}
            {/* Обработчик `onClick` вызовет переданную функцию `onDelete`. */}
            {/* Обернутая в <span> для позиционирования */}
            <span
                onClick={onDelete}
                className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light"
            >
				<button
                    // type: Тип кнопки "button" предотвращает автоматическую отправку формы,
                    // если она внутри формы.
                    type="button"
                    // className: Классы Bootstrap для стандартного стиля кнопки закрытия
                    className="btn-close btn-close"
                    // aria-label: Атрибут для доступности, озвучивает назначение кнопки для скринридеров.
                    aria-label="Close"
                ></button>
			</span>

        </li>
    );
};

export default HeroesListItem;
