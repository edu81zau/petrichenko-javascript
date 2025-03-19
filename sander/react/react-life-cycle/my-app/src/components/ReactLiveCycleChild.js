import React from 'react';

class ReactLiveCycleChild extends React.Component {
    state = {
        buttonTitle: 'Отладочная информация в консоли браузера.',
        cntClick: 0
    };

    //-----------------------------------------------------------------------------
    // Инициализация

    constructor(props) {
        console.log('ReactLiveCycleChild/INIT/constructor', arguments);
        super(props);
        this.ref = React.createRef();
    }

    /**
     * Для получения данных.
     */
    componentDidMount() {
        console.log("ReactLiveCycleChild/INIT/componentDidMount");
        this.defaultColor = this.ref.current.style.backgroundColor;
    }

    render() {
        console.log('ReactLiveCycleChild/UPDATE/render', arguments);
        return (
            <div ref={this.ref}
                 style={{
                     display: 'inline-block',
                     border: '1px solid brown',
                     padding: '1rem',
                     margin: '1rem',
                     backgroundColor: 'coral'
                 }}>
                <h2>ReactLiveCycleChild</h2>

                <button onClick={this.onCounterClick.bind(this)} title={this.state.buttonTitle}
                >Нажми на меня!
                </button>

                <div>Нажали раз: {this.state.cntClick}</div>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('ReactLiveCycleChild/UPDATE/shouldComponentUpdate', arguments);
        return true;
    }
//-----------------------------------------------------------------------------
//-- Удаление
//-----
    componentWillUnmount() {
        console.log('ReactLiveCycleChild/DEAD/componentWillUnmount', arguments);
        //alert('STOP/componentWillUnmount')
    }

//-----------------------------------------------------------------------------
    onCounterClick() {
        console.log('ReactLiveCycleChild/onCounterClick', arguments);
        this.setState({
            cntClick: this.state.cntClick + 1
        });
        this.changeBackgroundColorByRef()
    }

    changeBackgroundColorByRef() {
        console.log('ReactLiveCycle/changeBackgroundColorByRef', arguments);
        this.ref.current.style.backgroundColor = 'yellow';
        setTimeout(() => {
            console.log('ReactLiveCycle/changeBackgroundColorByRef/timer-callback', arguments);
            this.ref.current.style.backgroundColor = this.defaultColor;
        }, 500);
    }

}

export default ReactLiveCycleChild;