import {useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";

import './charList.scss';


const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset).then(onCharListLoaded)
    }

    //Здесь персонажи загрузились
    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
        //новые персонажи добавляются к предыдущим в charList
        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        console.log("CharList.focusOnItem -- ", id);
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            console.log("CharList.renderItems -- ", item.id)
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail.includes("not_available")) {
                imgStyle = {'objectFit': 'contain'};
            }
            return (
                <CSSTransition key={item.id} timeout={500} classNames="char__item">
                    <li
                        className="char__item"
                        tabIndex={0}
                        ref={el => itemRefs.current[i] = el}
                        key={item.id}
                        onClick={() => {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === "Enter") {
                                //e.preventDefault();
                                props.onCharSelected(item.id);
                                focusOnItem(i);
                            }
                        }}>

                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                    </li>
                </CSSTransition>
            )
        });
        return (
            <ul className="char__grid">
                <TransitionGroup component={'ul'}  className="char__grid">
                    {items}
                </TransitionGroup>
            </ul>
        )
    }

    const items = renderItems(charList);

    let view;
    if (error) {
        view = <ErrorMessage/>;
    } else if (loading && !newItemLoading) {
        view = <Spinner/>
    }

    return (
        <div className="char__list">
            {view}
            {items}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;