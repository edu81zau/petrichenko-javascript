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
        <li
            // Динамически применяем класс стихии к карточке героя
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
        >
            {/* Изображение героя (пока заглушка) */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
                className="img-fluid w-25 d-inline"
                alt="unknown hero"
                // CSS-свойство для масштабирования изображения
                style={{objectFit: "cover"}}
            />
            {/* Основное содержимое карточки: имя и описание */}
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            {/* Кнопка удаления героя (расположена в углу карточки) */}
            {/* Обработчик `onClick` вызовет переданную функцию `onDelete`. */}
            <span
                onClick={onDelete}
                className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light"
            >
				<button
                    type="button"
                    className="btn-close btn-close"
                    aria-label="Close"
                ></button>
			</span>

        </li>
    );
};

export default HeroesListItem;
