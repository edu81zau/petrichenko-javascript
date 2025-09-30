import {useState} from 'react';

import {Counter} from '../counter/Counter';
import './App.css';

export default function App() {
    const [isFancy, setIsFancy] = useState(false);
    return (
        <div>
            {isFancy ? (
                <div>
                    <Counter isFancy={true} />
                </div>
            ) : (
                <section>
                    <Counter isFancy={false} />
                </section>
            )}
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