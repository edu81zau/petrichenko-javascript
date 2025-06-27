import React, {useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

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

    const itemRefs = useRef([]);

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset).then(onCharListLoaded)
    }

    const onCharListLoaded = async (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
        setCharList([...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset(offset + 9);
        setCharEnded(ended);
    }

    const focusOnItem = (index) => {
        itemRefs.current.forEach(item => {
            if (item) {
                item.classList.remove('char__item_selected');
            }
        });

        if (itemRefs.current[index]) {
            itemRefs.current[index].classList.add("char__item_selected");
            itemRefs.current[index].focus();
        }
    };

    const blurOnItem = (index) => {
        if (itemRefs.current[index]) {
            itemRefs.current[index].classList.remove("char__item_selected");
        }
    };


    const renderItems = arr => {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail.includes("not_available")) {
                imgStyle = { objectFit: "contain" };
            }
            return (
                <CSSTransition
                    key={item.id}
                    timeout={500}
                    classNames="char__item"
                    nodeRef={el => itemRefs.current[i] = el}
                >
                    <li
                        className="char__item"
                        tabIndex={0}
                        key={item.id}
                        ref={el => itemRefs.current[i] = el}
                        onClick={() => {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }}
                        onBlur={() => blurOnItem(i)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                props.onCharSelected(item.id);
                                focusOnItem(i);
                            }
                        }}
                    >
                        <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                        <div className="char__name">{item.name}</div>
                    </li>
                </CSSTransition>
            );
        });

        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        );
    };

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