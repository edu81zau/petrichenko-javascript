import './App.css';

import Counter from '../counter/Counter';
import CounterGemini from '../counterGemini/CounterGemini';

export default function App() {
    return (
        <>
            <Counter/>
            <Counter/>
            <CounterGemini/>
        </>
    )
}


// import {useState} from 'react';
//
// export default function Counter() {
//     const [count, setCount] = useState(0);
//
//     function handleClick() {
//         setCount((n) => {
//             return n + 1;
//         });
//     }
//
//     return (
//         <button onClick={() => {
//             handleClick();
//             handleClick();
//             handleClick();
//         }}>
//             You pressed me {count} times
//         </button>
//     );
// }

