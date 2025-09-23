<h2> Конспет лекции</h2>

```text
Правила написания кода в JSX:
1. При создании элемента всегда использовать (), если это многострочный элемент
2. Использовать один корневой элемент для обертки всей структуры.
3. Всегда закрывать теги.
4. Атрибуты, особенное внимание нужно обратить на className и htmlFor, пишутся в формате camelCase
5. В {} можно помещать все, кроме объектов. Все преобразовуется к строке. Если туда засунуть массив,
то он преобразовавшись в строку, будет контактенация
```
---

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

---------------------------------------------------------------------------    
### Лекция 118. Что такое реакт, зачем он нам нужен и почему не обычный JS

* Официальная документация  
  DOC [RU] (https://ru.legacy.reactjs.org/)
* Новая документация   
  DOC [ENG] (https://react.dev/learn)
* Перевод новой документации   
  DOC [RU] (https://reactdev.ru/learn/#updating-the-screen)  

---------------------------------------------------------------------------  
### Лекция 119. Фундаментальные принципы Реакта

* Императивное и декларативное программирование  
  DOC [RU] (https://tproger.ru/translations/imperative-declarative-programming-concepts)
* Virtual DOM   
  DOC [RU] (https://habr.com/ru/articles/256965/)  

---------------------------------------------------------------------------  
### Лекция 120. Create React App - создаем свое приложение

* Create React App  
  DOC [ENG] (https://github.com/facebook/create-react-app)
* Plugin transform react jsx   
  DOC [ENG] (https://babeljs.io/docs/babel-plugin-transform-react-jsx)
* Расширение для Chroma   
  DOC [ENG] (https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

---------------------------------------------------------------------------  
### Лекция 121. Работаем с JSX-препроцессором, ограничения в нем

* Introducing the New JSX Transform  
  DOC [ENG] (https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
* Знакомство с JSX   
  DOC [RU] (https://ru.legacy.reactjs.org/docs/introducing-jsx.html)
* Список всех обновлений React   
  DOC [ENG] (https://github.com/facebook/react/blob/main/CHANGELOG.md)
* Новая документация JSX   
  DOC [ENG] (https://react.dev/learn/writing-markup-with-jsx)
* Пишем разметку с JSX   
  DOC [RU] (https://reactdev.ru/learn/writing-markup-with-jsx/)
