async function test() {
    const url = 'https://api.github.com/users/ZVanoZ';

    let fetchPromise = fetch(url);
    console.log("fetchPromise", fetchPromise);//Здесь возвращает promise

// Этот пример запроса Get без использования await.
    fetchPromise.then(
        /**
         *
         * @param {Response} response
         */
        (response) => {
            console.log("response", response);//Здесь возвращает response
            return response.json();
        }
    ).then(
        (json) => {
            console.log("Json: ", json);//Здесь возвращает json
        }
    );

}

test();