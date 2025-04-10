import {Component} from "react";
import PropTypes from 'prop-types';

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";

import './charList.scss';


/*
    Когда компенонет будет создан, т.е. будет вызываться
    хук componentDidMount вызывается метод onRequest() без аргументов.
    Потом мы обращаемся к серверу, но аргумент у нас не передается.
    Это означает, что в MarvelService будет подставлен отступ по умолчанию.
    Потом, когда onRequest будет вызываться по клику по кнопке будет подставляться
    какое-то число, который будет формировать другой запрос.

 */
class CharList extends Component {

    state = {
        charList: [],
        loading: true, // это для первичной загрузки (9 персонажей)
        error: false,
        newItemLoading: false, // это для ручной дозагрузки персонажей
        offset: 0,
        charEnded: false,
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    //Здесь персонажи загружаются
    onCharListLoading = () => {
        this.setState({
            newItemLoading: true,
        })
    }
    //Здесь персонажи загрузились
    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        //новые персонажи добавляются к предыдущим в charList
        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended,
        }))
    }


    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    itemRefs = [];

    setRef = (ref) => {
        console.log("CharList.setRef",ref);
        this.itemRefs.push(ref);
    }

    focusOnItem = (id) => {
        console.log("CharList.focusOnItem -- ",id);
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }


    renderItems(arr) {
        const items = arr.map((item,i) => {
            console.log("CharList.renderItems -- ", item.id)
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail.includes("not_available")) {
                imgStyle = {'objectFit': 'contain'};
            }
            return (
                <li
                    className="char__item"
                    tabIndex={0}
                    ref={this.setRef}
                    key={item.id}
                    onClick={() => {
                        this.props.onCharSelected(item.id);
                        this.focusOnItem(i);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            e.preventDefault();
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }
                    }}>

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
        const {
            charList, loading, error, offset
            , newItemLoading, charEnded
        } = this.state;
        const items = this.renderItems(charList);

        // const errorMessage = error ? <ErrorMessage/> : null;
        // const spinner = loading ? <Spinner/> : null;
        // const content = !(loading || error) ? items : null;

        let view;
        if (error) {
            view = <ErrorMessage/>;
        } else if (loading) {
            view = <Spinner/>
        } else if (!(loading || error)) {
            view = items;
        }


        return (
            <div className="char__list">
                {/*{errorMessage}*/}
                {/*{spinner}*/}
                {/*{content}*/}
                {view}
                <button
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(offset)}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;