import {Component, useState} from 'react';
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


    const [slide, setSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);


    // Для того, что бы состояние state зависило от предыдущего,
    // нужно передавать callback function
    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoPlay() {
        setAutoPlay(autoPlay => !autoPlay);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100"
                     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                     alt="slide"/>
                <div className="text-center mt-5">Active slide {slide}<br/>
                    {autoPlay ? 'auto' : null}
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
                        onClick={toggleAutoPlay}>toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}


function App() {
    return (
        <Slider/>
    );
}

export default App;


// Домашнее задание. Представлено два решения - преподавателя и мое
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1.
// Без ограничений, но можете добавить границу в -50/50.
// По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50.
// Конструкцию можете прогуглить за 20 секунд :)
// Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов.
// Выберите один из вариантов

//Преподавателя

// const App = (props) => {
//     const [counter, setCounter] = React.useState(props.counter);
//
//     const incCounter = () => {
//         if (counter < 50) {
//             setCounter(counter => counter + 1)
//         }
//     }
//
//     const decCounter = () => {
//         if (counter > -50) {
//             setCounter(counter => counter - 1)
//         }
//     }
//
//     const rndCounter = () => {
//         setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
//     }
//
//     const resetCounter = () => {
//         setCounter(props.counter)
//     }
//
//     return (
//         <div className="app">
//             <div className="counter">{counter}</div>
//             <div className="controls">
//                 <button onClick={incCounter}>INC</button>
//                 <button onClick={decCounter}>DEC</button>
//                 <button onClick={rndCounter}>RND</button>
//                 <button onClick={resetCounter}>RESET</button>
//             </div>
//         </div>
//     )
// }
//
// ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

//Мое

// const App =()=>{
//     const [count, setCount] = React.useState(0);
//
//     incCount = (i) => {
//         setCount(count => count + i);
//     }
//
//     decCount = (i) => {
//         setCount(count => count -i);
//     }
//
//     randCount = () => {
//         setCount(count => Math.round( Math.random() * 100 - 50));
//     }
//
//     rstCount =()=>{
//         setCount(count => 0);
//     }
//     return (
//         <div class="app">
//             <div class="counter">{count}</div>
//             <div class="controls">
//                 <button onClick={()=>incCount(1)}> INC </button>
//                 <button onClick={()=>decCount(1)}> DEC </button>
//                 <button onClick={()=>randCount()}>RND</button>
//                 <button onClick={()=>rstCount()}>RESET</button>
//             </div>
//         </div>
//     )
// }
//
// ReactDOM.render(<App counter={0}/>, document.getElementById('app'));