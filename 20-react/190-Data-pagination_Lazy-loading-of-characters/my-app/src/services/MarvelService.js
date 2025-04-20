class MarvelService {

    // _apiBase = "https://gateway.marvel.com:443/v1/public/";
    // _apiKey = "apikey=af70b2d45653faa4424dbd5fddc5d1e1";

    _apiBase = "https://marvel-server-zeta.vercel.app/";
    _apiKey = "apikey=d4eecb0c66dedbfae4eab45d312fc1df";
    _baseOffset = 0;

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
//Получение персонажей
    /*
    * limit - сколько персонажей отображать
    * offset - сколько персонажей пропустить
    */

    getAllCharacters = async (offset = this._baseOffset) => {
        const url = `${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`;

        console.log("CharList.getAllCharacters",url);

        let res = await this.getResource(url);
        res = res.data.results.map(this._transformCharacter);
        return res;
    }

//Получение персонажа
    getCharacter = async (id) => {
        const url = `${this._apiBase}characters/${id}?${this._apiKey}`;
        console.log("MarvelServise.getCharacter",url);
        let res = await this.getResource(url);
        res = this._transformCharacter(res.data.results[0]);
        if (res.description === "") {
            res.description = "Sorry, but we didn't find description";
        }
        if (res.description.length > 146) {
            res.description = res.description.slice(0, 146) + " ... to continue go on homepage ";
        }


        return res;
    }

    // Наличие нижнего подчеркивание в имени метода говорит о том, что нужно
    // вносить изменений в этот метод нужно очень аккуратно
    // Здесь происходит трансформация данных
    _transformCharacter = (char) => {
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
}

export default MarvelService;