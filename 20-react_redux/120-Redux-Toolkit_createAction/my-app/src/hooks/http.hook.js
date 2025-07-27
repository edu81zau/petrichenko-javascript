import {useCallback} from "react";

/**
 * `useHttp` — это кастомный хук React, предназначенный для выполнения HTTP-запросов.
 * Он инкапсулирует логику работы с Fetch API, предоставляя унифицированный способ
 * отправки запросов на сервер и базовую обработку успешных ответов или ошибок.
 *
 * В текущей версии хук возвращает только функцию `request`.
 * Закомментированные части кода показывают, как можно было бы расширить хук
 * для управления состоянием запроса (например, 'waiting', 'loading', 'error')
 * и функцией для сброса ошибок, но эти функции сейчас не активны.
 *
 * @returns {object} Объект, содержащий функцию `request`.
 */
export const useHttp = () => {
    // const [process, setProcess] = useState('waiting');

    /**
     * `request` — асинхронная функция для отправки HTTP-запросов.
     * Она обёрнута в `useCallback` для мемоизации, что предотвращает её повторное создание
     * при каждом рендере компонента, который использует этот хук. Это оптимизирует производительность,
     * особенно при передаче `request` в качестве зависимости другим хукам (`useEffect`, `useCallback`).
     *
     * @param {string} url - URL-адрес, на который отправляется запрос.
     * @param {string} method - HTTP-метод запроса (по умолчанию 'GET').
     * @param {string|object|null} body - Тело запроса (по умолчанию `null`). Если передаётся объект, он должен быть предварительно преобразован в JSON-строку.
     * @param {object} headers - Объект с заголовками запроса (по умолчанию `{'Content-Type': 'application/json'}`).
     * @returns {Promise<any>} Промис, который разрешается в данные ответа (JSON-объект) в случае успешного запроса.
     * @throws {Error} Выбрасывает ошибку, если запрос не успешен (например, HTTP-статус не 2xx).
     */
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        // setProcess('loading');

        try {
            // Выполняем HTTP-запрос с использованием встроенного Fetch API
            const response = await fetch(url, {method, body, headers});

            // Проверяем, был ли ответ сервера успешным (HTTP-статус в диапазоне 200-299)
            if (!response.ok) {
                // Если ответ не успешный, выбрасываем ошибку с URL и статусом ответа
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            // Парсим тело успешного ответа как JSON
            const data = await response.json();

            return data;
        } catch (e) {
            // Закомментировано: установка статуса процесса в 'error' при возникновении ошибки.
            // setProcess('error');
            // Перебрасываем ошибку дальше, чтобы её мог обработать вызывающий код.
            throw e;
        }
    }, []);

    // const clearError = useCallback(() => {
    // setProcess('loading');
    // }, []);

    // Возвращаем объект, содержащий функцию `request`
    // и закомментированные элементы, которые могли бы быть возвращены,
    // если бы функционал управления процессом был активен.
    return {
        request,
        // clearError,
        // process,
        // setProcess
    }
}