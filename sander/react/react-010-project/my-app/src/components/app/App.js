import {useState} from 'react';

import {Counter} from '../counter/Counter';
import './App.css';

export default function App() {
    const [isPaused, setIsPaused] = useState(false);
    return (
        <div>
            {isPaused ? <p>See you later!</p> : <Counter />}
            <label>
                <input
                    type="checkbox"
                    checked={isPaused}
                    onChange={(e) => {
                        setIsPaused(e.target.checked);
                    }}
                />
                Take a break
            </label>
        </div>
    );
}
