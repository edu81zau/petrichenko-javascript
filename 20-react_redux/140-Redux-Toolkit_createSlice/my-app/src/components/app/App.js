import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';

import './app.scss';

/**
 * @function App
 * @description Главный компонент приложения, который объединяет все основные части.
 * Отвечает за общую структуру страницы и компоновку дочерних компонентов:
 * списка героев, формы добавления нового героя и фильтров.
 *
 * @returns {JSX.Element} JSX-элемент, представляющий корневой компонент приложения.
 */
const App = () => {
    // Возвращает JSX-структуру, которая формирует основной макет страницы.
    // Класс 'app' задает общие стили для всего приложения.
    return (
        <main className="app">
            <div className="content">
                {/* Компонент, отображающий список героев. */}
                <HeroesList/>
                {/* Контейнер для интерактивных элементов: формы добавления и фильтров. */}
                <div className="content__interactive">
                    <HeroesAddForm/>
                    <HeroesFilters/>
                </div>
            </div>
        </main>
    )
}

// Экспортируем компонент App, чтобы его можно было использовать в других файлах,
// например, в index.js для рендеринга в корне DOM.
export default App;