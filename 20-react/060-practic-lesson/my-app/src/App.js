import {Component} from "react";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 1,
            randomNumber: null,
        }
    }

    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке

    btnInc = () => {
        console.log('btnInc');
        this.setState(state => {
            if (state.start < 50) {
                return {
                    start: state.start + 1
                };
            } else {
                return null; // Важно вернуть null, чтобы предотвратить обновление состояния
            }
        });
    }

    btnDec = () => {
        console.log('btnDec');
        this.setState(state => {
            if (state.start > -50) {
                return {
                    start: state.start - 1
                };
            } else {
                return null; // Важно вернуть null, чтобы предотвратить обновление состояния
            }
        });
    }

    btnRand = () => {
        console.log('btnRand');
        const min = -50;
        const max = 50;
        const randomNumber =
            Math.floor(Math.random() * (max - min + 1)) + min;
        this.setState(state => {
            return {
                start: state.start = randomNumber
            }
        });
    };

    btnRes = () => {
        console.log('btnRes');
        this.setState(state => {
            return {start: state.start = 0}
        });
    }

    render() {
        return (
            <div className="app">
                <div className="counter">{this.state.start}</div>
                <div className="controls">
                    <button onClick={this.btnInc}>INC</button>
                    <button onClick={this.btnDec}>DEC</button>
                    <button onClick={this.btnRand}>RND</button>
                    <button onClick={this.btnRes}>RESET</button>
                </div>
            </div>
        )
    }
}

export default App;
