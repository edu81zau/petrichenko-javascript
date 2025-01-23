import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        //const myComment = 'asdasdas  ' + item.name;
        return (
            <EmployersListItem
                {...item}
                // key={item.name}
                // name={item.name}
                // salary={item.salary}
                // //comment={myComment}
            />
        );
    })
    // console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;