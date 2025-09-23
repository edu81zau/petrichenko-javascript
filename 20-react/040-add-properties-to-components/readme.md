```text
------------------------------------------------------------------
1.
Этот первый путнкт выполняем только один раз, при создании проекта 
```
* Этот вариант создания проекта рабочий
```shell
npm create vite@latest
```

* Этот вариант создания проекта рабочий
```shell
npx --force create-react-app my-app
```

* Эта команда создает проект, но он не запускается
```shell
npx --legacy-peer-deps create-react-app my-app
```

```text
npm start
Cannot find module 'ajv/dist/compile/codegen'
```
```text
Конец первого пункта
------------------------------------------------------------------
```

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
----  

## Лекция 126. Свойства компонентов 

* Базовая документация  
  DOC [RU] (https://ru.legacy.reactjs.org/docs/components-and-props.html)
* Новая документация  
  DOC [ENG] (https://react.dev/learn/passing-props-to-a-component)
* Перевод новой документации  
  DOC [RU] (https://reactdev.ru/learn/passing-props-to-a-component/#step-2-read-props-inside-the-child-component)

----

## Лекция 127. Практика свойств на проекте 

* Дополнительная библиотека по работе с классами  
  DOC [ENG] (https://www.npmjs.com/package/classnames)  
