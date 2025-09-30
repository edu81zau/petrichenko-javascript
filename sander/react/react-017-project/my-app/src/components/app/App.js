import './App.css';
import { useState } from 'react';

import Form from '../form/Form.js';

// export default function App() {
//     const [showHint, setShowHint] = useState(false);
//     if (showHint) {
//         return (
//             <div>
//                 <p>
//                     <i>Hint: Your favorite city?</i>
//                 </p>
//                 <Form />
//                 <button
//                     onClick={() => {
//                         setShowHint(false);
//                     }}
//                 >
//                     Hide hint
//                 </button>
//             </div>
//         );
//     }
//     return (
//         <div>
//             <p>
//                 <i></i>
//             </p>
//             <Form/>
//             <button
//                 onClick={() => {
//                     setShowHint(true);
//                 }}
//             >
//                 Show hint
//             </button>
//         </div>
//     );
// }


//Это вариант давался в пособии
export default function App() {
    const [showHint, setShowHint] = useState(false);
    return (
        <div>
            {showHint && (
                <p>
                    <i>Hint: Your favorite city?</i>
                </p>
            )}
            <Form />
            {showHint ? (
                <button
                    onClick={() => {
                        setShowHint(false);
                    }}
                >
                    Hide hint
                </button>
            ) : (
                <button
                    onClick={() => {
                        setShowHint(true);
                    }}
                >
                    Show hint
                </button>
            )}
        </div>
    );
}
