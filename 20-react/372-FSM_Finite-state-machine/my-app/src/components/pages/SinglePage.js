import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import useMarvelService from "../../services/MarvelService";
import AppBanner from "../appBanner/AppBanner";
import setContent from "../../utils/setContent";


const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {clearError, getComic, getCharacter, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateData()
        //eslint-disable-next-line
    }, [id])

    const updateData = () => {
        clearError();

        switch (dataType) {
            case 'comics':
                getComic(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
                break;
            case 'characters':
                getCharacter(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    // let view;
    // if (error) {
    //     view = <ErrorMessage/>;
    // } else if (loading) {
    //     view = <Spinner/>
    // } else if (!(!data || error || loading)) {
    //     view = <Component data={data}/>;
    // }

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
        </>
    )
}

export default SinglePage;