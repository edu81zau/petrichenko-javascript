import {useState, useReducer} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return {autoPlay: !state.autoPlay};
        case 'slow':
            return {autoPlay: 300};
        case 'fast':
            return {autoPlay: 700};
        case'custom':
            return {autoPlay: action.payload};
        default:
            throw new Error('Unknown action type ' + action.type);
    }
};

function init(initial) {
    return {autoPlay: initial};
}

const Slider = ({initial}) => {

    const [slide, setSlide] = useState(0);
    //const [autoPlay, setAutoPlay] = useState(false);
    const [autoPlay, dispatch] = useReducer(reducer, initial, init);


    // Для того, что бы состояние state зависило от предыдущего,
    // нужно передавать callback function
    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    // function toggleAutoPlay() {
    //     setAutoPlay(autoPlay => !autoPlay);
    // }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100"
                     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                     alt="slide"/>
                <div className="text-center mt-5">Active slide {slide}<br/>
                    {autoPlay.autoPlay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'toggle'})}>toggle autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'slow'})}>slow autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'fast'})}>fast autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={(e) => dispatch({type: 'custom', payload: +e.target.textContent})}>1000
                    </button>
                </div>
            </div>
        </Container>
    )
}


function App() {
    return (
        <Slider initial={false}/>
    );
}

export default App;

