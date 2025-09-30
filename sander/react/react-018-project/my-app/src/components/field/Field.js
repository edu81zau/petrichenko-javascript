import { useState } from 'react';

export default function Field({ label }) {
    const [text, setText] = useState('');
    return (
        <label>
            {label}:{' '}
            <input
                type="text"
                value={text}
                placeholder={label}
                onChange={(e) => setText(e.target.value)}
            />
        </label>
    );
}