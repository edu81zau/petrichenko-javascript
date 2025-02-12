import './app-filter.css';

const AppFilter = ({filter, onFilterSelect}) => {
    return (
        <div className="btn-group">
            <button
                className={`btn ${filter === 'all' ? 'btn-light' : 'btn-outline-light'}`}
                type="button"
                data-toggle="all"
                onClick={(e) => onFilterSelect(e.currentTarget.getAttribute('data-toggle'))}
            >
                Все сотрудники
            </button>
            <button
                //className="btn btn-outline-light"
                className={`btn ${filter === 'up' ? 'btn-light' : 'btn-outline-light'}`}
                type="button"
                data-toggle="up"
                onClick={(e) => onFilterSelect(e.currentTarget.getAttribute('data-toggle'))}
            >
                Сотрудники на повышение
            </button>
            <button
                //className="btn btn-outline-light"
                className={`btn ${filter === 'big' ? 'btn-light' : 'btn-outline-light'}`}
                type="button"
                data-toggle="big"
                onClick={(e) => onFilterSelect(e.currentTarget.getAttribute('data-toggle'))}
            >
                З/П больше 100$
            </button>
        </div>
    );
}

export default AppFilter;