import {Component} from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";

import './charList.scss';


class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
    }

    marvelService = new MarvelService();

    componentDidMount() {

        this.foo.bar = 0;

        this.marvelService.getAllCharacters()
            .then(this.onCharListloaded)
            .catch(this.onError)
    }

    onCharListloaded = (charList) => {
        this.setState({
            charList,
            loading: false,
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems(arr) {
        const items = arr.map(item => {
            console.log("CharList.renderItems",item.id)
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail.includes("not_available")) {
                imgStyle = {'objectFit': 'contain'};
            }
            return (
                <li
                    className="char__item"
                    key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render() {
        const {charList, loading, error} = this.state;
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;