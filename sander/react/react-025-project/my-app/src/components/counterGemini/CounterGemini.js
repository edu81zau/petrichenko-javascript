import {useState} from 'react';

/*
 Функция setCount жестко привязана к переменной count, поэтому
 абсолютно все равно, как именуется переменные, которые передаются
 ей как аргументы. Например, n или как-то еще
 */
export default function CounterGemini() {
    const [count, setCount] = useState(0);

    function handleClick(...args) {
        console.log("handleClick[ count, args]", [ count, args]);
        setCount((n) => {
            console.log("setCount[count, n]", [count, n]);
            return n + 1;
        });
    }

    return (
        <div>
            <span>CounterGemini {count}</span>
            <button onClick={() => {
                handleClick();
                handleClick();
                handleClick();
            }
            }>
                You pressed me {count} times
            </button>
        </div>
    );
}
