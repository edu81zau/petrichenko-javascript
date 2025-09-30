import {useState} from 'react';

import {Counter} from '../counter/Counter';
import './App.css';

export default function App() {
    const [isFancy, setIsFancy] = useState(false);
    if (isFancy) {
        return (
            <div>
                <Counter isFancy={true} />
                <label>
                    <input
                        type="checkbox"
                        checked={isFancy}
                        onChange={(e) => {
                            setIsFancy(e.target.checked);
                        }}
                    />
                    Use fancy styling
                </label>
            </div>
        );
    }
    return (
        <div>
            <Counter isFancy={false} />
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={(e) => {
                        setIsFancy(e.target.checked);
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}
