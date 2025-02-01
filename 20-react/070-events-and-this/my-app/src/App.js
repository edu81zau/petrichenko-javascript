import {Component} from "react";
import './App.css';

class WhoAmIt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years:27,
            position:""
        }
        this.nextYear = this.nextYear.bind(this);
    }

    nextYear= ()=>{
        this.setState(state => ({
            years:state.years +1
        }))
    }

    commitInputChanges =(e,color)=>{
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }
    render() {
        const {name, surname, link} = this.props;
        const {years, position} = this.state;
        //console.log(this);
        return (
            <div>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name},
                    surname - {surname},
                    age - {years},
                    position - {position}
                </h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e)=>
                        this.commitInputChanges(e,"some color")} />
                </form>
            </div>
        )
    }
}


function App() {
  return (
    <div className="App">
        <WhoAmIt name="John" surname="Smith" link="facebook.com"/>
        <WhoAmIt name="Alex" surname="Pupkin" link="tiktok.com"/>
    </div>
  );
}

export default App;
