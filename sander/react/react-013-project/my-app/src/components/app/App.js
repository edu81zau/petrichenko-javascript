import {useState} from 'react';

import {Counter} from '../counter/Counter';
import './App.css';

export default function App() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
        <div>
            {isPlayerA && <Counter person="Taylor" />}
            {!isPlayerA && <Counter person="Sarah" />}
            <button
                onClick={() => {
                    setIsPlayerA(!isPlayerA);
                }}
            >
                Next player!
            </button>
        </div>
    );
}