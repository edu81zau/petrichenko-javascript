import './App.css';
import {useState} from 'react';

export default function App() {
        return (
            <>
                <Counter/>
                <Counter1/>
            </>
        );
}

// первый вариант тройного вызыва одной и той же функции
function Counter() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(n => n + 1);
    }

    return (
        <button onClick={() => {
            handleClick();
            handleClick();
            handleClick();
        }
        }>
            You pressed me {count} times
        </button>
    );
}

// второй вариант тройного вызыва одной и той же функции
export function Counter1() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(n => n + 1);
    }

    function handleTripleClick() {
        handleClick();
        handleClick();
        handleClick();
    }

    return (
        <button onClick={handleTripleClick}>
            You pressed me {count} times
        </button>
    );
}