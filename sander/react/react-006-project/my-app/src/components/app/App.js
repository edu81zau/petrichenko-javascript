
import {Counter} from '../counter/Counter';

import './App.css';

export default function App() {
    const counter = <Counter />;
    return (
        <div>
            {counter}
            {counter}
        </div>
    );
}