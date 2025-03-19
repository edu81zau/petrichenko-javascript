import React from 'react';
import ReactDOM from 'react-dom';
import ReactLiveCycleChild from "./ReactLiveCycleChild";

class ReactLiveCycle extends React.Component {
    state = {
        backgroundColor: 'white',
        setBackgroundColor: 'yellow'
    };

    constructor(props) {
        console.log('ReactLiveCycle/constructor', arguments);
        super(props);
        this.ref = React.createRef();
    }


    //-----------------------------------------------------------------------------
    onClickSetState = () => {
        console.log('ReactLiveCycle/onClickSetState');
        //this.setState(this.state)
        this.setState(this.state)
    }

    //-----------------------------------------------------------------------------
    changeBackgroundColorBySetState = () => {
        console.log('ReactLiveCycle/changeBackgroundColorBySetState');
        const oldBackgroundColor = this.state.backgroundColor;
        console.log('ReactLiveCycle/changeBackgroundColorBySetState'
            , "oldBackgroundColor = " + oldBackgroundColor);
        this.setState({
            backgroundColor: this.state.setBackgroundColor
        });
        setTimeout(() => {
            console.log('ReactLiveCycle/changeBackgroundColorBySetState/timer-callback-BEG');
            this.setState({
                backgroundColor: oldBackgroundColor
            });
            console.log('ReactLiveCycle/changeBackgroundColorBySetState/timer-callback-END');
        }, 3000);
    }

    // /**
    //  * @deprecated
    //  * @see https://ru.reactjs.org/docs/react-dom.html#finddomnode
    //  */
    changeBackgroundColorByFindDOMNode = () => {
        console.log('ReactLiveCycle/changeBackgroundColorByFindDOMNode');
        //const domNode = ReactDOM.findDOMNode(this);
        const domNode = this.ref.current;
        // console.log(domNode);
        const oldBackgroundColor = domNode.style.backgroundColor;
        domNode.style.backgroundColor = this.state.setBackgroundColor;
        setTimeout(() => {
            domNode.style.backgroundColor = oldBackgroundColor;
        }, 2000);
    }

    changeBackgroundColorByRef = ()=> {
        console.log('ReactLiveCycle/changeBackgroundColorByRef');
        //return;
        const oldBackgroundColor = this.ref.current.style.backgroundColor;
        this.ref.current.style.backgroundColor = this.state.setBackgroundColor;
        setTimeout(() => {
            console.log('ReactLiveCycle/changeBackgroundColorByRef/timer-callback');
            this.ref.current.style.backgroundColor = oldBackgroundColor;
        }, 2000);
    }


    render() {
        console.log('ReactLiveCycle/UPDATE/render', arguments);
        const buttonStyle = {
            display: 'inline-block',
            padding: '0.5rem'
        };
        return (
            <div
                ref={this.ref}
                style={{
                    display: 'inline-block',
                    border: '1px solid brown',
                    padding: '1rem',
                    margin: '1rem',
                    backgroundColor: this.state.backgroundColor
                }}>
                <div>
                    <h2>ReactLiveCycle</h2>
                    <div key='buttons'
                         style={{
                             textAlign: 'center'
                         }}
                    >
                        <button
                            //onClick={this.onClickSetState.bind(this)}
                            onClick={this.onClickSetState}
                            style={buttonStyle}
                        >Обновить состояние (вхолостую)
                        </button>

                        <button onClick={() => {
                            this.changeBackgroundColorBySetState()
                        }}
                                style={buttonStyle}
                        >Поменять цвет - setState
                        </button>

                        <button onClick={() => {
                            this.changeBackgroundColorByFindDOMNode()
                        }} style={buttonStyle}>Поменять цвет - FindDOMNode
                        </button>

                        <button onClick={() => {
                            this.changeBackgroundColorByRef()
                        }}
                                style={buttonStyle}
                        >Поменять цвет - ReactRef
                        </button>
                    </div>
                </div>
                <ReactLiveCycleChild/>
            </div>
        )
    }

    /**
     * Компонент уже в реальном DOMе.
     * Инициализация завершена.
     * Методы работы с DOM работают и ноды находятся, но страница в этот момент еще не показывается пользователю.
     */
    componentDidMount() {
        console.log('ReactLiveCycle/componentDidMount', arguments);
        // При старте меняем цвет через "React ref"
        this.changeBackgroundColorByRef();
        // Для тестирования вызываем alert.
        // alert('ReactLiveCycle/componentDidMount/PAUSE');
    }

//-----------------------------------------------------------------------------
//-- Обновление
//-----
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('ReactLiveCycle/shouldComponentUpdate', arguments);
//         return true;
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         console.log('ReactLiveCycle/componentDidUpdate', arguments);
//     }

//-----------------------------------------------------------------------------
//-- Удаление
//-----
    componentWillUnmount() {
        console.log('ReactLiveCycle/componentWillUnmount', arguments);
        //alert('STOP/componentWillUnmount')
    }

}

export default ReactLiveCycle;