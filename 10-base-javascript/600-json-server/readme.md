https://www.npmjs.com/package/json-server
https://github.com/typicode/json-server

1. Инициализзируем проект npm

```shell
npm init
```

В результате выполнения команды мы получим файл package.json

2. Устанавливаем пакет json-server

```shell
npm i json-server --save-dev
```

В результате выполнения команды получили папку node_modules
Появился файл package-lock.json
В файле package.json в секции devDependencies появилась запись "json-server": "^1.0.0-beta.3"
Примечание: установленная версия не соответствует версии в видео.

3. Устанавливаем версию, соответствующую версии в видео

В текстовом редакторе изменяем в файле package.json версию "^1.0.0-beta.3" на "^0.16.1"
Выполняем команду обновления

```shell
npm update
```

Обновился файл package-lock.json и содержимое папки node_modules

4. Копируем файл db.json из ресурсов урока в папку проекта

5. Запускаем json-server

```shell
npx json-server db.json
```

Получили запущеный сервер на порту 3000
Рабочие url

Resources
http://localhost:3000/menu
http://localhost:3000/requests

Home
http://localhost:3000

6. Остановка json-server комбинацией клавиш CTRL+C в терманале, где ранее был запущенный сервер
   (см. п. 5)
