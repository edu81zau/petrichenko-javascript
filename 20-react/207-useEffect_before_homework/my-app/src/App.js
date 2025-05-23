import {Component, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

// class Slider extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }
//
//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`;
//     }
//
//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`;
//     }
//
//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }
//
//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }
//
//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100"
//                          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//                          alt="slide"/>
//                     <div className="text-center mt-5">Active slide {this.state.slide}
//                         <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1
//                         </button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1
//                         </button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay
//                         </button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const Slider = () => {

    // useState возвращает массив из двух элементов
    // первый элемент - наш state
    // второй элемент - это функция, которая меняет это состояние
    // в переменную slide можно помещять все, что угодно
    // функцию, как правило, начинают называть с set,
    // потому что она устанавлиявает какое-то значение

    //Рекомендуется состояния разбивать на отдельные переменные
    // Так, как написано внизу - плохо
    // const [state, setState] =
    //     useState({slide: 0, autoPlay: false});
    //
    // function changeSlide(i) {
    //     //Если написать так, то мы просто потеряем свойство autoPlay
    //     //setState(state => ({slide:state.slide+i}));
    //
    //     setState(state => ({...state, slide: state.slide + i}));
    // }
    //
    // function toggleAutoPlay() {
    //     setState(autoPlay => ({...state, autoPlay: !state.autoPlay}));
    // }


    const [slider, setSlider] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);

    function logging() {
        console.log("App.Slider.logging");

    }

    // Если useEffect вторым аргументом передать массив зависимостей
    // то, если не одна зависимость не изменилась, что useEffect не
    // будет вызываться. Если передать этот массив пустым, то
    // useEffect будет вызван один раз и все.
    useEffect(() => {
        //console.log("Slider.useEffect");
        document.title = `Slide: ${slider}`;
        window.addEventListener('click', logging);

        return () => {
            window.removeEventListener('click', logging);
        }
    }, [slider])

    // Для того, что бы состояние state зависило от предыдущего,
    // нужно передавать callback function
    function changeSlider(i) {
        setSlider(slider => slider + i);
    }

    function toggleAutoPlay() {
        setAutoPlay(autoPlay => !autoPlay);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100"
                     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                     alt="slider"/>
                <div className="text-center mt-5">Active slider {slider}<br/>
                    {autoPlay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlider(-1)}>-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlider(1)}>+1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoPlay}>toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}


function App() {

    const [slider, setSlider] = useState(true);

    return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            { slider? <Slider/>: null }
        </>
    );
}

export default App;

