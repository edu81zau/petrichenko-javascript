import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

//Первый вариант React element
//const elem = <h2>Hello World!</h2>;

// Второй вариант
//const elem = React.createElement("h2", {className:"greetings"},"Hello World!");

//Результат работы второго варианта

// const elemnent = {
//     type:"h2",
//     props:{
//         className:"greetings",
//         children:"Hello World!"
//     }
// };
// В дальнейшей работе используем первый вариант

const text = "Hello World!";

const elem = (
    <div>
        <h2>Текст: {text}</h2>
        <input type="text" onChange={e => console.log(e)} />
        <button>Click</button>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    elem
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();