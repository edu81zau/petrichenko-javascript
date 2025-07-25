# Лекции 203, 204, 205. Store enhancers, Middleware, Redux-thunk

* Redux-thunk  
  DOC [ENG] (https://github.com/reduxjs/redux-thunk)

------------------------------------------------------------------    
* enhancer - может расширять любую часть стора
* Middleware - занимается именно функцией dispatch

```shell
npm install --force redux-thunk --save
```  

* Для корректной работы библиотеки нужно импорт прописать так:
```js
import { thunk as ReduxThunk } from "redux-thunk";
```
