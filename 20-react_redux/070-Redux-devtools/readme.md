# Лекция 198. Redux devtools  

* Как использовать  
  DOC [ENG] (https://github.com/zalmoxisus/redux-devtools-extension#usage)
------------------------------------------------------------------    
* Команда установки расширения redux в боаузер

```js 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```  

* Вот так нужно написать в своем собственном index.js

```js 
const store = createStore(
reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
```

* И в вкладке Redux в браузере можно отслеживать изменения