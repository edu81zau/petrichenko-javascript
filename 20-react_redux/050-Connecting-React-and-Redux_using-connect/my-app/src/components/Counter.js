import {Component} from "react";

// Эта функция  - это компонент высшего порядка
import {connect} from 'react-redux';
import * as actions from "../actions";

// const Counter = ({counter, inc, dec, rnd}) => {
//     return (
//         <div className="jumbotron">
//             <h1>{counter}</h1>
//             <button onClick={dec} className="btn btn-primary">DEC</button>
//             <button onClick={inc} className="btn btn-primary">INC</button>
//             <button onClick={rnd} className="btn btn-primary">RND</button>
//         </div>
//     )
// }


class Counter extends Component {
    render() {
        const {counter, inc, dec, rnd} = this.props;
        return (
            <div className="jumbotron">
                <h1>{counter}</h1>
                <button onClick={dec} className="btn btn-primary">DEC</button>
                <button onClick={inc} className="btn btn-primary">INC</button>
                <button onClick={rnd} className="btn btn-primary">RND</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {counter: state.value}
}


// Здесь мы получим другой компонент, который будет обернут в дополнительный функционал,
// который мы ему дадим
export default connect(mapStateToProps, actions)(Counter);