import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import AppBanner from "../appBanner/AppBanner";

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {loading, error, clearError, getComic, getCharacter} = useMarvelService();

    useEffect(() => {
        updateData()
    }, [id])

    const updateData = () => {
        clearError();

        console.log("SinglePage",dataType)

        switch (dataType) {
            case 'comics':
                getComic(id).then(onDataLoaded);
                break;
            case 'characters':
                getCharacter(id).then(onDataLoaded);
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    let view;
    if (error) {
        view = <ErrorMessage/>;
    } else if (loading) {
        view = <Spinner/>
    } else if (!(!data || error || loading)) {
        view = <Component data={data}/>;
    }

    return (
        <>
            <AppBanner/>
            {view}
        </>
    )
}

export default SinglePage;