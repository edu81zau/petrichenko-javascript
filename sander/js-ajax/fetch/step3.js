async function test() {
    const url = 'https://api.github.com/users/ZVanoZ';

    let fetchPromise = fetch(url);
    console.log("fetchPromise", fetchPromise);//Здесь возвращает promise

// Демонстрация работы с заголовками ответа
    fetchPromise.then(
        /**
         *
         * @param {Response} response
         */
        (response) => {
            console.log("response", response);//Здесь возвращает response
            console.log("response.headers.Content-type", response.headers.get("Content-type"));
            for (let [key, value] of response.headers) {
                console.log(`Key = ${key},\nValue = ${value}`);
            }
            return response.json();
        }
    );

}

test();