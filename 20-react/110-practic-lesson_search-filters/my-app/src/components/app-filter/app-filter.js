import './app-filter.css';

const AppFilter = (props) => {

    const {onFilter} = props;
    const butData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'up', label: 'Сотрудники на повышение'},
        {name: 'big', label: 'З/П больше 100$'},
    ];

    const buttons = butData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return(
            <button className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })
    return (
            <div className="btn-group">
                {buttons}
                {/*<button className="btn btn-light"*/}
                {/*        type="button">*/}
                {/*    Все сотрудники*/}
                {/*</button>*/}
                {/*<button className="btn btn-outline-light"*/}
                {/*        type="button">*/}
                {/*    Сотрудники на повышение*/}
                {/*</button>*/}
                {/*<button className="btn btn-outline-light"*/}
                {/*        type="button">*/}
                {/*    З/П больше 100$*/}
                {/*</button>*/}
            </div>
    );
}

export default AppFilter;