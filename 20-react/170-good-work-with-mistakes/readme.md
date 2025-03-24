```text
------------------------------------------------------------------
1.
Этот первый путнкт выполняем только один раз, при создании проекта 
```
* Этот вариант создания рабочего проекта
```shell
npx --force create-react-app my-app
```  
* Этот вариант установления модуля sass в рабочий проект
```shell
npm install sass --force
```  
------------------------------------------------------------------
* После создания проекта переходим в корневую папку проекта
```shell
cd my-app
```
* Запускаем проект
```shell
npm start
```
* Перед каждым новым запуском проекта выполняем команду
```shell
cd my-app
```
* Запускаем проект
```shell
npm start
```
---
### Лекция 151 Жизненный цикл компонентов
### Лекция 152 Практика с жизненным циклом, componentDidUpdate

Диаграмма ЖЦ [RUS] (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
DOC [RUS] (https://ru.legacy.reactjs.org/docs/react-component.html#the-component-lifecycle)
DOC [ENG] (https://react.dev/reference/react/Component#componentdidupdate)
DOC [RUS] (https://ru.legacy.reactjs.org/docs/react-component.html#componentdidupdate)



Этапы жизненого цикла компонента

1. Компонент появился на странице
2. Компонент обновляется двумя способами
   * Если компонент получает новое свойство, он перерисовывается. 
   Т.о. обновляется (new props)
   * Если внутри компонента был изменен state, то он обновляется 
   и перерисовывается (new state)
3. Компонент удаляется
Произошла критическая ошибка

Хуки — это функции, с помощью которых вы можете «подцепиться» к 
состоянию и методам жизненного цикла React из функциональных компонентов.

Хуки жизненого цикла компонента:
1. componentDidMount()
2. componentDidUpdate()
3. componentWillUnmount()
4. componentDidCatch()

Любые обновления, любые запросы к API, к серверам нужно делать именно в
componentDidMount()

При выполнении данного урока произошла ошибка с сервером Marvel.

Как вышел из ситуации преподаватель:

Итак, пока marvel API на бессрочных выходных, то можно воспользоваться запасным API.
Работает все так же как настоящий из того, что показано в уроках (см. инструкции ниже)


➡ Базовый адрес:

https://marvel-server-zeta.vercel.app/


➡ API ключ для доступа:

d4eecb0c66dedbfae4eab45d312fc1df

❗️ Ключ один для всех на данный момент


➡ Пока поддерживаются запросы на:

/characters

limit, name и offset параметры работают так же, как и в оригинале

Доступ по id так же работает


Примеры:

https://marvel-server-zeta.vercel.app/characters?apikey=d4eecb0c66dedbfae4eab45d312fc1df

https://marvel-server-zeta.vercel.app/characters?name=Thor&apikey=d4eecb0c66dedbfae4eab45d312fc1df

https://marvel-server-zeta.vercel.app/characters?limit=5&apikey=d4eecb0c66dedbfae4eab45d312fc1df


/comics

limit и offset параметры работают так же, как и в оригинале

Доступ по id так же работает


Примеры:

https://marvel-server-zeta.vercel.app/comics?apikey=d4eecb0c66dedbfae4eab45d312fc1df

https://marvel-server-zeta.vercel.app/comics?limit=10&apikey=d4eecb0c66dedbfae4eab45d312fc1df


❗️ Важно:


➡ Данные я сделал с нормальными id в нормальном порядке, поэтому комиксов/персонажей пока по 
❗20 штук❗и при обращении к ним используйте значения id от 1 до 20. 
Ну и все изображения и ссылки так же сделал рабочими в отличие от оригинала


➡ При запросе на этот API НЕ используйте заголовок "Content-Type": "application/json"  -
пока я не купил платный сервер, vercel ни в какую не хочет его пропускать.
Оставьте объект запроса просто пустым


➡ В дальнейшем, думаю, расширю API и сделаю доку к нему, если не починят оригинал)
