// import {useParams, Link} from "react-router-dom";
//
// import {useState, useEffect} from "react";
//
// import useMarvelService from "../../services/MarvelService";
// import Spinner from '../spinner/Spinner';
// import ErrorMessage from "../errorMessage/ErrorMessage";
//
// import './singleComicPage.scss';
// import Skeleton from "../skeleton/Skeleton";
// import AppBanner from "../appBanner/AppBanner";
//
//
//
// const SingleComicPage = () => {
//     const {comicId} = useParams();
//     const [comic, setComic] = useState(null);
//     const {loading, error, getComic, clearError} = useMarvelService();
//
//     useEffect(() => {
//         updateComic();
//     }, [comicId])
//
//     const updateComic = () => {
//
//         clearError();
//         getComic(comicId)
//             .then(onComicLoaded)
//
//     }
//
//     const onComicLoaded = (comic) => {
//         setComic(comic);
//     }
//
//     let view;
//     if (error) {
//         view = <ErrorMessage/>;
//     } else if (loading) {
//         view = <Spinner/>
//     } else if (!(!comic)) {
//         view = <View comic={comic}/>;
//     } else {
//         view = <Skeleton/>;
//     }
//
//     return (
//         <>
// 			<AppBanner/>
//             {view}
//         </>
//     )
// }
//
// const View = ({comic}) => {
//     const {title, description, pageCount,thumbnail, homepage,language, price} = comic;
//
//     return (
//         <div className="single-comic">
//             <img src={thumbnail} alt={title} className="single-comic__img"/>
//             <div className="single-comic__info">
//                 <h2 className="single-comic__name">{title}</h2>
//                 <p className="single-comic__descr">{description}</p>
//                 <p className="single-comic__descr">{pageCount}</p>
//                 <p className="single-comic__descr">Language: {language}</p>
//                 <div className="single-comic__price">{price}</div>
//             </div>
//             <Link to="/comics" className="single-comic__back">Back to all</Link>
//         </div>
//
//     )
// }
//
// export default SingleComicPage;