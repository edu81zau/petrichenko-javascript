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
### Лекция 150 Жизненный цикл компонентов
### Лекция 151 Практика с жизненным циклом, componentDidUpdate

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
