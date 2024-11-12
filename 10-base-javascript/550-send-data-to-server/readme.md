<h1>О проекте</h1>

Пример для текущего урока.

<h2>Запуск PHP + Docker</h2>

1. Устанавливаем в систему Docker с Docker-Compose (делается один раз).
* [gemini: Как установить "docker" и "docker compose" в windows 11?](https://g.co/gemini/share/6b52ae8a3ec4)
* [Dockerfile reference](https://docs.docker.com/reference/dockerfile/)
* [Docker Compose overview](https://docs.docker.com/compose/)
2. Открываем терминал с текущей папкой. В текущей папке должен быть файл [docker-compose.yaml](docker-compose.yaml)
3. Запускаем команду "docker compose up".   
Стартует сервер, доступный по URL http://localhost:7080/
```shell
docker compose up
```
```shell
docker compose up --build
```
4. Если сервер уже не нужен  
Нажимаем в терминале "CTRL+C" для прерывания.  
Удаляем временный образ с диска.
```shell
docker compose down
```

<h2>Запуск node-js (@deprecated: в следующих лекциях backend на PHP)</h2>

- Установить зависимости (сделать один раз)

```shell
npm install
```

- Запустить dev-сервер каждый раз, когда возвращяемся к проекту

```shell
npm run dev
```

- Открыть в браузере url http://127.0.0.1:7080/
