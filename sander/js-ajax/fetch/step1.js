async function test() {
    const url = 'https://api.github.com/users/ZVanoZ';

    let response = await fetch(url);
    console.log("Answer from fetch", response);

// Этот пример запроса Get с использованием await.
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа

        //декодирует ответ в формате JSON,
        //let json = await response.json();
        //console.log("Answer in json: ",json);

        //читает ответ и возвращает как обычный текст
        let text = await response.text();
        console.log("Answer in text: ",text);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

test();