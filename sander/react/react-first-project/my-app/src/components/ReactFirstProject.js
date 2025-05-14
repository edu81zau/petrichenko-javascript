import {useState} from "react";

import "./reactFirstProject.css";

const ReactFirstProject = () => {
    const [counter, setCounter] = useState(0);

    const onInc = (num) => {
        setCounter(num + 1);
    }

    const onDec  = (num) => {
        setCounter(num - 1);
    }

    return (
        <>
            <div className="inc" onClick={() => onInc(counter)}>
                Increment
            </div>
            <div className="scrin">
                {counter}
            </div>
            <div className="dec" onClick={() => onDec(counter)}>
                Decrement
            </div>

        </>
    )
}

export default ReactFirstProject;