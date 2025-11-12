import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        setWalk(!walk);
        walk? alert("Следующая остановка"): alert ("Следующим будет идти");
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1
                style={{
                    color: walk ? 'darkgreen' : 'darkred',
                }}
            >
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}