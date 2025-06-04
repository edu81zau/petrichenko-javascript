import {useHttp} from "../hooks/http.hook";

const useMarvelService = () => {

    const {loading, request, error, clearError} = useHttp();

    const _apiBase = "https://marvel-server-zeta.vercel.app/";
    const _apiKey = "apikey=d4eecb0c66dedbfae4eab45d312fc1df";
    const _baseOffset = 0;


    const getAllCharacters = async (offset = _baseOffset) => {
        const url = `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`;

        console.log("CharList.getAllCharacters", url);

        try {
            let res = await request(url);
            res = res.data.results.map(_transformCharacter);
            return res;
        } catch (e){
            console.log("MarvelService.getAllCharacters - error",e.message);
            return [];
        }
    }

//Получение персонажа
    const getCharacter = async (id) => {
        const url = `${_apiBase}characters/${id}?${_apiKey}`;
        console.log("MarvelService.getCharacter", url);
        try{
            let res = await request(url);
            res = _transformCharacter(res.data.results[0]);
            return res;
        }catch(e){
            console.log("MarvelService.getCharacter - error",e.message);
            return {
                name: "No name",
                description: "No description",
                thumbnail: `/img/no-data.png`,
                homepage: `/img/no-data.png`,
                wiki: `/img/no-data.png`,
            };
        }
    }


    const getAllComics = async (offset = 0) => {
        const res = await request(
            `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
        );
        return res.data.results.map(_transformComics);
    };

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    };

    // Наличие нижнего подчеркивание в имени метода говорит о том, что нужно
    // вносить изменений в этот метод нужно очень аккуратно
    // Здесь происходит трансформация данных
    const _transformCharacter = (char) => {
        const res = {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
        return res;
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || "There is no description",
            pageCount: comics.pageCount
                ? `${comics.pageCount} p.`
                : "No information about the number of pages",
            thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
            language: comics.textObjects[0]?.language || "en-us",
            // optional chaining operator
            price: comics.prices[0].price
                ? `${comics.prices[0].price}$`
                : "not available",
        };
    };



    return {
            loading,
            error,
            clearError,
            getAllCharacters,
            getCharacter,
            getAllComics,
            getComic,
        };
};

export default useMarvelService;