import './App.css';
import { useState } from 'react';

import Field from '../field/Field.js';

export default function App() {
    const [reverse, setReverse] = useState(false);
    let checkbox = (
        <label>
            <input
                type="checkbox"
                checked={reverse}
                onChange={(e) =>
                    setReverse(e.target.checked)
                }
            />
            Reverse order
        </label>
    );
    if (reverse) {
        return (
            <>
                <Field key="lastName" label="Last name" />
                <Field key="firstName" label="First name" />
                {checkbox}
            </>
        );
    } else {
        return (
            <>
                <Field key="firstName" label="First name" />
                <Field key="lastName" label="Last name" />
                {checkbox}
            </>
        );
    }
}