class MarvelService {

    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "apikey=af70b2d45653faa4424dbd5fddc5d1e1";

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        let res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        res = res.data.results.map(this._transformCharacter);
        return res;
    }
    getCharacter = async (id) => {
        let res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        res = this._transformCharacter(res.data.results[0]);
        if (res.description === "") {
            res.description = "Sorry, but we didn't find description";
        }
        if ( res.description.length > 146){
            res.description = res.description.slice(0, 146) + " ... to continue go on homepage ";
        }


        return res;
    }

    _transformCharacter = (char) => {
        const res = {
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
        }
        return res;
    }
}

export default MarvelService;